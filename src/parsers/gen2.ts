/* eslint-disable @typescript-eslint/prefer-for-of */
import * as fs from 'fs';
import { HELD_ITEM, GEN_2_POKEMON_MAP, GEN_2_CHARACTER_MAP, MOVES_ARRAY, splitUp } from './utils';
import { Buffer } from 'buffer';
import { Forme, matchSpeciesToTypes, Species } from 'utils';
import { BoxMapping } from './utils/boxMapping';
import { Pokemon } from 'models';

// Offset	Contents	Size
// 0x00	Index number of the species	1 byte
// 0x01	Index number of held item	1 byte
// 0x02	Index number of move 1	1 byte
// 0x03	Index number of move 2	1 byte
// 0x04	Index number of move 3	1 byte
// 0x05	Index number of move 4	1 byte
// 0x06	Original Trainer ID number	2 bytes
// 0x08	Experience points	3 bytes
// 0x0B	HP EV data	2 bytes
// 0x0D	Attack EV data	2 bytes
// 0x0F	Defense EV data	2 bytes
// 0x11	Speed EV data	2 bytes
// 0x13	Special EV data	2 bytes
// 0x15	IV data	2 bytes
// 0x17	Move 1's PP values	1 byte
// 0x18	Move 2's PP values	1 byte
// 0x19	Move 3's PP values	1 byte
// 0x1A	Move 4's PP values	1 byte
// 0x1B	Friendship	1 byte
// 0x1C	Pokérus	1 byte
// 0x1D	Caught data	2 bytes
// 0x1F	Level	1 byte
// 0x20	Status condition	1 byte
// 0x21	Unused byte	1 byte
// 0x22	Current HP	2 bytes
// 0x24	Maximum HP	2 bytes
// 0x26	Attack	2 bytes
// 0x28	Defense	2 bytes
// 0x2A	Speed	2 bytes
// 0x2C	Special Attack	2 bytes
// 0x2E	Special Defense	2 bytes

export interface Gen2PokemonObject {
    entriesUsed: number;
    speciesList: string[];
    pokemonList: Pick<Pokemon, 'species' | 'level' | 'moves' | 'id' | 'item' | 'extraData' | 'shiny'>[];
    pokemonNames: string[];
}

const OFFSETS = {
    PLAYER_ID: [0x2009, 0x2009 + 2],
    PLAYER_NAME: [0x200b, 0x200b + 11],
    PLAYER_MONEY: [0x23DB, 0x23DB + 3],
    RIVAL_NAME: [0x2013, 0x2013 + 11],
    TIME_PLAYED: [0x2053, 0x2053 + 4],
    JOHTO_BADGES: [0x23e4, 0x23e4 + 1],
    CURRENT_PC_BOX_NUMBER: [0x2724, 0x2724 + 1],
    TEAM_POKEMON_LIST: [0x288a, 0x288a + 428],
    CURRENT_BOX_POKEMON_LIST: [0x2d6c, 0x2d6c + 1102],
    PC_BOXES_POKEMON_LIST: [0x4000, 0x4000 + 1102 * 14],
    POKEMON_NAMES: [0x1b0b74, 0x1b0b74 + 256 * 10],
    BOXES: [
        [0x4000, 0x4000 + 1102],
        [0x4450, 0x4450 + 1102],
        [0x48A0, 0x48A0 + 1102],
        [0x4CF0, 0x4CF0	+ 1102],
        [0x5140, 0x5140 + 1102],
        [0x5590, 0x5590 + 1102],
        [0x59E0, 0x59E0 + 1102],
        [0x6000, 0x6000 + 1102],
        [0x6450, 0x6450 + 1102],
        [0x68A0, 0x68A0 + 1102],
        [0x6CF0, 0x6CF0 + 1102],
        [0x7140, 0x7140 + 1102],
        [0x7590, 0x7590 + 1102],
        [0x79E0, 0x79E0 + 1102]
    ],
};

const CRYSTAL_OFFSETS = {
    PLAYER_MONEY: [0x23DC, 0x23DC + 3],
    JOHTO_BADGES: [0x23e5, 0x23e5 + 1],
    CURRENT_PC_BOX_NUMBER: [0x2700, 0x2700 + 1],
    TEAM_POKEMON_LIST: [0x2865, 0x2865 + 428],
    CURRENT_BOX_POKEMON_LIST: [0x2d10, 0x2d10 + 1102],
    PLAYER_GENDER: [0x3e3d, 0x3e3d + 1],
    POKEMON_NAMES: [0x53384, 0x53384 + 256 * 10],
};

function buf2hex(buffer: Buffer) {
    return [...new Uint8Array(buffer)].map(x => x.toString(16).padStart(2, '0')).join('');
}

const readCaughtData = (data) => {
    const binary = (data >>> 0).toString(2);
    const timeSlice = binary.slice(0, 1);
    const timeHex = parseInt(timeSlice[0] + timeSlice[1], 2)
        .toString(16)
        .toUpperCase();
    const timeMap = {
        0x01: 'morning',
        0x02: 'day',
        0x03: 'night',
    };
    const level = binary.slice(2, 8);

    const OtGender = binary.slice(9, 10);
    const location = binary.slice(11, 16);
};

const MOVES = {};

// In Generation II, Unown's letter is taken from the combination of the center two bits of the Attack, Defense, Speed and Special IV nibbles. This combination is then divided by ten, and the result is rounded down (floor[]) to only include the integer part of the number. This integer will range from 0-25, corresponding to a letter in the Latin alphabet, which will be the Unown's letter (where 0=A, 1=B, 2=C, ..., 23=X, 24=Y, 25=Z).

// In Generation II, due to this method of calculating Unown's letter and the way that Shiny Pokémon are determined, a Shiny Unown can only exist in the shape of the letter I or V. Additionally, due to this method of calculating Unown's letter, only 6 combinations correspond to Unown Z, whereas 10 combinations correspond to every other Unown, making Unown Z less common.

// In Generation III, Unown's letter is determined by the Pokémon's personality value. From Generation IV onward, it is determined by a separate form identifier. Generation III also introduced Unown '!' or '?'.

const determineUnownForme = (ivs: Buffer) => {
    const buf = Buffer.from(ivs);
    const asBinary = buf.readUIntBE(0, buf.byteLength);
    let ivString = '';
    for (const iv of ivs) {
        ivString += iv.toString();
    }
    console.log('parser - unown', ivString, buf);

    return Forme.A;
};

// const badgesBinary = (badgesByte >>> 0).toString(2);
//     const badges = badgesBinary
//         .split('')
//         .map((bit, index) => {
//             return parseInt(bit) ? badgesPossible[index] : null;
//         })
//         .filter((badge) => badge);

// Its Defense, Speed, and Special IVs are all 10.
// Its Attack IV is 2, 3, 6, 7, 10, 11, 14, or 15.
// The HP IV is calculated by taking the least significant bit (the final binary digit) of the Attack, Defense, Speed, and Special IVs, then creating a binary string by placing them in that order. As such, a Pokémon with an odd-number Attack IV has 8 added to its HP IV, an odd-number Defense IV has 4 added, an odd-number Speed IV has 2 added, and an odd-number Special IV has 1 added.

interface Ivs {
    atk: number;
    def: number;
    special: number;
    speed: number;
    hp: number;
}

const getIvs = (ivs: Buffer): Ivs => {
    // eslint-disable-next-line prefer-template
    const part1 = (ivs[0]).toString(2);
    const part2 = (ivs[1]).toString(2);
    console.log('parser - shiny', ivs, part1, part1.length, part2, part2.length);
    const ivString = part1 + part2;
    // 111 1010
    const part1Shifted = part1.length === 7 ? `0${part1}` : part1;
    const atk = parseInt(part1Shifted.slice(0, 4), 2);
    const def = parseInt(part1Shifted.slice(4, 8), 2);
    const speed = parseInt(part2.slice(0, 4), 2);
    const special = parseInt(part2.slice(4, 8), 2);
    const hp = parseInt(part1[3] + part1[7] + part2[3] + part2[7], 2);
    console.log('parser - shiny',
        'part1: ', part1,
        'iv string: ', ivString,
        'def: ', part1.slice(4, 8),
        'length: ', ivs.length,
        'string: ', ivs.toString()
    );

    return {
        atk,
        def,
        speed,
        special,
        hp
    };
};

const isShiny = (ivs: Buffer): boolean => {
    const {atk, def, special, speed} = getIvs(ivs);
    console.log('parser - shiny', getIvs(ivs));

    if ([2, 3, 6, 7, 10, 11, 14, 15].includes(atk) && def === 10 && speed === 10 && special === 10) {
        return true;
    } else {
        return false;
    }
};

const to16BitInt = (buf: Buffer) => Buffer.from(buf).readInt16BE(0);

const parsePokemon = (buf: Buffer, boxed = false) => {
    const pokemon = Buffer.from(buf);
    const species = GEN_2_POKEMON_MAP[pokemon[0x00]];

    //console.log('parser - party species', species);
    const item = HELD_ITEM[pokemon[0x01]];
    const moves = [
        MOVES_ARRAY[pokemon[0x02]],
        MOVES_ARRAY[pokemon[0x03]],
        MOVES_ARRAY[pokemon[0x04]],
        MOVES_ARRAY[pokemon[0x05]],
    ];
    const friendship = pokemon[0x1b];
    const caughtData = boxed ? undefined : to16BitInt(pokemon.slice(0x1d, 0x1d + 2));
    const expData = boxed ? undefined : to16BitInt(pokemon.slice(0x08, 0x08 + 3));

    const level = pokemon[0x1f];
    const id = pokemon.toString('binary');
    const ivs = pokemon.slice(0x15, 0x15 + 2);
    const unownForme = species === 'Unown' ? determineUnownForme(ivs) : undefined;
    const shiny = isShiny(Buffer.from(ivs));

    const extraData = boxed
        ? undefined
        : {
            currentHp: to16BitInt(pokemon.slice(0x22, 0x22 + 2)),
            maxHp: to16BitInt(pokemon.slice(0x24, 0x24 + 2)),
            attack: to16BitInt(pokemon.slice(0x26, 0x26 + 2)),
            defense: to16BitInt(pokemon.slice(0x28, 0x28 + 2)),
            speed: to16BitInt(pokemon.slice(0x2a, 0x2a + 2)),
            specialAttack: to16BitInt(pokemon.slice(0x2c, 0x2c + 2)),
            specialDefense: to16BitInt(pokemon.slice(0x2E, 0x2E + 2)),
        };

    return {
        species,
        level,
        moves,
        id,
        item,
        shiny,
        extraData: {
            friendship,
            expData,
            caughtData,
            ...(extraData ?? {}),
        }
    };
};

const getSpeciesList = (buf: Buffer) => {
    const str: any[] = [];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < buf.length; i++) {
        console.log('parser - buf', buf[i]);
        if (buf[i] === 0xff) {
            break;
        } else {
            str.push(GEN_2_POKEMON_MAP[buf[i]] || 'MISSINGNO');
        }
    }
    return str;
};

const getPokemonList = (buf: Buffer, entries: number = 6, boxed: boolean = false) => {
    const party = splitUp(Buffer.from(buf), entries);
    const pokes = party.map((box) => parsePokemon(box, boxed));
    return pokes;
};

const getPokemonNames = (buf: Buffer, entries: number = 6) => {
    const names = splitUp(Buffer.from(buf), entries);
    const pokes = names.map((name) => convertWithCharMap(name, true));
    return pokes;
};

const transformPokemon = (pokemonObject: Gen2PokemonObject, status, boxIndex: number = 1) => {
    const TIER: Readonly<{ [status: string]: number }> = Object.freeze({
        Team: 1,
        Boxed: 2,
        Dead: 3,
    });
    return pokemonObject.pokemonList
        .map((poke, index) => {
            return {
                position: (index + 1) * (TIER[status] + boxIndex),
                species: poke.species,
                status: status,
                level: poke.level,
                types: matchSpeciesToTypes(poke.species as Species),
                moves: poke.moves,
                shiny: poke.shiny,
                nickname: pokemonObject.pokemonNames[index],
                id: `${poke.id}-sav`,
                extraData: poke.extraData,
                // @NOTE: A pokemon nicknamed "EGG" would override this and show up as egg: true, but that's your own fault lol
                egg: pokemonObject.pokemonNames[index] === 'EGG' ? true : false,
            };
        })
        .filter((poke) => poke.species);
};

const convertWithCharMap = (buf: Buffer, nickname = false) => {
    const str: any[] = [];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < buf.length; i++) {
        // tslint:disable-next-line:triple-equals
        if (buf[i] === 0xff || (nickname && buf[i] === 0x50)) break;
        str.push(GEN_2_CHARACTER_MAP[buf[i]] || '');
    }
    return str.join('');
};

const makeFileSlicer = (file) => (offset: number[]) => {
    return file.slice(offset[0], offset[1]);
};

export const parsePokemonList = (buf: Buffer, entries = 6): Gen2PokemonObject => {
    const data = Buffer.from(buf);
    console.log('parser - data', data);
    const isBoxed = entries > 6 ? true : false;
    console.log('parser - entries', entries);
    console.log('parser - isBoxed', isBoxed);
    const entriesUsed = data[0x00];
    const speciesListEnd = 0x01 + entries + 1;
    const speciesList = getSpeciesList(Buffer.from(data.slice(0x01, speciesListEnd)));
    console.log('parser - specieslist', speciesList);

    const pokemonListAddress = speciesListEnd;
    const pokemonListAddressEnd = pokemonListAddress + ((isBoxed ? 32 : 48) * entries);
    const otsAddress = pokemonListAddressEnd;
    const otsAddressEnd = otsAddress + (11 * entries);
    const pokemonNamesAddress = otsAddressEnd;
    const pokemonNamesAddressEnd = pokemonNamesAddress + (11 * entries);
    const pokemonList = getPokemonList(
        data.slice(pokemonListAddress, pokemonListAddressEnd),
        entries,
        isBoxed,
    );
    console.log('parser - pokemon list', pokemonList);
    const pokemonNames = getPokemonNames(
        data.slice(
            pokemonNamesAddress,
            pokemonNamesAddressEnd
        ),
        entries,
    );
    console.log('parser - pokemon names', data.slice(pokemonListAddress, pokemonListAddressEnd), pokemonNames);
    console.log('parser - addresses',
        pokemonNamesAddress,
        pokemonNamesAddressEnd,
        pokemonListAddress,
        pokemonListAddressEnd,
    );

    // console.log('parser', pokemonList);

    return {
        entriesUsed,
        speciesList,
        pokemonList,
        pokemonNames,
    };
};


export interface ParserOptions {
    isCrystal: boolean;
    boxMapping: BoxMapping;
}

const sliceBoxes = (buf: Buffer) => {
    const fileSlice = makeFileSlicer(buf);

    return OFFSETS.BOXES.map((box) => fileSlice(box));
};

export const parseGen2Save = async (file, format, options: ParserOptions) => {
    const fileSlice = makeFileSlicer(file);

    const trainerName = convertWithCharMap(fileSlice(OFFSETS.PLAYER_NAME));
    const trainerId = fileSlice(OFFSETS.PLAYER_ID)
        .map((char) => char.toString())
        .join('');
    console.log('parser - trainer Id', trainerId);
    const trainerMoney = options.isCrystal
        ? fileSlice(CRYSTAL_OFFSETS.PLAYER_MONEY)
        : fileSlice(OFFSETS.PLAYER_MONEY);
    const johtoBadges = fileSlice(OFFSETS.JOHTO_BADGES);
    const currentPCId = options.isCrystal
        ? fileSlice(CRYSTAL_OFFSETS.CURRENT_PC_BOX_NUMBER)
        : fileSlice(OFFSETS.CURRENT_PC_BOX_NUMBER);
    const partyPokemonData = options.isCrystal
        ? fileSlice(CRYSTAL_OFFSETS.TEAM_POKEMON_LIST)
        : fileSlice(OFFSETS.TEAM_POKEMON_LIST);
    const partyPokemon = transformPokemon(
        parsePokemonList(partyPokemonData),
        'Team'
    );
    const boxedPokemon = sliceBoxes(file).map((boxData, boxIndex) => {
        return transformPokemon(
            parsePokemonList(boxData, 20),
            'Boxed',
            boxIndex
        );
    }).flat();

    // const boxedPokemon2 = transformPokemon(
    //     parsePokemonList(sliceBoxes(file)[0], 20),
    //     'Boxed'
    // );

    return {
        trainer: {
            name: trainerName,
            id: trainerId,
            time: '10:33',
            money: trainerMoney,
            badges: [],
        },
        pokemon: [
            ...partyPokemon,
            //...boxedPokemon,
            ...boxedPokemon,
        ],
    };
};

export const loadGen2SaveFile = async (
    filename: string,
    format: 'plain' | 'nuzlocke' = 'nuzlocke',
) => {
    const save = await fs.readFileSync(filename);

    try {
        const file = Buffer.from(save);
        const result = await parseGen2Save(file, format, {
            isCrystal: true,
            boxMapping: []
        });
        return result;
    } catch {
        throw new Error('Oops');
    }
};

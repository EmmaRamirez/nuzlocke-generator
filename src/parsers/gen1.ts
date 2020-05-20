import * as fs from 'fs';
import { splitUp, GEN_1_POKEMON_MAP, GEN_1_CHARACTER_MAP, MOVES_ARRAY } from './utils';

// tslint:disable-next-line:class-name
interface GEN_1_SAVE {
    yellow: boolean;
    pokemonParty: any;
    currentPokemonBoxNum: any;
    currentPokemonBox: any;
    pokemonBoxes: any[];
    pokedexSeen: any;
    pokedexOwned: any;
    itemBag: any;
    itemPC: any;
    timePlayed: any;
    money: any;
    casinoCoins: any;
    trainerID: any;
    trainerName: any;
    rivalName: any;
    badges: any;
    pikachuFriendship: any;
}

const OFFSETS = {
    PLAYER_NAME             : 0x2598,
    POKEDEX_OWNED           : 0x25A3,
    POKEDEX_SEEN            : 0x25B6,
    ITEM_BAG                : 0x25C9,
    MONEY                   : 0x25F3,
    RIVAL_NAME              : 0x25F6,
    OPTIONS                 : 0x2601,
    BADGES                  : 0x2602,
    PLAYER_ID               : 0x2605,
    PIKACHU_FRIENDSHIP      : 0x271C,
    ITEM_PC                 : 0x27E6,
    CURRENT_POKEMON_BOX_NUM : 0x284C,
    CURRENT_BOX             : 0x30C0,
    CASINO_COINS            : 0x2850,
    TIME_PLAYED             : 0x2CED,
    POKEMON_PARTY           : 0x2F2C,
    CURRENT_POKEMON_BOX     : 0x30C0,
    CHECKSUM                : 0x3523,
    POKEMON_PC_FIRST_HALF   : 0x4000,
    POKEMON_PC_SECOND_HALF  : 0x6000,
    BOX_ONE                 : 0x4000,
    BOX_TWO                 : 0x4462
};

const checksum = (data: Uint8Array) => {
    let checksum_n = 255;
    for (let i = 0x2598; i < OFFSETS.CHECKSUM; ++i) {
        checksum_n -= data[i];
    }
    return checksum_n;
};

const TYPE = {
    0x00: 'Normal',
    0x01: 'Fighting',
    0x02: 'Flying',
    0x03: 'Poison',
    0x04: 'Ground',
    0x05: 'Rock',
    0x07: 'Bug',
    0x08: 'Ghost',
    0x14: 'Fire',
    0x15: 'Water',
    0x16: 'Grass',
    0x17: 'Electric',
    0x18: 'Psychic',
    0x19: 'Ice',
    0x1A: 'Dragon'
};

interface Pokemon {
    species: number;
    current_hp: number;
    level: number;
    condition: number;
    types: number[];
    catch_rate: number;
    moves: number[];
    ot_id: number;
}

interface PartyPokemon {
    count: number;
    species: number[];
    nicknames: number[][];
}

const convertWithCharMap = (buf: Buffer, nickname = false) => {
    const str: any[] = [];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < buf.length; i++) {
        // tslint:disable-next-line:triple-equals
        if (buf[i] == 0xFF || (nickname && buf[i] == 0x50)) break;
        str.push(GEN_1_CHARACTER_MAP[buf[i]] || '');
    }
    return str.join('');
};

const getSpeciesList = (buf: Buffer) => {
    const str: any[] = [];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < buf.length; i++) {
        if (buf[i] === 0xFF) {
            break;
        } else {
            str.push(GEN_1_POKEMON_MAP[buf[i]] || 'MISSINGNO');
        }
    }
    return str;
};

const parsePartyPokemon = (buf: Buffer, boxed = false) => {
    const pokemon = Buffer.from(buf);
    const species = GEN_1_POKEMON_MAP[pokemon[0x00]];
    const levelA = pokemon[0x21];
    const levelB = pokemon[0x03];
    // Level is stored in two places, so we need to determine the true level
    const level = levelA ? levelA : levelB;
    const type1 = TYPE[pokemon[0x05]];
    const type2 = TYPE[pokemon[0x06]];
    const moves = [
        MOVES_ARRAY[pokemon[0x08]],
        MOVES_ARRAY[pokemon[0x09]],
        MOVES_ARRAY[pokemon[0x0A]],
        MOVES_ARRAY[pokemon[0x0B]]
    ];
    const extraData = boxed ? undefined : {
        'currentHp': Buffer.from(pokemon.slice(0x01, 0x01 + 2)).readInt16BE(0),
        'maxHp': Buffer.from(pokemon.slice(0x22, 0x22 + 2)).readInt16BE(0),
        'attack': Buffer.from(pokemon.slice(0x24, 0x24 + 2)).readInt16BE(0),
        'defense': Buffer.from(pokemon.slice(0x26, 0x26 + 2)).readInt16BE(0),
        'speed': Buffer.from(pokemon.slice(0x28, 0x28 + 2)).readInt16BE(0),
        'special': Buffer.from(pokemon.slice(0x2A, 0x2A + 2)).readInt16BE(0),
    };
    if (extraData) console.log(extraData);
    // const evs = pokemon.slice(0x11, 0x11 + 10);
    const ivs = pokemon.slice(0x1B, 0x1B + 2);
    const id = ivs.toString('binary');

    return {
        species,
        level,
        type1,
        type2,
        moves,
        id,
        extraData,
    };
};


const getPokemonListForParty = (buf: Buffer, entries: number = 6) => {
    const party = splitUp(Buffer.from(buf), entries);
    const pokes = party.map(box => parsePartyPokemon(box));
    return pokes;
};

const getPokemonListForBox = (buf: Buffer, entries: number = 6) => {
    const box = splitUp(Buffer.from(buf), entries);

    const pokes = box.map(box => parsePartyPokemon(box, true));


    return pokes;
};

const getPokemonNames = (buf: Buffer, entries: number = 6) => {
    const pokes = splitUp(Buffer.from(buf), entries);
    const names = pokes.map(poke => convertWithCharMap(poke, true));
    return names;
};

export interface Gen1PokemonObject {
    entriesUsed: number;
    speciesList: string[];
    pokemonList: {
        species: string;
        level: number;
        type1: string;
        type2: string;
        moves: string[];
        id: string;
        extraData: object;
    }[];
    pokemonNames: string[];
}

const removeLastEntries = (entries, arr) => {
    // tslint:disable
    let a = arr
    let l = arr.length
    while (entries) {
        delete a[entries]
        entries++
    }
};

const parsePokemonParty = (buf: Buffer) => {


    // 5
    // pokemon[5]
    // 4
    // pokemon[4], pokemon[5]


    const party = Buffer.from(buf);
    const entriesUsed = party[0x0000];
    const rawSpeciesList = party.slice(0x0001,0x0007);
    const speciesList = getSpeciesList(rawSpeciesList);
    const pokemonList = getPokemonListForParty(party.slice(0x0008, 0x0008 + 264), 6);
    const OTNames = party.slice(0x0110, 0x0110 + 66);
    const pokemonNames = getPokemonNames(party.slice(0x0152, 0x152 + 66), 6);

    return {
        entriesUsed,
        speciesList,
        pokemonList,
        // OTNames,
        pokemonNames
    };
};

const parseBoxedPokemon = (buf: Buffer):Gen1PokemonObject => {
    const box = Buffer.from(buf);
    const entriesUsed = box[0x0000];
    const rawSpeciesList = box.slice(0x0001, 0x0001 + 21);
    const speciesList = getSpeciesList(rawSpeciesList);
    const pokemonList: any = getPokemonListForBox(box.slice(0x0016, 0x0016 + 660), entriesUsed);
    const OTNames = box.slice(0x02AA, 0x02AA + 220);
    const pokemonNames = getPokemonNames(box.slice(0x0386, 0x0386 + 220), entriesUsed);

    return {
        entriesUsed,
        speciesList,
        pokemonList,
        // OTNames,
        pokemonNames
    };
};

const transformPokemon = (pokemonObject:Gen1PokemonObject, status: string) => {
    const TIER:Readonly<{ [status: string]: number}> = Object.freeze({
        'Team': 1,
        'Boxed': 2,
        'Dead': 3
    });
    return pokemonObject.pokemonList.map((poke, index) => {
        return {
            position: (index + 1) * TIER[status],
            species: poke.species,
            status: status,
            level: poke.level,
            types: [poke.type1, poke.type2],
            moves: poke.moves,
            nickname: pokemonObject.pokemonNames[index],
            id: poke.id + '-sav',
            extraData: poke.extraData,
        };
    }).filter(poke => poke.species);

};

const parseTime = (buf: Buffer) => {
    const time = Buffer.from(buf);
    const hours = time[0x01] + time[0x00];
    const minutes = Math.ceil(time[0x02] + (time[0x03] / 60));
    const minutesFormatted = minutes === 0 ? '00' : minutes;

    return `${hours}:${minutesFormatted}`;
};

export const parseGen1Save = async (file, format) => {


    const yellow = file[OFFSETS.PIKACHU_FRIENDSHIP] > 0;
    const trainerName = convertWithCharMap(file.slice(OFFSETS.PLAYER_NAME, OFFSETS.PLAYER_NAME + 11), true);
    const trainerID = file.slice(OFFSETS.PLAYER_ID, OFFSETS.PLAYER_ID + 2).map(char => char.toString()).join('');
    const rivalName = convertWithCharMap(file.slice(OFFSETS.RIVAL_NAME, OFFSETS.RIVAL_NAME + 11));
    const badgesByte = file[OFFSETS.BADGES];
    const timePlayed = parseTime(file.slice(OFFSETS.TIME_PLAYED, OFFSETS.TIME_PLAYED + 4));
    const pokedexOwned = file.slice(OFFSETS.POKEDEX_OWNED, OFFSETS.POKEDEX_OWNED + 19);
    const pokedexSeen = file.slice(OFFSETS.POKEDEX_SEEN, OFFSETS.POKEDEX_SEEN + 19);
    const money = parseInt(file.slice(OFFSETS.MONEY, OFFSETS.MONEY + 3).map(d => d.toString(16)).join(''));
    const pokemonParty = parsePokemonParty(file.slice(OFFSETS.POKEMON_PARTY, OFFSETS.POKEMON_PARTY + 404));
    const casinoCoins = parseInt(file.slice(OFFSETS.CASINO_COINS, OFFSETS.CASINO_COINS + 2).map(d => d.toString(16)).join(''));

    const boxedPokemon = parseBoxedPokemon(file.slice(OFFSETS.CURRENT_BOX, OFFSETS.CURRENT_BOX + 0x462));
    const deadPokemon = parseBoxedPokemon(file.slice(OFFSETS.BOX_TWO, OFFSETS.BOX_TWO + 0x462));

    // const ellow = file[0];

    const save = {
        //yellow,
        trainerName,
        trainerID,
        timePlayed,
        money,
        pokemonParty,
        casinoCoins,
        // pokedexOwned,
        // pokedexSeen,
        // badges,
        rivalName,
        boxedPokemon,
        deadPokemon
    }

    const badgesPossible = [ { 'name': 'Boulder Badge', 'image': 'boulder-badge' }, { 'name': 'Cascade Badge', 'image': 'cascade-badge' }, { 'name': 'Thunder Badge', 'image': 'thunder-badge' }, { 'name': 'Rainbow Badge', 'image': 'rainbow-badge' }, { 'name': 'Soul Badge', 'image': 'soul-badge' }, { 'name': 'Marsh Badge', 'image': 'marsh-badge' }, { 'name': 'Volcano Badge', 'image': 'volcano-badge' }, { 'name': 'Earth Badge', 'image': 'earth-badge' } ];
    const badgesBinary = (badgesByte >>> 0).toString(2);
    const badges = badgesBinary.split('').map((bit, index) => {
        return parseInt(bit) ? badgesPossible[index] : null;
    }).filter(badge => badge);

    const save2 = {
            isYellow: yellow,
            trainer: {
                name: trainerName,
                id: trainerID,
                time: timePlayed,
                money: money,
                badges: badges
            },
            pokemon: [
                // @ts-ignore
                ...transformPokemon(pokemonParty, 'Team'),
                ...transformPokemon(boxedPokemon, 'Boxed'),
                ...transformPokemon(deadPokemon, 'Dead')
            ],

        };

    console.log(save2);

    return save2;


};

export const loadGen1SaveFile = async (filename: string, format: 'plain' | 'nuzlocke' = 'nuzlocke') => {
    const save = await fs.readFileSync(filename);

    try {
        const file = Buffer.from(save);
        const result = await parseGen1Save(file, format);
        return await result;
    } catch {
        throw new Error('Oops');
    }
};

/**
 * Money: 3175
 * Badges: 0?
 * Time: 0:35
 * Name: YELLOW
 * Party: level 11 PIKACHU
 */

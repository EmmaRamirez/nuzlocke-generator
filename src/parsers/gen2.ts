/* eslint-disable @typescript-eslint/prefer-for-of */
import * as fs from 'fs';
import { HELD_ITEM, GEN_2_POKEMON_MAP, GEN_2_CHARACTER_MAP, MOVES_ARRAY, splitUp } from './utils';
import { parse } from 'querystring';

const OFFSETS = {
    PLAYER_ID: [0x2009, 0x2009 + 2],
    PLAYER_NAME: [0x200b, 0x200b + 11],
    RIVAL_NAME: [0x2013, 0x2013 + 11],
    TIME_PLAYED: [0x2053, 0x2053 + 4],
    JOHTO_BADGES: [0x23e4, 0x23e4 + 1],
    CURRENT_PC_BOX_NUMBER: [0x2724, 0x2724 + 1],
    TEAM_POKEMON_LIST: [0x288a, 0x288a + 428],
    CURRENT_BOX_POKEMON_LIST: [0x2d6c, 0x2d6c + 1102],
    PC_BOXES_POKEMON_LIST: [0x4000, 0x4000 + 1102 * 14],
    POKEMON_NAMES: [0x1b0b74, 0x1b0b74 + 256 * 10],
};

const CRYSTAL_OFFSETS = {
    JOHTO_BADGES: [0x23e5, 0x23e5 + 1],
    CURRENT_PC_BOX_NUMBER: [0x2700, 0x2700 + 1],
    TEAM_POKEMON_LIST: [0x2865, 0x2865 + 428],
    CURRENT_BOX_POKEMON_LIST: [0x2d10, 0x2d10 + 1102],
    PLAYER_GENDER: [0x3e3d, 0x3e3d + 1],
    POKEMON_NAMES: [0x53384, 0x53384 + 256 * 10],
};

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

const parsePartyPokemon = (buf: Buffer, boxed = false) => {
    const pokemon = Buffer.from(buf);
    const species = GEN_2_POKEMON_MAP[pokemon[0x00]];
    const heldItem = HELD_ITEM[pokemon[0x01]];
    const moves = [
        MOVES_ARRAY[pokemon[0x02]],
        MOVES_ARRAY[pokemon[0x03]],
        MOVES_ARRAY[pokemon[0x04]],
        MOVES_ARRAY[pokemon[0x05]],
    ];
    const friendship = pokemon[0x1b];
    const caughtData = pokemon.slice(0x1d, 0x1d + 2);
    const level = pokemon[0x1f];
    const ivs = pokemon.slice(0x15, 0x15 + 2);
    const id = ivs.toString('binary');

    return {
        species,
        level,
        moves,
        id,
    };
};

const getSpeciesList = (buf: Buffer) => {
    const str: any[] = [];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < buf.length; i++) {
        if (buf[i] === 0xff) {
            break;
        } else {
            str.push(GEN_2_POKEMON_MAP[buf[i]] || 'MISSINGNO');
        }
    }
    return str;
};

const getPokemonListForParty = (buf: Buffer, entries: number = 6) => {
    const party = splitUp(Buffer.from(buf), entries);
    const pokes = party.map((box) => parsePartyPokemon(box));
    return pokes;
};

const transformPokemon = (pokemon, status) => {
    return pokemon;
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

export const parsePokemon = (buf: Buffer) => {
    const data = Buffer.from(buf);
    const entriesUsed = data[0x0000];
    const rawSpeciesList = data.slice(0x0001, 0x0007);
    console.log(rawSpeciesList);
    const speciesList = getSpeciesList(rawSpeciesList);
    const pokemonListAddress = 0x0002;
    const pokemonList = getPokemonListForParty(
        data.slice(pokemonListAddress, pokemonListAddress + 428),
        6,
    );

    return {
        entriesUsed,
        speciesList,
        pokemonList,
    };
};

export const parseGen2Save = async (file, format, isCrystal = true) => {
    const fileSlice = makeFileSlicer(file);

    const trainerName = convertWithCharMap(fileSlice(OFFSETS.PLAYER_NAME));
    const johtoBadges = fileSlice(OFFSETS.JOHTO_BADGES);
    const currentPCId = isCrystal
        ? fileSlice(CRYSTAL_OFFSETS.CURRENT_PC_BOX_NUMBER)
        : fileSlice(OFFSETS.CURRENT_PC_BOX_NUMBER);
    const partyPokemon = isCrystal
        ? fileSlice(CRYSTAL_OFFSETS.TEAM_POKEMON_LIST)
        : fileSlice(OFFSETS.TEAM_POKEMON_LIST);

    return {
        trainer: {
            name: trainerName,
            id: 1000,
            time: '10:33',
            money: 1000,
            badges: [],
        },
        pokemon: [...partyPokemon],
    };
};

export const loadGen2SaveFile = async (
    filename: string,
    format: 'plain' | 'nuzlocke' = 'nuzlocke',
) => {
    const save = await fs.readFileSync(filename);

    try {
        const file = Buffer.from(save);
        const result = await parseGen2Save(file, format);
        return await result;
    } catch {
        throw new Error('Oops');
    }
};

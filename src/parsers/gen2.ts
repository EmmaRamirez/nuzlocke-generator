import * as fs from 'fs';
import { splitUp, GEN_1_POKEMON_MAP, GEN_1_CHARACTER_MAP, MOVES_ARRAY } from './utils';
import { HELD_ITEM } from './utils/gen2';

const OFFSETS = {
    PLAYER_ID: [0x2009, 0x2009 + 2],

};

const readCaughtData = (data) => {
    const binary = (data >>> 0).toString(2);
    const timeSlice = binary.slice(0, 1);
    const timeHex = parseInt(timeSlice[0] + timeSlice[1], 2).toString(16).toUpperCase();
    const timeMap = {
        0x01: 'morning',
        0x02: 'day',
        0x03: 'night',
    };
    const level = binary.slice(2, 8);

    const OtGender = binary.slice(9, 10);
    const location = binary.slice(11, 16);

};


const MOVES = {

};

const parsePartyPokemon = (buf: Buffer, boxed = false) => {
    const pokemon = Buffer.from(buf);
    const species = GEN_1_POKEMON_MAP[pokemon[0x00]];
    const heldItem = HELD_ITEM[pokemon[0x01]];
    const moves = [
        MOVES_ARRAY[pokemon[0x02]],
        MOVES_ARRAY[pokemon[0x03]],
        MOVES_ARRAY[pokemon[0x04]],
        MOVES_ARRAY[pokemon[0x05]]
    ];
    const friendship = pokemon[0x1B];
    const caughtData = pokemon.slice(0x1D, 0x1D + 2);
    const level = pokemon[0x1F];
    const ivs = pokemon.slice(0x15, 0x15 + 2);
    const id = ivs.toString('binary');

    return {
        species,
        level,
        moves,
        id,
    };
};

const transformPokemon = (pokemon, status) => {
    return pokemon;
};

export const parseGen2Save = async (file, format) => {
    console.log(file);



};

export const loadGen2SaveFile = async (filename: string, format: 'plain' | 'nuzlocke' = 'nuzlocke') => {
    const save = await fs.readFileSync(filename);

    try {
        const file = Buffer.from(save);
        const result = await parseGen2Save(file, format);
        return await result;
    } catch {
        throw new Error('Oops');
    }
};

import * as fs from 'fs';
import {
  GEN_3_CHARACTER_MAP,
  GEN_3_POKEMON_MAP,
  GEN_3_LOCATIONS,
  GEN_3_HELD_ITEM_MAP,
  MOVES_ARRAY,
  splitUp,
} from './utils';
import { Buffer } from 'buffer';
import { Forme } from 'utils/Forme';
import { getBadges } from 'utils/getters/getBadges';
import { matchSpeciesToTypes } from 'utils/formatters/matchSpeciesToTypes';
import type { Species } from 'utils/data/listOfPokemon';
import { Pokemon } from 'models';
import { parseTime } from './utils/parseTime';
import { ParserOptions } from './utils/parserOptions';

export interface Gen3PokemonObject {
  entriesUsed: number;
  speciesList: string[];
  pokemonList: Pick<
    Pokemon,
    | 'species'
    | 'level'
    | 'moves'
    | 'id'
    | 'item'
    | 'extraData'
    | 'shiny'
    | 'met'
    | 'metLevel'
    | 'forme'
  >[];
  pokemonNames: string[];
}

const COMMON_OFFSETS = {
  PLAYER_NAME: [0x0000, 0x0000 + 7],
  PLAYER_GENDER: [0x0008, 0x0008 + 1],
  PLAYER_ID: [0x000a, 0x000a + 4],
  TIME_PLAYED: [0x000e, 0x000e + 5],
  // 0x00000000 for RS
  // 0x00000001 for FRLG
  // Anything Else for Emerald
  GAME_CODE: [0x00ac, 0x00ac + 4],
};

const SECTIONS = {
  TRAINER_INFO: [0, 3884],
  TEAM: [1, 3968],
  GAME: [2, 3968],
  MISC: [3, 3968],
  RIVAL: [4, 3848],
  PC_A: [5, 3968],
  PC_B: [6, 3968],
  PC_C: [7, 3968],
  PC_D: [8, 3968],
  PC_E: [9, 3968],
  PC_F: [10, 3968],
  PC_G: [11, 3968],
  PC_H: [12, 3968],
  PC_I: [13, 3968],
};

const RS_OFFSETS = {
  ...COMMON_OFFSETS,
  TEAM_SIZE: [0x0234, 0x0234 + 4],
  TEAM_POKEMON_LIST: [0x0238, 0x0238 + 600],
  MONEY: [0x0490, 0x0490 + 4],
};

const EMERALD_OFFSETS = {
  ...COMMON_OFFSETS,
  SECURITY_KEY: [0x00ac, 0x00ac + 4],
  TEAM_SIZE: [0x0234, 0x0234 + 4],
  TEAM_POKEMON_LIST: [0x0238, 0x0238 + 600],
  MONEY: [0x0490, 0x0490 + 4],
};

const FRLG_OFFSETS = {
  ...COMMON_OFFSETS,
  SECURITY_KEY: [0x0af8, 0x0af8 + 4],
  TEAM_SIZE: [0x0034, 0x0034 + 4],
  TEAM_POKEMON_LIST: [0x0238, 0x0038 + 600],
  MONEY: [0x0490, 0x0490 + 4],
};

const POKEMON_OFFSETS = {
  PID: [0, 0x0000 + 4],
  OT_ID: [4, 8],
  NICKNAME: [8, 10],
  LANG: [18, 19],
  EGG: [19, 20],
  OT_NAME: [20, 27],
  MARKINGS: [27, 28],
  CHECKSUM: [28, 30],
  DATA: [32, 80],
  STATUS: [80, 84],
  LEVEL: [84, 85],
  POKERUS: [85, 86],
  CURRENT_HP: [86, 88],
  TOTAL_HP: [88, 90],
  ATTACK: [90, 92],
  DEFENSE: [92, 94],
  SPEED: [94, 96],
  SPECIAL_ATTACK: [96, 98],
  SPECIAL_DEFENSE: [98, 100],
};

const POKEMON_SUBSTRUCTURE_OFFSETS = {
  // Growth
  G: {},
  // Attacks
  A: {},
  // EVs and Condition
  E: {},
  // Miscellaneous
  M: {},
};

const substructures = [
  'GAEM',
  'GAME',
  'GEAM',
  'GEMA',
  'GMAE',
  'GMEA',
  'AGEM',
  'AGME',
  'AEGM',
  'AEMG',
  'AMGE',
  'AMEG',
  'EGAM',
  'EGMA',
  'EAGM',
  'EAMG',
  'EMGA',
  'EMAG',
  'MGAE',
  'MGEA',
  'MAGE',
  'MAEG',
  'MEGA',
  'MEAG',
];

const getBits =
  (data) =>
  (n, x): number => {
    return 0;
  };

const getOrigin = (originData) => {
  const getOriginBits = getBits(originData);
  // 0 = hatched
  const levelMet = getOriginBits(0, 6);
  const gameOfOrigin = getOriginBits(7, 10);
  const pokeball = getOriginBits(11, 14);
  const trainerGender = getOriginBits(15, 16);
};

function buf2hex(buffer: Buffer) {
  return [...new Uint8Array(buffer)].map((x) => x.toString(16).padStart(2, '0')).join('');
}

// Caught data is only generated in Crystal but transferrable across versions
const readCaughtData = (data: Buffer) => {
  const buf = Buffer.from(data);
  // @NOTE: buffer.map() coerces types
  const [binaryA, binaryB]: string[] = [
    buf[0].toString(2).padStart(8, '0'),
    buf[1].toString(2).padStart(8, '0'),
  ];

  if (binaryA === '0' && binaryB === '0')
    return {
      level: undefined,
      timeOfDay: undefined,
      location: undefined,
      otGender: undefined,
    };
  const level = Number.parseInt(binaryA.slice(1, 7), 2);
  const timeDigit = Number.parseInt(binaryA.slice(0, 1), 2);
  const timeMap = {
    1: 'morning',
    2: 'day',
    3: 'night',
  };
  const timeOfDay = timeMap[timeDigit];
  const otGender = binaryB[0] ? 'M' : 'F';
  const locationAddress = Number.parseInt(binaryB.slice(1), 2).toString(16).toUpperCase();
  const location = GEN_3_LOCATIONS?.[locationAddress];
  console.log('parser - location', location, binaryB.slice(1), locationAddress);

  return {
    timeOfDay,
    level,
    location,
    otGender,
  };
};

// In Generation III, Unown's letter is determined by the Pokémon's personality value. From Generation IV onward, it is determined by a separate form identifier. Generation III also introduced Unown '!' or '?'.

// Array index access for Unown formes
const unownFormes = [
  Forme.A,
  Forme.B,
  Forme.C,
  Forme.D,
  Forme.E,
  Forme.F,
  Forme.G,
  Forme.H,
  Forme.I,
  Forme.J,
  Forme.K,
  Forme.L,
  Forme.M,
  Forme.N,
  Forme.O,
  Forme.P,
  Forme.Q,
  Forme.R,
  Forme.S,
  Forme.T,
  Forme.U,
  Forme.V,
  Forme.W,
  Forme.X,
  Forme.Y,
  Forme.Z,
];

const determineUnownForme = (ivs: Buffer): Forme => {
  const part1 = ivs[0].toString(2).padStart(8, '0');
  const part2 = ivs[1].toString(2).padStart(8, '0');
  const atk = part1.slice(0, 4).slice(1, 3);
  const def = part1.slice(4).slice(1, 3);
  const speed = part2.slice(0, 4).slice(1, 3);
  const special = part2.slice(4).slice(1, 3);
  const comboString = atk + def + speed + special;
  const formeId = Math.floor(Number.parseInt(comboString, 2) / 10);

  return unownFormes?.[formeId]?.toUpperCase() as Forme;
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
  const part1 = ivs[0].toString(2).padStart(8, '0');
  const part2 = ivs[1].toString(2).padStart(8, '0');
  const atk = parseInt(part1.slice(0, 4), 2);
  const def = parseInt(part1.slice(4, 8), 2);
  const speed = parseInt(part2.slice(0, 4), 2);
  const special = parseInt(part2.slice(4, 8), 2);
  const hp = parseInt(part1[3] + part1[7] + part2[3] + part2[7], 2);

  return {
    atk,
    def,
    speed,
    special,
    hp,
  };
};

const isShiny = (ivs: Buffer): boolean => {
  const { atk, def, special, speed } = getIvs(ivs);

  if ([2, 3, 6, 7, 10, 11, 14, 15].includes(atk) && def === 10 && speed === 10 && special === 10) {
    return true;
  } else {
    return false;
  }
};

const to16BitInt = (buf: Buffer) => Buffer.from(buf).readInt16BE(0);

const parsePokemon = (buf: Buffer, boxed = false): Gen3PokemonObject['pokemonList'][number] => {
  const pokemon = Buffer.from(buf);
  const species = GEN_3_POKEMON_MAP[pokemon[0x00]];
  const item = GEN_3_HELD_ITEM_MAP[pokemon[0x01]];
  const moves = [
    MOVES_ARRAY[pokemon[0x02]],
    MOVES_ARRAY[pokemon[0x03]],
    MOVES_ARRAY[pokemon[0x04]],
    MOVES_ARRAY[pokemon[0x05]],
  ];
  const friendship = pokemon[0x1b];

  let caughtData;
  if (!boxed) {
    caughtData = readCaughtData(pokemon.slice(0x1d, 0x1d + 2));
  } else {
    caughtData = { level: undefined, location: undefined };
  }
  // const caughtData = readCaughtData(pokemon.slice(0x1d, 0x1d + 2));
  const expData = boxed ? undefined : to16BitInt(pokemon.slice(0x08, 0x08 + 3));

  const level = pokemon[0x1f];
  const id = pokemon.toString('binary');
  const ivs = pokemon.slice(0x15, 0x15 + 2);
  const unownForme = species === 'Unown' ? determineUnownForme(ivs) : undefined;
  const shiny = isShiny(Buffer.from(ivs));

  const extraData = boxed
    ? {}
    : {
        currentHp: to16BitInt(pokemon.slice(0x22, 0x22 + 2)),
        maxHp: to16BitInt(pokemon.slice(0x24, 0x24 + 2)),
        attack: to16BitInt(pokemon.slice(0x26, 0x26 + 2)),
        defense: to16BitInt(pokemon.slice(0x28, 0x28 + 2)),
        speed: to16BitInt(pokemon.slice(0x2a, 0x2a + 2)),
        specialAttack: to16BitInt(pokemon.slice(0x2c, 0x2c + 2)),
        specialDefense: to16BitInt(pokemon.slice(0x2e, 0x2e + 2)),
      };

  return {
    species,
    level,
    moves,
    id,
    item,
    shiny,
    forme: unownForme,
    met: caughtData.location,
    metLevel: caughtData.level,
    extraData: {
      friendship,
      expData,
      caughtData,
      ...extraData,
    },
  };
};

const getSpeciesList = (buf: Buffer) => {
  const str: any[] = [];
  // tslint:disable-next-line:prefer-for-of
  for (let i = 0; i < buf.length; i++) {
    if (buf[i] === 0xff) {
      break;
    } else {
      str.push(GEN_3_POKEMON_MAP[buf[i]] || 'MISSINGNO');
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

const parseJohtoBadges = (buf: Buffer) => {
  const bits = buf[0].toString(2).padStart(8, '0') + buf[1].toString(2).padStart(8, '0');
  const badges = getBadges('Gold'); // Doesn't matter as long as it's gen 2
  const badgesObtainedMap = bits.split('').map((badge) => {
    return badge === '1' ? true : false;
  });
  const badgesFiltered = badges.filter((badge, idx) => {
    return badgesObtainedMap[idx];
  });
  return badgesFiltered;
};

const transformPokemon = (
  pokemonObject: Gen3PokemonObject,
  status: string,
  boxIndex: number = 1
) => {
  return pokemonObject.pokemonList
    .map((poke, index) => {
      return {
        position: (index + 1) * boxIndex,
        species: poke.species,
        status: status,
        level: poke.level,
        types: matchSpeciesToTypes(poke.species as Species),
        moves: poke.moves,
        shiny: poke.shiny,
        forme: poke.forme,
        nickname: pokemonObject.pokemonNames[index],
        met: poke.met,
        metLevel: poke.metLevel,
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
    str.push(GEN_3_CHARACTER_MAP[buf[i]] || '');
  }
  return str.join('');
};

const makeFileSlicer = (file) => (offset: number[]) => {
  return file.slice(offset[0], offset[1]);
};

// export const parsePokemonList = (buf: Buffer, entries = 6): Gen3PokemonObject => {

//};

const sliceBoxes = (buf: Buffer) => {
  const fileSlice = makeFileSlicer(buf);

  //return OFFSETS.BOXES.map((box) => fileSlice(box));
};

export const parseGen3Save = async (file, options: ParserOptions) => {
  const fileSlice = makeFileSlicer(file);

  const name = null;
  const id = null;
  const time = null;
  const money = null;
  const badges = null;
  const partyPokemon = [];
  const boxedPokemon = [];

  return {
    trainer: {
      name,
      id,
      time,
      money,
      badges,
    },
    pokemon: [...partyPokemon, ...boxedPokemon],
  };
};

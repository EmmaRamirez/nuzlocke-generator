import { Buffer } from 'buffer';
import { Pokemon } from 'models';
import { matchSpeciesToTypes } from 'utils/formatters/matchSpeciesToTypes';
import { Forme } from 'utils/Forme';
import { listOfPokemon } from 'utils/data/listOfPokemon';
import type { Species } from 'utils/data/listOfPokemon';
import type { GameSaveFormat } from 'utils/gameSaveFormat';
import { MOVES_ARRAY } from './utils';
import { ParserOptions } from './utils/parserOptions';

interface SaveSection {
  id: number;
  data: Buffer;
  checksum: number;
  saveIndex: number;
  order: number;
}

interface PokemonContext {
  status: string;
  position: number;
  isParty: boolean;
  level?: number;
  boxIndex?: number;
  slotIndex?: number;
}

const SECTION_SIZE = 0x1000;
const SECTION_DATA_SIZE = 0x0ff4;
const SECTION_COUNT = 14;
const BLOCK_SIZE = SECTION_SIZE * SECTION_COUNT;
const PARTY_POKEMON_SIZE = 100;
const BOX_POKEMON_SIZE = 80;
const TEAM_CAPACITY = 6;
const BOX_CAPACITY = 30;
const BOX_COUNT = 14;
const STORAGE_HEADER_SIZE = 4;
const MAX_SUPPORTED_SPECIES = 386;

const PC_SECTION_IDS = [5, 6, 7, 8, 9, 10, 11, 12, 13];

const COMMON_OFFSETS = {
  PLAYER_NAME: [0x0000, 0x0007],
  PLAYER_ID: [0x000a, 0x000e],
  TIME_PLAYED: [0x000e, 0x0013],
};

const RS_OFFSETS = {
  ...COMMON_OFFSETS,
  TEAM_SIZE: 0x0234,
  TEAM_POKEMON_LIST: 0x0238,
  MONEY: [0x0490, 0x0494],
};

const EMERALD_OFFSETS = {
  ...COMMON_OFFSETS,
  TEAM_SIZE: 0x0234,
  TEAM_POKEMON_LIST: 0x0238,
  MONEY: [0x0490, 0x0494],
};

const FRLG_OFFSETS = {
  ...COMMON_OFFSETS,
  TEAM_SIZE: 0x0034,
  TEAM_POKEMON_LIST: 0x0238,
  MONEY: [0x0490, 0x0494],
};

const ORIGIN_GAME_MAP: Record<number, string> = {
  0: 'Ruby',
  1: 'Sapphire',
  2: 'Emerald',
  3: 'FireRed',
  4: 'LeafGreen',
  5: 'Colosseum/XD',
};

const BALL_MAP: Record<number, string> = {
  0: 'None',
  1: 'Master Ball',
  2: 'Ultra Ball',
  3: 'Great Ball',
  4: 'Poké Ball',
  5: 'Safari Ball',
  6: 'Net Ball',
  7: 'Dive Ball',
  8: 'Nest Ball',
  9: 'Repeat Ball',
  10: 'Timer Ball',
  11: 'Luxury Ball',
  12: 'Premier Ball',
};

const SUBSTRUCTURE_ORDERS = [
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

const UNOWN_FORMES: Forme[] = [
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
  Forme['!'],
  Forme['?'],
];

const SPECIES_MAP: Record<number, Species> = {};
for (let i = 0; i < listOfPokemon.length; i++) {
  SPECIES_MAP[i + 1] = listOfPokemon[i];
}

const decodeCharacter = (code: number): string => {
  if (code >= 0xbb && code <= 0xd4) {
    return String.fromCharCode(65 + (code - 0xbb));
  }
  if (code >= 0xd5 && code <= 0xee) {
    return String.fromCharCode(97 + (code - 0xd5));
  }
  if (code >= 0xa1 && code <= 0xaa) {
    return String.fromCharCode(48 + (code - 0xa1));
  }
  switch (code) {
    case 0x00:
      return ' ';
    case 0xe0:
      return "'";
    case 0xe1:
      return '-';
    case 0xe2:
      return '!';
    case 0xe3:
      return '?';
    case 0xe6:
      return '.';
    case 0xe8:
      return '…';
    case 0xab:
      return '♂';
    case 0xac:
      return '♀';
    default:
      return '';
  }
};

const decodeGameText = (buffer: Buffer): string => {
  let result = '';
  for (const code of buffer) {
    if (code === 0xff || code === 0x00) break;
    result += decodeCharacter(code);
  }
  return result.trim();
};

const getOffsets = (game?: GameSaveFormat) => {
  switch (game) {
    case 'FRLG':
      return FRLG_OFFSETS;
    case 'Emerald':
      return EMERALD_OFFSETS;
    case 'RS':
    default:
      return RS_OFFSETS;
  }
};

const readSection = (file: Buffer, sectionIndex: number): SaveSection => {
  const offset = sectionIndex * SECTION_SIZE;
  const dataStart = offset;
  const dataEnd = offset + SECTION_DATA_SIZE;
  const footerStart = offset + SECTION_DATA_SIZE;
  const footer = file.slice(footerStart, footerStart + 12);

  const id = footer.readUInt16LE(0);
  const checksum = footer.readUInt16LE(2);
  const saveIndex = footer.readUInt32LE(8);

  return {
    id,
    checksum,
    saveIndex,
    order: sectionIndex,
    data: file.slice(dataStart, dataEnd),
  };
};

const readBlock = (file: Buffer, blockIndex: number): SaveSection[] => {
  const start = blockIndex * BLOCK_SIZE;
  const blockBuffer = file.slice(start, start + BLOCK_SIZE);
  const sections: SaveSection[] = [];

  for (let i = 0; i < SECTION_COUNT; i++) {
    sections.push(readSection(blockBuffer, i));
  }

  return sections;
};

const selectLatestBlock = (file: Buffer): SaveSection[] => {
  const blockA = readBlock(file, 0);
  const blockB = readBlock(file, 1);
  const blockASave = blockA[SECTION_COUNT - 1].saveIndex;
  const blockBSave = blockB[SECTION_COUNT - 1].saveIndex;

  if (blockASave > blockBSave) {
    return blockA;
  }
  return blockB;
};

const buildSectionMap = (sections: SaveSection[]) => {
  const map = new Map<number, SaveSection>();
  sections.forEach((section) => {
    map.set(section.id, section);
  });
  return map;
};

const getSpeciesName = (speciesId: number, nickname?: string): Species | undefined => {
  if (speciesId > 0 && speciesId <= MAX_SUPPORTED_SPECIES) {
    return SPECIES_MAP[speciesId];
  }
  if (nickname) {
    const match = listOfPokemon.find(
      (name) => name.toLowerCase() === nickname.toLowerCase()
    );
    return match;
  }
  return undefined;
};

const formatMoney = (bytes: Buffer) => bytes.readUInt32LE(0);

const getGameFromOrigin = (value: number) => ORIGIN_GAME_MAP[value] || undefined;

const getBoxStatus = (boxIndex: number, options: ParserOptions) => {
  const mapping = options.boxMappings?.find((entry) => entry.key === boxIndex + 1);
  return mapping?.status || 'Boxed';
};

const xorDecrypt = (buffer: Buffer, key: number) => {
  const decrypted = Buffer.from(buffer);
  for (let i = 0; i < decrypted.length; i += 4) {
    const value = decrypted.readUInt32LE(i) ^ key;
    decrypted.writeUInt32LE(value >>> 0, i);
  }
  return decrypted;
};
const splitSubstructures = (orderKey: string, buffer: Buffer) => {
  const chunks: Record<'G' | 'A' | 'E' | 'M', Buffer> = {
    G: Buffer.alloc(12),
    A: Buffer.alloc(12),
    E: Buffer.alloc(12),
    M: Buffer.alloc(12),
  };

  for (let i = 0; i < 4; i++) {
    const label = orderKey[i] as 'G' | 'A' | 'E' | 'M';
    const slice = buffer.slice(i * 12, (i + 1) * 12);
    chunks[label] = Buffer.from(slice);
  }

  return chunks;
};

const shinyCheck = (personality: number, otId: number) => {
  const tid = otId & 0xffff;
  const sid = (otId >> 16) & 0xffff;
  const value =
    (tid ^ sid ^ (personality & 0xffff) ^ ((personality >> 16) & 0xffff)) & 0xffff;
  return value < 8;
};

const parseIvs = (value: number) => ({
  hp: value & 0x1f,
  attack: (value >> 5) & 0x1f,
  defense: (value >> 10) & 0x1f,
  speed: (value >> 15) & 0x1f,
  specialAttack: (value >> 20) & 0x1f,
  specialDefense: (value >> 25) & 0x1f,
  isEgg: Boolean((value >> 30) & 0x1),
  abilitySlot: (value >> 31) & 0x1,
});

const determineUnownForme = (personality: number): Forme => {
  const value =
    ((personality & 0x3000000) >> 18) |
    ((personality & 0x30000) >> 12) |
    ((personality & 0x300) >> 6) |
    (personality & 0x3);
  return UNOWN_FORMES[value % UNOWN_FORMES.length];
};

const decodePokemon = (buffer: Buffer, context: PokemonContext): Pokemon | null => {
  const personality = buffer.readUInt32LE(0);
  if (personality === 0) return null;

  const otId = buffer.readUInt32LE(4);
  const nickname = decodeGameText(buffer.slice(0x08, 0x08 + 10));
  const language = buffer.readUInt16LE(0x12);
  const markings = buffer.readUInt8(0x14);
  const checksum = buffer.readUInt16LE(0x1c);
  const encryptedData = buffer.slice(0x20, 0x20 + 48);
  const key = (personality ^ otId) >>> 0;
  const decrypted = xorDecrypt(encryptedData, key);
  const orderKey = SUBSTRUCTURE_ORDERS[personality % SUBSTRUCTURE_ORDERS.length];
  const sub = splitSubstructures(orderKey, decrypted);

  const speciesId = sub.G.readUInt16LE(0);
  if (!speciesId) return null;

  const itemId = sub.G.readUInt16LE(2);
  const exp = sub.G.readUInt32LE(4);
  const ppBonuses = sub.G.readUInt8(8);
  const friendship = sub.G.readUInt8(9);

  const moveIds = [
    sub.A.readUInt16LE(0),
    sub.A.readUInt16LE(2),
    sub.A.readUInt16LE(4),
    sub.A.readUInt16LE(6),
  ];
  const movePP = [
    sub.A.readUInt8(8),
    sub.A.readUInt8(9),
    sub.A.readUInt8(10),
    sub.A.readUInt8(11),
  ];

  const evs = {
    hp: sub.E.readUInt8(0),
    attack: sub.E.readUInt8(1),
    defense: sub.E.readUInt8(2),
    speed: sub.E.readUInt8(3),
    specialAttack: sub.E.readUInt8(4),
    specialDefense: sub.E.readUInt8(5),
  };

  const contest = {
    cool: sub.E.readUInt8(6),
    beauty: sub.E.readUInt8(7),
    cute: sub.E.readUInt8(8),
    smart: sub.E.readUInt8(9),
    tough: sub.E.readUInt8(10),
    sheen: sub.E.readUInt8(11),
  };

  const pokerus = sub.M.readUInt8(0);
  const metLocation = sub.M.readUInt8(1);
  const originInfo = sub.M.readUInt16LE(2);
  const ivData = sub.M.readUInt32LE(4);
  const ribbons = sub.M.readUInt32LE(8);

  const ivs = parseIvs(ivData);
  const metLevel = originInfo & 0x7f;
  const originGame = (originInfo >> 7) & 0xf;
  const ballId = (originInfo >> 11) & 0x3;
  const otGender = (originInfo >> 15) & 0x1 ? 'F' : 'M';

  const level = context.isParty ? context.level : undefined;
  const speciesName = getSpeciesName(speciesId, nickname);
  const moves = moveIds.map((id) => MOVES_ARRAY[id] || `Move #${id}`).filter(Boolean);
  const pokeball = BALL_MAP[ballId] || `Ball #${ballId}`;
  const ability = ivs.abilitySlot === 1 ? 'Ability 2' : 'Ability 1';
  const shiny = shinyCheck(personality, otId);
  const forme =
    speciesName === 'Unown' ? determineUnownForme(personality) : undefined;

  const stats = context.isParty
    ? {
      currentHp: buffer.readUInt16LE(0x56),
      maxHp: buffer.readUInt16LE(0x58),
      attack: buffer.readUInt16LE(0x5a),
      defense: buffer.readUInt16LE(0x5c),
      speed: buffer.readUInt16LE(0x5e),
      specialAttack: buffer.readUInt16LE(0x60),
      specialDefense: buffer.readUInt16LE(0x62),
    }
    : undefined;

  const types =
    speciesName && speciesName in SPECIES_MAP
      ? matchSpeciesToTypes(speciesName as Species)
      : undefined;

  const met =
    metLocation && metLocation !== 0xff ? `Location ${metLocation}` : undefined;

  const pokemon: Pokemon = {
    species: speciesName || `Species ${speciesId}`,
    nickname: nickname || undefined,
    status: context.status,
    id: `${personality.toString(16)}-${otId.toString(16)}`,
    level,
    moves,
    shiny,
    forme,
    item: itemId ? `Item #${itemId}` : undefined,
    met,
    metLevel: metLevel || undefined,
    position: context.position,
    egg: ivs.isEgg,
    pokeball,
    ability,
    types,
    extraData: {
      language,
      markings,
      checksum,
      movePP,
      ppBonuses,
      friendship,
      exp,
      evs,
      contest,
      pokerus,
      ivs,
      ribbons,
      otGender,
      originGame: getGameFromOrigin(originGame),
      box: context.boxIndex !== undefined ? context.boxIndex + 1 : undefined,
      slot: context.slotIndex,
      stats,
    },
  };

  return pokemon;
};

const parseParty = (
  section: Buffer,
  offsets: ReturnType<typeof getOffsets>
): Pokemon[] => {
  const size = section.readUInt8(offsets.TEAM_SIZE) || 0;
  const count = Math.min(size, TEAM_CAPACITY);
  const start = offsets.TEAM_POKEMON_LIST;
  const party: Pokemon[] = [];

  for (let i = 0; i < count; i++) {
    const slice = section.slice(
      start + i * PARTY_POKEMON_SIZE,
      start + (i + 1) * PARTY_POKEMON_SIZE
    );
    const context: PokemonContext = {
      status: 'Team',
      position: i + 1,
      isParty: true,
      level: slice.readUInt8(0x54),
      slotIndex: i,
    };
    const pokemon = decodePokemon(slice, context);
    if (pokemon) {
      party.push(pokemon);
    }
  }

  return party;
};

const parseBoxes = (
  sectionMap: Map<number, SaveSection>,
  options: ParserOptions
): Pokemon[] => {
  const buffers: Buffer[] = [];
  PC_SECTION_IDS.forEach((id) => {
    const section = sectionMap.get(id);
    if (section) {
      buffers.push(section.data);
    }
  });

  if (!buffers.length) {
    return [];
  }

  const storage = Buffer.concat(buffers).slice(STORAGE_HEADER_SIZE);
  const pokemonBytes = BOX_COUNT * BOX_CAPACITY * BOX_POKEMON_SIZE;
  const pokemonArea = storage.slice(0, pokemonBytes);
  const boxed: Pokemon[] = [];

  for (let boxIndex = 0; boxIndex < BOX_COUNT; boxIndex++) {
    for (let slot = 0; slot < BOX_CAPACITY; slot++) {
      const offset =
        boxIndex * BOX_CAPACITY * BOX_POKEMON_SIZE + slot * BOX_POKEMON_SIZE;
      const slice = pokemonArea.slice(offset, offset + BOX_POKEMON_SIZE);
      const context: PokemonContext = {
        status: getBoxStatus(boxIndex, options),
        position: (slot + 1) * (boxIndex + 1),
        isParty: false,
        boxIndex,
        slotIndex: slot,
      };
      const pokemon = decodePokemon(slice, context);
      if (pokemon) {
        boxed.push(pokemon);
      }
    }
  }

  return boxed;
};
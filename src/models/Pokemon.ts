export interface Pokemon {
    id: string;
    species: string;
    nickname?: string;
    status?: string;
    level?: number;
    gender?: string;
    met?: string;
    metLevel?: number;
    nature?: string;
    ability?: string;
    moves?: string[];
    causeOfDeath?: string;
    forme?: string;
    item?: string;
    types?: string[];
    customImage?: string;
    customSprite?: string;
    shiny?: boolean;
    champion?: boolean;
    badges?: string[];
    num?: string;
    position?: number;
    wonderTradedFor?: string;
}

// We export a non-type version when we need all the keys easily
export const PokemonKeys:Pokemon = {
    id: '',
    species: '',
    nickname: '',
    status: '',
    level: 0,
    gender: '',
    met: '',
    metLevel: 0,
    nature: '',
    ability: '',
    moves: [],
    causeOfDeath: '',
    forme: '',
    item: '',
    types: [],
    customImage: '',
    customSprite: '',
    shiny: false,
    champion: false,
    badges: [],
    num: '',
    position: 0,
    wonderTradedFor: ''
};
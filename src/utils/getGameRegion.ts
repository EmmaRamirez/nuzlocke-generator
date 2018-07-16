import { listOfGames } from 'utils';

export type Region = 'alola' | 'kalos' | 'unova' | 'sinnoh' | 'hoenn' | 'johto' | 'kanto' | 'orre' | 'other';

export const getGameRegion = (name: keyof typeof listOfGames): Region => {
    if (name === 'Sun' || name === 'Moon' || name === 'Ultra Sun' || name === 'Ultra Moon') {
        return 'alola';
    }
    if (name === 'FireRed' || name === 'LeafGreen' || name === 'Red' || name === 'Blue' || name === 'Yellow') {
        return 'kanto';
    }
    if (name === 'Ruby' || name === 'Sapphire' || name === 'Emerald' || name === 'OmegaRuby' || name === 'AlphaSapphire') {
        return 'hoenn';
    }
    return 'other';
};

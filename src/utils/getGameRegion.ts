export type Region = 'alola' | 'kalos' | 'unova' | 'sinnoh' | 'hoenn' | 'johto' | 'kanto' | 'other';

export const getGameRegion = (name: string): Region => {
    if (name === 'Sun' || name === 'Moon' || name === 'Ultra Sun' || name === 'Ultra Moon') {
        return 'alola';
    }
    return 'other';
};

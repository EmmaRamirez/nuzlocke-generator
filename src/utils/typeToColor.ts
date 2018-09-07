import { Types } from './Types';

export const typeToColor = (type: keyof typeof Types | 'None'): string | null => {
    if (type === 'None') return null;
    const types: Record<keyof typeof Types, string> = {
        Bug: '#AEE359',
        Dark: '#29291F',
        Dragon: '#153F4D',
        Electric: '#E3E039',
        Fairy: '#F0C7E5',
        Fighting: '#a52a2a',
        Fire: '#EB3434',
        Flying: '#96D3E0',
        Ghost: '#3B2238',
        Grass: '#39BF3C',
        Ground: '#9C6E21',
        Ice: '#C2F1F2',
        Normal: '#E1E3D3',
        Poison: '#75226B',
        Psychic: '#EB75DD',
        Rock: '#8F795D',
        Steel: '#888',
        Water: '#5B64DE',
    };
    return types[type];
};
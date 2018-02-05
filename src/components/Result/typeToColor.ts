export const typeToColor = (type: string): string | null => {
    if (type === 'None') return null;
    const types: any = {
        Bug: '#AEE359',
        Dark: '#29291F',
        Dragon: '#153F4D',
        Electric: '#E3E039',
        Fighting: '#59462A',
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
        Steel: '#CCC',
        Water: '#5B64DE',
    };
    return types[type];
};

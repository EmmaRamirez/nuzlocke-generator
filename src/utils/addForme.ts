import { Forme } from './Forme';

export const addForme = (species: string | undefined, forme?: keyof typeof Forme) => {
    if (forme) {
        if (forme === 'Normal') {
            if (species === 'Oricorio') {
                return `${species}-baile`;
            }
            return species;
        }
        if (forme === 'Alolan') {
            return `alolan-${species}`;
        }
        if (forme === 'Galarian') {
            return `galarian-${species}`;
        }
        if (forme === 'Mega') {
            return `${species}-mega`;
        }
        if (forme === 'Mega-X') {
            return `${species}-mega-x`;
        }
        if (forme === 'Mega-Y') {
            return `${species}-mega-y`;
        }
        if (forme === 'D') {
            return `${species}-d`;
        }
        if (forme === '10%') {
            return species + '-10';
        }
        if (forme === 'Complete') {
            return species + '-complete';
        }
        // Forms that don't require special formatting
        if ([
            'Heat',
            'Frost',
            'Fan',
            'Heat',
            'Mow',

            'Summer',
            'Spring',
            'Autumn',
            'Winter',

            'Sensu',
            'Baile',
            'Pom-Pom',
            'Pa\'u',


        ].includes(forme)) {
            return `${species}-${forme.replace(/\'/g, '-').toLowerCase()}`;
        }
        return species;
    } else {
        return species;
    }
};

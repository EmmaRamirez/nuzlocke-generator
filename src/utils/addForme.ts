import { Forme } from './Forme';

export const addForme = (species: string | undefined, forme?: keyof typeof Forme) => {
    if (forme) {
        if (forme === 'Normal') {
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
        if (['Heat', 'Frost', 'Fan', 'Heat', 'Mow'].includes(forme)) {
            return `${species}-${forme.toLowerCase()}`;
        }
        if (forme === '10%') {
            return species + '-10';
        }
        if (forme === 'Complete') {
            return species + '-complete';
        }
        return species;
    } else {
        return species;
    }
};

import { Forme } from './getFormeSuffix';

export const addForme = (species: string | undefined, forme?: keyof typeof Forme) => {
    if (forme) {
        if (forme === 'Alolan') {
            return `alolan-${species}`;
        }
        if (forme === 'Mega') {
            return `${species}-mega`;
        }
        if (forme === 'D') {
            return `${species}-d`;
        }
        return species;
    } else {
        return species;
    }
};

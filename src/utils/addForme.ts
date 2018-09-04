export const addForme = (species: string | undefined, forme?: 'Alolan' | 'Mega' | 'D') => {
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

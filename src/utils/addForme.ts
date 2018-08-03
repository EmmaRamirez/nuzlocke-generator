export const addForme = (species: string | undefined, forme?: 'Alolan' | 'Mega') => {
    if (forme) {
        if (forme === 'Alolan') {
            return `alolan-${species}`;
        }
        if (forme === 'Mega') {
            return `${species}-mega`;
        }
        return species;
    } else {
        return species;
    }
};

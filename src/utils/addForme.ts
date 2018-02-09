export const addForme = (species:string | undefined, forme: string | undefined) => {
    if (forme) {
        if (forme === 'Alolan') {
            return `alolan-${species}`;
        }

        return species;
    } else {
        return species;
    }
};
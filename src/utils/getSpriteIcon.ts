import { speciesToNumber } from './speciesToNumber';

export const getSpriteIcon = (species: string, forme:string) => {
    const n = speciesToNumber(species) || 150;
    const getForme = (forme) => {
        if (forme === 'Alolan' || forme === 'alola') {
            return '-a';
        }
        return '';
    };
    return `https://www.serebii.net/pokedex-sm/icon/${n.toString().padStart(3, '0') + getForme(forme)}.png`;
};

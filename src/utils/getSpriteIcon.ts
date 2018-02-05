import { speciesToNumber } from './speciesToNumber';

export const getSpriteIcon = (species: string) => {
    const n = speciesToNumber(species) || 150;
    return `https://www.serebii.net/pokedex-sm/icon/${n.toString().padStart(3, '0')}.png`;
};

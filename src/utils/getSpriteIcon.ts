import { speciesToNumber } from './speciesToNumber';

export const getSpriteIcon = (species:string) => `https://www.serebii.net/pokedex-sm/icon/${speciesToNumber(species).toString().padStart(3, '0')}.png`;
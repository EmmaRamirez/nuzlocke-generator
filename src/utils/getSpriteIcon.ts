import { speciesToNumber } from './speciesToNumber';
import { getForme } from './getForme';

/**
 * @deprecated Use PokemonIcon component
 */
export const getSpriteIcon = (species: string, forme: string | undefined) => {
    const n = speciesToNumber(species) || 150;
    return `https://www.serebii.net/pokedex-sm/icon/${
        n.toString().padStart(3, '0') + getForme(forme)
    }.png`;
};

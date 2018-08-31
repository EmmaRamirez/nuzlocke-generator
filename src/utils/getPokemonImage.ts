import { addForme, getSpriteIcon, speciesToNumber, getForme } from 'utils';
import { Styles } from './styleDefaults';
import { capitalize } from './capitalize';

const sugiFormeNotation = forme => {
    if (typeof forme === 'undefined') return '';
    // If the forme exists, we default to '_f2'
    if (forme != null || forme !== 'Normal' || forme === 'Alolan' || forme === 'Mega') return '_f2';
    // Pokemon with more than 1 extra forme have different notations
    if (forme === 'Sandy' || forme === 'Pau\'u') return '_f3';
    if (forme === 'Sensu') return '_f4';
    return '';
};

const getGameName = name => {
    if (name === 'Red' || name === 'Blue') return 'rb';
    if (
        name === 'Ruby' ||
        name === 'Sapphire' ||
        name === 'FireRed' ||
        name === 'LeafGreen' ||
        name === 'Emerald'
    ) {
        return 'emerald';
    }
    if (name === 'Diamond' || name === 'Pearl' || name === 'Platinum') return 'dp';
    if (name === 'HeartGold' || name === 'SoulSilver') return 'hgss';
    if (name === 'Black' || name === 'White' || name === 'White 2' || name === 'Black 2')
        return 'blackwhite';
    if (name === 'X' || name === 'Y' || name === 'OmegaRuby' || name === 'AlphaSapphire')
        return 'xy';
    if (name === 'Sun' || name === 'Moon' || name === 'Ultra Sun' || name === 'Ultra Moon')
        return 'sunmoon';
    if (
        name === 'Green' ||
        name === 'Gold' ||
        name === 'Silver' ||
        name === 'Yellow' ||
        name === 'Crystal'
    ) {
        return name.toLowerCase();
    }
    return 'sm';
};

export interface GetPokemonImage {
    customImage?: string
    forme?: 'Alolan' | 'Mega'
    species: string
    name?: string
    style: Styles
    shiny?: boolean
}

export function getPokemonImage({ customImage, forme, species, name, style, shiny }: GetPokemonImage) {
    const leadingZerosNumber = (speciesToNumber(species) || 0).toString().padStart(3, '0');

    if (customImage) {
        return `url(${customImage})`;
    }
    if (
        style.spritesMode &&
        (name === 'Black' ||
            name === 'Emerald' ||
            name === 'Ruby' ||
            name === 'Sapphire' ||
            name === 'LeafGreen' ||
            name === 'FireRed' ||
            name === 'White' ||
            name === 'Black 2' ||
            name === 'White 2' ||
            name === 'X' ||
            name === 'Y' ||
            name === 'OmegaRuby' ||
            name === 'AlphaSapphire' ||
            name === 'Sun' ||
            name === 'Moon' ||
            name === 'Ultra Sun' ||
            name === 'Ultra Moon')
    ) {
        return `url(https://www.serebii.net/${getGameName(
            name,
        )}/pokemon/${leadingZerosNumber}${getForme(forme)}.png)`;
    }
    if (style.spritesMode) {
        if (!shiny) {
            return `url(https://www.serebii.net/pokearth/sprites/${getGameName(
                name,
            )}/${leadingZerosNumber}.png)`;
        } else {
            return `url(https://www.serebii.net/Shiny/${capitalize(getGameName(
                name,
            ))}/${leadingZerosNumber}.png)`;
        }
    }
    if (style.teamImages === 'sugimori') {
        return `url(https://assets.pokemon.com/assets/cms2/img/pokedex/full/${leadingZerosNumber}.png)`;
    }
    return `url(img/${(
        addForme((species || '').replace(/\s/g, '').replace(/'/g, ''), forme) || 'missingno'
    ).toLowerCase()}.jpg)`;
}

import { addForme, speciesToNumber, getForme } from 'utils';
import { Styles } from './styleDefaults';
import { capitalize } from './capitalize';
import { Game } from 'utils';
import { Forme } from './Forme';
import { getIconFormeSuffix } from './getIconFormeSuffix';
import { Editor } from 'models';
import { editor } from 'reducers/editor';

const sugiFormeNotation = (forme: Forme) => {
    if (typeof forme === 'undefined') return '';
    if (forme === 'Normal') return '';
    // If the forme exists, we default to '_f2'
    if (
        forme != null ||
        forme !== 'Normal' ||
        forme === 'Alolan' ||
        forme === 'Mega' ||
        forme === 'Mega-X'
    )
        return '_f2';
    // Pokemon with more than 1 extra forme have different notations
    if (forme === 'Sandy' || forme === 'Pau\'u' || forme === 'Mega-Y') return '_f3';
    if (forme === 'Sensu') return '_f4';
    return '';
};

const getGameName = (name: Game) => {
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
    if (name === 'Sun' || name === 'Moon' || name === 'Ultra Sun' || name === 'Ultra Moon'
        || name === 'Colosseum' || name === 'XD Gale of Darkness')
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
    if (name === 'Sword' || name === 'Shield') {
        return 'swordshield';
    }
    return 'sm';
};

const getGameNameSerebii = (name: Game) => {
    switch (name) {
        case 'Black':
        case 'Black 2':
        case 'White':
        case 'White 2':
            return 'BW';
        case 'Gold':
            return 'Gold';
        case 'Silver':
            return 'Silver';
        case 'Crystal':
            return 'Crystal';
        case 'Ruby':
        case 'Sapphire':
            return 'RuSa';
        case 'FireRed':
        case 'LeafGreen':
            return 'FRLG';
        case 'Emerald':
            return 'Em';
        case 'Diamond':
        case 'Pearl':
        case 'Platinum':
            return 'DP';
        case 'HeartGold':
        case 'SoulSilver':
            return 'HGSS';
        case 'X':
        case 'Y':
            return 'XY';
        case 'Sword':
        case 'Shield':
            return 'swordshield';
        default:
            return 'SM';
    }
};

export interface GetPokemonImage {
    customImage?: string;
    forme?: keyof typeof Forme;
    species?: string;
    name?: Game;
    style: Styles;
    shiny?: boolean;
    editor?: Editor;
}

export function getPokemonImage({
    customImage,
    forme,
    species,
    name,
    style,
    shiny,
    editor,
}: GetPokemonImage) {
    const regularNumber = speciesToNumber(species || 'Ditto');
    const leadingZerosNumber = (speciesToNumber(species || 'Ditto') || 0).toString().padStart(3, '0');

    if (customImage) {
        return `url(${customImage})`;
    }

    if (editor?.temtemMode) {
        return `url(img/temtem/${species?.trim()}.png)`;
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
            name === 'Ultra Moon' ||
            name === 'Sword' ||
            name === 'Shield' ||
            name === 'Colosseum' ||
            name === 'XD Gale of Darkness')
    ) {
        if (!shiny) {
            return `url(https://www.serebii.net/${getGameName(
                name,
            )}/pokemon/${leadingZerosNumber}${getForme(forme)}.png)`;
        } else {
            return `url(https://www.serebii.net/Shiny/${capitalize(
                getGameNameSerebii(name as Game),
            )}/${leadingZerosNumber}.png)`;
        }
    }
    if (style.spritesMode) {
        if (!shiny) {
            return `url(https://www.serebii.net/pokearth/sprites/${getGameName(
                name as Game,
            )}/${leadingZerosNumber}.png)`;
        } else {
            return `url(https://www.serebii.net/Shiny/${
                getGameNameSerebii(name as Game)
            }/${leadingZerosNumber}.png)`;
        }
    }


    if (style.teamImages === 'sugimori') {
        return `url(https://assets.pokemon.com/assets/cms2/img/pokedex/full/${leadingZerosNumber}${sugiFormeNotation(
            Forme[forme ? forme : 'Normal'],
        )}.png)`;
    }

    if (style.teamImages === 'dream world') {
        return `url(img/dw/${regularNumber || 1}.svg)`;
    }

    if (style.teamImages === 'shuffle') {
        return `url(img/shuffle/${(species || 'Ditto').trim().toLocaleLowerCase()}${getIconFormeSuffix(
            forme as keyof typeof Forme
        )}.png)`;
    }

    if (style.teamImages === 'tcg') {
        return `url(img/tcg/${(
            addForme((species || '').replace(/\s/g, '').replace(/'/g, ''), forme) || 'missingno'
        ).toLowerCase()}.jpg)`;
    }

    return `url(img/${(
        addForme((species || '').replace(/\s/g, '').replace(/'/g, ''), forme) || 'missingno'
    ).toLowerCase()}.jpg)`;
}

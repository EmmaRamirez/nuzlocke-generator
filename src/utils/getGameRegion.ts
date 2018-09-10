import { Game } from './listOfGames';

export enum Region {
    Kanto = 'kanto',
    Johto = 'johto',
    Hoenn = 'hoenn',
    Sinnoh = 'sinnoh',
    Unova = 'unova',
    Kalos = 'kalos',
    Alola = 'alola',
    Orre = 'orre',
    Other = 'other',
}

export const getGameRegion = (game: Game): Region => {
    const kanto: Game[] = ['Red', 'Blue', 'Yellow', 'Green', 'FireRed', 'LeafGreen'];
    const johto: Game[] = ['Gold', 'Silver', 'Crystal', 'HeartGold', 'SoulSilver'];
    const hoenn: Game[] = ['Ruby', 'Sapphire', 'OmegaRuby', 'AlphaSapphire', 'Emerald'];
    const sinnoh: Game[] = ['Diamond', 'Pearl', 'Platinum'];
    const unova: Game[] = ['Black', 'Black 2', 'White', 'White 2'];
    const kalos: Game[] = ['X', 'Y'];
    const alola: Game[] = ['Sun', 'Ultra Sun', 'Ultra Moon', 'Moon'];
    const orre: Game[] = ['XD Gale of Darkness', 'Colosseum'];

    if (kanto.includes(game)) return Region.Kanto;
    if (johto.includes(game)) return Region.Johto;
    if (hoenn.includes(game)) return Region.Hoenn;
    if (sinnoh.includes(game)) return Region.Sinnoh;
    if (unova.includes(game)) return Region.Unova;
    if (kalos.includes(game)) return Region.Kalos;
    if (alola.includes(game)) return Region.Alola;
    if (orre.includes(game)) return Region.Orre;

    return Region.Other;
};

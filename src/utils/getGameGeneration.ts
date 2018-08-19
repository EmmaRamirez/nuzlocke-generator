import { listOfGames } from 'utils';
import { Game } from 'utils';

export enum Generation {
    Gen1 = 1,
    Gen2,
    Gen3,
    Gen4,
    Gen5,
    Gen6,
    Gen7,
    Gen8
}

export const getGameGeneration = (game: Game) => {
    const Gen1: Game[] = ['Red', 'Blue', 'Yellow', 'Green'];
    const Gen2: Game[] = ['Gold', 'Silver', 'Crystal'];
    const Gen3: Game[] = ['Ruby', 'Sapphire', 'Emerald', 'FireRed', 'LeafGreen', 'Colosseum', 'XD Gale of Darkness'];
    const Gen4: Game[] = ['Diamond', 'Pearl', 'Platinum', 'HeartGold', 'SoulSilver'];
    const Gen5: Game[] = ['Black', 'Black 2', 'White', 'White 2'];
    const Gen6: Game[] = ['X', 'Y', 'OmegaRuby', 'AlphaSapphire'];
    const Gen7: Game[] = ['Sun', 'Moon', 'Ultra Moon', 'Ultra Sun', 'Let\'s Go Eevee', 'Let\'s Go Pikachu'];

    if (Gen1.includes(game)) return Generation.Gen1;
    if (Gen2.includes(game)) return Generation.Gen2;
    if (Gen3.includes(game)) return Generation.Gen3;
    if (Gen4.includes(game)) return Generation.Gen4;
    if (Gen5.includes(game)) return Generation.Gen5;
    if (Gen6.includes(game)) return Generation.Gen6;
    if (Gen7.includes(game)) return Generation.Gen7;

    throw new ReferenceError('No Generation was matched for game: ' + game);
};

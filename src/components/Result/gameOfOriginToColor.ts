export const gameOfOriginToColor = (game:string) => {
    const gameToColor = {
        'Red': 'rgb(243, 86, 58)',
        'Blue': '#3675f8',
        'Yellow': ''
    };

    return gameToColor[game] || '';
};


// export const listOfGames = [
//     'Red',
//     'Blue',
//     'Green',
//     'Yellow',
//     'Gold',
//     'Silver',
//     'Crystal',
//     'Ruby',
//     'Sapphire',
//     'FireRed',
//     'LeafGreen',
//     'Emerald',
//     'Diamond',
//     'Pearl',
//     'Platinum',
//     'HeartGold',
//     'SoulSilver',
//     'Black',
//     'White',
//     'Black 2',
//     'White 2',
//     'X',
//     'Y',
//     'OmegaRuby',
//     'AlphaSapphire',
//     'Sun',
//     'Moon',
//     'Ultra Sun',
//     'Ultra Moon',
//     'Colosseum',
//     'XD Gale of Darkness',
//     //'Custom...',
import { Game } from 'utils';

export const gameOfOriginToColor = (game: Game) => {
    const gameToColor = {
        Red: 'rgb(243, 86, 58)',
        Blue: '#3675f8',
        Yellow: '#efe414',
        Green: '#03c242',
        Gold: '#e0c503',
        Silver: '#d8d8d8',
        Cyrstal: '#95ffff',
        Ruby: '#bc1a1a',
        Sapphire: '#1a3abc',
        Emerald: '#1abc58',
        FireRed: '#ef4e21',
        LeafGreen: '#46f279',
        Diamond: '##7ebffc',
        Pearl: '#ffa8bb',
        Platinum: '#c6b1b1',
        HeartGold: '#c9c782',
        SoulSilver: '#c5d3db',
        Black: '#090d0f',
        'Black 2': '#061b26',
        White: '#f9f9f9',
        'White 2': '#f2e8e8',
        X: '#963934',
        Y: '#5bb7b3',
        OmegaRuby: '#a53131',
        AlphaSapphire: '#3161a5',
        Sun: '#ed8d17',
        Moon: '#ac17ed',
        'Ultra Sun': '#e29b1f',
        'Ultra Moon': '#ac17ed',
        Colosseum: '#dfe0d2',
        'XD Gale of Darkness': '#39104f',
    };

    return gameToColor[game] || '';
};

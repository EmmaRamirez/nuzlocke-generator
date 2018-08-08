const accentedE = '\xE9';

export interface HotkeyList {
    key: string;
    comment: string;
    onKeyUp?: string;
    onKeyDown?: string;
}

export const hotkeyList: HotkeyList[] = [
    {
        key: 'j',
        comment: `Previous Pok${accentedE}mon`,
        onKeyUp: 'previousPokemon',
    },
    {
        key: 'k',
        comment: `Next Pok${accentedE}mon`,
        onKeyUp: 'nextPokemon',
    },
    {
        key: 'n',
        comment: `Add new Pok${accentedE}mon`,
        onKeyUp: 'addPokemon',
    },
    {
        key: 'backspace',
        comment: `Delete Pok${accentedE}mon`,
        onKeyUp: 'deletePokemon',
    }
];
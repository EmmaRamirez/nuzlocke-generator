import { accentedE } from 'utils';

export interface HotkeyList {
    key: string;
    comment: string;
    onKeyUp?: string;
    onKeyDown?: string;
}

export const hotkeyList: HotkeyList[] = [
    {
        key: 'j',
        comment: `Previous Pok\xE9mon`,
        onKeyUp: 'previousPokemon',
    },
    {
        key: 'k',
        comment: `Next Pok\xE9mon`,
        onKeyUp: 'nextPokemon',
    },
    {
        key: 'n',
        comment: `Add new Pok\xE9mon`,
        onKeyUp: 'addPokemon',
    },
    {
        key: 'backspace',
        comment: `Delete Pok\xE9mon`,
        onKeyUp: 'deletePokemon',
    },
];

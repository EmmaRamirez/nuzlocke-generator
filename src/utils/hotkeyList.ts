import { feature } from 'utils/feature';

export interface HotkeyList {
    key: string;
    label?: string;
    comment: string;
    onKeyUp?: string;
    onKeyDown?: string;
}

export const betaHotkeys: HotkeyList[] = [
    {
        key: 'm',
        comment: 'Toggle editor',
        onKeyUp: 'toggleEditor',
    },
];

export const hotkeyList: HotkeyList[] = [
    {
        key: 'j',
        comment: 'Previous Pok\xE9mon',
        onKeyUp: 'previousPokemon',
    },
    {
        key: 'k',
        comment: 'Next Pok\xE9mon',
        onKeyUp: 'nextPokemon',
    },
    {
        key: 'n',
        comment: 'Add new Pok\xE9mon',
        onKeyUp: 'addPokemon',
    },
    {
        key: 's',
        comment: 'Manual Save',
        onKeyUp: 'manualSave',
    },
    {
        key: 'backspace',
        comment: 'Delete Pok\xE9mon',
        onKeyUp: 'deletePokemon',
    },
    {
        key: 'N',
        label: 'shift+n',
        comment: 'Create New Nuzlocke',
        onKeyUp: 'newNuzlocke',
    },
    ...(feature.newHotkeys ? betaHotkeys : []),
];

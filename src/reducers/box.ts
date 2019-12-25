import { EDIT_BOX, REPLACE_STATE, VERSION_0_0_6_BETA, Action, ADD_BOX } from 'actions';
import { Boxes } from 'types';

const defaultBoxes: Boxes = [
    {
        key: 0,
        name: 'Team',
    },
    {
        key: 1,
        name: 'Boxed',
    },
    {
        key: 2,
        name: 'Dead',
    },
    {
        key: 3,
        name: 'Champs',
    },
];

export function box(
    state = defaultBoxes,
    action: Action<EDIT_BOX | REPLACE_STATE | VERSION_0_0_6_BETA | ADD_BOX>,
) {
    switch (action.type) {
        case EDIT_BOX:
            const newState = state;
            newState[action.target] = { key: action.key, name: action.name };
            return newState;
        case REPLACE_STATE:
            return action.replaceWith.box;
        case ADD_BOX:
            const {name, background, inheritFrom} = action;
            const key = state.length;
            return [...state, { key, name, background, inheritFrom }];
        case VERSION_0_0_6_BETA:
            return defaultBoxes;
        default:
            return state;
    }
}

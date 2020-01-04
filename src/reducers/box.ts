import { EDIT_BOX, REPLACE_STATE, VERSION_0_0_6_BETA, Action, ADD_BOX, DELETE_BOX } from 'actions';
import { Boxes } from 'models';

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
    action: Action<EDIT_BOX | REPLACE_STATE | VERSION_0_0_6_BETA | ADD_BOX | DELETE_BOX>,
) {
    switch (action.type) {
        case EDIT_BOX:
            const newState = state;
            const prevBox = newState[action.target];
            newState[action.target] = { key: action.target, name: action.name, background: action.background };
            return newState;
        case REPLACE_STATE:
            return action.replaceWith.box;
        case ADD_BOX:
            const {name, background, inheritFrom} = action;
            const key = state.length;
            return [...state, { key, name, background, inheritFrom }];
        case DELETE_BOX:
            return state.filter(box => box.key !== action.key);
        case VERSION_0_0_6_BETA:
            return defaultBoxes;
        default:
            return state;
    }
}

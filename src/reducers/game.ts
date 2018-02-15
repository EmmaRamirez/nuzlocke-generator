import { Action, EDIT_GAME, REPLACE_STATE } from '../actions';

export function game(
    state = {
        name: 'Red',
    },
    action: Action<EDIT_GAME | REPLACE_STATE>,
) {
    switch (action.type) {
        case 'EDIT_GAME':
            return { ...state, ...action.edit };
        case 'REPLACE_STATE':
            return action.replaceWith.game;
        default:
            return state;
    }
}

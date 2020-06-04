import { Action, EDIT_GAME, REPLACE_STATE } from '../actions';
import { Game } from 'models';

export function game(
    state: Game = {
        name: 'None',
        customName: '',
    },
    action: Action<EDIT_GAME | REPLACE_STATE>,
) {
    switch (action.type) {
        case EDIT_GAME:
            return { ...state, ...action.edit };
        case REPLACE_STATE:
            return action.replaceWith.game;
        default:
            return state;
    }
}

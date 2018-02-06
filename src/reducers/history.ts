import { Action, ADD_HISTORY_ENTRY } from '../actions';

export function game(state = [], action: Action<ADD_HISTORY_ENTRY>) {
    switch (action.type) {
        case ADD_HISTORY_ENTRY:
            return [ ...state, action.history ];
        default:
            return state;
    }
}

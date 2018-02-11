import { Action, ADD_HISTORY_ENTRY, REPLACE_STATE } from '../actions';

export function history(state = [], action: Action<ADD_HISTORY_ENTRY | REPLACE_STATE>) {
    switch (action.type) {
        case ADD_HISTORY_ENTRY:
            return [...state, action.history];
        case REPLACE_STATE:
            return action.replaceWith.history;
        default:
            return state;
    }
}

import { Action, EDIT_TRAINER } from '../actions';

export function trainer(state = {}, action) {
    switch (action.type) {
        case 'EDIT_TRAINER':
            return { ...state, ...action.edits };
        default:
            return state;
    }
}

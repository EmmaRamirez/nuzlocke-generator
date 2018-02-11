import { SAVE_NUZLOCKE } from '../actions';

export function nuzlocke(
    state = {
        saves: [],
    },
    action: any,
) {
    switch (action.type) {
        case 'SAVE_NUZLOCKE':
            return { ...state, ...action.nuzlocke };
        case 'REPLACE_STATE':
            return action.replaceWith.nuzlocke;
        default:
            return state;
    }
}

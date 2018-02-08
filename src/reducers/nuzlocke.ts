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
        default:
            return state;
    }
}

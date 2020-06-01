import { Action, SEE_RELEASE } from 'actions';

export function sawRelease(state = {}, action: Action<SEE_RELEASE>) {
    switch (action.type) {
        case SEE_RELEASE:
            return { ...state, [action.release]: true };
        default:
            return state;
    }
}

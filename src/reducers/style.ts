import { Action, EDIT_STYLE } from 'actions';
import { styleDefaults } from 'utils';

export function style(state = styleDefaults, { type, edits }: Action<EDIT_STYLE>) {
    switch (type) {
        case EDIT_STYLE:
            return { ...state, ...edits };
        default:
            return state;
    }
}

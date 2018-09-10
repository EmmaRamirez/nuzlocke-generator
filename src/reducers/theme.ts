import { Theme, DefaultDarkTheme } from 'themes';
import { Action, EDIT_THEME } from 'actions';

export function theme(state: Theme = new DefaultDarkTheme(), action: Action<EDIT_THEME>) {
    switch (action.type) {
        case EDIT_THEME:
            return state;
        default:
            return state;
    }
}

import { CHANGE_EDITOR_SIZE, Action } from 'actions';
import { Editor } from 'models';

export function editor(state: Editor = { minimized: false }, action: Action<CHANGE_EDITOR_SIZE>) {
    switch (action.type) {
        case CHANGE_EDITOR_SIZE:
            return {
                minimized: action.mode,
            };
        default:
            return state;
    }
}

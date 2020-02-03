import { CHANGE_EDITOR_SIZE, Action, TOGGLE_TEMTEM_MODE } from 'actions';
import { Editor } from 'models';

export function editor(state: Editor = { minimized: false, temtemMode: false, }, action: Action<CHANGE_EDITOR_SIZE | TOGGLE_TEMTEM_MODE>) {
    switch (action.type) {
        case CHANGE_EDITOR_SIZE:
            return {
                minimized: action.mode,
            };
        case TOGGLE_TEMTEM_MODE:
            return {
                ...state,
                temtemMode: !state.temtemMode,
            };
        default:
            return state;
    }
}

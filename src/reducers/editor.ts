import {
    CHANGE_EDITOR_SIZE,
    Action,
    TOGGLE_TEMTEM_MODE,
    TOGGLE_MOBILE_RESULT_VIEW,
    SET_EDITOR_HISTORY_ENABLED,
} from "actions";
import { Editor } from "models";

export function editor(
    state: Editor = {
        minimized: false,
        temtemMode: false,
        showResultInMobile: false,
        monsterType: "Pokémon",
        editorHistoryDisabled: true,
    },
    action: Action<
        | CHANGE_EDITOR_SIZE
        | TOGGLE_TEMTEM_MODE
        | TOGGLE_MOBILE_RESULT_VIEW
        | SET_EDITOR_HISTORY_ENABLED
    >,
) {
    switch (action.type) {
        case CHANGE_EDITOR_SIZE:
            return {
                minimized: action.mode,
            };
        case TOGGLE_TEMTEM_MODE:
            return {
                ...state,
                temtemMode: !state.temtemMode,
                monsterType: !state.temtemMode ? "TemTem" : "Pokémon",
            };
        case TOGGLE_MOBILE_RESULT_VIEW:
            return {
                ...state,
                showResultInMobile: !state.showResultInMobile,
            };
        case SET_EDITOR_HISTORY_ENABLED:
            return {
                ...state,
                editorHistoryDisabled: action.enabled,
            };
        default:
            return state;
    }
}

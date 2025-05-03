 
import { Action } from 'actions';

export type SET_EDITOR_HISTORY_ENABLED = 'SET_EDITOR_HISTORY_ENABLED';
export const SET_EDITOR_HISTORY_ENABLED: SET_EDITOR_HISTORY_ENABLED = 'SET_EDITOR_HISTORY_ENABLED';

export type setEditorHistoryDisabled = (bool: boolean) => Action<SET_EDITOR_HISTORY_ENABLED>;
export const setEditorHistoryDisabled = (bool: boolean): Action<SET_EDITOR_HISTORY_ENABLED> => {
    return {
        type: SET_EDITOR_HISTORY_ENABLED,
        enabled: bool,
    };
};

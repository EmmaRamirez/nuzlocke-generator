/* eslint-disable @typescript-eslint/no-redeclare */
import { Action } from './action';
import { History } from 'reducers/editorHistory';

export type UPDATE_EDITOR_HISTORY = 'UPDATE_EDITOR_HISTORY';
export const UPDATE_EDITOR_HISTORY: UPDATE_EDITOR_HISTORY = 'UPDATE_EDITOR_HISTORY';

export type updateEditorHistory = (present: any) => Action<UPDATE_EDITOR_HISTORY, any>;
export const updateEditorHistory = (present: any): Action<UPDATE_EDITOR_HISTORY, any> => {
    return {
        type: UPDATE_EDITOR_HISTORY,
        present,
    };
};

export type UNDO_EDITOR_HISTORY = 'UNDO_EDITOR_HISTORY';
export const UNDO_EDITOR_HISTORY: UNDO_EDITOR_HISTORY = 'UNDO_EDITOR_HISTORY';

export type undoEditorHistory = (present: any) => Action<UNDO_EDITOR_HISTORY, any>;
export const undoEditorHistory = (present: any): Action<UNDO_EDITOR_HISTORY, any> => {
    return {
        type: UNDO_EDITOR_HISTORY,
        present,
    };
};

export type REDO_EDITOR_HISTORY = 'REDO_EDITOR_HISTORY';
export const REDO_EDITOR_HISTORY: REDO_EDITOR_HISTORY = 'REDO_EDITOR_HISTORY';

export type redoEditorHistory = (present: any) => Action<REDO_EDITOR_HISTORY, any>;
export const redoEditorHistory = (present: any): Action<REDO_EDITOR_HISTORY, any> => {
    return {
        type: REDO_EDITOR_HISTORY,
        present,
    };
};

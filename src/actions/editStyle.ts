import { Action } from './action';

export type EDIT_STYLE = 'EDIT_STYLE';
export const EDIT_STYLE: EDIT_STYLE = 'EDIT_STYLE';

export type editStyle = (e: object) => Action<EDIT_STYLE>;
export function editStyle(edits: object): Action<EDIT_STYLE> {
    return {
        type: EDIT_STYLE,
        edits,
    };
}

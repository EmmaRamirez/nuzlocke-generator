import { Action } from './action';

export type EDIT_GAME = 'EDIT_GAME';
export const EDIT_GAME: EDIT_GAME = 'EDIT_GAME';

export function editGame(edit: object): Action<EDIT_GAME> {
    return {
        type: EDIT_GAME,
        edit,
    };
}

import { Action } from './action';

export type EDIT_BOX = 'EDIT_BOX';
export const EDIT_BOX: EDIT_BOX = 'EDIT_BOX';

export type editBox = (n: string, t: number) => Action<EDIT_BOX>;
export function editBox(name: string, target: number): Action<EDIT_BOX> {
    return {
        type: EDIT_BOX,
        name,
        target,
    };
}

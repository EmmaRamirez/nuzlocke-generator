import { Action } from 'actions';

export type NEW_NUZLOCKE = 'NEW_NUZLOCKE';
export const NEW_NUZLOCKE: NEW_NUZLOCKE = 'NEW_NUZLOCKE';

export type newNuzlocke = (initialData: any) => Action<NEW_NUZLOCKE>;
export function newNuzlocke(initialData: any) {
    return {
        type: NEW_NUZLOCKE,
        initialData,
    };
}

export type DELETE_NUZLOCKE = 'DELETE_NUZLOCKE';
export const DELETE_NUZLOCKE: DELETE_NUZLOCKE = 'DELETE_NUZLOCKE';

export type deleteNuzlocke = (tid: string) => Action<DELETE_NUZLOCKE>;
export function deleteNuzlocke(tid: string): Action<DELETE_NUZLOCKE> {
    return {
        type: DELETE_NUZLOCKE,
        tid,
    };
}

export type SWITCH_NUZLOCKE = 'SWITCH_NUZLOCKE';
export const SWITCH_NUZLOCKE: SWITCH_NUZLOCKE = 'SWITCH_NUZLOCKE';

export type switchNuzlocke = (
    currentNuzlockeId: string,
    newNuzlockeId: string,
) => Action<SWITCH_NUZLOCKE>;
export function switchNuzlocke(
    currentNuzlockeId: string,
    newNuzlockeId: string,
): Action<SWITCH_NUZLOCKE> {
    return {
        type: SWITCH_NUZLOCKE,
        currentNuzlockeId,
        newNuzlockeId,
    };
}

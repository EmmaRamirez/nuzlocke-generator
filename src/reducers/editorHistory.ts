import { Action, UNDO_EDITOR_HISTORY, UPDATE_EDITOR_HISTORY } from 'actions';
import { init, last, lift } from 'ramda';
import { diff, applyChange, Diff, applyDiff, revertChange } from 'deep-diff';

export interface History<T> {
    past: any[][];
    present?: T;
    future: any[][];
}

export function editorHistory(state: History<any> = {
    past: [],
    present: undefined,
    future: [],
}, action: Action<UNDO_EDITOR_HISTORY | UPDATE_EDITOR_HISTORY>): History<any> {
    switch (action.type) {
        case UPDATE_EDITOR_HISTORY:
            const {past, present, future} = state;

            const latest = last(past);
            const newPast = diff(present, action.present);
            const pastState = newPast ? [
                ...past,
                newPast,
            ] : past;

            return {
                past: pastState,
                present: action.present,
                future,
            };

        case UNDO_EDITOR_HISTORY:
            const undo = () => {
                const {past, present, future} = state;

                const latest = past ? last(past) : [];
                const newFuture = diff(present, action.present);
                // @ts-expect-error
                const newPresent = revertChange(action.present, present, latest);

                console.log(action.present, latest);
                console.log(newFuture, newPresent);

                return {
                    past: init(past),
                    present: newPresent,
                    future: [
                        ...future,
                        newFuture,
                    ],
                };
            };

            // @ts-expect-error
            return undo();

        default:
            return state;
    }
}

import {
    Action,
    ADD_CUSTOM_CHECKPOINT,
    DELETE_CHECKPOINT,
    EDIT_CHECKPOINT,
    REORDER_CHECKPOINTS,
    RESET_CHECKPOINTS,
    addCustomCheckpoint,
    editCheckpoint,
    deleteCheckpoint,
    reorderCheckpoints,
    resetCheckpoints
} from 'actions';
import { Badge } from 'models';
import { getBadges, Game } from 'utils';
import { arrayMove } from 'react-sortable-hoc';

export type Checkpoints = Badge[];

export function checkpoints(
    state: Checkpoints = getBadges('Gold'),
    action: ReturnType<addCustomCheckpoint | editCheckpoint | deleteCheckpoint | resetCheckpoints | reorderCheckpoints>,
) {
    switch (action.type) {
        case RESET_CHECKPOINTS:
            return getBadges(action.game as Game);
        case REORDER_CHECKPOINTS:
            return arrayMove(state, action.oldIndex as number, action.newIndex as number);
        case ADD_CUSTOM_CHECKPOINT:
            return [ ...state, action.checkpoint ];
        case EDIT_CHECKPOINT:
            const newState = state.slice();
            newState.splice(
                state.map(n => n.name).indexOf(action.name as string),
                1,
                { ...state.find(c => c.name === action.name), ...action.edits as any },
            );
            return newState;
        case DELETE_CHECKPOINT:
            return state.filter(c => c.name !== action.name);
        default:
            return state;
    }
}

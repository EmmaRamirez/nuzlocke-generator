import {
    Action,
    ADD_CUSTOM_CHECKPOINT,
    DELETE_CHECKPOINT,
    EDIT_CHECKPOINT,
    addCustomCheckpoint,
    editCheckpoint,
    deleteCheckpoint,
} from 'actions';
import { Badge } from 'models';

export type Checkpoints = Badge[];

export function checkpoints(
    state: Checkpoints = [],
    action: ReturnType<addCustomCheckpoint | editCheckpoint | deleteCheckpoint>,
) {
    switch (action.type) {
        case ADD_CUSTOM_CHECKPOINT:
            return [ ...state, action.checkpoint ];
        case EDIT_CHECKPOINT:
            return [ ...state.filter(c => c.name !== action.name), { ...state.find(c => c.name === action.name), ...action.edits as Partial<Badge> } ];
        case DELETE_CHECKPOINT:
            return state.filter(c => c.name !== action.name);
        default:
            return state;
    }
}

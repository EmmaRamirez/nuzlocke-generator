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
import { getBadges, Game } from 'utils';
import { RESET_CHECKPOINTS, resetCheckpoints } from 'actions/resetCheckpoints';

export type Checkpoints = Badge[];

export function checkpoints(
    state: Checkpoints = getBadges('Gold'),
    action: ReturnType<addCustomCheckpoint | editCheckpoint | deleteCheckpoint | resetCheckpoints>,
) {
    switch (action.type) {
        case RESET_CHECKPOINTS:
            return getBadges(action.game as Game);
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

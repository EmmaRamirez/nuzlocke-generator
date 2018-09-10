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
import { DeepSet } from 'utils';
import { EDIT } from '@blueprintjs/icons/lib/esm/generated/iconNames';

export type Checkpoints = Badge[];

export function checkpoints(
    state: Checkpoints = [],
    action: Action<ADD_CUSTOM_CHECKPOINT | EDIT_CHECKPOINT | DELETE_CHECKPOINT>,
) {
    switch (action.type) {
        case ADD_CUSTOM_CHECKPOINT:
            return state;
        case EDIT_CHECKPOINT:
            return state;
        case DELETE_CHECKPOINT:
            return state;
        default:
            return state;
    }
}

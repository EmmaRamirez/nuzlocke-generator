import { Action, NEW_NUZLOCKE, DELETE_NUZLOCKE, SWITCH_NUZLOCKE } from 'actions';

export function nuzlockes(
    state = [],
    action: Action<NEW_NUZLOCKE | DELETE_NUZLOCKE | SWITCH_NUZLOCKE>,
) {
    switch (action.type) {
        case NEW_NUZLOCKE:
            return state;
        case DELETE_NUZLOCKE:
            return state;
        case SWITCH_NUZLOCKE:
            return state;
        default:
            return state;
    }
}

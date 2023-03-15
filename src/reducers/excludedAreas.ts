import { Action, UPDATE_EXCLUDED_AREAS, REPLACE_STATE } from '../actions';

export function excludedAreas(
    state: string[] = [],
    action: Action<UPDATE_EXCLUDED_AREAS | REPLACE_STATE>,
) {
    switch (action.type) {
        case UPDATE_EXCLUDED_AREAS:
            return action.excludedAreas;
        case REPLACE_STATE:
            return action.replaceWith.excludedAreas ?? [];
        default:
            return state;
    }
}

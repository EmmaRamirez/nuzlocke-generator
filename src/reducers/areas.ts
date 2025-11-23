import {
    Action,
    UPDATE_EXCLUDED_AREAS,
    REPLACE_STATE,
    UPDATE_CUSTOM_AREAS,
} from "../actions";

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

export function customAreas(
    state: string[] = [],
    action: Action<UPDATE_CUSTOM_AREAS | REPLACE_STATE>,
) {
    switch (action.type) {
        case UPDATE_CUSTOM_AREAS:
            return action.areas;
        case REPLACE_STATE:
            return action.replaceWith.areas ?? [];
        default:
            return state;
    }
}

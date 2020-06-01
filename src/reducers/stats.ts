import { Action, ADD_STAT, EDIT_STAT, DELETE_STAT, REPLACE_STATE } from 'actions';
import * as uuid from 'uuid';

export function stats(
    initState = [{ id: 'a-1', key: '', value: '' }],
    action: Action<ADD_STAT | EDIT_STAT | DELETE_STAT | REPLACE_STATE>,
) {
    switch (action.type) {
        case ADD_STAT:
            return [
                ...initState,
                {
                    id: uuid(),
                    ...action.stat,
                },
            ];
        case DELETE_STAT:
            return initState.filter((s) => s.id !== action.id);
        case EDIT_STAT:
            return [
                ...initState.filter((s) => s.id !== action.id),
                {
                    ...initState.find((s) => s.id === action.id),
                    key: action.key,
                    value: action.value,
                },
            ];
        case REPLACE_STATE:
            return action.replaceWith.stats || [];
        default:
            return initState;
    }
}

import { Action, ADD_STAT, EDIT_STAT, DELETE_STAT } from 'actions';
import * as uuid from 'uuid';

export function stats(initState = [
    {id: 'a-1', key: '', value: ''}
], action: Action<ADD_STAT | EDIT_STAT | DELETE_STAT>) {
    switch (action.type) {
        case ADD_STAT:
            return [
                ...initState,
                {
                    id: uuid(),
                    ...action.stat,
                }
            ];
        case DELETE_STAT:
            return initState.filter(s => s.id !== action.id);
        case EDIT_STAT:
            return [
                ...initState.filter(s => s.id !== action.id),
                {
                    ...initState.find(s => s.id === action.id),
                    key: action.key,
                    value: action.value,
                }
            ];
        default:
            return initState;
    }
}

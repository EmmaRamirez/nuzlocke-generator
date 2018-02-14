import { EDIT_RULE, ADD_RULE, DELETE_RULE, Action } from 'actions';

export function rules(state:string[] = [
    'Each Pokémon that faints is considered dead and must be released or permaboxed.',
    'You may the first Pokemon you encounter in an area',
    'All Pokémon must be nicknamed',
], action: Action<EDIT_RULE | ADD_RULE | DELETE_RULE>) {
    switch (action.type) {
        case ADD_RULE:
            return [...state, ''];
        case EDIT_RULE:
            const newState = state;
            newState[action.target] = action.rule;
            return newState;
        case DELETE_RULE:
            return state.filter((_, i) => i !== action.target);
        default:
            return state;
    }
}
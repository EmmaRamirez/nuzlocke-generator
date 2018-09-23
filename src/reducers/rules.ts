import { EDIT_RULE, ADD_RULE, DELETE_RULE, RESET_RULES, Action } from 'actions';

const initialState = [
    'Each Pokémon that faints is considered dead and must be released or permaboxed',
    'You can only catch the first Pokemon you encounter in an area',
    'All Pokémon must be nicknamed',
];

export function rules(
    state: string[] = initialState,
    action: Action<EDIT_RULE | ADD_RULE | DELETE_RULE | RESET_RULES>,
) {
    switch (action.type) {
        case ADD_RULE:
            return [...state, ''];
        case EDIT_RULE:
            return state.map((rule, index) => {
                if (index !== action.target) {
                    return rule;
                }
                return action.rule;
            });
        case DELETE_RULE:
            return state.filter((_, index) => index !== action.target);
        case RESET_RULES:
            return initialState;
        default:
            return state;
    }
}

import { editBox, EDIT_BOX, REPLACE_STATE, Action } from '../actions';

export function box(state = ['Team', 'Boxed', 'Dead'], action: Action<EDIT_BOX | REPLACE_STATE>) {
    switch (action.type) {
        case 'EDIT_BOX':
            const newState = state;
            newState[action.target] = action.name;
            return newState;
        case 'REPLACE_STATE':
            return action.replaceWith.box;
        default:
            return state;
    }
}

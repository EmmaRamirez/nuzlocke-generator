import { EDIT_CUSTOM_MOVE_MAP, Action, REPLACE_STATE } from 'actions';

const initialState = {

};

export function customMoveMap(state = initialState, action: Action<EDIT_CUSTOM_MOVE_MAP | REPLACE_STATE>) {
    switch (action.type) {
        case EDIT_CUSTOM_MOVE_MAP:
            const nState = state;
            const type = action.moveType;
            const name = action.moveName;

            const arr = nState[type] ? [...nState[type], name] : [name];
            nState[type] = arr;

            return nState;
        case REPLACE_STATE:
                return action.replaceWith.box;
        default:
            return state;
    }
}

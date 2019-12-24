import { EDIT_CUSTOM_MOVE_MAP, Action } from 'actions';

const initialState = {

};

export function customMoveMap(state = initialState, action: Action<EDIT_CUSTOM_MOVE_MAP>) {
    switch (action.type) {
        case EDIT_CUSTOM_MOVE_MAP:
            const nState = state;
            const type = action.moveType;
            const name = action.moveName;

            const arr = nState[type] ? [...nState[type], name] : [name];
            nState[type] = arr;

            return nState;
        default:
            return state;
    }
}

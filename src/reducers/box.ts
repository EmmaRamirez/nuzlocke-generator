import { editBox, EDIT_BOX, Action } from '../actions';

export function box(state = ['Team', 'Boxed', 'Dead'], action:Action<EDIT_BOX>) {
  switch (action.type) {
    case 'EDIT_BOX':
      const newState = state;
      newState[action.target] = action.name;
      return newState;
    default:
      return state;
  }
}
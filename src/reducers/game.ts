import { Action, EDIT_GAME } from '../actions';

export function game(state = {}, action:Action<EDIT_GAME>) {
  switch (action.type) {
    case 'EDIT_GAME':
      return { ...state, ...action.edit };
    default:
      return state;
  }
}
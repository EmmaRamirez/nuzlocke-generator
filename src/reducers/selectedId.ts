import {
  Action,
  SELECT_POKEMON
} from '../actions';

export function selectedId(state = '', action) {
  switch (action.type) {
    case 'SELECT_POKEMON':
      return action.id;
    default:
      return state;
  }
}
import { SAVE_NUZLOCKE } from '../actions';

export function nuzlocke(state = {}, action:any) {
  switch (action.type) {
    case 'SAVE_NUZLOCKE':
      return { ...state, ...action };
    default:
      return state;
  }
}
import { Action, EDIT_TRAINER, REPLACE_STATE } from '../actions';

export function trainer(state = { badges: [] }, action: Action<EDIT_TRAINER | REPLACE_STATE>) {
  switch (action.type) {
    case EDIT_TRAINER:
      return { ...state, ...action.edits };
    case REPLACE_STATE:
      return action.replaceWith.trainer;
    default:
      return state;
  }
}

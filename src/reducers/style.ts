import { Action, EDIT_STYLE, REPLACE_STATE } from 'actions';
import { styleDefaults } from 'utils';

export function style(state = styleDefaults, action: Action<EDIT_STYLE | REPLACE_STATE>) {
  switch (action.type) {
    case EDIT_STYLE:
      return { ...state, ...action.edits };
    case REPLACE_STATE:
      return action.replaceWith.style;
    default:
      return state;
  }
}

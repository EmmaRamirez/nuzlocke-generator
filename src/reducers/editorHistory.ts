import {
  Action,
  REDO_EDITOR_HISTORY,
  UNDO_EDITOR_HISTORY,
  UPDATE_EDITOR_HISTORY,
  REPLACE_STATE,
} from 'actions';
import { last, take } from 'ramda';

export interface History<T> {
  past: any[];
  present?: T;
  future: any[];
  lastRevisionType: 'undo' | 'redo' | 'update' | 'load';
}

const initial: History<any> = {
  past: [],
  present: undefined,
  future: [],
  lastRevisionType: 'update',
};

export function editorHistory(
  state: History<any> = initial,
  action: Action<UNDO_EDITOR_HISTORY | UPDATE_EDITOR_HISTORY | REDO_EDITOR_HISTORY | REPLACE_STATE>
): History<any> {
  switch (action.type) {
    case UPDATE_EDITOR_HISTORY: {
      const { present, future, past } = state;

      if (action.present == null) {
        return state;
      }

      return {
        past: present == null ? past : [...take(50, past), present],
        present: action.present,
        // reset the future so we can't create a forked path
        future: [],
        lastRevisionType: 'update',
      };
    }

    case UNDO_EDITOR_HISTORY: {
      const undo = (): History<any> => {
        const { past, present, future } = state;

        const newPast = past.slice(0, past.length - 1);

        return {
          past: newPast,
          present: action.present,
          future: [present, ...future],
          lastRevisionType: 'undo',
        };
      };

      return undo();
    }

    case REDO_EDITOR_HISTORY: {
      const redo = (): History<any> => {
        const { past, present, future } = state;

        const next = future[0];
        const newFuture = future.slice(1);

        return {
          past: [...past, present],
          present: action.present,
          future: newFuture,
          lastRevisionType: 'redo',
        };
      };

      return redo();
    }

    // Return initial state when entire state tree gets replaced
    case REPLACE_STATE:
      return initial;

    default:
      return state;
  }
}

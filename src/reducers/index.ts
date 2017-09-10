import { applyMiddleware, combineReducers } from 'redux';
import { saveNuzlocke } from './saveNuzlocke';

export const appReducers = combineReducers({
  saveNuzlocke
});

export { saveNuzlocke } from './saveNuzlocke';
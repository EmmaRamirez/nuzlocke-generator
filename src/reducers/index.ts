import { applyMiddleware, combineReducers } from 'redux';
import { nuzlocke } from './nuzlocke';

export const appReducers = combineReducers({
  nuzlocke
});

export { nuzlocke } from './nuzlocke';
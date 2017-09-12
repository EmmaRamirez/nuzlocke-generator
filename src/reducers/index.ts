import { applyMiddleware, combineReducers } from 'redux';
import { nuzlocke } from './nuzlocke';
import { pokemon } from './pokemon';

export const appReducers = combineReducers({
  nuzlocke,
  pokemon
});

export { nuzlocke } from './nuzlocke';
export { pokemon } from './pokemon';
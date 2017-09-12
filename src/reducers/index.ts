import { applyMiddleware, combineReducers } from 'redux';
import { nuzlocke } from './nuzlocke';
import { pokemon } from './pokemon';
import { box } from './box';
import { selectedId } from './selectedId';

// export const appReducers = combineReducers({
//   nuzlocke,
//   pokemon
// });

export const appReducers = combineReducers({
  nuzlocke,
  pokemon,
  box,
  selectedId
});

export { nuzlocke } from './nuzlocke';
export { pokemon } from './pokemon';
import { applyMiddleware, combineReducers } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerReducer } from 'react-router-redux';

import { nuzlocke } from './nuzlocke';
import { pokemon } from './pokemon';
import { box } from './box';
import { confirmation } from './confirmation';
import { selectedId } from './selectedId';
import { game } from './game';

// export const appReducers = combineReducers({
//   nuzlocke,
//   pokemon
// });

export const appReducers = combineReducers({
  nuzlocke,
  pokemon,
  box,
  selectedId,
  confirmation,
  game,
  router: routerReducer
});

export { nuzlocke } from './nuzlocke';
export { pokemon } from './pokemon';
export { confirmation } from './confirmation';
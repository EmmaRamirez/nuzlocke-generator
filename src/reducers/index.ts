import { applyMiddleware, combineReducers } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerReducer } from 'react-router-redux';

import { nuzlocke } from './nuzlocke';
import { pokemon } from './pokemon';
import { box } from './box';
import { confirmation } from './confirmation';
import { selectedId } from './selectedId';
import { game } from './game';
import { trainer } from './trainer';
import { history } from './history';
import { style } from './style';
import { sawRelease } from './sawRelease';
import { editor } from './editor';

// export const appReducers = combineReducers({
//   nuzlocke,
//   pokemon
// });

export const reducers = {
    box,
    confirmation,
    game,
    nuzlocke,
    pokemon,
    editor,
    selectedId,
    sawRelease,
    trainer,
    history,
    style,
    router: routerReducer,
};

export const appReducers = combineReducers(reducers);

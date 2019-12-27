import { applyMiddleware, combineReducers } from 'redux';
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
import { rules } from './rules';
import { checkpoints } from './checkpoints';
import { customMoveMap } from './customMoveMap';

export const reducers = {
    box,
    checkpoints,
    confirmation,
    customMoveMap,
    game,
    nuzlocke,
    pokemon,
    editor,
    selectedId,
    sawRelease,
    trainer,
    history,
    rules,
    style,
    router: routerReducer,
};

export const appReducers = combineReducers(reducers);

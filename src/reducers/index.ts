import { combineReducers } from 'redux';

import { nuzlockes } from './nuzlocke';
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
import { stats } from './stats';
import { customTypes } from './customTypes';

export const reducers = {
    box,
    checkpoints,
    confirmation,
    customMoveMap,
    customTypes,
    game,
    nuzlockes,
    pokemon,
    editor,
    selectedId,
    sawRelease,
    trainer,
    history,
    rules,
    stats,
    style,
};

export const appReducers = combineReducers(reducers);

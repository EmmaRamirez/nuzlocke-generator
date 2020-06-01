import { applyMiddleware, createStore, Middleware } from 'redux';
import { createLogger } from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import { persistCombineReducers, persistStore, createMigrate } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { reducers } from '../reducers';
import { State } from 'state';
import { Store } from 'react-redux';

const pkg = require('../../package.json');

const migrations = {
    '0.0.6-beta': (state) => {
        return {
            ...state,
            box: undefined,
        };
    },
    '0.0.11-beta': (state) => {
        return {
            ...state,
            trainer: {
                ...state.trainer,
                badges: [],
            },
        };
    },
    '1.1.0': (state) => ({
        ...state,
        customMoveMap: [],
    }),
    '1.1.1': (state) => ({
        ...state,
        customMoveMap: [],
    }),
    '1.1.2': (state) => ({
        ...state,
        customMoveMap: [],
    }),
    '1.1.3': (state) => ({
        ...state,
        customMoveMap: [],
    }),
};

const config = {
    key: 'root',
    blacklist: ['router'],
    storage,
    version: pkg.version,
    migrations: createMigrate(migrations, { debug: false }),
};

export const history = createHistory();

export const persistReducers = persistCombineReducers(config, reducers);

export const middlewares: Middleware[] = [];

if (process.env.NODE_ENV === 'test') {
} else {
    const loggerMiddleware = createLogger();
    middlewares.push(loggerMiddleware);
}

export const store: Store<State> = createStore(persistReducers, applyMiddleware(...middlewares));

export const persistor = persistStore(store, null);

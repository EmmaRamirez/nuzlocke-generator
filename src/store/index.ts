import { applyMiddleware, createStore, Middleware } from 'redux';
import { createLogger } from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import { persistCombineReducers, persistStore, createMigrate, MigrationManifest } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { version } from 'package';
import { reducers } from '../reducers';
import { State } from 'state';

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
    '1.1.4': (state) => ({
        ...state,
        customMoveMap: [],
    }),
    '1.6.0': (state: State) => ({
        ...state,
        // in 1.6.0, we allowed boxes to be reorganized with drag & drop
        // The problem was that a long standing data inaccuracy existed in the reducer
        // whereby the position of Champs & Dead were the same
        // While this actually isn't that dramatic (it doesn't break the app)
        // It's better to be safe than sorry, so this changes the position of Champs
        // Assuming there is only 1 champs with the default length
        box: state.box.map((box, index) => {
            return {
                ...box,
                position: index,
                id: index,
            };
        }),
    }),
    '1.7.1': (state: State) => ({
        ...state,
        style: {
            ...state.style,
            statsOptions: {
                ...state.style.statsOptions,
                averageLevelDetailed: false,
            },
        },
    }),
    '1.15.1': (state: State) => ({
        ...state,
        excludedAreas: [],
    }),
    '1.16.0': (state: State) => ({
        ...state,
        customAreas: [],
    }),
};

const config = {
    key: 'root',
    blacklist: ['router', 'editorHistory'],
    storage,
    version,
    migrations: createMigrate(migrations as unknown as MigrationManifest, { debug: true }),
};

export const history = createHistory();

export const persistReducers = persistCombineReducers(config, reducers as any);

export const middlewares: Middleware[] = [];

if (process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'production') {
} else {
    const loggerMiddleware = createLogger();
    middlewares.push(loggerMiddleware as any);
}

export const store = createStore(persistReducers, applyMiddleware(...middlewares));

export const persistor = persistStore(store, undefined);

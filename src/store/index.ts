import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import { persistCombineReducers, persistStore, createMigrate } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { reducers } from '../reducers';
import { rootSaga } from '../sagas';

const pkg = require('../../package.json');

const migrations = {
    '0.0.6-beta': state => {
        return {
            ...state,
            box: undefined,
        };
    },
};

const config = {
    key: 'root',
    blacklist: ['router'],
    storage,
    version: pkg.version,
    migrations: createMigrate(migrations, { debug: false }),
};

const history = createHistory();

const persistReducers = persistCombineReducers(config, reducers);

const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();
const routerMiddleware = createRouterMiddleware(history);

export const store = createStore(
    persistReducers,
    applyMiddleware(loggerMiddleware, sagaMiddleware, routerMiddleware),
);

export const persistor = persistStore(store, null, () => store.getState());

sagaMiddleware.run(rootSaga);

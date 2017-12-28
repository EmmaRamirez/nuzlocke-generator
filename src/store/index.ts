import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import { persistCombineReducers, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { reducers } from '../reducers';
import { rootSaga } from '../sagas';

const config = {
  key: 'root',
  blacklist: ['router'],
  storage
};

const history = createHistory();

const persistReducers = persistCombineReducers(config, reducers);

const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();
const routerMiddleware = createRouterMiddleware(history);

export const store = createStore(
  persistReducers,
  applyMiddleware(
    loggerMiddleware,
    sagaMiddleware,
    routerMiddleware
  )
);

export const persistor = persistStore(
  store,
  null,
  () => store.getState()
);

sagaMiddleware.run(rootSaga);
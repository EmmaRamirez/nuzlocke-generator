import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';

import { appReducers } from '../reducers';
import { rootSaga } from '../sagas';

const history = createHistory();

const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();
const routerMiddleware = createRouterMiddleware(history);

export const store = createStore(
  appReducers,
  applyMiddleware(
    loggerMiddleware,
    sagaMiddleware,
    routerMiddleware
  )
);

sagaMiddleware.run(rootSaga);
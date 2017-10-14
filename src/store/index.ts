import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { appReducers } from '../reducers';
import { rootSaga } from '../sagas';



const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  appReducers,
  applyMiddleware(
    loggerMiddleware,
    sagaMiddleware
  )
);

sagaMiddleware.run(rootSaga);
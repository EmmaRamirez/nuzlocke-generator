import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { appReducers } from '../reducers';

const loggerMiddleware = createLogger();

export function configureStore() {
  const loggerMiddleware = createLogger();
  return {
    ...createStore(appReducers, applyMiddleware(
      loggerMiddleware,
    ))
  };
}
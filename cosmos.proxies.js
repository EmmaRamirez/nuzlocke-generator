import createFetchProxy from 'react-cosmos-fetch-proxy';
import createReduxProxy from 'react-cosmos-redux-proxy';
import createRouterProxy from 'react-cosmos-router-proxy';
import createLocalStorageProxy from 'react-cosmos-localstorage-proxy';
import { createStore, middlewares, persistReducers } from './src/store';
import { applyMiddleware } from 'redux';

// const ReduxProxy = createReduxProxy({
//     createStore: createStore(persistReducers, applyMiddleware(...middlewares
//     ))
// });

export default [
    createLocalStorageProxy(),
    createFetchProxy(),
    // ReduxProxy,
    createRouterProxy()
];

import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { App } from './components/App';
import { appReducers } from './reducers';
import { configureStore } from './store';

require('./components/Shared/styles/base.styl');
require('../node_modules/@blueprintjs/core/dist/blueprint.css');

const store = configureStore();
const mountNode = document.getElementById('app');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  mountNode
);

store.subscribe(() => {
  console.table(store.getState());
});
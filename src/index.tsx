import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { App } from './components/App';
import { appReducers } from './reducers';
import { configureStore } from './store';

require('./components/Shared/styles/base.styl');

const store = configureStore();
const mountNode = document.getElementById('app');

render(
  <App />,
  mountNode
);

store.subscribe(() => {
  console.log(store.getState());
});
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import { App } from './components/App';
import { Admin } from './components/Admin';
import { appReducers } from './reducers';
import { store } from './store';

require('./components/Shared/styles/base.styl');
require('../node_modules/@blueprintjs/core/dist/blueprint.css');

const mountNode = document.getElementById('app');
const history = createHistory();

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route exact path='/' component={App} />
    </ConnectedRouter>
  </Provider>,
  mountNode
);

store.subscribe(() => {
  console.table(store.getState());
});
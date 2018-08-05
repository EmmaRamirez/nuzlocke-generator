import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import * as Rollbar from 'rollbar';
import { injectGlobal } from 'emotion';

import { App } from './components/App';
import { store, persistor } from './store';

import 'assets/pokemon-font.css';

import 'components/Shared/styles/base.styl';

import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/table/lib/css/table.css';

injectGlobal`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body {
        font-family: 'Helvetica';
    }

    .app {
        display: flex;
        height: 100%;
        width: 100%;
    }
`;

const rollbarConfig = new Rollbar({
    accessToken: '357eab6297524e6facb1c48b0403d869',
    captureUncaught: true,
    payload: {
        context: store
    },
    autoInstrument: {
        network: false,
        log: false,
        dom: true,
        navigation: false,
        connectivity: true,
    },
    maxItems: 20,
    captureIp: false,
    enabled: window.location.pathname.includes('localhost') ? false : true,
});

Rollbar.init(rollbarConfig as any);


const mountNode = document.getElementById('app');
const history = createHistory();

render(
    <Provider store={store}>
        <PersistGate loading={<div>Loading...</div>} onBeforeLift={null} persistor={persistor}>
            <ConnectedRouter history={history}>
                <Route exact path='/' component={App} />
            </ConnectedRouter>
        </PersistGate>
    </Provider>,
    mountNode,
);

store.subscribe(() => {
    if ((store.getState() as any).style.editorDarkMode) {
        document.body.style.background = '#111';
    } else {
        document.body.style.background = '#fff';
    }
});

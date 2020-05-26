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
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { isLocal } from 'utils';


injectGlobal`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body {
        background: #fff;
        font-family: 'Helvetica';
    }

    .app {
        display: flex;
        height: 100%;
        width: 100%;
    }

    .opacity-medium {
        oapcity: 0.5;
    }
`;

const rollbarConfig = new Rollbar({
    accessToken: '357eab6297524e6facb1c48b0403d869',
    captureUncaught: true,
    payload: {
        context: store,
        environment: 'production',
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
    enabled: isLocal() ? false : true,
});

Rollbar.init(rollbarConfig as any);

const mountNode = document.getElementById('app');
const history = createHistory();

render(
    <Provider store={store}>
        {process.env.NODE_ENV !== 'test' ? (
            <PersistGate loading={<div>Loading...</div>} onBeforeLift={null} persistor={persistor}>
                <DragDropContextProvider backend={HTML5Backend}>
                    <App />
                </DragDropContextProvider>
            </PersistGate>
        ) : (
            <DragDropContextProvider backend={HTML5Backend}>
                <App />
            </DragDropContextProvider>
        )}
    </Provider>,
    mountNode,
);

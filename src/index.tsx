import * as React from 'react';
import { render } from 'react-dom';

const Rollbar = require('rollbar');
import { injectGlobal } from 'emotion';

import { App } from './components/App';
import { store, persistor } from './store';

import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/table/lib/css/table.css';
import 'tailwindcss/dist/base.css';
import 'tailwindcss/dist/components.css';
import 'tailwindcss/dist/utilities.css';
import 'normalize.css/normalize.css';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { isLocal } from 'utils';
import { Providers } from 'utils/Providers';

injectGlobal`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
    }

    body {
        background: #fff;
        font-family: 'Arial';
    }

    .app {
        display: flex;
        height: 100vh;
        min-width: 100%;
        overflow-y: hidden;
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

render(
    <Providers><App /></Providers>,
    mountNode,
);

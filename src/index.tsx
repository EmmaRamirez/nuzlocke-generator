import * as React from 'react';
import { injectGlobal } from 'emotion';


import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/table/lib/css/table.css';
import 'tailwindcss/dist/base.min.css';
import 'tailwindcss/dist/components.min.css';
import 'tailwindcss/dist/utilities.min.css';
import 'normalize.css/normalize.css';

import { isLocal } from 'utils';
import { ErrorBoundary } from 'components';

async function getRollbar() {
    // @ts-expect-error
    const {default: Rollbar} = await import('rollbar');

    const rollbarConfig = new Rollbar({
        accessToken: '357eab6297524e6facb1c48b0403d869',
        captureUncaught: true,
        payload: {
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
}

getRollbar().then(res => res);

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


const mountNode = document.getElementById('app');

async function createRender() {
    const { render } = await import('react-dom');
    const { Provider } = await import('react-redux');

    const { DndProvider  } = await import('react-dnd');
    const { HTML5Backend  } = await import('react-dnd-html5-backend');
    const { PersistGate } = await import('redux-persist/es/integration/react');
    const { store, persistor } = await import('./store');

    const App = React.lazy(() =>
        import('components/App').then((res) => ({ default: res.App })),
    );

    render(
        <Provider store={store}>
            {process.env.NODE_ENV !== 'test' ? (
                <PersistGate loading={<div>Loading...</div>} onBeforeLift={null} persistor={persistor}>
                    <DndProvider  backend={HTML5Backend}>
                        <ErrorBoundary>
                            <React.Suspense fallback={'Loading App...'}>
                                <App />
                            </React.Suspense>
                        </ErrorBoundary>
                    </DndProvider>
                </PersistGate>
            ) : (
                <DndProvider  backend={HTML5Backend}>
                    <ErrorBoundary>
                        <React.Suspense fallback={'Loading App...'}>
                            <App />
                        </React.Suspense>
                    </ErrorBoundary>
                </DndProvider>
            )}
        </Provider>,
        mountNode,
    );
}

createRender().then(res => res);

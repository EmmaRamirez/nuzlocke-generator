import * as React from 'react';
import { injectGlobal } from 'emotion';


import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/table/lib/css/table.css';
// import 'tailwindcss/dist/base.min.css';
// import 'tailwindcss/dist/components.min.css';
// import 'tailwindcss/dist/utilities.min.css';
import 'normalize.css/normalize.css';

import { isLocal } from 'utils';
import { ErrorBoundary } from 'components';

(window as any).global = window;
// @ts-ignore
window.Buffer = window.Buffer || require('buffer').Buffer;
// @ts-ignore
window.path = window.path || require('path').path;

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
        opacity: 0.5;
    }

    .flex { display: flex; }
    .p-6 { padding: 6rem; }
    .center-text { text-align: center; }
    .font-bold { font-weight: bold; }
    .items-center { align-items: center; }
    .content-center { align-content: center; }
    .justify-between { justify-content: space-between; }
    .m-1 { margin: 0.25rem; }
    .mb-2 { margin-bottom: 0.5rem; }
    .cursor-pointer { cursor: pointer; }
    .inline-flex { display: inline-flex !important; }
    .full-width { width: 100%; }
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
        /* @ts-expect-error stupid typing */
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

import * as React from 'react';
import { Provider } from 'react-redux';
let PersistGate;
if (process.env.NODE_ENV !== 'test') {
    PersistGate = require('redux-persist/es/integration/react');
}
import { store, persistor } from 'store';

import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

export const Providers = ({children}: {children?: React.ReactNode}) => (<Provider store={store}>
    {process.env.NODE_ENV !== 'test' ? (
        <PersistGate loading={<div>Loading...</div>} onBeforeLift={null} persistor={persistor}>
            <DragDropContextProvider backend={HTML5Backend}>
                {children}
            </DragDropContextProvider>
        </PersistGate>
    ) : (
        <DragDropContextProvider backend={HTML5Backend}>
            {children}
        </DragDropContextProvider>
    )}
</Provider>);


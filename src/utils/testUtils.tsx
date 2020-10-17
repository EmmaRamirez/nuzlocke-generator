// test-utils.js
import * as React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store, persistor } from 'store';

const Providers: any = ({ children }) => <Provider store={store}>{children}</Provider>;

const customRender = (ui: Parameters<typeof render>[0], options?: Parameters<typeof render>[1]) =>
    render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };

import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from 'store';

export const Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;

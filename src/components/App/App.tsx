import * as React from 'react';
import { connect } from 'react-redux';

import * as Loadable from 'react-loadable';

import './app.css';
import { Hotkeys } from 'components/Hotkeys';
import { State } from 'state';

export interface AppProps {
    style: State['style'];
}

function Loading() {
    return <div>Loading...</div>;
}

const Editor = Loadable({
    loader: () => import('components/Editor'),
    loading: Loading,
    render(loaded) {
        return <loaded.Editor />;
    },
});

const Result = Loadable({
    loader: () => import('components/Result'),
    loading: Loading,
    render(loaded) {
        return <loaded.Result />;
    },
});

export function AppBase({ style }: AppProps) {
    return (
        <div
            className="app"
            role="main"
            style={{
                background: style.editorDarkMode ? '#111' : '#fff',
            }}>
            <Hotkeys />
            <Editor />
            <Result />
        </div>
    );
}

export const App = connect((state: Pick<State, keyof State>) => ({
    style: state.style,
}))(AppBase);

import * as React from 'react';
import { connect } from 'react-redux';

import Loadable from 'react-loadable';

import './app.css';
import { Hotkeys } from 'components/Hotkeys';
import { State } from 'state';
import { version1116 } from 'actions';
import { version } from 'process';

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

export class UpdaterBase extends React.PureComponent<{customMoveMap: State['customMoveMap'], version1116: typeof version1116 }> {
    public componentDidMount() {
        if (!Array.isArray(this.props.customMoveMap)) {
            this.props.version1116();
        }
    }
    public render() {
        return <div />;
    };
}

export const Updater = connect((state: State) => ({ customMoveMap: state.customMoveMap }), { version1116 })(UpdaterBase);

export class AppBase extends React.PureComponent<AppProps> {
    public constructor(props: AppProps) {
        super(props);
    }

    public render() {
        return (
            <div
                className="app"
                role="main"
                style={{
                    background: this.props.style.editorDarkMode ? '#111' : '#fff',
                }}>
                <Updater />
                <Hotkeys />
                <Editor />
                <Result />
            </div>
        );
    }
}

export const App = connect(
    (state: Pick<State, keyof State>) => ({ style: state.style }),
)(AppBase);

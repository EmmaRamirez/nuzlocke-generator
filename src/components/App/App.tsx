import * as React from 'react';
import { connect } from 'react-redux';

import { seeRelease, editRule } from 'actions';
import * as Loadable from 'react-loadable';


import './app.styl';

export interface AppProps {
    style: any;
    rules: any;
}

function Loading () {
    return <div>Loading...</div>;
}

const Editor = Loadable({
    loader: () => import('components/Editor'),
    loading: Loading,
    render(loaded) {
        return <loaded.Editor />;
    }
});

const Result = Loadable({
    loader: () => import('components/Result'),
    loading: Loading,
    render(loaded) {
        return <loaded.Result />;
    }
});

const Hotkeys = Loadable({
    loader: () => import('components/Hotkeys'),
    loading: Loading,
    render(loaded) {
        return <loaded.Hokeys />;
    }
});

export class AppBase extends React.PureComponent<AppProps> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div className='app' role='main'>
                <Hotkeys />
                <Editor />
                <Result />
            </div>
        );
    }
}

export const App = connect(
    (state: any) => ({
        style: state.style,
        rules: state.rules,
    }),
    {
    },
)(AppBase);

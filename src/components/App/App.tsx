import * as React from 'react';
import { connect } from 'react-redux';

import { seeRelease, editRule } from 'actions';
import * as Loadable from 'react-loadable';


import './app.styl';
import { Hotkeys } from 'components/Hotkeys';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

export interface AppProps {
    style: any;
    rules: any;
    disableHotkeys?: boolean;
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

@DragDropContext(HTML5Backend)
export class AppBase extends React.PureComponent<AppProps> {
    constructor(props: any) {
        super(props);
    }

    public static defaultProps = {
        disableHotkeys: false,
    };

    public render() {
        return (
            <div className='app' role='main'>
                { this.props.disableHotkeys ? null : <Hotkeys /> }
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

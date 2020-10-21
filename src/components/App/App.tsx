import * as React from 'react';
import { connect } from 'react-redux';

import Loadable from 'react-loadable';

import './app.css';
import { Hotkeys } from 'components/Hotkeys';
import { State } from 'state';
import { updateEditorHistory } from 'actions';
import { feature } from 'utils';
import { isEqual } from 'lodash';
import { omit } from 'ramda';
import { History } from 'reducers/editorHistory';
import { Drawer } from '@blueprintjs/core';
import { ImagesDrawer } from 'components/Shared/ImagesDrawer';
import { ErrorBoundary } from 'components';
import { BugReporter } from 'components/BugReporter';

export interface AppProps {
    style: State['style'];
    view: State['view'];
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

export class UpdaterBase extends React.Component<{
    present: Omit<State, 'editorHistory'>;
    updateEditorHistory: updateEditorHistory;
    lrt: History<any>['lastRevisionType'];
}> {
    public componentDidMount() {
        console.log('Called component did mount');
        // initial history record
        this.props.updateEditorHistory(this.props.present);
    }

    // eslint-disable-next-line camelcase
    public UNSAFE_componentWillReceiveProps(prev) {
        if (
            (prev.lrt === 'update') &&
            this.props.present != null &&
            this.props.present != null &&
            !isEqual(this.props.present, prev.present)
        ) {
            console.log(this.props.lrt, prev.lrt);
            this.props.updateEditorHistory(prev.present);
        }
    }

    public render() {
        return <div />;
    }
}

export const Updater = connect(
    (state: State) => ({
        present: omit(['editorHistory'], state),
        lrt: state?.editorHistory?.lastRevisionType,
    }),
    { updateEditorHistory },
    null,
    { pure: false },
)(UpdaterBase);

export class AppBase extends React.PureComponent<AppProps, {result2?: boolean}> {
    public constructor(props: AppProps) {
        super(props);
        this.state = {result2: false};
    }

    public componentDidUpdate() {
        if (feature.resultv2) {
            // TOP SECRET
            if (this.props.style.customCSS.includes('resultv2')) {
                this.setState({result2: true});
            } else {
                this.setState({result2: false});
            }
        }
    }

    public render() {
        const {style, view} = this.props;
        console.log('features', feature);

        const Result = Loadable({
            loader: () =>
                this.state.result2
                    ? import('components/Result/Result2')
                    : import('components/Result/Result'),
            loading: Loading,
            render(loaded) {
                return <loaded.Result />;
            },
        });

        return (
            <ErrorBoundary errorMessage={<div className='p-6 center-text'>
                <h2>There was a problem retrieving your nuzlocke data.</h2>
                <p>Please consider submitting a bug report.</p>

                <BugReporter defaultOpen />
            </div>}>
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
                    <Drawer
                        isOpen={view?.dialogs?.imageUploader}
                        size={Drawer.SIZE_STANDARD}
                    >
                        <ImagesDrawer />
                    </Drawer>
                </div>
            </ErrorBoundary>
        );
    }
}

export const App = connect(
    (state: Pick<State, keyof State>) => ({
        style: state.style,
        view: state.view,
    })
)(AppBase);

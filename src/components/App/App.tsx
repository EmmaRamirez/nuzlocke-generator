import * as React from 'react';
import { connect } from 'react-redux';

import Loadable from 'react-loadable';

import './app.css';
import { Hotkeys } from 'components/Hotkeys';
import { State } from 'state';
import { updateEditorHistory, version1116 } from 'actions';
import { feature } from 'utils';
import { deepEqual } from 'assert';
import { deepCompareKeys } from '@blueprintjs/core/lib/esm/common/utils';
import { isEqual } from 'lodash';
import { omit } from 'ramda';
import { History } from 'reducers/editorHistory';
import { Drawer } from '@blueprintjs/core';
import { ImagesDrawer } from 'components/Shared/ImagesDrawer';

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
            prev.lrt === 'update' &&
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

export class AppBase extends React.PureComponent<AppProps> {
    public constructor(props: AppProps) {
        super(props);
    }

    public render() {
        console.log('features', feature);

        const Result = Loadable({
            loader: () =>
                this.props.style.editorDarkMode
                    ? import('components/Result/Result2')
                    : import('components/Result/Result'),
            loading: Loading,
            render(loaded) {
                return <loaded.Result />;
            },
        });

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
                {feature.imageUploads && <Drawer
                    isOpen={true}
                    size={Drawer.SIZE_STANDARD}
                >
                    <ImagesDrawer />
                </Drawer>}
            </div>
        );
    }
}

export const App = connect((state: Pick<State, keyof State>) => ({ style: state.style }))(AppBase);

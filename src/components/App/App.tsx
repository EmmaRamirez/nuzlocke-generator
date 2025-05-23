import * as React from 'react';
import { connect } from 'react-redux';

import { State } from 'state';
import { updateEditorHistory } from 'actions';
import { feature, isLocal } from 'utils';
import { History } from 'reducers/editorHistory';
import { ErrorBoundary } from 'components';
import { Button } from '@blueprintjs/core';
import { updaterSelector, appSelector } from 'selectors';
import { Skeleton } from 'components/Shared';
import { isEqual } from 'utils/isEqual';

import './app.css';

export interface AppProps {
  style: State['style'];
  view: State['view'];
  editor: State['editor'];
}

const Editor = React.lazy(() =>
  import('components/Editor').then((res) => ({ default: res.Editor }))
);

const Result = React.lazy(() =>
  import('components/Result/Result').then((res) => ({ default: res.Result }))
);

const Result2 = React.lazy(() =>
  import('components/Result/Result2').then((res) => ({ default: res.Result }))
);

const ImagesDrawer = React.lazy(() =>
  import('components/Shared/ImagesDrawer').then((res) => ({ default: res.ImagesDrawer }))
);

const BugReporter = React.lazy(() =>
  import('components/BugReporter').then((res) => ({ default: res.BugReporter }))
);

const Hotkeys = React.lazy(() =>
  import('components/Hotkeys').then((res) => ({ default: res.Hotkeys }))
);

export class UpdaterBase extends React.Component<{
  present: Omit<State, 'editorHistory'>;
  updateEditorHistory: updateEditorHistory;
  lrt: History<any>['lastRevisionType'];
}> {
  public componentDidMount() {
    // initial history record
    this.props.updateEditorHistory(this.props.present);
  }

  public UNSAFE_componentWillReceiveProps(prev) {
    if (
      prev.lrt === 'update' &&
      this.props.present != null &&
      this.props.present != null &&
      !isEqual(this.props.present, prev.present)
    ) {
      const t0 = performance.now();
      this.props.updateEditorHistory(prev.present);
      const t1 = performance.now();
      console.log(`Updated history in ${t1 - t0}ms`);
    }
  }

  public render() {
    return <div />;
  }
}

export const Updater = connect(updaterSelector, { updateEditorHistory }, null, { pure: false })(
  UpdaterBase
);

export class AppBase extends React.Component<AppProps, { result2?: boolean }> {
  public constructor(props: AppProps) {
    super(props);
    this.state = { result2: false };
  }

  public componentDidMount() {
    if (feature.resultv2) {
      // TOP SECRET
      if (this.props.style.customCSS.includes('resultv2')) {
        this.setState({ result2: true });
      } else {
        this.setState({ result2: false });
      }
    }
  }

  public render() {
    const { style, view, editor } = this.props;
    const { result2 } = this.state;
    const isDarkMode = style.editorDarkMode;
    console.log('features', feature);

    const UpdaterComponent = !editor.editorHistoryDisabled && <Updater />;

    return (
      <ErrorBoundary
        errorMessage={
          <div className="p-6 center-text">
            <h2>There was a problem retrieving your nuzlocke data.</h2>
            <p>Please consider submitting a bug report.</p>

            <React.Suspense fallback={'Loading Bug Reporter...'}>
              <BugReporter defaultOpen />
            </React.Suspense>
          </div>
        }>
        <div
          data-testid="app"
          className="app"
          role="main"
          style={{
            background: this.props.style.editorDarkMode ? '#111' : '#fff',
          }}>
          {UpdaterComponent}
          <ErrorBoundary key={1}>
            <React.Suspense fallback={Skeleton}>
              <Hotkeys />
            </React.Suspense>
          </ErrorBoundary>
          <ErrorBoundary key={2}>
            <React.Suspense fallback={Skeleton}>
              <Editor />
            </React.Suspense>
          </ErrorBoundary>
          {result2 ? (
            <ErrorBoundary key={3}>
              <React.Suspense fallback={Skeleton}>
                <Result2 />
              </React.Suspense>
            </ErrorBoundary>
          ) : (
            <ErrorBoundary key={3}>
              <React.Suspense fallback={Skeleton}>
                <Result />
              </React.Suspense>
            </ErrorBoundary>
          )}

          {isLocal() && feature.resultv2 && (
            <Button
              style={{
                position: 'absolute',
                top: '0.5rem',
                right: '0.5rem',
                zIndex: 1000,
              }}
              onClick={(e) => this.setState({ result2: !result2 })}>
              Use Result v2
            </Button>
          )}

          <ErrorBoundary key={4}>
            <React.Suspense fallback={Skeleton}>
              <ImagesDrawer />
            </React.Suspense>
          </ErrorBoundary>
        </div>
      </ErrorBoundary>
    );
  }
}

export const App = connect(appSelector)(AppBase);

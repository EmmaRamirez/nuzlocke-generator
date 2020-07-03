import * as React from 'react';
import { connect } from 'react-redux';
import './editor.css';
import { css, cx } from 'emotion';
import { State } from 'state';
import { Classes, Spinner } from '@blueprintjs/core';
import { ErrorBoundary } from 'components/Shared';

const PokemonEditor = React.lazy(() => import('components/PokemonEditor').then(res => ({ default: res.PokemonEditor })));
const NuzlockeSaveControls = React.lazy(() => import('components/GameEditor/NuzlockeSaveControls').then(res => ({ default: res.NuzlockeSaveControls })));
const GameEditor = React.lazy(() => import('components/GameEditor').then(res => ({ default: res.GameEditor })));
const TrainerEditor = React.lazy(() => import('components/TrainerEditor').then(res => ({ default: res.TrainerEditor })));
const HotkeysEditor = React.lazy(() => import('components/HotkeysEditor').then(res => ({ default: res.HotkeysEditor })));
const BugReporter = React.lazy(() => import('components/BugReporter').then(res => ({ default: res.BugReporter })));
const StatsEditor = React.lazy(() => import('components/StatsEditor').then(res => ({ default: res.StatsEditor })));
const StyleEditor = React.lazy(() => import('components/StyleEditor').then(res => ({ default: res.StyleEditor })));
const DataEditor = React.lazy(() => import('components/DataEditor').then(res => ({ default: res.DataEditor })));

const Skeleteon = <div style={{width: '100%', height: '100px'}} className='bp3-skeleton'></div>;

/**
 * The main editor interface.
 */
export class EditorBase extends React.Component<
{ editor: State['editor']; style: State['style'] },
{}
> {
    public constructor(props) {
        super(props);
    }

    public render() {
        const styles = {
            base: css`
                min-width: 30rem;
                max-width: 40rem;
                min-height: 100vh;
                padding: 0.25rem;
            `,
        };

        const minimized = this.props.editor.minimized;
        return (
            <div
                className={cx(
                    'editor',
                    styles.base,
                    this.props.style.editorDarkMode ? Classes.DARK : '',
                )}
                style={{
                    width: minimized ? '0%' : '33%',
                    marginLeft: minimized ? '-30rem' : '0',
                    background: this.props.style.editorDarkMode ? '#222' : '#fff',
                }}>
                {/* <ErrorBoundary>
                    <React.Suspense fallback={Skeleteon}>
                        <NuzlockeSaveControls />
                    </React.Suspense>
                </ErrorBoundary> */}
                <ErrorBoundary>
                    <React.Suspense fallback={Skeleteon}>
                        <GameEditor />
                    </React.Suspense>
                </ErrorBoundary>
                <ErrorBoundary>
                    <React.Suspense fallback={Skeleteon}>
                        <DataEditor />
                    </React.Suspense>
                </ErrorBoundary>
                <ErrorBoundary>
                    <React.Suspense fallback={Skeleteon}>
                        <TrainerEditor />
                    </React.Suspense>
                </ErrorBoundary>
                <ErrorBoundary>
                    <React.Suspense fallback={Skeleteon}>
                        <PokemonEditor />
                    </React.Suspense>
                </ErrorBoundary>
                <ErrorBoundary>
                    <React.Suspense fallback={Skeleteon}>
                        <StyleEditor />
                    </React.Suspense>
                </ErrorBoundary>
                <ErrorBoundary>
                    <React.Suspense fallback={Skeleteon}>
                        <StatsEditor />
                    </React.Suspense>
                </ErrorBoundary>
                <ErrorBoundary>
                    <React.Suspense fallback={Skeleteon}>
                        <HotkeysEditor />
                    </React.Suspense>
                </ErrorBoundary>
                <ErrorBoundary>
                    <React.Suspense fallback={Skeleteon}>
                        <BugReporter />
                    </React.Suspense>
                </ErrorBoundary>
            </div>
        );
    }
}

export const Editor = connect(
    (state: State) => ({
        editor: state.editor,
        style: state.style,
    }),
    null,
)(EditorBase as any);

import * as React from 'react';
import { connect } from 'react-redux';
import './editor.css';
import { css, cx } from 'emotion';
import { State } from 'state';
import { Button, ButtonGroup, Classes, Icon, Spinner } from '@blueprintjs/core';
import { ErrorBoundary } from 'components/Shared';
import { undoEditorHistory, updateEditorHistory, replaceState, redoEditorHistory } from 'actions';
import { last, omit } from 'ramda';
import { editorHistory } from 'reducers/editorHistory';
import { editor } from 'reducers/editor';

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
{ editor: State['editor']; style: State['style'], updateEditorHistory: updateEditorHistory, present: Omit<State, 'editorHistory'>, undoEditorHistory: undoEditorHistory, editorHistory: State['editorHistory'], replaceState: replaceState, redoEditorHistory: redoEditorHistory },
{}
> {
    public editorRef: React.RefObject<HTMLDivElement>;

    public constructor(props) {
        super(props);
        this.editorRef = React.createRef();
    }

    public kindToColor(kind) {
        if (kind === 'A') return '#6dc0ed';
        if (kind === 'E') return '#57eb7e';
        if (kind === 'D') return '#f25f5c';
        if (kind === 'N') return '#c871de';
        return '#f25f5c';
    }

    public render() {
        const {present,
            editorHistory,
            editor: {
                minimized,
            },
            style: { editorDarkMode }} = this.props;
        const styles = {
            base: css`
                min-width: 30rem;
                max-width: 40rem;
                min-height: 100vh;
                padding: 0.25rem;
                padding-top: 2.5rem;
                position: relative;
            `,
            historyControls: css`
                height: 2rem;
                left: 0;
                position: fixed;
                top: 0;
                z-index: 2;
                border-bottom: 1px solid;
            `,
            buttonGroup: css`
                width: 100%;
            `,
            kind: (kind) => css`
                background: ${this.kindToColor(kind)};
                width: 1.5rem;
                height: 1.5rem;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
                color: rgba(0, 0, 0, 0.6);
            `,
            edit: css`
                display: flex;
                padding: 0.25rem;
                border-radius: .25rem;
                border: 1px solid #eee;
                margin: 2px;
                align-items: center;
            `,
            path: css`
                color: #666;
                margin: 0 0.5rem;
            `,
            change: css`

            `,
        };

        return (
            <div
                ref={this.editorRef}
                className={cx(
                    'editor',
                    styles.base,
                    editorDarkMode ? Classes.DARK : '',
                )}
                style={{
                    width: minimized ? '0%' : '33%',
                    marginLeft: minimized ? '-30rem' : '0',
                    background: editorDarkMode ? '#222' : '#fff',
                }}>
                <div className={styles.historyControls} style={{
                    width: this.editorRef?.current?.offsetWidth,
                    background: editorDarkMode ? '#222' : '#fff',
                    borderBottomColor: editorDarkMode ? '#000' : '#ccc',
                }}>
                    <ButtonGroup fill className={styles.buttonGroup}>
                        <Button disabled={editorHistory?.past?.length <= 0} onClick={() => {
                            this.props.undoEditorHistory(present);
                            this.props.replaceState(last(editorHistory?.past));
                        }} minimal fill icon='undo' />
                        <Button disabled={editorHistory?.future?.length === 0} onClick={() => {
                            this.props.redoEditorHistory(present);
                            this.props.replaceState(last(editorHistory?.future));
                        }} minimal fill icon='redo' />
                    </ButtonGroup>
                </div>
                <div>
                    past: {editorHistory?.past?.length}
                    future: {editorHistory?.future?.length}
                </div>
                <ErrorBoundary>
                    <React.Suspense fallback={Skeleteon}>
                        <NuzlockeSaveControls />
                    </React.Suspense>
                </ErrorBoundary>
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
        editorHistory: state.editorHistory,
        present: omit(['editorHistory'], state),
    }),
    {
        updateEditorHistory,
        undoEditorHistory,
        redoEditorHistory,
        replaceState,
    }
)(EditorBase);

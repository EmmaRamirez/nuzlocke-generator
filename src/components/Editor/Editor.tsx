import * as React from 'react';
import { useSelector } from 'react-redux';
import { cx } from 'emotion';
import { State } from 'state';
import { Classes } from '@blueprintjs/core';
import { ErrorBoundary } from 'components/Shared';
import { editorStyles } from './styles';
import './editor.css';
import { editorModeSelector, minimizedSelector } from 'selectors';


const PokemonEditor = React.lazy(() =>
    import('components/PokemonEditor').then((res) => ({ default: res.PokemonEditor })),
);
const NuzlockeSaveControls = React.lazy(() =>
    import('components/SavesEditor/NuzlockeSaveControls').then((res) => ({
        default: res.NuzlockeSaveControls,
    })),
);
const GameEditor = React.lazy(() =>
    import('components/GameEditor').then((res) => ({ default: res.GameEditor })),
);
const TrainerEditor = React.lazy(() =>
    import('components/TrainerEditor').then((res) => ({ default: res.TrainerEditor })),
);
const HotkeysEditor = React.lazy(() =>
    import('components/HotkeysEditor').then((res) => ({ default: res.HotkeysEditor })),
);
const BugReporter = React.lazy(() =>
    import('components/BugReporter').then((res) => ({ default: res.BugReporter })),
);
const StatsEditor = React.lazy(() =>
    import('components/StatsEditor').then((res) => ({ default: res.StatsEditor })),
);
const StyleEditor = React.lazy(() =>
    import('components/StyleEditor').then((res) => ({ default: res.StyleEditor })),
);
const DataEditor = React.lazy(() =>
    import('components/DataEditor').then((res) => ({ default: res.DataEditor })),
);
const EditorControls = React.lazy(() =>
    import('components/Editor/EditorControls').then((res => ({ default: res.EditorControls }))),
);

const Skeleteon = <div style={{ width: '100%', height: '100px' }} className="bp3-skeleton"></div>;

/**
 * The main editor interface.
 */
export function Editor() {
    const minimized = useSelector(minimizedSelector);
    const editorDarkMode = useSelector(editorModeSelector);

    return (
        <div
            className={cx('editor', editorStyles.base, editorDarkMode ? Classes.DARK : '')}
            style={{
                width: minimized ? '0%' : '33%',
                marginLeft: minimized ? '-30rem' : '0',
                background: editorDarkMode ? '#222' : '#fff',
            }}>
            <ErrorBoundary>
                <React.Suspense fallback={Skeleteon}>
                    <EditorControls editorDarkMode={editorDarkMode} minimized={minimized} />
                </React.Suspense>
            </ErrorBoundary>
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

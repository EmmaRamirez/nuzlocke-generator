import * as React from 'react';
import { connect } from 'react-redux';

import { GameEditor } from 'components/GameEditor';
import { StyleEditor } from 'components/StyleEditor';
import { TrainerEditor } from 'components/TrainerEditor/TrainerEditor';
import { DataEditor } from 'components/DataEditor';
import { HotkeysEditor } from 'components/HotkeysEditor';

import './editor.css';
import { BugReporter } from 'components/BugReporter';
import { StatsEditor } from 'components/StatsEditor';
import { css, cx } from 'emotion';
import { State } from 'state';
import { Classes, Spinner } from '@blueprintjs/core';

const PokemonEditor = React.lazy(() => import('components/PokemonEditor').then(res => ({ default: res.PokemonEditor })));

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
                <GameEditor />
                <DataEditor />
                <TrainerEditor />
                <React.Suspense fallback={<Spinner />}>
                    <PokemonEditor />
                </React.Suspense>
                <StyleEditor />
                <StatsEditor />
                <HotkeysEditor />
                <BugReporter />
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

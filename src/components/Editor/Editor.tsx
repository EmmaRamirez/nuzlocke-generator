import * as React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { connect } from 'react-redux';

import { GameEditor } from 'components/GameEditor';
import { PokemonEditor } from 'components/PokemonEditor';
import { StyleEditor } from 'components/StyleEditor';
import { TrainerEditor } from 'components/TrainerEditor/TrainerEditor';
import { DataEditor } from 'components/DataEditor';
import { HotkeysEditor } from 'components/HotkeysEditor';

import './editor.css';
import { BugReporter } from 'components/BugReporter';
import { StatsEditor } from 'components/StatsEditor';
import { css, cx } from 'emotion';
import { State } from 'state';

/**
 * The main editor interface.
 */
export class EditorBase extends React.Component<{ editor: State['editor']; style: State['style'] }, {}> {
    constructor(props) {
        super(props);
    }

    public render() {

        const styles = {
            base: css`
                min-width: 30rem;
                max-width: 40rem;
                height: 100vh;
                padding: .25rem;
            `
        }

        const minimized = this.props.editor.minimized;
        return (
            <div
                className={cx(`editor`, styles.base, this.props.style.editorDarkMode ? 'pt-dark' : '')}
                style={{
                    width: minimized ? '0%' : '33%',
                    marginLeft: minimized ? '-30rem' : '0',
                    background: this.props.style.editorDarkMode ? '#222' : '#fff',
                }}>
                <GameEditor />
                <TrainerEditor />
                <PokemonEditor />
                <StyleEditor />
                <StatsEditor />
                <DataEditor />
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

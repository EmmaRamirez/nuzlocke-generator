import * as React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { connect } from 'react-redux';

import { GameEditor } from 'components/GameEditor';
import { PokemonEditor } from 'components/PokemonEditor';
import { StyleEditor } from 'components/StyleEditor';
import { TrainerEditor } from 'components/TrainerEditor/TrainerEditor';
import { DataEditor } from 'components/DataEditor';
import { HotkeysEditor } from 'components/HotkeysEditor';

import './editor.styl';
import { BugReporter } from 'components/BugReporter';
import { StatsEditor } from 'components/StatsEditor';

/**
 * The main editor interface.
 */
export class EditorBase extends React.Component<{ editor: any; style: any }, {}> {
    constructor(props) {
        super(props);
    }

    public render() {
        const minimized = this.props.editor.minimized;
        return (
            <Scrollbars
                autoHide
                autoHideTimeout={1000}
                autoHideDuration={200}
                className={`editor ${this.props.style.editorDarkMode ? 'pt-dark' : ''}`}
                style={{
                    width: minimized ? '0%' : '33%',
                    marginLeft: minimized ? '-30rem' : '0',
                    minWidth: '30rem',
                    maxWidth: '40rem',
                    height: '100vh',
                    padding: '.25rem',
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
            </Scrollbars>
        );
    }
}

export const Editor = connect(
    (state: any) => ({
        editor: state.editor,
        style: state.style,
    }),
    null,
)(EditorBase as any);

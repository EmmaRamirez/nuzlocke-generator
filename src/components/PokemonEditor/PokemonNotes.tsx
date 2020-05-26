import * as React from 'react';
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';
import { Button, Icon } from '@blueprintjs/core'

export interface PokemonNotesProps {

}

export interface PokemonNotesState {
    editorState: EditorState;
}


export class PokemonNotes extends React.Component<PokemonNotesProps, PokemonNotesState> {
    onChange: (editorState: any) => void;

    constructor(props) {
        super(props);
        this.state = {editorState: EditorState.createEmpty()};
        this.onChange = editorState => this.setState({editorState});
    }

    public render() {
        return (
            <Editor editorState={this.state.editorState} onChange={this.onChange} />
        );
    }
}
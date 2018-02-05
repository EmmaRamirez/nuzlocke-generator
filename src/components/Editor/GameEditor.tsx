import * as React from 'react';
import { Store } from 'redux';
import { connect } from 'react-redux';
import { editGame } from 'actions';

import { LinkedSaveButton } from './LinkedSaveButton';

export interface GameEditorProps {
    game: any;
    editGame: Function;
}

export class GameEditorBase extends React.Component<GameEditorProps, {}> {
    constructor(props) {
        super(props);
    }

    private onInput = e => {
        this.props.editGame({ name: e.target.value });
    }

    public render() {
        return (
            <div className='game-editor'>
                <h4>Game</h4>
                <label>Game </label>
                <input onChange={this.onInput} className='pt-input' type='text' value={this.props.game.name} dir='auto' />
                <br />
                {/* <button className='pt-button'>Import</button>
        <button className='pt-button'>Export</button> */}
                {/* <LinkedSaveButton data={{
          pokemon: this.context.store.getState().pokemon,
          trainer: {},
          game: this.context.store.getState().game,
          style: {}
        }}/> */}
            </div>
        );
    }
}

export const GameEditor = connect(
    (state:any) => ({ game: state.game }),
    { editGame }
)(GameEditorBase);
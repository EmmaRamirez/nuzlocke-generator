import * as React from 'react';
import { Store } from 'redux';
import { connect } from 'react-redux';
import { editGame } from 'actions';
import { listOfGames } from 'utils';

import { Button, Intent } from '@blueprintjs/core';
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
        const { game } = this.props;
        return (
            <div className='game-editor'>
                <h4 style={{ display: 'flex', alignContent: 'flex-end' }}>Game <Button style={{ marginLeft: 'auto' }} className='pt-minimal'>minimize editor</Button></h4>
                {/* <label>Game </label> */}
                {/* <input onChange={this.onInput} className='pt-input' type='text' value={game.name} dir='auto' /> */}

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}
                >
                    <div className='pt-select'>
                        <select
                            onChange={this.onInput}
                            value={game.name}
                        >
                            {
                                listOfGames.map(game => <option key={game}>{game}</option>)
                            }
                        </select>
                    </div>
                    <Button iconName='list' intent={Intent.PRIMARY}>
                        Add Rules
                    </Button>
                </div>
            </div>
        );
    }
}

export const GameEditor = connect(
    (state:any) => ({ game: state.game }),
    { editGame }
)(GameEditorBase);
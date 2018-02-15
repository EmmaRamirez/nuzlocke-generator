import * as React from 'react';
import { Store } from 'redux';
import { connect } from 'react-redux';
import { editGame, changeEditorSize } from 'actions';
import { listOfGames } from 'utils';

import { Button, Intent } from '@blueprintjs/core';
import { LinkedSaveButton } from './LinkedSaveButton';
import { RulesEditorDialog } from './RulesEditor';

export interface GameEditorProps {
    game: any;
    editGame: Function;
    editor: any;
    changeEditorSize: changeEditorSize;
}

export class GameEditorBase extends React.Component<GameEditorProps, { isOpen: boolean }> {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    private onInput = e => {
        this.props.editGame({ name: e.target.value });
    };

    private isMinimized(): any {
        if (this.props.editor.minimized) {
            return {
                position: 'fixed',
                top: '2px',
                left: '2px',
            };
        }
        return {};
    }

    private toggleDialog = _ => this.setState({ isOpen: !this.state.isOpen });

    public render() {
        const { game } = this.props;
        // Awful hack to get rid of `isOpen` conflict warning
        const RED: any = RulesEditorDialog;
        return (
            <>
                <RED isOpen={this.state.isOpen} onClose={this.toggleDialog} />
                <div className='game-editor'>
                    <h4 style={{ display: 'flex', alignContent: 'flex-end' }}>
                        Game
                        <Button
                            onClick={e => this.props.changeEditorSize(!this.props.editor.minimized)}
                            style={{ marginLeft: 'auto', ...this.isMinimized() }}
                            className='pt-minimal'
                            icon={this.props.editor.minimized ? 'maximize' : 'minimize'}
                        />
                    </h4>
                    {/* <label>Game </label> */}
                    {/* <input onChange={this.onInput} className='pt-input' type='text' value={game.name} dir='auto' /> */}

                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}>
                        {/* <Button icon='add' intent={Intent.SUCCESS}>New Nuzlocke</Button> */}
                        <div className='pt-select'>
                            <select onChange={this.onInput} value={game.name}>
                                {listOfGames.map(game => <option key={game}>{game}</option>)}
                            </select>
                        </div>
                        {/* <Button icon='exchange'>Switch Nuzlockes</Button> */}
                        <Button onClick={this.toggleDialog} icon='list' intent={Intent.PRIMARY}>
                            Modify Rules
                        </Button>
                    </div>
                </div>
            </>
        );
    }
}

export const GameEditor = connect((state: any) => ({ game: state.game, editor: state.editor }), {
    editGame,
    changeEditorSize,
})(GameEditorBase as any);

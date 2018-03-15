import * as React from 'react';
import { Store } from 'redux';
import { connect } from 'react-redux';
import { editGame, changeEditorSize, editStyle } from 'actions';
import { listOfGames } from 'utils';

import { Button, Intent, Popover, Menu, Position } from '@blueprintjs/core';
import { LinkedSaveButton } from './LinkedSaveButton';
import { RulesEditorDialog } from './RulesEditor';
import { gameOfOriginToColor } from '../Result/gameOfOriginToColor';

export interface GameEditorProps {
    game: any;
    editGame: any;
    editor: any;
    editStyle: editStyle;
    changeEditorSize: changeEditorSize;
}

const gameSubEditorStyle: any = {
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: '.25rem',
};

export class GameEditorBase extends React.Component<GameEditorProps, { isOpen: boolean }> {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    private onInput = e => {
        this.props.editGame({ name: e.target.value });
        this.props.editStyle({
            bgColor: gameOfOriginToColor(e.target.value),
        });
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
                    <div style={gameSubEditorStyle}>
                        <div className='pt-select'>
                            <select onChange={this.onInput} value={game.name}>
                                {listOfGames.map(game => <option key={game}>{game}</option>)}
                            </select>
                        </div>
                        <Popover minimal={true} content={<Menu />} position={Position.BOTTOM}>
                            <Button icon='exchange'>Switch Nuzlockes</Button>
                        </Popover>
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
    editStyle,
    changeEditorSize,
})(GameEditorBase as any);

import * as React from 'react';
import { connect } from 'react-redux';
import { editGame, changeEditorSize, editStyle, resetCheckpoints } from 'actions';
import { gameOfOriginToColor, listOfGames, FEATURES } from 'utils';

import { Button, Intent, Popover, Position, Menu } from '@blueprintjs/core';
import { RulesEditorDialog } from 'components/RulesEditor';
import { State } from 'state';

export interface GameEditorProps {
    game: any;
    editGame: any;
    editor: any;
    editStyle: editStyle;
    changeEditorSize: changeEditorSize;
    resetCheckpoints: resetCheckpoints;
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
        this.props.resetCheckpoints(e.target.value);
    };

    private toggleDialog = _ => this.setState({ isOpen: !this.state.isOpen });

    private editCustomGameName = () => {};

    public render() {
        const { game } = this.props;
        // Awful hack to get rid of `isOpen` conflict warning
        const RED: any = RulesEditorDialog;
        return (
            <>
                <RED isOpen={this.state.isOpen} onClose={this.toggleDialog} />
                <div className='game-editor'>
                    <h4 style={{ display: 'flex', alignContent: 'flex-end' }}>Game</h4>
                    <div style={gameSubEditorStyle}>
                        <div className='pt-select'>
                            <select onChange={this.onInput} value={game.name}>
                                {listOfGames.map(game => <option key={game}>{game}</option>)}
                            </select>
                        </div>
                        {FEATURES.multipleNuzlockes ? (
                            <Popover minimal={true} content={<Menu />} position={Position.BOTTOM}>
                                <Button icon='exchange'>Switch Nuzlockes</Button>
                            </Popover>
                        ) : null}
                        <Button onClick={this.toggleDialog} icon='list' intent={Intent.PRIMARY}>
                            Modify Rules
                        </Button>
                    </div>
                    <div style={gameSubEditorStyle}>
                        <div style={{fontSize: '80%'}}>
                            <label className='pt-inline' style={{marginRight: '.5rem'}}>Name</label>
                            <input autoComplete={'false'} size={20} onClick={this.editCustomGameName} className='pt-input' type='text' placeholder={game.name} />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export const GameEditor = connect((state: Pick<State, keyof State>) => ({ game: state.game, editor: state.editor }), {
    editGame,
    editStyle,
    changeEditorSize,
    resetCheckpoints,
})(GameEditorBase as any);

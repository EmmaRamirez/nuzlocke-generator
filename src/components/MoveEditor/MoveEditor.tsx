import * as React from 'react';
import { connect } from 'react-redux';
import { State } from 'state';
import { Game, movesByType } from 'utils';
import { Dialog, Intent, Button } from '@blueprintjs/core';
import { Move } from 'components/TeamPokemon/Moves';

// tslint:disable-next-line:no-empty-interfaces
export interface MoveEditorProps {
    game: State['game'];
    style: State['style'];
    isOpen: boolean;
    toggleDialog(e): void;
}

// tslint:disable-next-line:no-empty-interfaces
export interface MoveEditorState {
}

export class MoveEditorBase extends React.Component<MoveEditorProps, MoveEditorState> {

    private renderMoves() {
        const {style} = this.props;

        return Object.keys(movesByType).map(type => {
            return movesByType[type].map((move, index) => {
                return <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>
                    <Move
                        index={index}
                        move={move}
                        type={type}
                        style={style}
                    />
                    <div className='pt-select'>
                        <select>
                            <option value={type}>{type}</option>
                        </select>
                    </div>
                </div>;

            });
        });
    }

    public render() {
        const {isOpen, toggleDialog, style} = this.props;

        return (
            <Dialog
                icon='edit'
                isOpen={isOpen}
                onClose={toggleDialog}
                className={`wide-dialog ${
                    style.editorDarkMode ? 'pt-dark' : 'pt-light'
                }`}
                title='Mass Editor'>
                <div className='pt-dialog-body move-editor'>
                    <div className='add-move-wrapper'>
                        <input className='pt-input' type='text' />
                        <input className='pt-input' type='text' />
                        <Button
                            intent={Intent.PRIMARY}
                        >
                            Add Move
                        </Button>
                    </div>
                    {this.renderMoves()}
                </div>
            </Dialog>
        );
    }
}

export const MoveEditor = connect(
    (state: State) => ({
        game: state.game,
        style: state.style,
    })
)(MoveEditorBase);

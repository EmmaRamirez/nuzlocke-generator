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

const types = [
    'Bug',
    'Dark',
    'Dragon',
    'Electric',
    'Fairy',
    'Fighting',
    'Fire',
    'Flying',
    'Ghost',
    'Grass',
    'Ground',
    'Ice',
    'Normal',
    'Poison',
    'Psychic',
    'Rock',
    'Steel',
    'Water',
];

export class MoveEditorBase extends React.Component<MoveEditorProps, MoveEditorState> {

    private renderMoves() {
        const {style} = this.props;

        return Object.keys(movesByType).map(type => {
            return movesByType[type].sort().map((move, index) => {
                return <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '.25rem',
                    background: 'rgba(0, 0, 0, 0.3)'
                }}>
                    <div style={{width: '12rem', marginRight: '.5rem'}}>
                        <Move
                            index={index}
                            move={move}
                            type={type}
                            style={style}
                        />
                    </div>
                    <div className='pt-select' style={{width: '8rem'}}>
                        <select value={type}>
                            {types.map(opt => <option value={opt}>{opt}</option>)}
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
                className={`${
                    style.editorDarkMode ? 'pt-dark' : 'pt-light'
                }`}
                style={{
                    width: '44rem'
                }}
                title='Mass Editor'>
                <div className='pt-dialog-body move-editor' style={{
                    height: '800px',
                    overflowY: 'auto',
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'bottom',
                        justifyContent: 'space-between',
                        padding: '1rem',
                    }} className='add-move-wrapper'>
                        <div style={{margin: '0.25rem'}}>
                            <label className='pt-label' style={{fontSize: '80%', marginBottom: '2px'}}>
                                Move Name
                            </label>
                            <input className='pt-input' type='text' />
                        </div>
                        <div style={{margin: '0.25rem'}}>
                            <label className='pt-label' style={{fontSize: '80%', marginBottom: '2px'}}>
                                Move Type
                            </label>
                            <input className='pt-input' type='text' />
                        </div>
                        <Button
                            style={{height: '1.5rem', marginTop: '1.5rem'}}
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

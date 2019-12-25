import * as React from 'react';
import { connect } from 'react-redux';
import { State } from 'state';
import { Game, movesByType } from 'utils';
import { Dialog, Intent, Button, Icon } from '@blueprintjs/core';
import { Move } from 'components/TeamPokemon/Moves';
import { editCustomMoveMap } from 'actions';
import InfiniteScroll from 'react-infinite-scroller';
import { customMoveMap } from 'reducers/customMoveMap';

// tslint:disable-next-line:no-empty-interfaces
export interface MoveEditorProps {
    game: State['game'];
    style: State['style'];
    isOpen: boolean;
    toggleDialog(e): void;
    editCustomMoveMap: editCustomMoveMap;
    customMoveMap: any;
}

// tslint:disable-next-line:no-empty-interfaces
export interface MoveEditorState {
    searchTerm: string;
    moveType: string;
    moveName: string;
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
    public state = {
        searchTerm: '',
        moveType: '',
        moveName: '',
    };

    private renderMoves() {
        const {searchTerm} = this.state;
        const {style, customMoveMap} = this.props;

        return Object.keys(movesByType).map(type => {
            console.log(customMoveMap[type]);

            return movesByType[type].sort().filter(move => move.toLowerCase().includes(searchTerm.toLowerCase())).map((move, index) => {
                return type === 'Dragon' ? <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '.25rem',
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
                </div> : null;
            });
        });
    }

    private onSearch = (e) => {
        this.setState({searchTerm: e.target.value});
    }

    public render() {
        const {isOpen, toggleDialog, style} = this.props;
        const {moveType, moveName} = this.state;

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
                title='Move Editor'>
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
                            <input onChange={e => this.setState({moveName: e.target.value})} value={moveName} className='pt-input' type='text' />
                        </div>
                        <div style={{margin: '0.25rem'}}>
                            <label className='pt-label' style={{fontSize: '80%', marginBottom: '2px'}}>
                                Move Type
                            </label>
                            <input onChange={e => this.setState({moveType: e.target.value})} value={moveType} className='pt-input' type='text' />
                        </div>
                        <Button
                            onClick={e => this.props.editCustomMoveMap(moveType, moveName)}
                            style={{height: '1.5rem', marginTop: '1.5rem'}}
                            intent={Intent.PRIMARY}
                        >
                            Add Move
                        </Button>
                    </div>
                    <div className='moves-wrapper has-nice-scrollbars' style={{
                        background: 'rgba(255, 255, 255, 0.5)',
                        borderRadius: '.25rem',
                        height: '88%',
                        padding: '0.5rem',
                        overflowY: 'scroll',
                    }}>
                        <div className='pt-input-group' style={{width: '40%', margin: '0 auto', position: 'sticky'}}>
                            <Icon icon='search' />
                            <input
                                value={this.state.searchTerm}
                                onInput={this.onSearch}
                                className='pt-input'
                                type='search'
                            />
                        </div>
                        {this.renderMoves()}
                    </div>
                </div>
            </Dialog>
        );
    }
}

export const MoveEditor = connect(
    (state: State) => ({
        game: state.game,
        style: state.style,
        customMoveMap: state.customMoveMap,
    }),
    {
        editCustomMoveMap
    }
)(MoveEditorBase);

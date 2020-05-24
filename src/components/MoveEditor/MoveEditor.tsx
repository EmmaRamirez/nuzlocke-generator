import * as React from 'react';
import { connect } from 'react-redux';
import { State } from 'state';
import { Game, movesByType, isEmpty } from 'utils';
import { Dialog, Intent, Button, Icon, Classes } from '@blueprintjs/core';
import { Move } from 'components/TeamPokemon/Moves';
import { editCustomMoveMap } from 'actions';
import InfiniteScroll from 'react-infinite-scroller';
import { customMoveMap } from 'reducers/customMoveMap';
import { Autocomplete, ErrorBoundary } from 'components';

export interface MoveEditorProps {
    game: State['game'];
    style: State['style'];
    isOpen: boolean;
    toggleDialog(e): void;
    editCustomMoveMap: editCustomMoveMap;
    customMoveMap: any;
}

export interface MoveEditorState {
    searchTerm: string;
    moveType: string;
    moveName: string;
    newType: string;
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
        newType: '',
    };

    private renderMoves(moves) {
        const {searchTerm, newType} = this.state;
        const {style} = this.props;

        return Object.keys(moves).map(type => {
            return moves[type].sort().filter(
                move => move.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    type.toLowerCase().includes(searchTerm.toLowerCase())
            ).map((move, index) => {
                return <div key={index} style={{
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
                        <select onChange={e => {
                            this.setState({
                                newType: e.target.value,
                            }, () => {
                                this.props.editCustomMoveMap(e.target.value, move);
                            });
                        }} value={type}>
                            {types.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                        </select>
                    </div>
                </div>;
            });
        });
    }

    private onSearch = (e) => {
        this.setState({searchTerm: e.target.value});
    }

    public render() {
        const {isOpen, toggleDialog, style, customMoveMap} = this.props;
        const {moveType, moveName} = this.state;


        return (
            <ErrorBoundary>
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
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid #ccc',
                        borderRadius: '.25rem',
                        padding: '0.5rem',
                        margin: '.5rem',
                    }} className='add-move-wrapper'>
                        <input placeholder='Move Name' style={{width: '10rem'}} onChange={e => this.setState({moveName: e.target.value})} value={moveName} className='pt-input' type='text' />
                        <Autocomplete placeholder='Move Type' items={types} onChange={e => this.setState({moveType: e.target.value})} value={moveType} />
                        <Button
                            onClick={e => {
                                this.props.editCustomMoveMap(moveType, moveName);
                            }}
                            intent={Intent.PRIMARY}
                            disabled={!(moveType && moveName)}
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
                        {this.renderMoves(customMoveMap)}
                        {this.renderMoves(movesByType)}
                    </div>
                    <Button
                        style={{marginTop: '0.5rem'}}
                        onClick={e => {}}
                        intent={Intent.PRIMARY}
                    >
                        Edit Type Colors
                    </Button>
                </div>
            </Dialog>
            </ErrorBoundary>
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
    },
    null,
    {pure: false}
)(MoveEditorBase);

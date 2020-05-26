import * as React from 'react';
import { connect } from 'react-redux';
import { State } from 'state';
import { Game, movesByType, isEmpty, getListOfTypes } from 'utils';
import { Dialog, Intent, Button, Icon, Classes } from '@blueprintjs/core';
import { Move } from 'components/TeamPokemon/Moves';
import { editCustomMoveMap, deleteCustomMove, deleteCustomType, createCustomType, editCustomType } from 'actions';
import InfiniteScroll from 'react-infinite-scroller';
import { Autocomplete, ErrorBoundary } from 'components';
import { TypesEditor } from './TypesEditor';
import { cx } from 'emotion';

export interface MoveEditorProps {
    game: State['game'];
    style: State['style'];
    isOpen: boolean;
    toggleDialog(e): void;
    editCustomMoveMap: editCustomMoveMap;
    deleteCustomMove: deleteCustomMove;
    deleteCustomType: deleteCustomType;
    createCustomType: createCustomType;
    editCustomType: editCustomType;
    customTypes: State['customTypes'];
    customMoveMap: State['customMoveMap'];
}

export interface MoveEditorState {
    searchTerm: string;
    moveType: string;
    moveName: string;
}

export class MoveEditorBase extends React.Component<MoveEditorProps, MoveEditorState> {
    public state = {
        searchTerm: '',
        moveType: '',
        moveName: '',
    };

    private getTypes() {
        const {customTypes} = this.props;
        return getListOfTypes(customTypes);
    }

    private moveFilter = (move, type, searchTerm) => {
        return move.toLowerCase().includes(searchTerm.toLowerCase()) || type.toLowerCase().includes(searchTerm.toLowerCase());
    }

    private renderMoves(moves, isCustom = false) {
        const {searchTerm} = this.state;
        const {style, customMoveMap, customTypes} = this.props;
        const types = this.getTypes();

        const onChange = move => e => {
            this.props.editCustomMoveMap(e.target.value, move);
        }

        if (isCustom) {
            if (!Array.isArray(customMoveMap)) {
                return null;
            }
            return customMoveMap.filter(m => this.moveFilter(m.move, m.type, searchTerm)).map(({move, type, id}, index) => {
                return <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '.25rem',
                    position: 'relative',
                }}>
                    <div style={{width: '12rem', marginRight: '.5rem'}}>
                        <Move
                            index={index}
                            move={move}
                            type={type}
                            style={style}
                            customTypes={customTypes}
                        />
                    </div>
                    <div className='pt-select' style={{width: '8rem'}}>
                        <select onChange={onChange(move)} value={type}>
                            {types.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                        </select>
                    </div>
                    <Icon onClick={e => this.props.deleteCustomMove(id)} style={{color: 'red', position: 'absolute', cursor: 'pointer'}} icon='trash' />
                </div>;
            });
        }

        const prepared = Object.keys(moves).map(type => {
            return moves[type].sort().filter(m => this.moveFilter(m, type, searchTerm)).map((move, index) => <div style={{
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
                        customTypes={customTypes}
                    />
                </div>
                <div className='pt-select' style={{width: '8rem'}}>
                    <select onChange={onChange(move)} value={type}>
                        {types.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                </div>
            </div>);
        });

        return prepared;
    }

    private onSearch = (e) => {
        this.setState({searchTerm: e.target.value});
    }

    public render() {
        const {isOpen, toggleDialog, style, customMoveMap, customTypes, createCustomType, deleteCustomType} = this.props;
        const {moveType, moveName} = this.state;
        const types = this.getTypes();

        return (
            <ErrorBoundary>
            <Dialog
                icon='edit'
                canOutsideClickClose={false}
                isOpen={isOpen}
                onClose={toggleDialog}
                className={`wide-dialog ${
                    style.editorDarkMode ? 'pt-dark' : 'pt-light'
                }`}
                
                title='Move Editor'>
                <div className='pt-dialog-body move-editor' style={{
                    height: '800px',
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        border: '1px solid #ccc',
                        borderRadius: '.25rem',
                        padding: '0.5rem',
                        margin: '.5rem',
                    }} className='add-move-wrapper'>
                        <label style={{marginTop: '8px', padding: '0.5rem'}} className={cx(Classes.LABEL, Classes.INLINE)}>Add A Move</label>
                        <input placeholder='Move Name' style={{width: '10rem'}} onChange={e => this.setState({moveName: e.target.value})} value={moveName} className={Classes.INPUT} type='text' />
                        <Autocomplete className={Classes.INPUT} placeholder='Move Type' items={types} onChange={e => this.setState({moveType: e.target.value})} value={moveType} />
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
                        borderRadius: '.25rem',
                        height: '88%',
                        padding: '0.5rem',
                        overflowY: 'scroll',
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                    }}>
                        <div style={{width: '60%', borderRadius: '.25rem', margin: '4px'}}>
                            <div className='pt-input-group' style={{width: '50%', margin: '0 auto', position: 'sticky'}}>
                                <Icon icon='search' />
                                <input
                                    value={this.state.searchTerm}
                                    onInput={this.onSearch}
                                    className='pt-input'
                                    type='search'
                                    dir='auto'
                                />
                            </div>
                            {this.renderMoves(customMoveMap, true)}
                            {this.renderMoves(movesByType)}
                        </div>
                        <div style={{width: '39%', padding: '1rem', borderRadius: '.25rem', margin: '4px'}}>
                            <TypesEditor editCustomType={editCustomType} customTypes={customTypes} createCustomType={createCustomType} deleteCustomType={deleteCustomType} />
                        </div>
                    </div>
                </div>
            </Dialog>
            </ErrorBoundary>
        );
    }
}

// @TODO: use more responsible typing
export const MoveEditor: any = connect(
    (state: State) => ({
        game: state.game,
        style: state.style,
        customMoveMap: state.customMoveMap,
        customTypes: state.customTypes,
    }),
    {
        editCustomMoveMap,
        deleteCustomMove,
        deleteCustomType,
        createCustomType,
        editCustomType,
    },
    null,
    {pure: false}
)(MoveEditorBase as any);

import * as React from 'react';
import { connect } from 'react-redux';
import { Dialog } from '@blueprintjs/core';
import { Table, Column, Cell, EditableCell } from '@blueprintjs/table';
import { AddPokemonButton } from 'components/AddPokemonButton';
import { editPokemon } from 'actions';
import { Pokemon, PokemonKeys } from 'models';
import { generateEmptyPokemon, sortPokes } from 'utils';
import { typeToColor } from 'components/Result';
import { PokemonIconBase } from 'components/PokemonIcon';

export interface MassEditorProps {
    isOpen?: any;
    toggleDialog?: any;
    pokemon: Pokemon[];
    editPokemon: (edits: object, id: string) => void;
}

const TypeCellStyles = {
    color: 'white',
    display: 'inline-block',
    margin: '0 auto',
    padding: '.15rem',
    width: '50%',
};

const renderValue = (pokemon, r, key) => {
    if (key === 'types') {
        const typeA = pokemon[r][key][0];
        const typeB = pokemon[r][key][1];
        return (
            <>
                <span style={{ ...TypeCellStyles, background: typeToColor(typeA) || 'transparent'}}>{typeA}</span>
                <span style={{ ...TypeCellStyles, background: typeToColor(typeB) || 'transparent'}}>{typeB}</span>
            </>
        );
    }
    return pokemon[r][key];
};

export class MassEditorBase extends React.Component<MassEditorProps, {}> {
    // private renderCell = (rowIndex: number) => {
    //     return <Cell>{this.props.pokemon[rowIndex].nickname}</Cell>;
    // }

    private renderColumns(pokemon: MassEditorProps['pokemon']) {
        return Object.keys(PokemonKeys)
            .filter(k => k !== 'id')
            .map(key => {
                return (
                    <Column
                        key={key}
                        name={key}
                        cellRenderer={r => (
                            <EditableCell
                                onConfirm={(v, _, c) => {
                                    let value: any = pokemon[r][key];
                                    if (key === 'types') {
                                        value = v.split(',').map(s => s.trim());
                                    }
                                    if (key === 'moves') {
                                        value = v.split(',').map(s => s.trim());
                                    }
                                    this.props.editPokemon(
                                        {
                                            [key]: value,
                                        },
                                        pokemon[r].id,
                                    );
                                    }
                                }
                                value={renderValue(pokemon, r, key)}
                            />
                        )}
                    />
                );
            });
    }

    public render() {
        return (
            <Dialog
                icon='edit'
                isOpen={this.props.isOpen}
                onClose={this.props.toggleDialog}
                className='wide-dialog'
                title='Mass Editor'>
                <div className='pt-dialog-body'>
                    <AddPokemonButton
                        defaultPokemon={generateEmptyPokemon(this.props.pokemon)}
                    />
                    <div style={{ padding: '.25rem' }} />
                    <Table numRows={this.props.pokemon.length} numFrozenColumns={1}>
                        {this.renderColumns(this.props.pokemon.sort(sortPokes))}
                    </Table>
                </div>
                {/* <div className='pt-dialog-footer'>
                    <div className='pt-dialog-footer-actions'>
                    </div>
                </div> */}
            </Dialog>
        );
    }
}

export const MassEditor = connect(
    (state: any) => ({
        pokemon: state.pokemon,
    }),
    { editPokemon },
)(MassEditorBase as any);

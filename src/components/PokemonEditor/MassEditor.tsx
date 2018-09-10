import * as React from 'react';
import { connect } from 'react-redux';
import { Dialog, Menu, MenuItem } from '@blueprintjs/core';
import { Table, Column, EditableCell, ColumnHeaderCell, ITableProps } from '@blueprintjs/table';
import { AddPokemonButton } from 'components/AddPokemonButton';
import { editPokemon } from 'actions';
import { Pokemon, PokemonKeys } from 'models';
import { generateEmptyPokemon, sortPokes } from 'utils';
import { currentId } from 'async_hooks';
import { pokemon } from 'reducers/pokemon';

export interface MassEditorProps {
    isOpen: any;
    toggleDialog?: any;
    pokemon: Pokemon[];
    style: any;
    editPokemon: (edits: object, id: string) => void;
}

export class SortableColumnMenu extends React.PureComponent {
    public render() {
        return (
            <Menu>
                <MenuItem icon='sort-asc' onClick={_ => null} text='Sort Asc' />
                <MenuItem icon='sort-desc' onClick={_ => null} text='Sort Desc' />
            </Menu>
        );
    }
}

export class MassEditorBase extends React.Component<
    MassEditorProps,
    { columnWidths: ITableProps['columnWidths'][] }
> {
    // public getColumnWidths() {
    //     // Convert each poke in Pokemon Array into flat Array []
    //     // Evaluate Array as 0 or 1
    //     // 0 array is minimum width value, n > 0 is normal

    //     const keys = Object.keys(PokemonKeys);

    //     // Coerce types
    //     const columnWidths: any[] = keys
    //         .map((key, index) => {
    //             return this.props.pokemon
    //                 .map((poke, idx) => {
    //                     return !!poke[key];
    //                 })
    //                 .reduce((p, c) => Number(c) + Number(p), 0) > 0 ? 150 : 50;
    //         });
    //     return columnWidths;
    // }

    private renderMenu() {
        return (
            <Menu>
                <MenuItem icon='sort-asc' onClick={_ => null} text='Sort Asc' />
                <MenuItem icon='sort-desc' onClick={_ => null} text='Sort Desc' />
            </Menu>
        );
    }

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
                                    let value: any = v;
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
                                }}
                                value={pokemon[r][key]}
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
                className={`wide-dialog ${
                    this.props.style.editorDarkMode ? 'pt-dark' : 'pt-light'
                }`}
                title='Mass Editor'>
                <div className='pt-dialog-body'>
                    <AddPokemonButton defaultPokemon={generateEmptyPokemon(this.props.pokemon)} />
                    <div style={{ padding: '.25rem' }} />
                    <Table
                        defaultColumnWidth={100}
                        numRows={this.props.pokemon.length}
                        numFrozenColumns={1}>
                        {this.renderColumns(this.props.pokemon.sort(sortPokes))}
                    </Table>
                </div>
            </Dialog>
        );
    }
}

export const MassEditor = connect(
    (state: any) => ({
        pokemon: state.pokemon,
        style: state.style,
    }),
    { editPokemon },
)(MassEditorBase as any);

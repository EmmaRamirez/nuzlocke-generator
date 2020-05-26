import * as React from 'react';
import { connect } from 'react-redux';
import { Dialog, Menu, MenuItem, Button } from '@blueprintjs/core';
import { Table, Column, EditableCell, ITableProps, IColumnProps, ColumnHeaderCell } from '@blueprintjs/table';
import { AddPokemonButton } from 'components/AddPokemonButton';
import { editPokemon } from 'actions';
import { Pokemon, PokemonKeys } from 'models';
import { generateEmptyPokemon, sortPokes } from 'utils';
import { State } from 'state';
import { ErrorBoundary } from 'components';
import { omit } from 'ramda';

export interface MassEditorProps {
    isOpen: boolean;
    toggleDialog?: any;
    pokemon: State['pokemon'];
    style: State['style'];
    editPokemon: (edits: object, id: string) => any;
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

    private renderMenu = () => {
        return (
            <Menu>
                <MenuItem icon='sort-asc' onClick={this.sortAsc} text='Sort Asc' />
                <MenuItem icon='sort-desc' onClick={this.sortDesc} text='Sort Desc' />
            </Menu>
        );
    }

    private sortAsc = () => {

    }

    private sortDesc = () => {

    }

    private renderColumns(pokemon: MassEditorProps['pokemon']) {
        return Object.keys(omit(['extraData'], PokemonKeys))
            .filter(k => k !== 'id')
            .map(key => {
                return (
                    <Column
                        columnHeaderCellRenderer={() => <ColumnHeaderCell name={key} menuRenderer={this.renderMenu} /> as any}
                        key={key}
                        name={key}
                        cellRenderer={r => (
                            <EditableCell
                                onConfirm={(v, _, c) => {
                                    let value: any = v;
                                    console.log('from editing a cell', v);
                                    if (key === 'types') {
                                        value = v && typeof v === 'string' &&  v.split(',').map(s => s.trim());
                                    }
                                    if (key === 'moves') {
                                        value = v && typeof v === 'string' &&  v.split(',').map(s => s.trim());
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
                        ) as any}
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
                    <ErrorBoundary>
                        <AddPokemonButton defaultPokemon={generateEmptyPokemon(this.props.pokemon)} />
                        {/* <Button
                            icon='export'
                        >
                            Export to Google Sheets
                        </Button>
                        <Button
                            icon='import'
                        >Import from CSV</Button> */}
                        <div style={{ padding: '.25rem' }} />
                        <Table
                            columnWidths={[150, 0, 150]}
                            defaultColumnWidth={100}
                            numRows={this.props.pokemon.length}
                            numFrozenColumns={1}>
                            {this.renderColumns(this.props.pokemon.sort(sortPokes)) as React.ReactElement<IColumnProps>[]}
                        </Table>
                    </ErrorBoundary>
                </div>
            </Dialog>
        );
    }
}

export const MassEditor = connect(
    (state: State) => ({
        pokemon: state.pokemon,
        style: state.style,
    }),
    { editPokemon },
)(MassEditorBase);

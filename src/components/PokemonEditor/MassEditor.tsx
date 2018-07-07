import * as React from 'react';
import { connect } from 'react-redux';
import { Dialog } from '@blueprintjs/core';
import { Table, Column, Cell, EditableCell } from '@blueprintjs/table';
import { LinkedAddPokemonButton } from 'components/AddPokemonButton/LinkedAddPokemonButton';
import { editPokemon } from 'actions';
import { Pokemon, PokemonKeys } from 'models';
import { generateEmptyPokemon, sortPokes } from 'utils';

export interface MassEditorProps {
    isOpen?: any;
    toggleDialog?: any;
    pokemon: Pokemon[];
    editPokemon: (edits: object, id: string) => void;
}

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
                                    }
                                }
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
                className='wide-dialog'
                title='Mass Editor'>
                <div className='pt-dialog-body'>
                    <LinkedAddPokemonButton
                        defaultPokemon={generateEmptyPokemon(this.props.pokemon)}
                    />
                    <div style={{ padding: '.25rem' }} />
                    <Table numRows={this.props.pokemon.length}>
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

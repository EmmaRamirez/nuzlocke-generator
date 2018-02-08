import * as React from 'react';
import { connect } from 'react-redux';
import { Dialog, Button, Intent } from '@blueprintjs/core';
import { Table, Column, Cell, EditableCell } from '@blueprintjs/table';
import { LinkedAddPokemonButton } from './LinkedAddPokemonButton';
import { editPokemon } from 'actions';
import { Pokemon, PokemonKeys } from 'models';
import { generateEmptyPokemon } from 'utils';

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

    private renderColumns (pokemon: MassEditorProps['pokemon']) {
        return Object.keys(PokemonKeys).filter(k => k !== 'id').map(key => {
            return <Column key={key} name={key} cellRenderer={r => <EditableCell onConfirm={ (v, _, c) => this.props.editPokemon({
                [key]: v
            }, pokemon[r].id) } value={pokemon[r][key]} />} />;
        });
    }

    public render() {
        return (
            <Dialog
                iconName='edit'
                isOpen={this.props.isOpen}
                onClose={this.props.toggleDialog}
                title='Mass Editor'
            >
                <div className='pt-dialog-body'>
                    <LinkedAddPokemonButton
                        defaultPokemon={generateEmptyPokemon(this.props.pokemon)}
                    />
                    <div style={{ padding: '.25rem' }} />
                    <Table numRows={this.props.pokemon.length}>
                        { this.renderColumns(this.props.pokemon) }
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
    (state:any) => ({
        pokemon: state.pokemon
    }),
    { editPokemon }
)(MassEditorBase as any);
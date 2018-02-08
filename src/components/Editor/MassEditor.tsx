import * as React from 'react';
import { connect } from 'react-redux';
import { Dialog, Button, Intent } from '@blueprintjs/core';
import { Table, Column, Cell, EditableCell } from '@blueprintjs/table';
import { editPokemon } from 'actions';
import { Pokemon } from 'models';

export interface MassEditorProps {
    isOpen?: any;
    toggleDialog?: any;
    pokemon: Pokemon[];
}

export class MassEditorBase extends React.Component<MassEditorProps, {}> {

    // private renderCell = (rowIndex: number) => {
    //     return <Cell>{this.props.pokemon[rowIndex].nickname}</Cell>;
    // }

    private renderColumns (pokemon: MassEditorProps['pokemon']) {
        return Object.keys(pokemon[0]).map(key => {
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
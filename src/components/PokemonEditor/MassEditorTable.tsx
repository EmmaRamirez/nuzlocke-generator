import * as React from 'react';
import { connect } from 'react-redux';
import { Cell, Column, Table, ICellRenderer, EditableCell, JSONFormat } from '@blueprintjs/table';
import { State } from 'state';
import { sortPokes, generateEmptyPokemon } from 'utils';
import { PokemonKeys, Pokemon } from 'models';
import { editPokemon as editPokemonType } from 'actions';
import { AddPokemonButton } from 'components/AddPokemonButton';

export interface MassEditorTableProps {
    pokemon: State['pokemon'];
    editPokemon: editPokemonType;
}

const determineCell = (key: string, value: any, id, editPokemon) => {
    if (key === 'extraData') {
        return (
            <Cell>
                <JSONFormat>{value}</JSONFormat>
            </Cell>
        );
    }
    if (key === 'id') {
        return <Cell>{id}</Cell>;
    }
    return (
        <EditableCell
            onConfirm={(value) => {
                let transformedValue: string | string[] = value;
                if (key === 'moves' || key === 'types') {
                    transformedValue = value?.split(',').map((s) => s.trim());
                }
                editPokemon({ [key]: transformedValue }, id);
            }}
            value={value}
        />
    );
};

const cellRenderer: (pokemon: Pokemon[], key: string, editPokemon) => ICellRenderer = (
    pokemon: Pokemon[],
    key: string,
    editPokemon,
) => (rowIndex: number) => {
    return determineCell(key, pokemon[rowIndex][key], pokemon[rowIndex].id, editPokemon);
};

export function renderColumns(pokemon, editPokemon) {
    return Object.keys(PokemonKeys).map((key) => {
        return (
            <Column key={key} name={key} cellRenderer={cellRenderer(pokemon, key, editPokemon)} />
        );
    });
}

export function MassEditorTableBase({ pokemon, editPokemon }: MassEditorTableProps) {
    return (
        <>
            <Table numRows={pokemon.length} numFrozenColumns={2}>
                {renderColumns(pokemon, editPokemon)}
            </Table>
            <br />
            <AddPokemonButton pokemon={generateEmptyPokemon(pokemon)} />
        </>
    );
}

export const MassEditorTable = connect(
    (state: State) => ({ pokemon: state.pokemon.sort(sortPokes) }),
    {
        editPokemon: editPokemonType,
    },
)(MassEditorTableBase);

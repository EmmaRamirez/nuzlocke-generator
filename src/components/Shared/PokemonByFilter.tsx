import * as React from 'react';
import { Tooltip, Position } from '@blueprintjs/core';
import { Pokemon } from 'models';
import { PokemonIcon } from 'components/PokemonIcon';
import { sortPokes } from 'utils';
import { connect } from 'react-redux';
import { editPokemon } from 'actions';
import { compose, filter, sort, map, curry } from 'ramda';

export interface PokemonByFilterProps {
    team: Pokemon[];
    status: string;
    editPokemon: editPokemon;
    searchTerm: string;
}

const matchesStatus = (searchTerm) => ((poke: Pokemon) => poke.nickname?.toLowerCase().startsWith(searchTerm?.toLowerCase()) ||
    poke.species?.toLowerCase().startsWith(searchTerm?.toLowerCase()) ||
    poke.forme?.toLowerCase() === searchTerm?.toLowerCase() ||
    poke.nickname?.toLowerCase().startsWith(searchTerm?.toLowerCase()) ||
    poke.gender?.toLowerCase().startsWith(searchTerm?.toLowerCase()) ||
    poke.moves?.includes(searchTerm) ||
    poke.gameOfOrigin?.toLowerCase() === searchTerm?.toLowerCase() ||
    poke.item?.toLowerCase() === searchTerm?.toLowerCase() ||
    poke.types?.includes(searchTerm)
);

export class PokemonByFilterBase extends React.PureComponent<PokemonByFilterProps> {
    public render() {
        const { team, status, searchTerm } = this.props;

        return team
            .sort(sortPokes)
            .filter(poke => poke.status === status)
            .map((poke) => (
                <Tooltip
                    key={poke.id}
                    content={poke.nickname || poke.species}
                    position={Position.TOP}>
                    <PokemonIcon
                        style={{
                            backgroundColor: searchTerm !== '' && matchesStatus(searchTerm)(poke) ? '#90EE90' : undefined,
                            borderRadius: '50%'
                        }}
                        id={poke.id}
                        status={poke.status}
                        species={poke.species}
                        forme={poke.forme}
                        shiny={poke.shiny}
                        gender={poke.gender}
                        customIcon={poke.customIcon}
                        hidden={poke.hidden}
                        position={poke.position}
                    />
                </Tooltip>
            ));
    }
}

export const PokemonByFilter = connect(null, {
    editPokemon,
})(PokemonByFilterBase);

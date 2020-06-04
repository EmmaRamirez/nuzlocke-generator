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
}

export class PokemonByFilterBase extends React.PureComponent<PokemonByFilterProps> {
    public render() {
        const { team, status } = this.props;

        return team.sort(sortPokes).filter(poke => poke.status === status).map(poke => <Tooltip
            key={poke.id}
            content={poke.nickname || poke.species}
            position={Position.TOP}>
            <PokemonIcon
                id={poke.id}
                species={poke.species}
                forme={poke.forme}
                shiny={poke.shiny}
                gender={poke.gender}
                customIcon={poke.customIcon}
                hidden={poke.hidden}
            />
        </Tooltip>);
    }
}

export const PokemonByFilter = connect(null, {
    editPokemon,
})(PokemonByFilterBase);

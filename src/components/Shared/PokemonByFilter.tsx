import * as React from 'react';
import { Tooltip, Position } from '@blueprintjs/core';
import { Pokemon } from 'models';
import { PokemonIcon } from 'components/PokemonIcon';
import { sortPokes, noop } from 'utils';
import { connect } from 'react-redux';
import { editPokemon } from 'actions';

const Grid = ({
    team,
    filterFunction,
}: {
    team: Pokemon[];
    filterFunction: (value: Pokemon, index: number, array: Pokemon[]) => boolean;
}) => {
    return (
        <>
            {team
                .filter(filterFunction)
                .sort(sortPokes)
                .map((poke, index) => (
                    <Tooltip key={index} content={poke.nickname || ''} position={Position.TOP}>
                        <PokemonIcon
                            id={poke.id}
                            species={poke.species}
                            forme={poke.forme}
                            shiny={poke.shiny}
                            gender={poke.gender}
                            customIcon={poke.customIcon}
                            hidden={poke.hidden}
                        />
                    </Tooltip>
                ))}
        </>
    );
};

export interface PokemonByFilterProps {
    team: Pokemon[];
    filter?: string | undefined;
    editPokemon: editPokemon;
}

export class PokemonByFilterBase extends React.Component<PokemonByFilterProps> {
    public state = {
        team: [],
    };

    public componentWillMount() {
        this.setState({ team: this.props.team });
    }

    public componentWillReceiveProps(
        nextProps: PokemonByFilterProps,
        prevProps: PokemonByFilterProps,
    ) {
        this.setState({ team: nextProps.team });
    }

    private getFilterFunction(filter: string | null = null) {
        if (filter != null) return (poke: Pokemon) => poke.status === filter;
        if (filter == null) return (poke: Pokemon) => true;
        return (poke: Pokemon) => true;
    }

    public render() {
        const { team, filter } = this.props;

        return <Grid filterFunction={this.getFilterFunction(filter)} team={this.state.team} />;
    }
}

export const PokemonByFilter = connect(null, {
    editPokemon,
})(PokemonByFilterBase);

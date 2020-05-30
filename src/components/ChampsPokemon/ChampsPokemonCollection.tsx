import * as React from 'react';
import { Layout, LayoutDisplay, LayoutDirection, LayoutAlignment, LayoutSpacing } from 'components/Layout';
import { ChampsPokemon } from './ChampsPokemon';
import { Pokemon } from 'models';

export interface ChampsPokemonCollectionProps {
    pokemon: Pokemon[];
    display?: LayoutDisplay;
    direction?: LayoutDirection;
    alignment?: LayoutAlignment;
    spacing?: LayoutSpacing;
}

export class ChampsPokemonCollection extends React.Component<ChampsPokemonCollectionProps> {
    public render() {
        const { pokemon, display, direction, alignment, spacing } = this.props;

        return <Layout display={display} direction={direction} alignment={alignment} spacing={spacing}>
            {pokemon.map(poke => <ChampsPokemon {...poke} />)}
        </Layout>;
    }
}

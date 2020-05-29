import * as React from 'react';
import { Layout } from 'components/Layout';
import { ChampsPokemon } from './ChampsPokemon';
import { Pokemon } from 'models';

export interface ChampsPokemonCollectionProps {
    pokemon: Pokemon[];
}

export class ChampsPokemonCollection extends React.Component<ChampsPokemonCollectionProps> {
    public render() {
        const { pokemon } = this.props;

        return <Layout>
            {pokemon.map(poke => <ChampsPokemon {...poke} />)}
        </Layout>;
    }
}

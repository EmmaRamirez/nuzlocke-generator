import { PokemonIcon } from 'components';
import { Pokemon } from 'models';
import * as React from 'react';

export function BoxedPokemon({pokemon}: {pokemon: Pokemon}) {
    return <div data-testid='boxed-pokemon'><PokemonIcon
        species={pokemon?.species}
        id={pokemon?.id}
        style={{cursor: 'pointer'}}
        forme={pokemon?.forme}
        shiny={pokemon?.shiny}
        gender={pokemon?.gender}
        customIcon={pokemon?.customIcon}
    /></div>;
}

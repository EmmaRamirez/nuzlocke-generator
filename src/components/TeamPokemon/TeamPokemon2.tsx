import { Pokemon } from 'models';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { State } from 'state';
import { getPokemonImage } from 'utils';

export interface TeamPokemonProps {
    pokemon: Pokemon;
}

export function TeamPokemon ({pokemon}: TeamPokemonProps) {
    const style = useSelector<State, State['style']>(state => state.style);
    const name = useSelector<State, State['game']['name']>(state => state.game.name);
    const editor = useSelector<State, State['editor']>(state => state.editor);


    return <div>
        <div style={{
            height: '4rem',
            width: '4rem',

            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',

            backgroundImage: getPokemonImage({
                customImage: pokemon.customImage,
                forme: pokemon.forme as any,
                species: pokemon.species,
                shiny: pokemon.shiny,
                style: style,
                name: name,
                editor: editor,
                gender: pokemon.gender,
            }),
        }}>
        </div>
    </div>;
}

import { Pokemon } from 'models';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { State } from 'state';
import { getPokemonImage } from 'utils';
import { css, cx } from 'emotion';


export interface TeamPokemonProps {
    pokemon: Pokemon;
    options: Partial<TeamPokemonOptions>;
    customCSS?: string;
}

export interface TeamPokemonOptions {
    height: string;
    width: string;

}

export const teamPokemon = (options: TeamPokemonProps['options']) => css`


`;

export const teamPokemonImage = (options: TeamPokemonProps['options']) => css`
    height: ${options.height ?? '8rem'};
    width: ${options.width ?? '8rem'};
`;

export function TeamPokemon ({pokemon, options}: TeamPokemonProps) {
    const style = useSelector<State, State['style']>(state => state.style);
    const name = useSelector<State, State['game']['name']>(state => state.game.name);
    const editor = useSelector<State, State['editor']>(state => state.editor);

    const classes = {
        teamPokemon: teamPokemon(options),
        teamPokemonImage: teamPokemonImage(options),
    };


    return <div>
        <div className={classes.teamPokemonImage} style={{
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

import { Pokemon } from 'models';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { useSelector } from 'react-redux';
import { State } from 'state';
import { getGameGeneration, getPokemonImage, stripURLCSS, typeToColor } from 'utils';
import { css, cx } from 'emotion';
import * as Mustache from 'mustache';
import { ErrorBoundary, PokemonIcon, PokemonIconPlain } from 'components';
import { uniq } from 'ramda';
import { Moves, MovesBase } from './Moves';
import { customMoveMap } from 'reducers/customMoveMap';
import { customTypes } from 'reducers/customTypes';

export interface TeamPokemonProps {
    pokemon: Pokemon;
    options: Partial<TeamPokemonOptions>;
    customCSS?: string;
    customHTML?: string;
}

export interface TeamPokemonOptions {
    height: string;
    width: string;
}

export const teamPokemon = (options: TeamPokemonProps['options']) => css``;

export const teamPokemonImage = (options: TeamPokemonProps['options']) => css`
    height: ${options.height ?? '8rem'};
    width: ${options.width ?? '8rem'};
`;

export function TeamPokemon({ pokemon, options, customCSS, customHTML }: TeamPokemonProps) {
    const style = useSelector<State, State['style']>((state) => state.style);
    const name = useSelector<State, State['game']['name']>((state) => state.game.name);
    const editor = useSelector<State, State['editor']>((state) => state.editor);
    const [image, setImage] = React.useState('');
    const customMoveMap = useSelector<State, State['customMoveMap']>(
        (state) => state.customMoveMap,
    );
    const customTypes = useSelector<State, State['customTypes']>((state) => state.customTypes);

    const teamHTML = style.customTeamHTML;

    React.useEffect(() => {
        (async () => {
            const newImage = await getPokemonImage({
                customImage: pokemon.customImage,
                forme: pokemon.forme as any,
                species: pokemon.species,
                shiny: pokemon.shiny,
                style: style,
                name: name,
                editor: editor,
                gender: pokemon.gender,
            });
            console.log('team pokemon newimg:', newImage);
            setImage(newImage);
        })();
        console.log('team pokemon image: ', image);
    }, [pokemon.species]);

    const classes = {
        teamPokemon: teamPokemon(options),
        teamPokemonImage: teamPokemonImage(options),
    };

    const pokemonImage = stripURLCSS(
        image
    );

    const pokemonIcon = (
        <PokemonIconPlain
            selectedId={''}
            onClick={() => {}}
            imageStyle={{}}
            species={pokemon?.species}
            id={pokemon?.id}
            style={{ cursor: 'pointer' }}
            forme={pokemon?.forme}
            shiny={pokemon?.shiny}
            gender={pokemon?.gender}
            customIcon={pokemon?.customIcon}
        />
    );

    const view = {
        ...pokemon,
        typesFiltered: uniq(pokemon.types ?? []),
        image: pokemonImage,
        type1: pokemon?.types?.[0],
        type2: pokemon?.types?.[1],
        type1Color: typeToColor(pokemon?.types?.[0] ?? 'Normal'),
        type2Color: typeToColor(pokemon?.types?.[0] ?? 'Normal'),
        icon: ReactDOMServer.renderToString(pokemonIcon),
        notes: pokemon.notes ?? '',
        movesColored: ReactDOMServer.renderToString(
            <MovesBase
                style={style}
                customMoveMap={customMoveMap}
                customTypes={customTypes}
                generation={getGameGeneration(name)}
                moves={pokemon.moves}
                movesPosition={style.movesPosition}
                stripClasses
            />,
        ),
    };

    console.log(view.icon);

    const CSS = (
        <style>{`
        ${customCSS}
    `}</style>
    );

    const teamViewHTML = customHTML ?? teamHTML;
    // mustache will sanitize the html from renderToString so instead we do it ourselves
    const html = teamViewHTML
        .replace(/\{{icon}}/g, view.icon)
        .replace(/\{{notes}}/g, view.notes)
        .replace(/\{{movesColored}}/g, view.movesColored);
    if (teamViewHTML) {
        return (
            <ErrorBoundary>
                {CSS}
                <div dangerouslySetInnerHTML={{ __html: Mustache.render(html, view) }} />
            </ErrorBoundary>
        );
    }

    return (
        <>
            {CSS}
            <div data-testid="team-pokemon" className={classes.teamPokemon}>
                <div
                    className={classes.teamPokemonImage}
                    style={{
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundImage: image,
                    }}></div>
            </div>
        </>
    );
}

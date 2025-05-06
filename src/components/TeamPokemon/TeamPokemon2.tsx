import { Pokemon } from 'models';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { useSelector } from 'react-redux';
import { State } from 'state';
import { formatBallText, getGameGeneration, getPokemonImage, stripURLCSS, typeToColor } from 'utils';
import { css, cx } from 'emotion';
import * as Mustache from 'mustache';
import { ErrorBoundary, PokemonIcon, PokemonIconPlain } from 'components';
import { uniq } from 'ramda';
import { Moves, MovesBase } from './Moves';
import { customMoveMap } from 'reducers/customMoveMap';
import { customTypes } from 'reducers/customTypes';
import { Gender, GenderElement, GenderElementReact } from 'components/Shared';
import { CheckpointsDisplay } from 'components/Result';
import { game } from 'reducers/game';
import { linkedPokemonSelector } from 'selectors';
import { PokemonItem } from './PokemonItem';
import { PokemonPokeball } from './PokemonPokeball';

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

const LinkedPokemon = ({
    linkedPokemon,
    style,
}) => {
    return linkedPokemon ? (
        <ErrorBoundary>
            <div className="pokemon-linked">
                {style.linkedPokemonText}{' '}
                {linkedPokemon.nickname || linkedPokemon.species}
                <PokemonIconPlain {...linkedPokemon} />
            </div>
        </ErrorBoundary>
    ) : null;
};

const TeamCheckpointsDisplay = ({game, pokemon, style}) => {
    return <ErrorBoundary>
        <div className='flex flex-wrap' style={{maxWidth: '14rem'}}>
            <CheckpointsDisplay
                className='pokemon-checkpoint'
                game={game}
                clearedCheckpoints={pokemon.checkpoints}
                style={style}
            />
        </div>
    </ErrorBoundary>;
};

export function TeamPokemon({ pokemon, options, customCSS, customHTML }: TeamPokemonProps) {
    const style = useSelector<State, State['style']>((state) => state.style);
    const game = useSelector<State, State['game']>((state) => state.game);
    const linkedPokemon = useSelector<State, Pokemon | undefined>(linkedPokemonSelector(pokemon));
    const name = game.name;
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
                egg: pokemon.egg,
            });
            setImage(newImage);
        })();
    }, [pokemon.species, pokemon.customImage, pokemon.forme, pokemon.shiny, style, name, editor, pokemon.gender, pokemon.egg]);

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
            egg={pokemon?.egg}
            customIcon={pokemon?.customIcon}
        />
    );

    console.log(linkedPokemon, pokemon?.linkedTo);

    const moves = pokemon?.moves?.map((move, index) => {
        return { [`move${index + 1}`]: move };
    });

    const view = {
        ...pokemon,
        ...(moves ?? {}),
        typesFiltered: uniq(pokemon.types ?? []),
        image: pokemonImage,
        type1: pokemon?.types?.[0],
        type2: pokemon?.types?.[1],
        type1Color: typeToColor(pokemon?.types?.[0] ?? 'Normal'),
        type2Color: typeToColor(pokemon?.types?.[1] ?? 'Normal'),
        pokeball: pokemon.pokeball ?
            `icons/pokeball/${formatBallText(pokemon?.pokeball || 'None')}.png` : undefined,
        pokeballComponent: ReactDOMServer.renderToString(<PokemonPokeball pokemon={pokemon} style={style} customTypes={customTypes} />),
        item: pokemon.item ? `icons/hold-item/${(pokemon.item || '')
            .toLowerCase()
            .replace(/\'/g, '')
            .replace(/\s/g, '-')}.png` : undefined,
        itemComponent: ReactDOMServer.renderToString(<PokemonItem pokemon={pokemon} style={style} customTypes={customTypes} />),
        icon: ReactDOMServer.renderToString(pokemonIcon),
        checkpoints: ReactDOMServer.renderToString(<div />),
        genderSymbol: ReactDOMServer.renderToString(<GenderElementReact gender={pokemon?.gender} />),
        notes: pokemon.notes ?? '',
        linkedPokemon: ReactDOMServer.renderToString(<LinkedPokemon style={style} linkedPokemon={linkedPokemon} />),
        linkedPokemonData: linkedPokemon ?? null,
        extraData: '',
        movesColored: ReactDOMServer.renderToString(
            // @ts-expect-error
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
        movesColoredWithClasses: ReactDOMServer.renderToString(
            // @ts-expect-error
            <MovesBase
                style={style}
                customMoveMap={customMoveMap}
                customTypes={customTypes}
                generation={getGameGeneration(name)}
                moves={pokemon.moves}
                movesPosition={style.movesPosition}
            />,
        ),
    };

    console.log(view.pokeball, view.item);

    const CSS = (
        <style>{`
            ${customCSS}
        `}</style>
    );

    const teamViewHTML = customHTML ?? teamHTML;
    // mustache will sanitize the html from renderToString so instead we do it ourselves
    const html = teamViewHTML
        .replace(/\{{genderSymbol}}/g, view.genderSymbol)
        .replace(/\{{icon}}/g, view.icon)
        .replace(/\{{linkedPokemon}}/g, view.linkedPokemon)
        .replace(/\{{notes}}/g, view.notes)
        .replace(/\{{itemComponent}}/g, view.itemComponent)
        .replace(/\{{pokeballComponent}}/g, view.pokeballComponent)
        .replace(/\{{movesColoredWithClasses}}/g, view.movesColoredWithClasses)
        .replace(/\{{checkpoints}}/g, view.checkpoints)
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
                    }}>
                </div>
            </div>
        </>
    );
}

import * as React from 'react';
import { connect } from 'react-redux';

import { Pokemon } from 'models';
import {
    getBackgroundGradient,
    typeToColor,
    getPokemonImage,
    Styles,
    Generation,
    getGameGeneration,
    getContrastColor,
    gameOfOriginToColor,
} from 'utils';
import { GenderElement } from 'components/Shared';
import { selectPokemon } from 'actions';
import { reducers } from 'reducers';
import { Moves } from './Moves';
import * as Color from 'color';

const getMetLocationString = ({
    poke,
    oldMetLocationFormat,
}: {
    poke: Pokemon;
    oldMetLocationFormat: boolean;
}): string | null => {
    const determinePreposition = () =>
        poke.met && poke.met.toLocaleLowerCase().startsWith('route') ? 'on' : 'in';
    const met = poke.met || '';
    const metLevel = poke.metLevel || '';
    if (poke.met) {
        if (oldMetLocationFormat) {
            return `Met ${determinePreposition()} ${met}, from lv.${metLevel}`;
        } else {
            return `Met Location: ${met} at lv.${metLevel}`;
        }
    } else {
        return null;
    }
};

export interface TeamPokemonInfoProps {
    generation: Generation;
    style: Styles;
    pokemon: Pokemon;
}

export class TeamPokemonInfo extends React.PureComponent<TeamPokemonInfoProps> {
    public render() {
        const { pokemon, style } = this.props;
        const accentColor = style ? style.accentColor : '#111111';
        const isCardsTheme = this.props.style.template === 'Cards';
        const isCompactTheme = this.props.style.template === 'Compact';
        const getTypeOrNone = () => {
            if (pokemon) {
                if (pokemon.types) {
                    if (pokemon.types.length) {
                        return pokemon.types[0];
                    }
                }
            }
            return 'None';
        };
        return (
            <div
                className='pokemon-info'
                style={{
                    backgroundColor: isCardsTheme ? undefined : accentColor,
                    // backgroundImage: isCardsTheme ? undefined : `linear-gradient(to right, #2d2d2d 1px, transparent 1px), linear-gradient(to bottom, #2d2d2d 1px, transparent 1px)`,
                    backgroundImage: isCompactTheme
                        ? getBackgroundGradient(
                              pokemon.types != null ? pokemon.types[1] : 'Normal',
                              pokemon.types != null ? pokemon.types[0] : 'Normal',
                          )
                        : undefined,
                    color: isCompactTheme
                        ? getContrastColor(typeToColor(getTypeOrNone()))
                        : getContrastColor(accentColor),
                }}>
                <div className='pokemon-info-inner'>
                    <div className='pokemon-main-info'>
                        <span style={{ margin: '0.25rem 0 0' }} className='pokemon-nickname'>
                            {pokemon.nickname}
                        </span>
                        <span className='pokemon-name'>{pokemon.species}</span>
                        {GenderElement(pokemon.gender)}
                        {pokemon.level ? (
                            <span className='pokemon-level'>lv. {pokemon.level}</span>
                        ) : null}
                    </div>
                    {/* <span style={{
                            background: gameOfOriginToColor(pokemon.gameOfOrigin!),
                            color: getContrastColor(gameOfOriginToColor(pokemon.gameOfOrigin!)),
                            borderRadius: '.25rem',
                            display: 'inline-block',
                            fontSize: '90%',
                            margin: 0,
                            padding: '.25rem',
                            textAlign: 'center',
                            width: '200px',
                        }}>{ pokemon.gameOfOrigin }
                    </span> */}
                    <div className='pokemon-met'>
                        {getMetLocationString({
                            poke: pokemon,
                            oldMetLocationFormat: style.oldMetLocationFormat,
                        })}
                    </div>
                    {pokemon.nature && pokemon.nature !== 'None' ? (
                        <div className='pokemon-nature'>
                            <strong>{pokemon.nature}</strong> nature
                        </div>
                    ) : null}
                    {pokemon.ability ? (
                        <div className='pokemon-ability'>{pokemon.ability}</div>
                    ) : null}
                </div>
                {style.showPokemonMoves ? (
                    <Moves
                        generation={this.props.generation}
                        moves={pokemon.moves}
                        movesPosition={style.movesPosition}
                    />
                ) : null}
            </div>
        );
    }
}

export interface TeamPokemonBaseProps {
    pokemon: Pokemon;
    game: any;
    style: any;
    selectPokemon: selectPokemon;
}

export class TeamPokemonBaseMinimal extends React.PureComponent<
    TeamPokemonBaseProps & { spriteStyle: object }
> {
    public render() {
        const { pokemon } = this.props;
        return (
            <div
                className='pokemon-container minimal'
                style={{ color: getContrastColor(this.props.style.bgColor) }}>
                <div
                    style={{
                        backgroundImage: getPokemonImage({
                            customImage: pokemon.customImage,
                            forme: pokemon.forme as any,
                            species: pokemon.species,
                            style: this.props.style,
                            name: this.props.game.name,
                            shiny: pokemon.shiny,
                        }),
                        ...this.props.spriteStyle,
                    }}
                    className={`pokemon-image ${(pokemon.species || 'missingno').toLowerCase()} ${
                        this.props.style.imageStyle === 'round' ? 'round' : 'square'
                    }`}
                />
                <div className='pokemon-info'>
                    <div className='pokemon-info-inner'>
                        <span className='pokemon-nickname'>{pokemon.nickname}</span>
                        <span className='pokemon-name'>{pokemon.species}</span>
                        {pokemon.level ? (
                            <span className='pokemon-level'>lv. {pokemon.level}</span>
                        ) : null}
                    </div>
                </div>
            </div>
        );
    }
}

export class TeamPokemonBase extends React.Component<TeamPokemonBaseProps> {
    constructor(props: TeamPokemonBaseProps) {
        super(props);
    }

    public render() {
        const { pokemon, style, game, selectPokemon } = this.props;
        const poke = pokemon;

        const getFirstType = poke.types ? poke.types[0] : 'Normal';
        const spriteStyle =
            this.props.style.spritesMode && !this.props.style.scaleSprites
                ? {
                      backgroundSize: 'auto',
                      backgroundRepeat: 'no-repeat',
                  }
                : {
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                  };

        const addProp = (item: any) => {
            const propName = `data-${item.toLowerCase()}`;
            if (item === 'type') return { [propName]: poke[item].join(' ') };
            if (poke[item] == null || poke[item] === '') return {};
            return { [propName]: poke[item].toString() };
        };

        const dataKeys = [
            'id',
            'position',
            'species',
            'nickname',
            'status',
            'gender',
            'level',
            'metLevel',
            'nature',
            'ability',
            'item',
            'types',
            'forme',
            'moves',
            'causeOfDeath',
            'shiny',
            'champion',
            'num',
            'wonderTradedFor',
            'mvp',
            'customImage',
        ].sort();
        const data = dataKeys.reduce((prev, curr) => {
            return { ...prev, ...addProp(curr) };
        }, {});

        if (this.props.style.minimalTeamLayout) {
            return (
                <TeamPokemonBaseMinimal
                    selectPokemon={selectPokemon}
                    style={style}
                    game={game}
                    spriteStyle={spriteStyle}
                    pokemon={poke}
                />
            );
        }

        return (
            <div className='pokemon-container' {...data}>
                <div
                    role='presentation'
                    onClick={e => this.props.selectPokemon(poke.id)}
                    className={`${this.props.style.imageStyle} pokemon-image-wrapper`}
                    style={{
                        cursor: 'pointer',
                        background: this.props.style.teamPokemonBorder
                            ? getBackgroundGradient(
                                  poke.types != null ? poke.types[0] : 'Normal',
                                  poke.types != null ? poke.types[1] : 'Normal',
                              )
                            : 'transparent',
                    }}>
                    <div
                        style={{
                            backgroundImage: getPokemonImage({
                                customImage: poke.customImage,
                                forme: poke.forme as any,
                                species: poke.species,
                                shiny: poke.shiny,
                                style: this.props.style,
                                name: this.props.game.name,
                            }),
                            ...(spriteStyle as React.CSSProperties),
                        }}
                        className={`pokemon-image ${(poke.species || 'missingno').toLowerCase()} ${
                            this.props.style.imageStyle === 'round' ? 'round' : 'square'
                        }`}
                    />
                </div>
                {poke.item == null || poke.item === '' ? null : (
                    <div
                        className={`pokemon-item ${this.props.style.itemStyle}`}
                        style={{
                            borderColor: typeToColor(getFirstType) || 'transparent',
                            backgroundImage:
                                style.template === 'Hexagons'
                                    ? getBackgroundGradient(
                                          poke.types != null ? poke.types[0] : 'Normal',
                                          poke.types != null ? poke.types[1] : 'Normal',
                                      )
                                    : '',
                        }}>
                        <img
                            alt={poke.item}
                            src={`icons/hold-item/${(poke.item || '')
                                .toLowerCase()
                                .replace(/\s/g, '-')}.png`}
                        />
                    </div>
                )}
                <TeamPokemonInfo
                    generation={getGameGeneration(this.props.game.name)}
                    style={style}
                    pokemon={pokemon}
                />
            </div>
        );
    }
}

export const TeamPokemon = connect(
    (state: Partial<typeof reducers>) => ({
        style: state.style,
        game: state.game,
    }),
    {
        selectPokemon,
    },
    null,
    {
        pure: false
    }
)(TeamPokemonBase);

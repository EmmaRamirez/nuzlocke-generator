import * as React from 'react';
import { connect } from 'react-redux';

import { Pokemon, Game, Editor } from 'models';
import {
    getBackgroundGradient,
    typeToColor,
    getPokemonImage,
    Styles,
    Generation,
    getGameGeneration,
    getContrastColor,
    gameOfOriginToColor,
    formatBallText,
    speciesToNumber,
    isLocal,
    TemplateName,
} from 'utils';
import { GenderElement, ErrorBoundary } from 'components/Shared';
import { selectPokemon } from 'actions';
import { reducers } from 'reducers';
import { Moves } from './Moves';
import * as Color from 'color';
import { State } from 'state';
import { css, cx } from 'emotion';
import { PokemonIcon } from 'components/PokemonIcon';
import { getMetLocationString } from './getMetLocationString';
import { customTypes } from 'reducers/customTypes';

export interface TeamPokemonInfoProps {
    generation: Generation;
    style: Styles;
    pokemon: Pokemon;
    customTypes: State['customTypes'];
}

export class TeamPokemonInfo extends React.PureComponent<TeamPokemonInfoProps> {

    public render() {
        const { pokemon, style, customTypes } = this.props;

        console.log(pokemon);

        const accentColor = style ? style.accentColor : '#111111';
        const isCardsTheme = style.template === TemplateName.Cards;
        const isCompactTheme = style.template === TemplateName.Compact || style.template === TemplateName.CompactWithIcons;
        const getTypeOrNone = () => {
            if (pokemon) {
                if (pokemon.types) {
                    if (pokemon.types.length) {
                        return pokemon?.types[1];
                    }
                }
            }
            return 'None';
        };
        const stat = (stat, statName) => (
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', margin: '0 2px'}}>
                <div>{statName}</div>
                <div>{stat}</div>
            </div>
        );


        return (
            <ErrorBoundary>
                <div
                    className='pokemon-info'
                    style={{
                        backgroundColor: isCardsTheme ? undefined : accentColor,
                        // backgroundImage: isCardsTheme ? undefined : `linear-gradient(to right, #2d2d2d 1px, transparent 1px), linear-gradient(to bottom, #2d2d2d 1px, transparent 1px)`,
                        backgroundImage: isCompactTheme
                            ? getBackgroundGradient(
                                pokemon.types != null ? pokemon?.types[1] : 'Normal',
                                pokemon.types != null ? pokemon?.types[0] : 'Normal',
                                customTypes,
                            )
                            : undefined,
                        color: isCompactTheme
                            ? getContrastColor(typeToColor(getTypeOrNone(), customTypes))
                            : getContrastColor(accentColor),
                    }}>
                    <div className='pokemon-info-inner'>
                        <div className='pokemon-main-info'>
                            <span style={{ margin: '0.25rem 0 0' }} className='pokemon-nickname'>
                                {pokemon.nickname}
                            </span>
                            <span className='pokemon-name'>{pokemon.species}{
                                pokemon.item && style.itemStyle === 'text' ?
                                    ` @ ${pokemon.item}`
                                : null
                            }</span>
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
                            {
                                pokemon.pokeball && style.pokeballStyle === 'text' ?
                                    ` (in ${pokemon.pokeball})`
                                : null
                            }
                        </div>
                        {pokemon.nature && pokemon.nature !== 'None' ? (
                            <div className='pokemon-nature'>
                                <strong>{pokemon.nature}</strong> nature
                            </div>
                        ) : null}
                        {pokemon.ability ? (
                            <div className='pokemon-ability'>{pokemon.ability}</div>
                        ) : null}
                        {pokemon.notes && <div className='pokemon-notes'>{pokemon.notes}</div>}
                        {style.displayExtraData && pokemon.extraData ? (
                            <div style={{display: 'flex', justifyContent: 'space-evenly', fontSize: '12px', width: '255px'}}>
                                {stat(pokemon.extraData['currentHp'], 'HP')}
                                {stat(pokemon.extraData['attack'], 'ATK')}
                                {stat(pokemon.extraData['defense'], 'DEF')}
                                {stat(pokemon.extraData['special'], 'SPC')}
                                {stat(pokemon.extraData['speed'], 'SPE')}
                            </div>
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
            </ErrorBoundary>
        );
    }
}

export interface TeamPokemonBaseProps {
    pokemon: Pokemon;
    game: Game;
    style: Styles;
    selectPokemon: selectPokemon;
    editor: Editor;
    customTypes: State['customTypes'];
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
                            editor: this.props.editor,
                            gender: pokemon.gender,
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

    private getSpriteStyle() {
        if (this.props.style.spritesMode) {
            if (this.props.style.scaleSprites) {
                return {
                      backgroundSize: 'auto',
                      backgroundRepeat: 'no-repeat',
                  };
                } else {
                return {
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                  };
                }
            }
        if (this.props.style.teamImages === 'dream world') {
            return {
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
            };
        } else {
            return {
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            };
        }
    }

    public render() {
        const { pokemon, style, game, selectPokemon, editor, customTypes } = this.props;
        const poke = pokemon;

        const getFirstType = poke.types ? poke.types[0] : 'Normal';
        const getSecondType = poke.types ? poke.types[1] : 'Normal';
        const spriteStyle = this.getSpriteStyle();

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
                    editor={editor}
                    customTypes={customTypes}
                />
            );
        }

        const mvpLabelStyle = {
            base: css`
                position: absolute;
                top: 0;
                left: calc(50% - 3rem);
                width: 6rem;
                background: #e2d5a9;
                border: 1px solid #eee;
                padding: 2px .5rem;
                text-align: center;
                border-radius: 1rem;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #111;
                font-size: 90%;
                z-index: 10;
            `,
            Cards: css`
                top: 2.25rem;
            `,
            Hexagons: css`
                top: 18px;
                transform: scale(0.8);
            `,
            Generations: css`
                top: -4px;
            `
        };

        const itemLabelStyle = {
            base: css`
                background: #111;
                border: 5px solid white;
                bottom: 0;
                height: 3rem;
                display: flex;
                justify-content: center;
                align-items: center;
                left: 12px;
                padding: .5rem;
                position: absolute;
                width: 3rem;
                z-index: 10;
            `,
            ['round']: css`
              border-radius: 50%;
            `,
            ['square']: css`
              border-radius: 0;
            `,
            ['outer glow']: css`
                background: transparent !important;
                border: none !important;
                filter: drop-shadow(0 0 2px white);
                padding: 0;
                margin: 0;
                bottom: 0.5rem;
            `,
            ['text']: css`
                display: none !important;
            `
        };

        return (
            <div className='pokemon-container' {...data}>
                {style.template === 'Compact with Icons' && <PokemonIcon {...poke} />}
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
                                  customTypes,
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
                                editor: this.props.editor,
                                gender: poke.gender,
                            }),
                            ...(spriteStyle as React.CSSProperties),
                        }}
                        className={`pokemon-image ${(poke.species || 'missingno').toLowerCase()} ${
                            this.props.style.imageStyle === 'round' ? 'round' : 'square'
                        }`}
                    />
                </div>
                {poke.mvp && <div
                    className={cx(mvpLabelStyle.base, mvpLabelStyle[style.template], 'pokemon-mvp-label')}
                >
                    <span style={{marginRight: '0.5rem', fontWeight: 'bold'}}>MVP</span><img style={{height: '1rem'}} alt='' role='presentation' src='./assets/mvp-crown.png' />
                </div>}
                {poke.pokeball && poke.pokeball !== 'None' && <div
                            style={{
                                top: style.template === 'Cards' ? '1rem' : undefined,
                                left: '6rem',
                                zIndex: 10,
                                borderColor: typeToColor(getFirstType, customTypes) || 'transparent',
                                backgroundImage:
                                    style.template === 'Hexagons' || style.pokeballStyle === 'outer glow'
                                        ? getBackgroundGradient(
                                            poke.types != null ? poke.types[0] : 'Normal',
                                            poke.types != null ? poke.types[1] : 'Normal',
                                            customTypes,
                                        )
                                        : '',
                            }}
                            className={cx(itemLabelStyle.base, itemLabelStyle[style.pokeballStyle], 'pokemon-pokeball')}
                        >
                        <img
                            alt={poke.pokeball}
                            src={`icons/pokeball/${formatBallText(poke.pokeball)}.png`}
                        />
                    </div>
                }
                {(poke.item || poke.customItemImage) && !style.displayItemAsText ? (
                    <div
                        style={{
                            borderColor: typeToColor(getSecondType, customTypes) || 'transparent',
                            backgroundImage:
                                style.template === 'Hexagons' || style.itemStyle === 'outer glow'
                                    ? getBackgroundGradient(
                                          poke.types != null ? poke.types[0] : 'Normal',
                                          poke.types != null ? poke.types[1] : 'Normal',
                                          customTypes,
                                      )
                                    : '',
                        }}
                        className={cx(itemLabelStyle.base, itemLabelStyle[style.itemStyle], 'pokemon-item')}
                    >
                        <img
                            alt={poke.item}
                            src={poke.customItemImage ? poke.customItemImage : `icons/hold-item/${(poke.item || '')
                                .toLowerCase()
                                .replace(/\'/g, '')
                                .replace(/\s/g, '-')}.png`}
                        />
                    </div>
                ) : null}
                <TeamPokemonInfo
                    generation={getGameGeneration(this.props.game.name)}
                    style={style}
                    pokemon={pokemon}
                    customTypes={customTypes}
                />
            </div>
        );
    }
}

export const TeamPokemon = connect(
    (state: State) => ({
        style: state.style,
        game: state.game,
        editor: state.editor,
        customTypes: state.customTypes,
    }),
    {
        selectPokemon,
    },
    null,
    {
        pure: false
    }
)(TeamPokemonBase);

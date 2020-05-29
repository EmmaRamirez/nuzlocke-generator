import * as React from 'react';
import { connect } from 'react-redux';

import { Pokemon, Game } from 'models';
import { GenderElement } from 'components/Shared';
import {
    getPokemonImage,
    getContrastColor,
    Styles,
    Forme,
    gameOfOriginToColor,
    TemplateName,
} from 'utils';
import { selectPokemon } from 'actions';
import { PokemonIconBase } from 'components/PokemonIcon';
import { State } from 'state';

const spriteStyle = (style: Styles) => {
    if (style.spritesMode) {
        if (style.scaleSprites) {
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
    if (style.teamImages === 'dream world') {
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
};

// TODO: Convert to Class
export const DeadPokemonBase = (
    poke: Pokemon & { selectPokemon: selectPokemon } & { style: Styles } & { game: Game },
) => {
    const style = poke.style;
    const isCompactWithIcons = style.template === TemplateName.CompactWithIcons;
    const addForme = (species: string | undefined) => {
        if (poke.forme) {
            if (poke.forme === Forme.Alolan) {
                return `alolan-${species}`;
            }

            return species;
        } else {
            return species;
        }
    };
    const getAccentColor = (prop: any) => (prop.style ? prop.style.accentColor : '#111111');
    const useGameOfOriginColor =
        poke.gameOfOrigin &&
        poke.style.displayGameOriginForBoxedAndDead &&
        poke.style.displayBackgroundInsteadOfBadge;

    if (style.minimalDeadLayout && isCompactWithIcons) {
        return (
            <div
                className={'dead-pokemon-container'}
                data-league={poke.champion}
                style={{
                    background: useGameOfOriginColor
                        ? gameOfOriginToColor(poke.gameOfOrigin!)
                        : getAccentColor(poke),
                    color: useGameOfOriginColor
                        ? getContrastColor(gameOfOriginToColor(poke.gameOfOrigin!))
                        : getContrastColor(getAccentColor(poke)),
                    height: '50px',
                    fontSize: '90%',
                    outline: '1px solid #222',
                }}
            >
                <div
                    className="goc-circle"
                    style={{
                        background: `linear-gradient(to right, ${gameOfOriginToColor(
                            poke.gameOfOrigin!,
                        )}, transparent)`,
                        height: '100%',
                        width: '6rem',
                        position: 'absolute',
                        left: '0',
                        top: '0',
                        opacity: 0.7,
                    }}
                />
                <span style={{ filter: 'grayscale(100%)' }}>
                    <PokemonIconBase
                        onClick={(e) => poke.selectPokemon(poke.id)}
                        {...(poke as any)}
                    />
                </span>
                <div
                    style={{
                        margin: 0,
                        padding: 0,
                        lineHeight: '14px',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <div>
                        {poke.nickname} {GenderElement(poke.gender)} Levels {poke.metLevel}&mdash;
                        {poke.level}
                    </div>
                    <div>{poke.causeOfDeath}</div>
                    {style.displayGameOriginForBoxedAndDead &&
                        !poke.style.displayBackgroundInsteadOfBadge &&
                        poke.gameOfOrigin && (
                        <span
                            className="pokemon-gameoforigin"
                            style={{
                                fontSize: '80%',
                                borderRadius: '.25rem',
                                margin: '0',
                                marginTop: '.25rem',
                                marginLeft: '.25rem',
                                padding: '2px',
                                display: 'inline-block',
                                background: gameOfOriginToColor(poke.gameOfOrigin),
                                color: getContrastColor(gameOfOriginToColor(poke.gameOfOrigin)),
                            }}
                        >
                            {poke.gameOfOrigin}
                        </span>
                    )}
                </div>
            </div>
        );
    }

    if (style.minimalDeadLayout) {
        return (
            <div
                className={'dead-pokemon-container'}
                data-league={poke.champion}
                style={{
                    background: useGameOfOriginColor
                        ? gameOfOriginToColor(poke.gameOfOrigin!)
                        : getAccentColor(poke),
                    color: useGameOfOriginColor
                        ? getContrastColor(gameOfOriginToColor(poke.gameOfOrigin!))
                        : getContrastColor(getAccentColor(poke)),
                    height: '50px',
                    fontSize: '90%',
                    outline: '1px solid #222',
                }}
            >
                <span style={{ filter: 'grayscale(100%)' }}>
                    <PokemonIconBase
                        onClick={(e) => poke.selectPokemon(poke.id)}
                        {...(poke as any)}
                    />
                </span>
                <div
                    style={{
                        margin: 0,
                        padding: 0,
                        lineHeight: '14px',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <div>
                        {poke.nickname} {GenderElement(poke.gender)} Levels {poke.metLevel}&mdash;
                        {poke.level}
                    </div>
                    <div>{poke.causeOfDeath}</div>
                    {style.displayGameOriginForBoxedAndDead &&
                        !poke.style.displayBackgroundInsteadOfBadge &&
                        poke.gameOfOrigin && (
                        <span
                            className="pokemon-gameoforigin"
                            style={{
                                fontSize: '80%',
                                borderRadius: '.25rem',
                                margin: '0',
                                marginTop: '.25rem',
                                marginLeft: '.25rem',
                                padding: '2px',
                                display: 'inline-block',
                                background: gameOfOriginToColor(poke.gameOfOrigin),
                                color: getContrastColor(gameOfOriginToColor(poke.gameOfOrigin)),
                            }}
                        >
                            {poke.gameOfOrigin}
                        </span>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div
            className={'dead-pokemon-container'}
            data-league={poke.champion}
            style={{
                background: useGameOfOriginColor
                    ? gameOfOriginToColor(poke.gameOfOrigin!)
                    : getAccentColor(poke),
                color: useGameOfOriginColor
                    ? getContrastColor(gameOfOriginToColor(poke.gameOfOrigin!))
                    : getContrastColor(getAccentColor(poke)),
            }}
        >
            {style.template !== 'Generations' ? (
                <div
                    role="presentation"
                    onClick={(e) => poke.selectPokemon(poke.id)}
                    className={`dead-pokemon-picture ${
                        poke.style.spritesMode ? 'sprites-mode' : ''
                    }`}
                    style={{
                        backgroundImage: getPokemonImage({
                            customImage: poke.customImage,
                            forme: poke.forme as any,
                            shiny: poke.shiny,
                            species: poke.species,
                            style: poke.style,
                            name: poke.game.name,
                            gender: poke.gender,
                        }),
                        ...spriteStyle(style),
                        filter: style.grayScaleDeadPokemon ? 'grayscale(100%)' : 'none',
                    }}
                />
            ) : (
                <span style={{ filter: 'grayscale(100%)' }}>
                    <PokemonIconBase
                        onClick={(e) => poke.selectPokemon(poke.id)}
                        {...(poke as any)}
                    />
                </span>
            )}
            <div className="dead-pokemon-info">
                <div className="pokemon-d-nickname">
                    {poke.nickname} {GenderElement(poke.gender)}
                </div>
                <div className="pokemon-levels">
                    Levels {poke.metLevel}&mdash;{poke.level}
                </div>
                <br />
                <div className="pokemon-causeofdeath">{poke.causeOfDeath}</div>
                {style.displayGameOriginForBoxedAndDead &&
                    !poke.style.displayBackgroundInsteadOfBadge &&
                    poke.gameOfOrigin && (
                    <span
                        className="pokemon-gameoforigin"
                        style={{
                            fontSize: '80%',
                            borderRadius: '.25rem',
                            margin: '0',
                            marginTop: '.25rem',
                            marginLeft: '.25rem',
                            padding: '2px',
                            background: gameOfOriginToColor(poke.gameOfOrigin),
                            color: getContrastColor(gameOfOriginToColor(poke.gameOfOrigin)),
                        }}
                    >
                        {poke.gameOfOrigin}
                    </span>
                )}
            </div>
        </div>
    );
};

export const DeadPokemon = connect(
    (state: Pick<State, keyof State>) => ({ style: state.style, game: state.game }),
    {
        selectPokemon,
    },
)(DeadPokemonBase);

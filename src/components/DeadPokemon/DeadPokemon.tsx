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
    feature,
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

export type DeadPokemonProps = {
    selectPokemon: selectPokemon;
    style: Styles;
    game: Game;
    minimal: boolean;
} & Pokemon;

// TODO: Convert to Class
export const DeadPokemonBase = (poke: DeadPokemonProps) => {
    const style = poke.style;
    const isMinimal = poke.minimal || poke.style.minimalDeadLayout;
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
    const EMMA_MODE = feature.emmaMode;

    if (isMinimal && isCompactWithIcons) {
        return (
            <div
                className={'dead-pokemon-container'}
                data-league={poke.champion}
                data-game={poke.gameOfOrigin}
                style={{
                    background: useGameOfOriginColor
                        ? gameOfOriginToColor(poke.gameOfOrigin!)
                        : getAccentColor(poke),
                    color: useGameOfOriginColor
                        ? getContrastColor(gameOfOriginToColor(poke.gameOfOrigin!))
                        : getContrastColor(getAccentColor(poke)),
                    height: '50px',
                    fontSize: '90%',
                    //margin: '1px',
                    outline: EMMA_MODE ? '' : '1px solid #222',
                }}>
                <div
                    className="goc-circle"
                    style={{
                        background: EMMA_MODE
                            ? gameOfOriginToColor(poke.gameOfOrigin!)
                            : `linear-gradient(45deg, ${gameOfOriginToColor(
                                poke.gameOfOrigin!,
                            )}, transparent)`,
                        height: '100%',
                        width: poke.gameOfOrigin === 'Platinum' && EMMA_MODE ? '100%' : '50px',
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
                {poke.gameOfOrigin === 'Platinum' && (
                    <div
                        style={{
                            margin: 0,
                            padding: 0,
                            lineHeight: '14px',
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            zIndex: 1,
                        }}>
                        <div>
                            {poke.nickname} {GenderElement(poke.gender)} Levels {poke.metLevel}
                            &mdash;
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
                                    color: getContrastColor(
                                        gameOfOriginToColor(poke.gameOfOrigin),
                                    ),
                                }}>
                                {poke.gameOfOrigin}
                            </span>
                        )}
                    </div>
                )}
            </div>
        );
    }

    if (isMinimal) {
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
                }}>
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
                    }}>
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
                            }}>
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
            }}>
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
                        }}>
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

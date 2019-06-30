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
} from 'utils';
import { selectPokemon } from 'actions';
import { PokemonIconBase } from 'components/PokemonIcon';
import { State } from 'state';

const spriteStyle = (style: Styles) =>
    style.spritesMode && !style.scaleSprites
        ? { backgroundSize: 'auto', backgroundRepeat: 'no-repeat' }
        : { backgroundSize: 'cover', backgroundRepeat: 'no-repeat' };

// TODO: Convert to Class
export const DeadPokemonBase = (
    poke: Pokemon & { selectPokemon: selectPokemon } & { style: Styles } & { game: Game },
) => {
    const style = poke.style;
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
    const getClassname = () =>
        poke.champion ? 'dead-pokemon-container champion' : 'dead-pokemon-container';
    const getAccentColor = (prop: any) => (prop.style ? prop.style.accentColor : '#111111');
    const useGameOfOriginColor = poke.gameOfOrigin && poke.style.displayGameOriginForBoxedAndDead && poke.style.displayBackgroundInsteadOfBadge;

    if (style.minimalDeadLayout) {
        return (
            <div
                className={getClassname()}
                data-league={poke.champion}
                style={{
                    background: useGameOfOriginColor ? gameOfOriginToColor(poke.gameOfOrigin!) : getAccentColor(poke),
                    color: useGameOfOriginColor ? getContrastColor(gameOfOriginToColor(poke.gameOfOrigin!)) : getContrastColor(getAccentColor(poke)),
                    height: 'auto',
                    fontSize: '90%',
                }}>
                <span style={{ filter: 'grayscale(100%)' }}>
                    <PokemonIconBase {...poke as any} />
                </span>
                <div className='dead-pokemon-info' style={{margin: 0, padding: 0}}>
                    <div className='pokemon-d-nickname'>
                        {poke.nickname} {GenderElement(poke.gender)}
                    </div>
                    <div className='pokemon-levels'>
                        Levels {poke.metLevel}&mdash;{poke.level}
                    </div>
                    <div className='pokemon-causeofdeath'>{poke.causeOfDeath}</div>
                    {style.displayGameOriginForBoxedAndDead && !poke.style.displayBackgroundInsteadOfBadge && poke.gameOfOrigin &&
                        <span className='pokemon-gameoforigin' style={{
                            fontSize: '80%',
                            borderRadius: '.25rem',
                            margin: '0',
                            marginTop: '.25rem',
                            padding: '.25rem',
                            display: 'inline-block',
                            background: gameOfOriginToColor(poke.gameOfOrigin),
                            color: getContrastColor(gameOfOriginToColor(poke.gameOfOrigin)),
                        }}>{poke.gameOfOrigin}</span>
                    }
                </div>
            </div>
        );
    }

    return (
        <div
            className={getClassname()}
            data-league={poke.champion}
            style={{
                background: useGameOfOriginColor ? gameOfOriginToColor(poke.gameOfOrigin!) : getAccentColor(poke),
                color: useGameOfOriginColor ? getContrastColor(gameOfOriginToColor(poke.gameOfOrigin!)) : getContrastColor(getAccentColor(poke)),
            }}>
            {style.template !== 'Generations' ? (
                <div
                    role='presentation'
                    onClick={e => poke.selectPokemon(poke.id)}
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
                        }),
                        ...spriteStyle(style),
                        filter: style.grayScaleDeadPokemon ? 'grayscale(100%)' : 'none',
                    }}
                />
            ) : (
                <span style={{ filter: 'grayscale(100%)' }}>
                    <PokemonIconBase {...poke as any} />
                </span>
            )}
            <div className='dead-pokemon-info'>
                <div className='pokemon-d-nickname'>
                    {poke.nickname} {GenderElement(poke.gender)}
                </div>
                <div className='pokemon-levels'>
                    Levels {poke.metLevel}&mdash;{poke.level}
                </div>
                <br />
                <div className='pokemon-causeofdeath'>{poke.causeOfDeath}</div>
                {style.displayGameOriginForBoxedAndDead && !poke.style.displayBackgroundInsteadOfBadge && poke.gameOfOrigin &&
                    <span className='pokemon-gameoforigin' style={{
                        fontSize: '80%',
                        borderRadius: '.25rem',
                        margin: '0',
                        marginTop: '.25rem',
                        padding: '.25rem',
                        background: gameOfOriginToColor(poke.gameOfOrigin),
                        color: getContrastColor(gameOfOriginToColor(poke.gameOfOrigin)),
                    }}>{poke.gameOfOrigin}</span>
                }
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

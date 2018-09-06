import * as React from 'react';
import { connect } from 'react-redux';

import { Pokemon, Game } from 'models';
import { GenderElement } from 'components/Shared';
import { getBackgroundGradient, getPokemonImage, getSpriteIcon, speciesToNumber, getContrastColor, Styles, Forme } from 'utils';
import { selectPokemon } from 'actions';
import { PokemonIconBase } from 'components/PokemonIcon';
import { State } from 'state';

const spriteStyle = (style: Styles) => style.spritesMode && !style.scaleSprites
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
    const getAccentColor = (prop: any) => prop.style ? prop.style.accentColor : '#111111';
    console.log(`deadPokemonColor`, getAccentColor(poke));
    return (
        <div className={getClassname()} data-league={poke.champion} style={{
            background: getAccentColor(poke),
            color: getContrastColor(getAccentColor(poke))
        }}>
                { style.template !== 'Generations' ? <div
                    role='presentation'
                    onClick={e => poke.selectPokemon(poke.id)}
                    className={`dead-pokemon-picture ${poke.style.spritesMode ? 'sprites-mode' : ''}`}
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
                :
                <span style={{ filter: 'grayscale(100%)' }}>
                    <PokemonIconBase {...poke as any} />
                </span>
            }
            <div className='dead-pokemon-info'>
                <div className='pokemon-d-nickname'>
                    {poke.nickname} {GenderElement(poke.gender)}
                </div>
                <div className='pokemon-levels'>
                    Levels {poke.metLevel}&mdash;{poke.level}
                </div>
                <br />
                <div className='pokemon-causeofdeath'>{poke.causeOfDeath}</div>
            </div>
        </div>
    );
};

export const DeadPokemon = connect((state: Pick<State, keyof State>) => ({ style: state.style, game: state.game }), {
    selectPokemon,
})(DeadPokemonBase);

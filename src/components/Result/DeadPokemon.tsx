import * as React from 'react';
import { connect } from 'react-redux';

import { Pokemon } from 'models';
import { getBackgroundGradient } from './getBackgroundGradient';
import { getGenderElement } from './getGenderElement';
import { getSpriteIcon, speciesToNumber } from 'utils';
import { getPokemonImage } from './getPokemonImage';
import { selectPokemon } from 'actions';
import { PokemonIconBase } from '../Editor/PokemonIcon';

export const DeadPokemonBase = (
    poke: Pokemon & { selectPokemon } & { style: any } & { game: any },
) => {
    const style = poke.style;
    const addForme = (species: string | undefined) => {
        if (poke.forme) {
            if (poke.forme === 'Alolan' || poke.forme === 'Alola') {
                return `alolan-${species}`;
            }

            return species;
        } else {
            return species;
        }
    };
    const getClassname = () =>
        poke.champion ? 'dead-pokemon-container champion' : 'dead-pokemon-container';
    return (
        <div className={getClassname()} data-league={poke.champion}>
            {/* <div
                role='presentation'
                onClick={e => poke.selectPokemon(poke.id)}
                className={`dead-pokemon-picture ${poke.style.spritesMode ? 'sprites-mode' : ''}`}
                style={{
                    backgroundImage: getPokemonImage({
                        customImage: poke.customImage,
                        forme: poke.forme,
                        species: poke.species,
                        style: poke.style,
                        name: poke.game.name,
                    }),
                    filter: style.grayScaleDeadPokemon ? 'grayscale(100%)' : 'none',
                }}
            /> */}
            <span style={{ filter: 'grayscale(100%)' }}>
                <PokemonIconBase {...poke as any} />
            </span>
            <div className='dead-pokemon-info'>
                <div className='pokemon-d-nickname'>
                    {poke.nickname} {getGenderElement(poke.gender)}
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

export const DeadPokemon = connect((state: any) => ({ style: state.style, game: state.game }), {
    selectPokemon,
})(DeadPokemonBase);

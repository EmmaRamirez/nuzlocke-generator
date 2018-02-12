import * as React from 'react';
import { connect } from 'react-redux';

import { Pokemon } from 'models';
import { getBackgroundGradient } from './getBackgroundGradient';
import { getGenderElement } from './getGenderElement';
import { getSpriteIcon, speciesToNumber } from 'utils';
import { selectPokemon } from 'actions';

export const DeadPokemonBase = (poke: Pokemon & { selectPokemon } & { style: any }) => {
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
    const getImage = (): string => {
        if (poke.customImage) {
            return `url(${poke.customImage})`;
        }
        if (poke.style.teamImages === 'sugimori') {
            return `url(https://assets.pokemon.com/assets/cms2/img/pokedex/full/${
                (speciesToNumber(poke.species) || 0).toString().padStart(3 , '0')
            }.png)`;
        }
        return `url(img/${(
            addForme(poke.species.replace(/\s/g, '')) || 'missingno'
        ).toLowerCase()}.jpg)`;
    };
    const getClassname = () =>
        poke.champion ? 'dead-pokemon-container champion' : 'dead-pokemon-container';
    return (
        <div className={getClassname()} data-league={poke.champion}>
            <div
                role='presentation'
                onClick={e => poke.selectPokemon(poke.id)}
                className='dead-pokemon-picture'
                style={{
                    backgroundImage: getImage(),
                }}
            />
            <div className='dead-pokemon-info'>
                <div className='pokemon-d-nickname'>
                    {poke.nickname} {getGenderElement(poke.gender)}
                </div>
                <div className='pokemon-levels'>
                    Levels {poke.metLevel}&mdash;{poke.level}
                </div>
                <div className='pokemon-causeofdeath'>{poke.causeOfDeath}</div>
            </div>
        </div>
    );
};

export const DeadPokemon = connect((state:any) => ({ style: state.style }), { selectPokemon })(DeadPokemonBase);

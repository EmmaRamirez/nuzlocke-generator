import * as React from 'react';

import { Pokemon } from '../../models';
import { getBackgroundGradient } from './getBackgroundGradient';
import { getGenderElement } from './getGenderElement';
import { getSpriteIcon } from 'utils';

export const DeadPokemon = (poke: Pokemon) => {
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
        return `url(img/${
            // @ts-ignore
            addForme((poke ? poke.species : '').replace(/\s/g, '') || 'missingno').toLowerCase()
        }.jpg)`;
    };
    const getClassname = () =>
        poke.champion ? 'dead-pokemon-container champion' : 'dead-pokemon-container';
    return (
        <div className={getClassname()} data-league={poke.champion}>
            <div
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

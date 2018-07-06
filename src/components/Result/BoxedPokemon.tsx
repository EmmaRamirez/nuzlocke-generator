import * as React from 'react';
import { connect } from 'react-redux';

import { Pokemon } from 'models';
import { selectPokemon } from 'actions';
import { getBackgroundGradient } from './getBackgroundGradient';
import { getGenderElement } from './getGenderElement';
import { getSpriteIcon, speciesToNumber } from 'utils';
import { PokemonIcon } from '../PokemonIcon';

export const BoxedPokemonBase = (poke: Pokemon & { selectPokemon }) => {
    return (
        <div className='boxed-pokemon-container'>
            <PokemonIcon
                species={poke.species}
            />
            <div className='boxed-pokemon-info'>
                <span className='boxed-pokemon-name'>
                    {poke.nickname} {getGenderElement(poke.gender)}{' '}
                    {poke.level ? <span>lv. {poke.level}</span> : null}
                </span>
            </div>
        </div>
    );
};

export const BoxedPokemon = connect(null, { selectPokemon })(BoxedPokemonBase);

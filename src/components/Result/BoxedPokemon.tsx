import * as React from 'react';
import { connect } from 'react-redux';

import { Pokemon } from 'models';
import { selectPokemon } from 'actions';
import { getBackgroundGradient } from './getBackgroundGradient';
import { getGenderElement } from './getGenderElement';
import { getSpriteIcon } from 'utils';

export const BoxedPokemonBase = (poke: Pokemon & { selectPokemon }) => {
    return (
        <div className='boxed-pokemon-container'>
            <div
                role='presentation'
                onClick={e => poke.selectPokemon(poke.id)}
                className='boxed-pokemon-image'
                style={{
                    backgroundImage: `url(${getSpriteIcon(
                        poke.species || 'ditto',
                        poke.forme as any,
                    )})`,
                }}
            />
            <div className='boxed-pokemon-info'>
                <span className='boxed-pokemon-name'>
                    {poke.nickname} {getGenderElement(poke.gender)} { poke.level ? <span>lv. {poke.level}</span> : null }
                </span>
            </div>
        </div>
    );
};

export const BoxedPokemon = connect(null, { selectPokemon })(BoxedPokemonBase);

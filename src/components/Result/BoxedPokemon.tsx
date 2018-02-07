import * as React from 'react';

import { Pokemon } from '../../models';
import { getBackgroundGradient } from './getBackgroundGradient';
import { getGenderElement } from './getGenderElement';
import { getSpriteIcon } from 'utils';



export const BoxedPokemon = (poke:Pokemon) => {
    return (
        <div className='boxed-pokemon-container'>
            <div className='boxed-pokemon-image' style={{
                backgroundImage: `url(${getSpriteIcon(poke.species || 'ditto', poke.forme as any)})`
            }}></div>
            <div className='boxed-pokemon-info'>
                <span className='boxed-pokemon-name'>{poke.nickname} {getGenderElement(poke.gender)} lv. {poke.level}</span>
            </div>
        </div>
    );
};
import * as React from 'react';
import { connect } from 'react-redux';

import { Pokemon } from 'models';
import { selectPokemon } from 'actions';
import { getBackgroundGradient, getSpriteIcon, speciesToNumber } from 'utils';
import { PokemonIcon } from 'components/PokemonIcon';
import { GenderElement } from 'components/Shared';

export const BoxedPokemonBase = (poke: Pokemon & { selectPokemon }) => {
    return (
        <div className='boxed-pokemon-container'>
            <PokemonIcon
                species={poke.species}
                id={poke.id}
                style={{ cursor: 'pointer' }}
                forme={poke.forme}
                shiny={poke.shiny}
            />
            <div className='boxed-pokemon-info'>
                <span className='boxed-pokemon-name'>
                    {poke.nickname} {GenderElement(poke.gender)}{' '}
                    {poke.level ? <span>lv. {poke.level}</span> : null}
                </span>
            </div>
        </div>
    );
};

export const BoxedPokemon = connect(null, { selectPokemon })(BoxedPokemonBase);

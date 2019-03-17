import * as React from 'react';
import { connect } from 'react-redux';
import { css, cx } from 'emotion';

import { Pokemon } from 'models';
import { selectPokemon } from 'actions';
import {
    getContrastColor,
    Styles,
} from 'utils';
import { PokemonIcon } from 'components/PokemonIcon';
import { GenderElement } from 'components/Shared';
import { State } from 'state';

type BoxedPokemonProps = Pokemon & { selectPokemon: selectPokemon } & { style: Styles };

const getAccentColor = (prop: BoxedPokemonProps) =>
    prop.style ? prop.style.accentColor : '#111111';

const boxedPokemonContainer = css`
    width: calc(100% / 6);
`;

const boxedPokemonContainer_minimal = css`
    width: auto;
`;

// TODO: Convert to class
export const BoxedPokemonBase = (poke: BoxedPokemonProps) => {
    const isMinimal = poke.style.minimalBoxedLayout;
    return (
        <div
            className={cx(isMinimal ? boxedPokemonContainer_minimal : boxedPokemonContainer, 'boxed-pokemon-container')}
            style={{
                background: getAccentColor(poke),
                color: getContrastColor(getAccentColor(poke)),
            }}>
            <PokemonIcon
                species={poke.species}
                id={poke.id}
                style={{ cursor: 'pointer' }}
                forme={poke.forme}
                shiny={poke.shiny}
                gender={poke.gender}
                customIcon={poke.customIcon}
                className={'boxed-pokemon-icon'}
            />
            { isMinimal ?
                    null :
                <div className='boxed-pokemon-info' style={{ borderLeftColor: getAccentColor(poke) }}>
                    <span className='boxed-pokemon-name'>
                        {poke.nickname} {GenderElement(poke.gender)}{' '}
                        {poke.level ? <span>lv. {poke.level}</span> : null}
                    </span>
                </div>
            }
        </div>
    );
};

export const BoxedPokemon = connect((state: Pick<State, keyof State>) => ({ style: state.style }), { selectPokemon })(
    BoxedPokemonBase,
);

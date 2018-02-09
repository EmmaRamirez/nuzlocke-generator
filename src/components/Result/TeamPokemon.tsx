import * as React from 'react';
import { connect } from 'react-redux';

import { Pokemon } from 'models';
import { getBackgroundGradient } from './getBackgroundGradient';
import { getGenderElement } from './getGenderElement';
import { movesByType } from './movesByType';
import { typeToColor } from './typeToColor';
import { addForme } from 'utils';

import { selectPokemon } from 'actions';

const getMoveType = move => {
    for (const type in movesByType) {
        if (movesByType.hasOwnProperty(type)) {
            if (
                movesByType[type].some((value, index) => {
                    return move === value;
                })
            )
                return type;
        }
    }

    return 'Normal';
};

const generateMoves = moves => {
    return moves.map((move, index) => {
        move = move.trim();
        const type = getMoveType(move);
        return (
            <div key={index} className={`move ${type}-type`}>
                {move}
            </div>
        );
    });
};

export const TeamPokemonBase = (props: Pokemon & { selectPokemon }) => {
    const poke = props;
    const moves =
        poke.moves == null ? '' : <div className='pokemon-moves'>{generateMoves(poke.moves)}</div>;
    const getImage = (): string => {
        if (poke.customImage) {
            return `url(${poke.customImage})`;
        }
        return `url(img/${(
            addForme(poke.species.replace(/\s/g, ''), poke.forme) || 'missingno'
        ).toLowerCase()}.jpg)`;
    };
    const getFirstType = poke.types ? poke.types[0] : 'Normal';
    return (
        <div className='pokemon-container'>
            <div
                role='presentation'
                onClick={e => props.selectPokemon(poke.id)}
                className='bubble'
                style={{
                    cursor: 'pointer',
                    background: getBackgroundGradient(
                        poke.types != null ? poke.types[0] : '',
                        poke.types != null ? poke.types[1] : '',
                    ),
                }}>
                <div
                    style={{
                        backgroundImage: getImage(),
                    }}
                    className={`pokemon-image ${(poke.species || 'missingno').toLowerCase()}`}
                />
            </div>
            {poke.item == null ? null : (
                <div
                    className='pokemon-item'
                    style={{
                        borderColor: typeToColor(getFirstType),
                    }}>
                    <img
                        alt={poke.item}
                        src={`http://www.serebii.net/itemdex/sprites/${poke.item
                            .toLowerCase()
                            .replace(/\s/g, '')}.png`}
                    />
                </div>
            )}
            <div className='pokemon-info'>
                <div className='pokemon-info-inner'>
                    <span className='pokemon-nickname'>{poke.nickname}</span>
                    <span className='pokemon-name'>{poke.species}</span>
                    {getGenderElement(poke.gender)}
                    <span className='pokemon-level'>lv. {poke.level}</span>
                    <br />
                    <span className='pokemon-location'>
                        {poke.met === 'Starter' ? poke.met : `Met on ${poke.met}`}, from lv.{' '}
                        {poke.metLevel}
                    </span>
                    <br />
                    <span className='pokemon-nature'>
                        <strong>{poke.nature}</strong> nature
                    </span>
                    <br />
                    <span className='pokemon-ability'>{poke.ability}</span>
                </div>
                {moves}
            </div>
        </div>
    );
};

export const TeamPokemon = connect(null, {
    selectPokemon,
})(TeamPokemonBase as any);

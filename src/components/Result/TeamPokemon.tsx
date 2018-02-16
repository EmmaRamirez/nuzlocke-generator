import * as React from 'react';
import { connect } from 'react-redux';

import { Pokemon } from 'models';
import { getBackgroundGradient } from './getBackgroundGradient';
import { getGenderElement } from './getGenderElement';
import { movesByType } from './movesByType';
import { typeToColor } from './typeToColor';
import { addForme, getSpriteIcon, speciesToNumber } from 'utils';

import { selectPokemon } from 'actions';

export const getMoveType = move => {
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
            <div
                key={index}
                className={`move ${type}-type ${move.length >= 12 ? 'long-text-move' : ''}`}>
                {move}
            </div>
        );
    });
};

export const TeamPokemonBase = (props: Pokemon & { selectPokemon } & { style: any }) => {
    const poke = props;
    const moves =
        poke.moves == null ? (
            ''
        ) : (
            <div className={`pokemon-moves ${props.style.movesPosition}`}>
                {generateMoves(poke.moves)}
            </div>
        );
    const sugiFormeNotation = forme => {
        if (typeof forme === 'undefined') return '';
        // If the forme exists, we default to '_f2'
        if (forme != null || forme !== 'Normal' || forme === 'Alolan' || forme === 'Mega') return '_f2';
        // Pokemon with more than 1 extra forme have different notations
        if (forme === 'Sandy' || forme === 'Pau\'u') return '_f3';
        if (forme === 'Sensu') return '_f4';
        return '';
    };
    const getImage = (): string => {
        if (poke.customImage) {
            return `url(${poke.customImage})`;
        }
        if (props.style.teamImages === 'sugimori') {
            return `url(https://assets.pokemon.com/assets/cms2/img/pokedex/full/${(
                speciesToNumber(poke.species) || 0
            )
                .toString()
                .padStart(3, '0')
                + (sugiFormeNotation(poke.forme))
            }.png)`;
        }
        return `url(img/${(
            addForme(poke.species.replace(/\s/g, ''), poke.forme) || 'missingno'
        ).toLowerCase()}.jpg)`;
    };
    const getFirstType = poke.types ? poke.types[0] : 'Normal';

    const addProp = item => {
        const propName = `data-${item.toLowerCase()}`;
        if (item === 'type') return { [propName]: poke[item].join(' ') };
        if (poke[item] == null || poke[item] === '') return {};
        return { [propName]: poke[item].toString() };
    };

    const dataKeys = [
        'id',
        'position',
        'species',
        'nickname',
        'status',
        'gender',
        'level',
        'metLevel',
        'nature',
        'ability',
        'item',
        'types',
        'forme',
        'moves',
        'causeOfDeath',
        'shiny',
        'champion',
        'num',
        'wonderTradedFor',
        'mvp',
        'customImage',
    ];
    const data = dataKeys.reduce((prev, curr) => {
        return { ...prev, ...addProp(curr) };
    }, {});

    const generateMetData = () => {
        if (poke.met) {
            if (props.style.oldMetLocationFormat) {
                return (
                    <span className='pokemon-location'>
                        {poke.met === 'Starter' ? poke.met : `Met on ${poke.met}`}{
                            poke.metLevel ? `, from lv.${poke.metLevel}` : null }
                    </span>
                );
            } else {
                return (
                    <span className='pokemon-location'>
                        Met Location: {poke.met}{ poke.metLevel ? `, at lv.${poke.metLevel}` : null }
                    </span>
                );
            }
        } else {
            return null;
        }
    };

    if (props.style.minimalTeamLayout) {
        return (
            <div className='pokemon-container minimal' {...data}>
                <div
                    style={{
                        backgroundImage: getImage(),
                    }}
                    className={`pokemon-image ${(poke.species || 'missingno').toLowerCase()} ${
                        props.style.imageStyle === 'round' ? 'round' : 'square'
                    }`}
                />
                <div className='pokemon-info'>
                    <div className='pokemon-info-inner'>
                        <span className='pokemon-nickname'>{poke.nickname}</span>
                        <span className='pokemon-name'>{poke.species}</span>
                        {poke.level ? (
                            <span className='pokemon-level'>lv. {poke.level}</span>
                        ) : null}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className='pokemon-container' {...data}>
            <div
                role='presentation'
                onClick={e => props.selectPokemon(poke.id)}
                className={props.style.imageStyle === 'round' ? 'round' : 'square'}
                style={{
                    cursor: 'pointer',
                    background: props.style.teamPokemonBorder
                        ? getBackgroundGradient(
                              poke.types != null ? poke.types[0] : '',
                              poke.types != null ? poke.types[1] : '',
                          )
                        : 'transparent',
                }}>
                <div
                    style={{
                        backgroundImage: getImage(),
                    }}
                    className={`pokemon-image ${(poke.species || 'missingno').toLowerCase()} ${
                        props.style.imageStyle === 'round' ? 'round' : 'square'
                    }`}
                />
            </div>
            {poke.item == null || poke.item === '' ? null : (
                <div
                    className={`pokemon-item ${
                        props.style.imageStyle === 'round' ? 'round' : 'square'
                    }`}
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
                    <span style={{ margin: '0.25rem 0 0'}} className='pokemon-nickname'>{poke.nickname}</span>
                    <span className='pokemon-name'>{poke.species}</span>
                    {getGenderElement(poke.gender)}
                    {poke.level ? <span className='pokemon-level'>lv. {poke.level}</span> : null}
                    { generateMetData() }
                    {poke.nature && poke.nature !== 'None' ? (
                        <div className='pokemon-nature'>
                            <strong>{poke.nature}</strong> nature
                        </div>
                    ) : null}
                    {poke.ability ? <div className='pokemon-ability'>{poke.ability}</div> : null}
                </div>
                {props.style.showPokemonMoves ? moves : null}
            </div>
        </div>
    );
};

export const TeamPokemon = connect(
    (state: any) => ({
        style: state.style,
    }),
    {
        selectPokemon,
    },
)(TeamPokemonBase as any);

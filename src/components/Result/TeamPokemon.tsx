import * as React from 'react';
import { connect } from 'react-redux';

import { Pokemon } from 'models';
import { getBackgroundGradient } from './getBackgroundGradient';
import { getGenderElement } from './getGenderElement';
import { movesByType } from './movesByType';
import { typeToColor } from './typeToColor';
import { getPokemonImage } from './getPokemonImage';
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

export const TeamPokemonBase = (
    props: Pokemon & { selectPokemon } & { style: any } & { game: any },
) => {
    const poke = props;
    const moves =
        poke.moves == null ? (
            ''
        ) : (
            <div className={`pokemon-moves ${props.style.movesPosition}`}>
                {generateMoves(poke.moves)}
            </div>
        );
    const getFirstType = poke.types ? poke.types[0] : 'Normal';
    const spriteStyle = props.style.spritesMode
        ? { backgroundSize: 'auto', backgroundRepeat: 'no-repeat' }
        : {};

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
    ].sort();
    const data = dataKeys.reduce((prev, curr) => {
        return { ...prev, ...addProp(curr) };
    }, {});

    const generateMetData = () => {
        const determinePreposition = () =>
            poke.met && poke.met.toLocaleLowerCase().startsWith('route') ? 'on' : 'in';
        if (poke.met) {
            if (props.style.oldMetLocationFormat) {
                return (
                    <div className='pokemon-location'>
                        {poke.met === 'Starter'
                            ? poke.met
                            : `Met ${determinePreposition()} ${poke.met}`}
                        {poke.metLevel ? `, from lv.${poke.metLevel}` : null}
                    </div>
                );
            } else {
                return (
                    <div className='pokemon-location'>
                        Met Location: {poke.met}
                        {poke.metLevel ? `, at lv.${poke.metLevel}` : null}
                    </div>
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
                        backgroundImage: getPokemonImage({
                            customImage: poke.customImage,
                            forme: poke.forme,
                            species: poke.species,
                            style: props.style,
                            name: props.game.name,
                        }),
                        ...spriteStyle,
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
                className={`${props.style.imageStyle} pokemon-image-wrapper`}
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
                        backgroundImage: getPokemonImage({
                            customImage: poke.customImage,
                            forme: poke.forme,
                            species: poke.species,
                            style: props.style,
                            name: props.game.name,
                        }),
                        ...spriteStyle,
                    }}
                    className={`pokemon-image ${(poke.species || 'missingno').toLowerCase()} ${
                        props.style.imageStyle === 'round' ? 'round' : 'square'
                    }`}
                />
            </div>
            {poke.item == null || poke.item === '' ? null : (
                <div
                    className={`pokemon-item ${props.style.itemStyle}`}
                    style={{
                        borderColor: typeToColor(getFirstType) || 'transparent',
                    }}>
                    <img
                        alt={poke.item}
                        src={`icons/hold-item/${(poke.item || '')
                            .toLowerCase()
                            .replace(/\s/g, '-')}.png`}
                    />
                </div>
            )}
            <div className='pokemon-info'>
                <div className='pokemon-info-inner'>
                    <div className='pokemon-main-info'>
                        <span style={{ margin: '0.25rem 0 0' }} className='pokemon-nickname'>
                            {poke.nickname}
                        </span>
                        <span className='pokemon-name'>{poke.species}</span>
                        {getGenderElement(poke.gender)}
                        {poke.level ? (
                            <span className='pokemon-level'>lv. {poke.level}</span>
                        ) : null}
                    </div>
                    {generateMetData()}
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
        game: state.game,
    }),
    {
        selectPokemon,
    },
)(TeamPokemonBase as any);

import * as React from 'react';
import { connect } from 'react-redux';

import { Pokemon } from 'models';
import { getBackgroundGradient,
        typeToColor,
        getPokemonImage,
        getMoveType
    } from 'utils';
import { GenderElement } from 'components/Shared';
import { selectPokemon } from 'actions';


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

const generateMetData = (props: TeamPokemonBaseProps) => {
    const { pokemon } = props;
    const poke = pokemon;
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

export interface TeamPokemonBaseProps {
    pokemon: Pokemon
    game: any;
    style: any;
    selectPokemon: selectPokemon;
}

export class TeamPokemonBase extends React.Component <TeamPokemonBaseProps> {
    constructor(props) {
        super(props);
    }

    public render() {
        const { pokemon, style, game, selectPokemon } = this.props;
        const poke = pokemon;

        const moves =
            poke.moves == null ? (
                ''
            ) : (
                <div className={`pokemon-moves ${this.props.style.movesPosition}`}>
                    {generateMoves(poke.moves)}
                </div>
            );
        const getFirstType = poke.types ? poke.types[0] : 'Normal';
        const spriteStyle = this.props.style.spritesMode
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

        if (this.props.style.minimalTeamLayout) {
            return (
                <div className='pokemon-container minimal' {...data}>
                    <div
                        style={{
                            backgroundImage: getPokemonImage({
                                customImage: poke.customImage,
                                forme: poke.forme,
                                species: poke.species,
                                style: this.props.style,
                                name: this.props.game.name,
                            }),
                            ...spriteStyle,
                        }}
                        className={`pokemon-image ${(poke.species || 'missingno').toLowerCase()} ${
                            this.props.style.imageStyle === 'round' ? 'round' : 'square'
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
                    onClick={e => this.props.selectPokemon(poke.id)}
                    className={`${this.props.style.imageStyle} pokemon-image-wrapper`}
                    style={{
                        cursor: 'pointer',
                        background: this.props.style.teamPokemonBorder
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
                                style: this.props.style,
                                name: this.props.game.name,
                            }),
                            ...spriteStyle,
                        }}
                        className={`pokemon-image ${(poke.species || 'missingno').toLowerCase()} ${
                            this.props.style.imageStyle === 'round' ? 'round' : 'square'
                        }`}
                    />
                </div>
                {poke.item == null || poke.item === '' ? null : (
                    <div
                        className={`pokemon-item ${this.props.style.itemStyle}`}
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
                            {GenderElement(poke.gender)}
                            {poke.level ? (
                                <span className='pokemon-level'>lv. {poke.level}</span>
                            ) : null}
                        </div>
                        {generateMetData(this.props)}
                        {poke.nature && poke.nature !== 'None' ? (
                            <div className='pokemon-nature'>
                                <strong>{poke.nature}</strong> nature
                            </div>
                        ) : null}
                        {poke.ability ? <div className='pokemon-ability'>{poke.ability}</div> : null}
                    </div>
                    {this.props.style.showPokemonMoves ? moves : null}
                </div>
            </div>
        );
    }
}

export const TeamPokemon = connect(
    (state: any) => ({
        style: state.style,
        game: state.game,
    }),
    {
        selectPokemon,
    },
)(TeamPokemonBase);

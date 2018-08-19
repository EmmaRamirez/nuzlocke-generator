import * as React from 'react';
import { connect } from 'react-redux';

import { Pokemon } from 'models';
import { getBackgroundGradient,
        typeToColor,
        getPokemonImage,
        getMoveType,
        Styles,
        Generation,
        handleMovesGenerationsExceptions,
        getGameGeneration,
    } from 'utils';
import { GenderElement } from 'components/Shared';
import { selectPokemon } from 'actions';
import { reducers } from 'reducers';


const getMetLocationString = ({ poke, oldMetLocationFormat }: { poke: Pokemon, oldMetLocationFormat: boolean }):string | null => {
    const determinePreposition = () =>
        poke.met && poke.met.toLocaleLowerCase().startsWith('route') ? 'on' : 'in';
    const met = poke.met || '';
    const metLevel = poke.metLevel || '';
    if (poke.met) {
        if (oldMetLocationFormat) {
            return `Met ${determinePreposition()} ${met}, from lv.${metLevel}`;
        } else {
            return `Met Location: ${met} at lv.${metLevel}`;
        }
    } else {
        return null;
    }
};

export interface TeamPokemonInfoProps {
    generation: Generation;
    style: Styles;
    pokemon: Pokemon;
}

export class TeamPokemonInfo extends React.PureComponent<TeamPokemonInfoProps> {
    public render() {
        const { pokemon, style } = this.props;
        return (
            <div className='pokemon-info'>
                <div className='pokemon-info-inner'>
                    <div className='pokemon-main-info'>
                        <span style={{ margin: '0.25rem 0 0' }} className='pokemon-nickname'>
                            {pokemon.nickname}
                        </span>
                        <span className='pokemon-name'>{pokemon.species}</span>
                        {GenderElement(pokemon.gender)}
                        {pokemon.level ? (
                            <span className='pokemon-level'>lv. {pokemon.level}</span>
                        ) : null}
                    </div>
                    <div className='pokemon-met'>
                        { getMetLocationString({ poke: pokemon, oldMetLocationFormat: style.oldMetLocationFormat }) }
                    </div>
                    {pokemon.nature && pokemon.nature !== 'None' ? (
                        <div className='pokemon-nature'>
                            <strong>{pokemon.nature}</strong> nature
                        </div>
                    ) : null}
                    {pokemon.ability ? <div className='pokemon-ability'>{pokemon.ability}</div> : null}
                </div>
                {style.showPokemonMoves ?
                    <Moves generation={this.props.generation} moves={pokemon.moves} movesPosition={style.movesPosition} />
                : null}
            </div>
        );
    }
}

export interface TeamPokemonBaseProps {
    pokemon: Pokemon
    game: any;
    style: any;
    selectPokemon: selectPokemon;
}

export class TeamPokemonBaseMinimal extends React.PureComponent<TeamPokemonBaseProps & { spriteStyle: object }> {
    public render() {
        const { pokemon } = this.props;
        return (
            <div className='pokemon-container minimal'>
                <div
                    style={{
                        backgroundImage: getPokemonImage({
                            customImage: pokemon.customImage,
                            forme: pokemon.forme,
                            species: pokemon.species,
                            style: this.props.style,
                            name: this.props.game.name,
                        }),
                        ...this.props.spriteStyle,
                    }}
                    className={`pokemon-image ${(pokemon.species || 'missingno').toLowerCase()} ${
                        this.props.style.imageStyle === 'round' ? 'round' : 'square'
                    }`}
                />
                <div className='pokemon-info'>
                    <div className='pokemon-info-inner'>
                        <span className='pokemon-nickname'>{pokemon.nickname}</span>
                        <span className='pokemon-name'>{pokemon.species}</span>
                        {pokemon.level ? (
                            <span className='pokemon-level'>lv. {pokemon.level}</span>
                        ) : null}
                    </div>
                </div>
            </div>
        );
    }
}

export interface MovesProps {
    generation: Generation;
    moves: Pokemon['moves'];
    movesPosition?: Styles['movesPosition'];
}

export class Moves extends React.Component<MovesProps> {
    private generateMoves (moves: MovesProps['moves']) {
        return moves && moves.map((move, index) => {
            move = move.trim();
            const type = handleMovesGenerationsExceptions({ move: move, generation: this.props.generation, originalType: getMoveType(move) });
            return (
                <div
                    key={index}
                    className={`move ${type}-type ${move.length >= 12 ? 'long-text-move' : ''}`}>
                    {move}
                </div>
            );
        });
    }

    public render() {
        if (this.props.moves == null) return null;
        return (
            <div className={`pokemon-moves ${this.props.movesPosition}`}>
                { this.generateMoves(this.props.moves) }
            </div>
        );
    }
}

export class TeamPokemonBase extends React.Component<TeamPokemonBaseProps> {
    constructor(props) {
        super(props);
    }

    public render() {
        const { pokemon, style, game, selectPokemon } = this.props;
        const poke = pokemon;

        const getFirstType = poke.types ? poke.types[0] : 'Normal';
        const spriteStyle = this.props.style.spritesMode && !this.props.style.scaleSprites
            ? { backgroundSize: 'auto', backgroundRepeat: 'no-repeat' }
            : { backgroundSize: 'cover', backgroundRepeat: 'no-repeat' };

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
            return <TeamPokemonBaseMinimal
                        selectPokemon={selectPokemon}
                        style={style}
                        game={game}
                        spriteStyle={spriteStyle}
                        pokemon={poke}
                    />;
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
                            backgroundImage: style.template === 'Hexagons' ? getBackgroundGradient(
                                poke.types != null ? poke.types[0] : '',
                                poke.types != null ? poke.types[1] : '',
                            ) : '',
                        }}>
                        <img
                            alt={poke.item}
                            src={`icons/hold-item/${(poke.item || '')
                                .toLowerCase()
                                .replace(/\s/g, '-')}.png`}
                        />
                    </div>
                )}
                <TeamPokemonInfo generation={getGameGeneration(this.props.game.name)} style={style} pokemon={pokemon} />
            </div>
        );
    }
}

export const TeamPokemon = connect(
    (state: Partial<typeof reducers>) => ({
        style: state.style,
        game: state.game,
    }),
    {
        selectPokemon,
    },
)(TeamPokemonBase);

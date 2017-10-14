import * as React from 'react';

import { Pokemon, Trainer } from '../../models';
import { StoreContext } from '../../utils';
import { movesByType } from './movesByType';

require('./Result.styl');

interface ResultState {
  pokemon: Pokemon[];
  game: object;
  trainer: Trainer;
  style: object;
  problems: string[];
}

const typeToColor = (type:string):string | null => {
  if (type === 'None') return null;
  const types:any = {
    Bug: '#AEE359',
    Dark: '#29291F',
    Dragon: '#153F4D',
    Electric: '#E3E039',
    Fighting: '#59462A',
    Fire: '#EB3434',
    Flying: '#96D3E0',
    Ghost: '#3B2238',
    Grass: '#39BF3C',
    Ground: '#9C6E21',
    Ice: '#C2F1F2',
    Normal: '#E1E3D3',
    Poison: '#75226B',
    Psychic: '#EB75DD',
    Rock: '#8F795D',
    Steel: '#CCC',
    Water: '#5B64DE',
  };
  return types[type];
};

const getBackgroundGradient = (typeA:string, typeB:string):string => {
  if (typeB == null) {
    if (typeA == null) {
      return 'transparent';
    } else {
      return `linear-gradient(to right, ${typeToColor(typeA)}, ${typeToColor(typeA)}`;
    }
  } else {
    return `linear-gradient(to right, ${typeToColor(typeA)}, ${typeToColor(typeB)}`;
  }
};

const getGenderElement = (gender) => {
  if (gender === 'Male' || gender === 'm') {
    return <span style={{color: 'lightblue'}}>&#9794;</span>;
  } else if (gender === 'Female' || gender === 'f') {
    return <span style={{color: 'pink'}}>&#9792;</span>;
  } else {
    return <span></span>;
  }
};

@StoreContext
export class Result extends React.Component<{}, ResultState> {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      game: {},
      trainer: {},
      style: {},
      problems: []
    };
  }

  public componentWillMount() {
    const { store } = this.context;
    store.subscribe(() => {
      this.setState({
        pokemon: store.getState().pokemon,
        game: store.getState().game
      });
    });
  }

  public componentDidMount() {
    this.setState({
      pokemon: this.context.store.getState().pokemon
    });
  }

  private getMoveType(move) {
    for (const type in movesByType) {
      if (movesByType.hasOwnProperty(type)) {
        if (movesByType[type].some((value, index) => {
          return move === value;
        })) return type;
      }
    }

    return 'Normal';
  }

  private generateMoves(moves) {
    return moves.map((move, index) => {
      move = move.trim();
      const type = this.getMoveType(move);
      return <div key={index} className={`move ${type}-type`}>{move}</div>;
    });
  }

  private renderTeamPokemon() {
    return this.state.pokemon.filter((v) => v.hasOwnProperty('id')).map((poke, index) => {
      const moves = poke.moves == null ? '' : <div className='pokemon-moves'>{this.generateMoves(poke.moves)}</div>;
      return (
        <div key={poke.id} className='pokemon-container'>
          <div className='bubble' style={{
            background: getBackgroundGradient(poke.types[0], poke.types[1])
          }}>
            <div style={{
              backgroundImage: `url(img/${poke.species.toLowerCase()}.jpg)`
            }} className={`pokemon-image ${poke.species.toLowerCase()}`}></div>
          </div>
          <div className='pokemon-info'>
            <div className='pokemon-info-inner'>
              <span className='pokemon-nickname'>{poke.nickname}</span>
              <span className='pokemon-name'>{poke.species}</span>{getGenderElement(poke.gender)}
              <span className='pokemon-level'>lv. {poke.level}</span>
              <br/>
              <span className='pokemon-location'>Met in {poke.met}, at lv. {poke.metLevel}</span>
              <br/>
              <span className='pokemon-nature'><strong>{poke.nature}</strong> nature</span>
              <br/>
              <span className='pokemon-ability'>{poke.ability}</span>
            </div>
            {moves}
          </div>
        </div>
      );
    });
  }

  private renderErrors(state:ResultState) {
    const renderItems = [];
    if (state.pokemon.filter(poke => poke.status === 'Team').length > 6) {
      renderItems.push(<div className='pt-callout pt-intent-danger'>You have more than 6 Pokémon in your party.</div>);
    }
    return renderItems;
  }

  private renderBoxedPokemon() {

  }

  private renderDeadPokemon() {

  }

  private renderTrainer() {
    const { trainer } = this.state;
    return (
      <div className='trainer-wrapper'>
        <img alt='Trainer' className='trainer-image' src='' />
        <div className='game-logo'>
          <span><img src='' alt='Game Logo' /></span>
        </div>
        <div className='trainer-name'>
          <span>name</span>
          { trainer.name || '' }
        </div>
      </div>
    );
  }

  public render() {
    return <div className='result container'>
      { this.renderErrors(this.state) }
      <div className='trainer-container'>
        { this.renderTrainer() }
      </div>
      <div className='team-container'>
        { this.renderTeamPokemon() }
      </div>
    </div>;
  }
}
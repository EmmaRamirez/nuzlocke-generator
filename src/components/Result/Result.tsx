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

const typeToColor = (type:string):string => {
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
}

const getBackgroundGradient = (typeA:string, typeB:string):string => {
  if (typeB == null) {
    if (typeA == null) {
      console.error(`No type was specified for the gradient.`);
      return 'transparent';
    } else {
      return typeToColor(typeA);
    }
  } else {
    return `linear-gradient(to right, ${typeToColor(typeA)}, ${typeToColor(typeB)}`;
  }
}

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
    }
  }

  public componentWillMount() {
    const { store } = this.context;
    store.subscribe(() => {
      this.setState({
        pokemon: store.getState().pokemon,
        game: store.getState().game
      });
    })
  }

  public componentDidMount() {
    this.setState({
      pokemon: this.context.store.getState().pokemon
    })
  }

  private getMoveType(move) {
    for (let type in movesByType) {
      if (movesByType.hasOwnProperty(type)) {
        if(movesByType[type].some((value, index) => {
          return move === value;
        })) return type;
      }
    }
    
    return 'Normal';
  }

  private generateMoves(moves) {
    return moves.map((move, index) => {
      move = move.trim();
      let type = this.getMoveType(move);
      return <div className={`move ${type}-type`}>{move}</div>;
    })
  }

  private renderTeamPokemon() {
    return this.state.pokemon.map((poke, index) => {
      let moves = poke.moves == null ? '' : <div className='pokemon-moves'>{this.generateMoves(poke.moves)}</div>
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
              <span className='pokemon-name'>{poke.species}</span>{poke.gender}
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
    })
  }


  private renderBoxedPokemon() {

  }

  private renderDeadPokemon() {

  }

  public render() {
    return <div className='result container'>
      <div className='trainer-container'></div>
      <div className='team-container'>
        { this.renderTeamPokemon() }
      </div>
    </div>;
  }
}
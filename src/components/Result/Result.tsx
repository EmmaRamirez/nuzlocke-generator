import * as React from 'react';

import { Pokemon, Trainer } from '../../models';
import { StoreContext } from '../../utils';

import { TeamPokemon } from './TeamPokemon';

require('./Result.styl');

interface ResultState {
  pokemon: Pokemon[];
  game: object;
  trainer: Trainer;
  style: object;
  problems: string[];
}

@StoreContext
export class Result extends React.Component<{}, ResultState> {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [] as Pokemon[],
      game: {},
      trainer: {},
      style: {},
      problems: [] as string[]
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



  private renderTeamPokemon() {
    return this.state.pokemon.filter(v => v.hasOwnProperty('id')).map((poke, index) => {
      console.log(poke);
      return <TeamPokemon key={index} {...poke} />;
    });
  }

  private renderErrors(state:ResultState) {
    const renderItems:React.ReactNode[] = [];
    if (state.pokemon.filter(poke => poke.status === 'Team').length > 6) {
      renderItems.push(<div className='pt-callout pt-intent-danger'>You have more than 6 Pokémon in your party.</div>);
    }
    return renderItems;
  }

  private renderBoxedPokemon() {
    return null;
  }

  private renderDeadPokemon() {
    return null;
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
      <div className='boxed-container'>
        { this.renderBoxedPokemon() }
      </div>
      <div className='dead-container'>
        { this.renderDeadPokemon() }
      </div>
    </div>;
  }
}
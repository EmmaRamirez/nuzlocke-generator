import { Tab2, Tabs2 } from '@blueprintjs/core';
import * as React from 'react';
import * as uuid from 'uuid/v4';

import { Pokemon } from '../../models';

import { speciesToNumber, choose, StoreContext } from '../../utils';
import { CurrentPokemonEdit } from './CurrentPokemonEdit';
import { PokemonIcon } from './PokemonIcon';
import { TabTitle } from './TabTitle';

import { LinkedAddPokemonButton, LinkedPokemonIcon, LinkedTabTitle } from '../containers';

require('../../assets/img/team-box.png');

function pokemonByFilter(team:Pokemon[], filter?:string):JSX.Element[] {
  let filterFunction:any;
  if (filter != null) filterFunction = (poke => poke.status === filter);
  if (filter == null) filterFunction = (poke => true);
  return team.filter(filterFunction).map((poke, index) => {
    return <LinkedPokemonIcon key={index} id={poke.id} species={poke.species} />;
  });
}

const TeamPanel = ({ team }) => {
  return <div className='tab team-tab'><LinkedTabTitle boxId={0} title='Team' />{pokemonByFilter(team, 'Team')}</div>;
};

const BoxedPanel = ({ boxed }) => <div className='tab boxed-tab'><LinkedTabTitle boxId={1} title='Boxed' />{pokemonByFilter(boxed, 'Boxed')}</div>;

const DeadPanel = ({ dead }) => <div className='tab dead-tab'><LinkedTabTitle boxId={2} title='Dead' />{pokemonByFilter(dead, 'Dead')}</div>;

const AllPanel = ({ team }) => <div className='tab all-tab'><TabTitle title='All' />{pokemonByFilter(team)}</div>;

interface PokemonEditorProps {
  pokemon: Pokemon[];
}

interface PokemonEditorState {
  team: Pokemon[];
  selectedPokemonId: string;
  boxes: string[];
}

@StoreContext
export class PokemonEditor extends React.Component<{}, PokemonEditorState> {
  constructor(props:PokemonEditorProps) {
    super(props);
    this.state = {
      team: [],
      boxes: ['Team', 'Boxed', 'Dead'],
      selectedPokemonId: '',
    };
  }

  public componentWillMount() {
    this.context.store.subscribe(() => {
      this.setState({
        team: this.context.store.getState().pokemon,
        boxes: this.context.store.getState().box
      });
    });
  }

  public genPokemon() {
    return {
      id: uuid(),
      species: choose(['Bulbasaur', 'Murkrow', 'Koffing', 'Victini', 'Jangmo-o', 'Croagunk', 'Crobat', 'Arceus', 'Volcanion', 'Magearna', 'Burmy', 'Sandygast', 'Dialga', 'Palkia', 'Reshiram', 'Zekrom', 'Pawniard', 'Bisharp', 'Toxicroak', 'Ivysaur', 'Torracat', 'Wishiwashi']),
      status: choose(['Team', 'Boxed', 'Dead']),
      gender: choose(['Female', 'Male', 'Neutral'])
    };
  }

  public render() {
    const { store } = this.context;
    const { team, boxes } = this.state;

    return (
      <div className='pokemon-editor'>
        <h4>Pokemon</h4>
        <LinkedAddPokemonButton defaultPokemon={ this.genPokemon() } />
        <Tabs2 id='pokemon-box' className='pokemon-box'>
          <Tab2 id='team' className='pt-tab-panel pokemon-tab' title={boxes[0]} panel={<TeamPanel team={team} />} />
          <Tab2 id='boxed' className='pt-tab-panel pokemon-tab' title={boxes[1]} panel={<BoxedPanel boxed={team} />} />
          <Tab2 id='dead' className='pt-tab-panel pokemon-tab' title={boxes[2]} panel={<DeadPanel dead={team} />} />
          <Tab2 id='all' className='pt-tab-panel pokemon-tab' title='All' panel={<AllPanel team={team} />} />
        </Tabs2>
        <CurrentPokemonEdit />
      </div>
    );
  }
}

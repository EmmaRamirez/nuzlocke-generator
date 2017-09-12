import { Tab2, Tabs2 } from '@blueprintjs/core';
import * as React from 'react';
import * as uuid from 'uuid/v4';

import { Pokemon } from '../../models';

import { speciesToNumber, choose, StoreContext } from '../../utils';
import { CurrentPokemonEdit } from './CurrentPokemonEdit';
import { PokemonIcon } from './PokemonIcon';

import { LinkedAddPokemonButton, LinkedPokemonIcon } from '../containers';

require('../../assets/img/team-box.png');


function teamPokemon(team:Pokemon[]) {
  return team.map((item, index) => {
    return <LinkedPokemonIcon key={index} id={item.id} species={item.species} />;
  });
}

const TabTitle = ({ title }: { title: string }) => <div contentEditable suppressContentEditableWarning={true} className='tab-title' style={{ height: '48px', padding: '.5rem', textAlign: 'center', fontWeight: 'bold' }}>{title}</div>;

const TeamPanel = ({ team }) => {
  console.log(team);
  return <div className='tab team-tab'><TabTitle title='Team' />{teamPokemon(team)}</div>;
};

const BoxedPanel = () => <div className='tab boxed-tab'><TabTitle title='Boxed' />Boxed</div>;

const DeadPanel = () => <div className='tab dead-tab'><TabTitle title='Dead' />Dead</div>;

interface PokemonEditorProps {
  pokemon: Pokemon[];
}

interface PokemonEditorState {
  team: Pokemon[];
  selectedPokemonId: string;
}

@StoreContext
export class PokemonEditor extends React.Component<{}, PokemonEditorState> {
  constructor(props:PokemonEditorProps) {
    super(props);
    this.state = {
      team: [],
      selectedPokemonId: '',
    };
  }

  public componentWillMount() {
    this.context.store.subscribe(() => {
      this.setState({
        team: this.context.store.getState().pokemon
      });
    });
  }

  public genPokemon() {
    return {
      id: uuid(),
      species: choose(['Bulbasaur', 'Murkrow', 'Koffing', 'Victini', 'Jangmo-o', 'Croagunk', 'Crobat', 'Arceus'])
    };
  }

  public render() {
    const { store } = this.context;
    const { team } = this.state;

    return (
      <div className='pokemon-editor'>
        <h4>Pokemon</h4>
        <LinkedAddPokemonButton defaultPokemon={ this.genPokemon() } />
        <Tabs2 id='pokemon-box' className='pokemon-box'>
          <Tab2 id='team' className='pt-tab-panel pokemon-tab' title='Team' panel={<TeamPanel team={team} />} />
          <Tab2 id='boxed' className='pt-tab-panel pokemon-tab' title='Boxed' panel={<BoxedPanel />} />
          <Tab2 id='dead' className='pt-tab-panel pokemon-tab' title='Dead' panel={<DeadPanel />} />
        </Tabs2>
        <CurrentPokemonEdit />
      </div>
    );
  }
}

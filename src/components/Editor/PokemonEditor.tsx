import { Tab2, Tabs2 } from '@blueprintjs/core';
import * as React from 'react';

import { speciesToNumber } from '../../utils';
import { CurrentPokemonEdit } from './CurrentPokemonEdit';

require('../../assets/img/team-box.png');

const selected = 'Arceus';

const getSpriteIcon = (species:string) => `https://www.serebii.net/pokedex-sm/icon/${speciesToNumber(species).toString().padStart(3, '0')}.png`;

function teamPokemon(team) {
  return team.map((item, index) => {
    return <img className={item === selected ? 'pokemon-icon selected' : 'pokemon-icon'} key={index} src={getSpriteIcon(item)} alt={item} />;
  });
}

const TabTitle = ({ title }) => <div className='tab-title' style={{ height: '48px', padding: '.5rem', textAlign: 'center', fontWeight: 'bold' }}>{title}</div>;

const TeamPanel = ({ team }) => {

  return <div className='tab team-tab'><TabTitle title='Team' />{teamPokemon(team)}</div>;
};

const BoxedPanel = () => <div className='tab boxed-tab'><TabTitle title='Boxed' />Boxed</div>;

const DeadPanel = () => <div className='tab dead-tab'><TabTitle title='Dead' />Dead</div>;

interface PokemonEditorProps {
  pokemon: string[];
}

export class PokemonEditor extends React.Component<PokemonEditorProps, {}> {
  constructor(props:PokemonEditorProps) {
    super(props);
  }

  public render() {
    const team = this.props.pokemon;
    return (
      <div className='pokemon-editor'>
        <h4>Pokemon</h4>
        <button className='pt-intent-success pt-button add-new-pokemon'><span className='pt-icon-add' /> Add New Pokemon</button>
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

import { Tab2, Tabs2 } from '@blueprintjs/core';
import * as React from 'react';

import { speciesToNumber } from '../../utils';

require('../../assets/img/team-box.png');

const getSpriteIcon = (species:string) => `https://www.serebii.net/pokedex-sm/icon/${speciesToNumber(species).toString().padStart(3, '0')}.png`;

function teamPokemon(team) {
  return team.map((item, index) => {
    return <img className='pokemon-icon' key={index} src={getSpriteIcon(item)} alt={item} />;
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
        <h3>Pokemon</h3>
        <Tabs2 id='pokemon-box' className='pokemon-box'>
          <Tab2 id='team' className='pt-tab-panel pokemon-tab' title='Team' panel={<TeamPanel team={team} />} />
          <Tab2 id='boxed' className='pt-tab-panel pokemon-tab' title='Boxed' panel={<BoxedPanel />} />
          <Tab2 id='dead' className='pt-tab-panel pokemon-tab' title='Dead' panel={<DeadPanel />} />
        </Tabs2>
        <div className='current-pokemon'>
          <img alt='Current Pokemon being edited' src={getSpriteIcon('Arceus')} />
          <span className='current-pokemon-nickname'>Mr.Sparkles</span>
        </div>
      </div>
    );
  }
}

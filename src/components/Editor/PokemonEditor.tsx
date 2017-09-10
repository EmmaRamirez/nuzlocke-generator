import { Tab2, Tabs2 } from '@blueprintjs/core';
import * as React from 'react';

import { speciesToNumber } from '../../utils';

function teamPokemon(team) {
  return team.map((item, index) => {
    return <img key={index} src={`https://www.serebii.net/pokedex-sm/icon/${speciesToNumber(item).toString().padStart(3, '0')}.png`} alt={team} />;
  });
}

const TeamPanel = ({ team }) => {

  return <div>{teamPokemon(team)}</div>;
};

const BoxedPanel = () => <div>Boxed</div>;

const DeadPanel = () => <div>Dead</div>;

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
          <Tab2 id='team' title='Team' panel={<TeamPanel team={team} />} />
          <Tab2 id='boxed' title='Boxed' panel={<BoxedPanel />} />
          <Tab2 id='dead' title='Dead' panel={<DeadPanel />} />
        </Tabs2>
      </div>
    );
  }
}

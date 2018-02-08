import { Tab, Tabs, Tooltip, Button, Position } from '@blueprintjs/core';
import * as React from 'react';
import * as uuid from 'uuid/v4';

import { Pokemon } from '../../models';

import { speciesToNumber, choose, StoreContext } from '../../utils';
import { CurrentPokemonEdit } from './CurrentPokemonEdit';
import { PokemonIcon } from './PokemonIcon';
import { TabTitle } from './TabTitle';

import { LinkedAddPokemonButton, LinkedPokemonIcon, LinkedTabTitle } from '.';
import { MassEditor } from './MassEditor';

require('../../assets/img/team-box.png');

const sortPokes = (a, b) => {
  return a.position - b.position;
};

function pokemonByFilter(team: Pokemon[], filter?: string): JSX.Element[] {
    let filterFunction: any;
    if (filter != null) filterFunction = poke => poke.status === filter;
    if (filter == null) filterFunction = poke => true;
    return team.filter(filterFunction).sort(sortPokes).map((poke, index) => {
        return (
            <Tooltip key={index} content={poke.nickname || ''} position={Position.TOP}>
                <LinkedPokemonIcon id={poke.id} species={poke.species} forme={poke.forme} />
            </Tooltip>
        );
    });
}

const TeamPanel = ({ team }) => {
    return (
        <div className='tab team-tab'>
            <LinkedTabTitle boxId={0} title='Team' />
            {pokemonByFilter(team, 'Team')}
        </div>
    );
};

const BoxedPanel = ({ boxed }) => (
    <div className='tab boxed-tab'>
        <LinkedTabTitle boxId={1} title='Boxed' />
        {pokemonByFilter(boxed, 'Boxed')}
    </div>
);

const DeadPanel = ({ dead }) => (
    <div className='tab dead-tab'>
        <LinkedTabTitle boxId={2} title='Dead' />
        {pokemonByFilter(dead, 'Dead')}
    </div>
);

const AllPanel = ({ team }) => (
    <div className='tab all-tab'>
        <TabTitle title='All' />
        {pokemonByFilter(team)}
    </div>
);

interface PokemonEditorProps {
    pokemon: Pokemon[];
}

interface PokemonEditorState {
    team: Pokemon[];
    selectedPokemonId: string;
    boxes: string[];
    isMassEditorOpen: boolean;
}

@StoreContext
export class PokemonEditor extends React.Component<{}, PokemonEditorState> {
    constructor(props: PokemonEditorProps) {
        super(props);
        this.state = {
            team: [],
            boxes: ['Team', 'Boxed', 'Dead'],
            selectedPokemonId: '',
            isMassEditorOpen: false,
        };
    }

    public componentWillMount() {
        this.context.store.subscribe(() => {
            this.setState({
                team: this.context.store.getState().pokemon,
                boxes: this.context.store.getState().box,
            });
        });
    }

    public componentDidMount() {
        this.setState({
            team: this.context.store.getState().pokemon,
        });
    }

    public genPokemon(): Pokemon {
      const { team } = this.state;
      let position = 0;
      if (team && team.length > 0) {
        // @ts-ignore
        console.log(team[team.length - 1].position);
        position = parseInt(team[team.length - 1].position as any, undefined) + 1;
      }
        return {
            id: uuid(),
            position: position,
            species: '',
            nickname: '',
            status: 'Team',
            gender: 'Male',
            level: 0,
            met: '',
            metLevel: 0,
            nature: 'Adamant',
            ability: '',
            types: ['Normal', 'None'],
        };
    }

    private openMassEditor = e => {
        this.setState({
          isMassEditorOpen: true
        });
    }

    public render() {
        const { store } = this.context;
        const { team, boxes } = this.state;

        return (
            <>
              <div className='pokemon-editor'>
                  <h4>Pokemon</h4>
                  <div className='button-row' style={{ display: 'flex' }}>
                    <LinkedAddPokemonButton defaultPokemon={this.genPokemon()} />
                    <Button onClick={this.openMassEditor} style={{ marginLeft: 'auto' }} className='pt-intent-primary pt-minimal'>Open Mass Editor</Button>
                  </div>
                  <Tabs id='pokemon-box' className='pokemon-box'>
                      <Tab
                          id='team'
                          className='pt-tab-panel pokemon-tab'
                          title={boxes[0]}
                          panel={<TeamPanel team={team} />}
                      />
                      <Tab
                          id='boxed'
                          className='pt-tab-panel pokemon-tab'
                          title={boxes[1]}
                          panel={<BoxedPanel boxed={team} />}
                      />
                      <Tab
                          id='dead'
                          className='pt-tab-panel pokemon-tab'
                          title={boxes[2]}
                          panel={<DeadPanel dead={team} />}
                      />
                      <Tab
                          id='all'
                          className='pt-tab-panel pokemon-tab'
                          title='All'
                          panel={<AllPanel team={team} />}
                      />
                  </Tabs>
                  <CurrentPokemonEdit />
              </div>
              <MassEditor
                isOpen={this.state.isMassEditorOpen}
                toggleDialog={ e => this.setState({ isMassEditorOpen: !this.state.isMassEditorOpen })}
              />
            </>
        );
    }
}

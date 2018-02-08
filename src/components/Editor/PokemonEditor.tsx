import { Tab, Tabs, Tooltip, Button, Position } from '@blueprintjs/core';
import * as React from 'react';
import * as uuid from 'uuid/v4';

import { Pokemon } from '../../models';

import { speciesToNumber, choose, generateEmptyPokemon, StoreContext, pokemonByFilter } from 'utils';
import { CurrentPokemonEdit } from './CurrentPokemonEdit';
import { PokemonIcon } from './PokemonIcon';
import { TabTitle } from './TabTitle';

import { LinkedAddPokemonButton, LinkedPokemonIcon, LinkedTabTitle } from '.';
import { MassEditor } from './MassEditor';

require('../../assets/img/team-box.png');


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
                    <LinkedAddPokemonButton defaultPokemon={generateEmptyPokemon(this.state.team)} />
                    <Button iconName={'heat-grid'} onClick={this.openMassEditor} style={{ marginLeft: 'auto' }} className='pt-intent-primary pt-minimal'>Open Mass Editor</Button>
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
                // @ts-ignore
                isOpen={this.state.isMassEditorOpen}
                toggleDialog={ e => this.setState({ isMassEditorOpen: !this.state.isMassEditorOpen })}
              />
            </>
        );
    }
}

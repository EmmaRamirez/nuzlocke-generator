import { Tab, Tabs, Tooltip, Button, Position } from '@blueprintjs/core';
import * as React from 'react';
import { connect } from 'react-redux';
import * as uuid from 'uuid/v4';

import { Pokemon } from 'models';

import {
    speciesToNumber,
    choose,
    generateEmptyPokemon,
    StoreContext,
    pokemonByFilter,
} from 'utils';
import { CurrentPokemonEdit } from './CurrentPokemonEdit';
import { PokemonIcon } from './PokemonIcon';
import { TabTitle } from './TabTitle';

import { LinkedAddPokemonButton, LinkedPokemonIcon, LinkedTabTitle } from '.';
import { MassEditor } from './MassEditor';
import { BoxedPokemon } from '../Result/BoxedPokemon';
import { BaseEditor } from './BaseEditor';

require('../../assets/img/team-box.png');
require('../../assets/img/dead-box.png');

export const Box = ({
    pokemon,
    tabTitle,
    boxId,
    filterString,
}: {
    pokemon;
    tabTitle;
    boxId;
    filterString?;
}) => {
    const filter = filterString === 'All' ? null : filterString;
    return (
        <div className={`tab ${tabTitle}-tab`}>
            <LinkedTabTitle boxId={boxId} title={tabTitle} />
            {pokemonByFilter(pokemon, filter)}
        </div>
    );
};

interface PokemonEditorProps {
    team: Pokemon[];
    boxes: string[];
}

interface PokemonEditorState {
    isMassEditorOpen: boolean;
    isOpen: boolean;
}

export class PokemonEditorBase extends React.Component<PokemonEditorProps, PokemonEditorState> {
    constructor(props: PokemonEditorProps) {
        super(props);
        this.state = {
            isMassEditorOpen: false,
            isOpen: true,
        };
    }

    public componentDidMount() {}

    private openMassEditor = e => {
        this.setState({
            isMassEditorOpen: true,
        });
    };

    private toggleEditor = e => this.setState({ isOpen: !this.state.isOpen });

    public render() {
        const { team, boxes } = this.props;
        const { isOpen } = this.state;

        return (
            <>
                <BaseEditor name='Pokemon'>
                    <div className='button-row' style={{ display: 'flex' }}>
                        <LinkedAddPokemonButton defaultPokemon={generateEmptyPokemon(team)} />
                        <Button
                            icon={'heat-grid'}
                            onClick={this.openMassEditor}
                            style={{ marginLeft: 'auto' }}
                            className='pt-intent-primary pt-minimal'>
                            Open Mass Editor
                        </Button>
                    </div>
                    {/* <Tabs id='pokemon-box' className='pokemon-box'> */}
                    <div className='box-wrapper'>
                        {boxes.map((type, id) => {
                            return (
                                // <Tab
                                //     key={id}
                                //     id={type}
                                //     className={`pt-tab-panel pokemon-tab`}
                                //     title={boxes[id]}
                                //     panel={
                                <Box
                                    key={id}
                                    pokemon={team}
                                    tabTitle={type}
                                    boxId={id}
                                    filterString={type}
                                />
                                // }
                                // />
                            );
                        })}
                    </div>
                    {/* </Tabs> */}
                    <CurrentPokemonEdit />
                </BaseEditor>
                <MassEditor
                    // @ts-ignore
                    isOpen={this.state.isMassEditorOpen}
                    toggleDialog={e =>
                        this.setState({ isMassEditorOpen: !this.state.isMassEditorOpen })
                    }
                />
            </>
        );
    }
}

export const PokemonEditor = connect(
    (state: any) => ({
        team: state.pokemon,
        boxes: state.box,
    }),
    null,
)(PokemonEditorBase);

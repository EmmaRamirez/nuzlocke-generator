import { Button, Intent } from '@blueprintjs/core';
import * as React from 'react';
import { connect } from 'react-redux';

import { Pokemon, Game } from 'models';
import { Boxes } from 'types';
import { State } from 'state';

import { generateEmptyPokemon } from 'utils';
import { CurrentPokemonEdit, MassEditor } from '.';

import { AddPokemonButton } from 'components/AddPokemonButton';
import { BaseEditor } from 'components/BaseEditor';
import { Box } from './Box';
import { BoxForm } from './BoxForm';

require('../../assets/img/team-box.png');
require('../../assets/img/dead-box.png');

export interface PokemonEditorProps {
    team: Pokemon[];
    boxes: Boxes;
    game: Game;
}

export interface PokemonEditorState {
    isMassEditorOpen: boolean;
}

export class PokemonEditorBase extends React.Component<PokemonEditorProps, PokemonEditorState> {
    constructor(props: PokemonEditorProps) {
        super(props);
        this.state = {
            isMassEditorOpen: false,
        };
    }

    public componentDidMount() {}

    private openMassEditor = e => {
        this.setState({
            isMassEditorOpen: true,
        });
    };

    private renderBoxes(boxes, team) {
        return boxes.map(({ key, name }) => {
            return <Box key={key} pokemon={team} name={name} boxId={key} filterString={name} />;
        });
    }

    public render() {
        const { team, boxes } = this.props;

        return (
            <>
                <BaseEditor name='Pokemon'>
                    <div className='button-row' style={{ display: 'flex' }}>
                        <AddPokemonButton
                            defaultPokemon={{
                                ...generateEmptyPokemon(team),
                                gameOfOrigin: this.props.game.name || 'None',
                            }}
                        />
                        <Button
                            icon={'heat-grid'}
                            onClick={this.openMassEditor}
                            style={{ marginLeft: 'auto' }}
                            className='pt-intent-primary pt-minimal'>
                            Open Mass Editor
                        </Button>
                    </div>
                    <br />
                    {this.renderBoxes(boxes, team)}
                    <BoxForm boxes={boxes} />
                    <CurrentPokemonEdit />
                </BaseEditor>
                <MassEditor
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
    (state: Pick<State, keyof State>) => ({
        team: state.pokemon,
        boxes: state.box,
        game: state.game,
    }),
    null,
)(PokemonEditorBase as any);

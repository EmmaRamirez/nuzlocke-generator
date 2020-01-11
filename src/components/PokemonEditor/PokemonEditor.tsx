import { Button, Intent } from '@blueprintjs/core';
import * as React from 'react';
import { connect } from 'react-redux';

import { Pokemon, Game, Boxes } from 'models';
import { State } from 'state';

import { generateEmptyPokemon } from 'utils';
import { CurrentPokemonEdit, MassEditor } from '.';

import { AddPokemonButton } from 'components/AddPokemonButton';
import { BaseEditor } from 'components/BaseEditor';
import { Box, BoxForm } from 'components/Box';
import { DropTarget, ConnectDropTarget } from 'react-dnd';


export interface PokemonEditorProps {
    team: Pokemon[];
    boxes: Boxes;
    game: Game;
}

export interface PokemonEditorState {
    isMassEditorOpen: boolean;
}

export interface BoxesComponentProps {
    boxes: Boxes;
    team: Pokemon[];
}

export class BoxesComponent extends React.Component<BoxesComponentProps> {
    private renderBoxes(boxes, team) {
        return boxes.sort((a, b) => a.position - b.position).map(box => {
            return <Box {...box} key={box.id} pokemon={team} />;
        });
    }

    public render() {
        const {boxes, team} = this.props;

        return this.renderBoxes(boxes, team);
    }
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
                    <BoxesComponent boxes={boxes} team={team} />
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
    null,
    {pure: false}
)(PokemonEditorBase as any);

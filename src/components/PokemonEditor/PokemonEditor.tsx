import { Button } from '@blueprintjs/core';
import * as React from 'react';
import { connect } from 'react-redux';

import { Pokemon } from 'models';
import { Boxes } from 'types';

import {
    generateEmptyPokemon, dragAndDrop,
} from 'utils';
import { CurrentPokemonEdit, MassEditor } from '.';

import { AddPokemonButton } from 'components/AddPokemonButton';
import { BaseEditor } from 'components/BaseEditor';
import { PokemonByFilter } from 'components/Shared';
import { DropTarget, ConnectDropTarget } from 'react-dnd';

require('../../assets/img/team-box.png');
require('../../assets/img/dead-box.png');

const boxSource = {
    drop() {
        console.log('dropped');
    }
};

export interface BoxProps {
    pokemon: Pokemon[];
    name: string;
    boxId: number;
    filterString: string;
    connectDropTarget?: ConnectDropTarget;
}

@DropTarget(dragAndDrop.ICON, boxSource, (connect, monitor) => {
    connectDropTarget: connect.dropTarget();
}))
export class Box extends React.Component<BoxProps> {
    public render() {
        const { pokemon, name, boxId, filterString, connectDropTarget } = this.props;
        const filter = filterString === 'All' ? null : filterString;
        return connectDropTarget!(
            <div className={`box ${name}-box`}>
                <span style={{
                    alignItems: 'center',
                    background: 'rgba(33, 33, 33, 0.33)',
                    borderRadius: '.25rem',
                    color: '#eee',
                    display: 'inline-flex',
                    minHeight: '2rem',
                    justifyContent: 'center',
                    margin: '.25rem',
                    padding: '.25rem',
                    textAlign: 'center',
                    width: '4rem',
                }}>
                    {name}
                </span>
                {PokemonByFilter(pokemon, filter!)}
            </div>
        );
    }
}

export interface PokemonEditorProps {
    team: Pokemon[];
    boxes: Boxes;
    game: any;
}

export interface PokemonEditorState {
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

    private boxes: HTMLDivElement | null;

    public componentDidMount() {}

    private openMassEditor = e => {
        this.setState({
            isMassEditorOpen: true,
        });
    };

    private toggleEditor = e => this.setState({ isOpen: !this.state.isOpen });

    private renderBoxes(boxes, team) {
        return boxes.map(({ key, name }) => {
            return <Box key={key} pokemon={team} name={name} boxId={key} filterString={name} />;
        });
    }

    public render() {
        const { team, boxes } = this.props;
        const { isOpen } = this.state;

        return (
            <>
                <BaseEditor name='Pokemon'>
                    <div className='button-row' style={{ display: 'flex' }}>
                        <AddPokemonButton defaultPokemon={{ ...generateEmptyPokemon(team), gameOfOrigin: this.props.game.name || 'None' }} />
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
                    <br />
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
        game: state.game,
    }),
    null,
)(PokemonEditorBase);

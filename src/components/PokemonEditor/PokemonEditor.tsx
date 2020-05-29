import { Button, Intent, Icon, Popover, PopoverInteractionKind, Position } from '@blueprintjs/core';
import * as React from 'react';
import { connect } from 'react-redux';

import { Pokemon, Game, Box as BoxModel, Boxes, Editor } from 'models';
import { Game as GameName } from 'utils';
import { State } from 'state';

import { generateEmptyPokemon, getEncounterMap, capitalize } from 'utils';
import { CurrentPokemonEdit, MassEditor } from '.';

import { AddPokemonButton } from 'components/AddPokemonButton';
import { BaseEditor } from 'components/BaseEditor';
import { Box, BoxForm } from 'components/Box';
import { DropTarget, ConnectDropTarget } from 'react-dnd';
import { PokemonIcon } from 'components/PokemonIcon';

export interface PokemonEditorProps {
    team: Pokemon[];
    boxes: Boxes;
    game: Game;
    style: State['style'];
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
        return boxes
            .sort((a: BoxModel, b: BoxModel) => a.id - b.id)
            .map((box) => {
                return <Box {...box} key={box.id} pokemon={team} />;
            });
    }

    public render() {
        const { boxes, team } = this.props;

        return this.renderBoxes(boxes, team);
    }
}

const PokemonLocationChecklist = ({
    pokemon,
    game,
    style,
}: {
    pokemon: Pokemon[];
    game: Game;
    style: State['style'];
}) => {
    const encounterMap = getEncounterMap(game.name);

    const getLocIcon = (name) => {
        const poke = pokemon.find((p) => p.met === name && p.gameOfOrigin === game.name);
        if (poke && !poke.hidden) {
            return (
                <>
                    <Icon icon="tick" />
                    <PokemonIcon style={{ pointerEvents: 'none' }} species={poke.species} />
                </>
            );
        }
        if (poke && poke.hidden) {
            return (
                <>
                    <Icon icon="cross" />
                    <PokemonIcon style={{ pointerEvents: 'none' }} species={poke.species} />
                </>
            );
        }
        return <Icon icon="circle" />;
    };

    return (
        <div>
            {encounterMap.map((area) => {
                return (
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            margin: '2px',
                            borderBottom: `1px solid ${style?.editorDarkMode ? '#222' : '#efefef'}`,
                        }}
                    >
                        {getLocIcon(area)}
                        <div style={{ marginLeft: '4px' }}>{area}</div>
                    </div>
                );
            })}
            <div>
                Tip: Pokémon with the "hidden" attribute are a great option for including Pokemon
                that got away on a certain route!
            </div>
        </div>
    );

    // return <div>
    //     {encounterMap.areas.map(area => {
    //         return <div style={{padding: '4px', margin: '2px', display: 'flex', justifyContent: 'space-apart', alignItems: 'center', borderRadius: '0.25rem', border: '1px solid #efefef'}}>
    //             {getLocIcon(area.name)}
    //             <div style={{width: '20%', marginLeft: '4px'}}>{area.name}</div>
    //             <div style={{display: 'flex'}}>
    //                 {area.pokemon.map(p => {
    //                     return <div style={{display: 'flex', alignItems: 'center', padding: '2px 4px', background: '#eee', margin: '0 .25rem', borderRadius: '.25rem' }}>
    //                         <Popover position={Position.TOP} interactionKind={PopoverInteractionKind.HOVER} content={<div style={{padding: '4px'}}>{capitalize(p.type)}</div>}><img style={{maxHeight: '24px'}} alt={p.type} src={`img/${p.type}.png`} /></Popover>
    //                         {p.list.map(species => <PokemonIcon includeTitle species={species} />)}
    //                     </div>;
    //                 })}
    //             </div>
    //         </div>;
    //     })}
    //     <div>Tip: Pokémon with the "hidden" attribute are a great option for Pokemon that got away on a certain route!</div>
    // </div>;
};

export class PokemonEditorBase extends React.Component<PokemonEditorProps, PokemonEditorState> {
    public constructor(props: PokemonEditorProps) {
        super(props);
        this.state = {
            isMassEditorOpen: false,
        };
    }

    private openMassEditor = (e) => {
        this.setState({
            isMassEditorOpen: true,
        });
    };

    public render() {
        const { team, boxes, game, style } = this.props;

        return (
            <>
                <BaseEditor name="Pokemon">
                    <div className="button-row" style={{ display: 'flex' }}>
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
                            className="pt-intent-primary pt-minimal"
                        >
                            Open Mass Editor
                        </Button>
                    </div>
                    <br />
                    <BoxesComponent boxes={boxes} team={team} />
                    <BoxForm boxes={boxes} />
                    <CurrentPokemonEdit />
                    <BaseEditor name="Location Checklist" defaultOpen={false}>
                        <PokemonLocationChecklist style={style} pokemon={team} game={game} />
                    </BaseEditor>
                </BaseEditor>
                <MassEditor
                    isOpen={this.state.isMassEditorOpen}
                    toggleDialog={(e) =>
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
        style: state.style,
    }),
    null,
    null,
    { pure: false },
)(PokemonEditorBase as any);

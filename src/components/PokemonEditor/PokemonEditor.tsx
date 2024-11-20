import { Button, Classes, Intent, Spinner } from '@blueprintjs/core';
import * as React from 'react';
import { connect } from 'react-redux';
import { Pokemon, Box as BoxModel, Boxes, Game } from 'models';
import { State } from 'state';
import { generateEmptyPokemon, getEvolutionLine, listOfPokemon, matchSpeciesToTypes, Species, speciesToNumber } from 'utils';
import { CurrentPokemonEdit } from '.';
import { AddPokemonButton } from 'components/AddPokemonButton';
import { BaseEditor } from 'components/BaseEditor';
import { Box, BoxForm } from 'components/Box';
import { ErrorBoundary } from 'components/Shared';
import { cx } from 'emotion';
import { addPokemon } from 'actions';
import { PokemonIcon } from 'components';

export interface PokemonEditorProps {
    team: Pokemon[];
    boxes: Boxes;
    game: Game;
    style: State['style'];
    excludedAreas: State['excludedAreas'];
    customAreas: State['customAreas'];

    // @NOTE: uncomment this if you need to auto-generate Pokemon
    // will create failing tests as a warning to not push this :]
    // addPokemon: addPokemon;
}

export interface PokemonEditorState {
    isMassEditorOpen: boolean;
    searchTerm: string;
}

export interface BoxesComponentProps {
    boxes: Boxes;
    team: Pokemon[];
    searchTerm: string;
}

export class BoxesComponent extends React.Component<BoxesComponentProps> {
    private renderBoxes(boxes, team) {
        return boxes
            .sort((a: BoxModel, b: BoxModel) => {
                const positionA = a.position || 0;
                const positionB = b.position || 1;
                return positionA - positionB;
            })
            .map((box) => {
                return <Box searchTerm={this.props.searchTerm || ''} {...box} key={box.id} pokemon={team} />;
            });
    }

    public render() {
        const { boxes, team } = this.props;

        return this.renderBoxes(boxes, team);
    }
}

const MassEditor = React.lazy(() => import('components/PokemonEditor/MassEditor'));
const PokemonLocationChecklist = React.lazy(() => import('components/PokemonEditor/PokemonLocationChecklist'));

export class PokemonEditorBase extends React.Component<PokemonEditorProps, PokemonEditorState> {
    public constructor(props: PokemonEditorProps) {
        super(props);
        this.state = {
            isMassEditorOpen: false,
            searchTerm: '',
        };
    }

    private openMassEditor = (e) => {
        this.setState({
            isMassEditorOpen: true,
        });
    };

    public componentDidMount() {
        // @NOTE: refactor so that there's an easier way to auto-generate Pokemon data
        // const {team} = this.props;

        // listOfPokemon.slice(1008).forEach((value) => {
        //     this.props.addPokemon(
        //         generateEmptyPokemon(team, {
        //             species: value,
        //             // @ts-ignore cuzi said so
        //             types: matchSpeciesToTypes(value)
        //         }));
        // });
    }

    private getChampsLines = (pokemon: Pokemon[]) => {
        const champs = pokemon.filter(poke => poke.status === 'Champs');

        const allLines = champs.flatMap(poke => getEvolutionLine(poke.species as Species));
        const sortedByDexNo = allLines?.sort((pokeA, pokeB) => (speciesToNumber(pokeA) ?? 0) - (speciesToNumber(pokeB) ?? 0));


        return sortedByDexNo;
    };

    public render() {
        const { team, boxes, game, style, excludedAreas, customAreas } = this.props;
        const champsLines = this.getChampsLines(team);

        return (
            <>
                <BaseEditor icon='circle' name="Pokemon">
                    <div data-testid="pokemon-editor" className="button-row" style={{ display: 'flex', alignItems: 'flex-start' }}>
                        <AddPokemonButton
                            pokemon={{
                                ...generateEmptyPokemon(team),
                                gameOfOrigin: this.props.game.name || 'None',
                            }}
                        />
                        <div style={{ marginLeft: 'auto', width: '50%'}}>
                            <Button
                                icon={'heat-grid'}
                                intent={Intent.PRIMARY}
                                onClick={this.openMassEditor}
                                className={cx(
                                    Classes.MINIMAL,
                                    Classes.FILL,
                                )}>
                                Open Mass Editor
                            </Button>
                            <input
                                type='search'
                                placeholder='Search...'
                                className={Classes.INPUT}
                                value={this.state.searchTerm}
                                onChange={e => this.setState({
                                    searchTerm: e.target.value,
                                })}
                                style={{margin: '0.25rem', width: '100%'}}
                            />
                        </div>
                    </div>
                    <BoxesComponent searchTerm={this.state.searchTerm} boxes={boxes} team={team} />
                    <BoxForm boxes={boxes} />
                    <CurrentPokemonEdit />
                    <BaseEditor name="Location Checklist" defaultOpen={false}>
                        <React.Suspense fallback={<Spinner />}>
                            <PokemonLocationChecklist customAreas={customAreas} excludedAreas={excludedAreas} boxes={boxes} style={style} pokemon={team} game={game} />
                        </React.Suspense>
                    </BaseEditor>
                    <BaseEditor name={`Champs Lines ${champsLines.length}`} defaultOpen={false}>
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '0.25rem',
                        }}>
                            {champsLines.map(champ => <div className="pokemon-champ" style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                padding: '0.25rem',
                                border: '1px solid #eee',
                                borderRadius: '0.25rem',
                                width: '5rem',
                                textAlign: 'center',
                                alignItems: 'center',
                            }}>
                                <PokemonIcon species={champ} /> {champ}
                            </div>)}
                        </div>
                    </BaseEditor>
                </BaseEditor>
                <React.Suspense fallback={<Spinner />}>
                    {this.state.isMassEditorOpen && (
                        <ErrorBoundary>
                            <MassEditor
                                isOpen={this.state.isMassEditorOpen}
                                toggleDialog={() =>
                                    this.setState({
                                        isMassEditorOpen: !this.state.isMassEditorOpen,
                                    })
                                }
                            />
                        </ErrorBoundary>
                    )}
                </React.Suspense>
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
        excludedAreas: state.excludedAreas,
        customAreas: state.customAreas,
    }),
    {
        addPokemon: addPokemon,
    },
    null,
    { pure: true },
)(PokemonEditorBase as any);

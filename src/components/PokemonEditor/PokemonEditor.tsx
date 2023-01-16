import { Button, Callout, Classes, Icon, Intent, Spinner } from '@blueprintjs/core';
import * as React from 'react';
import { connect } from 'react-redux';

import { Pokemon, Box as BoxModel, Boxes, Game } from 'models';
import { Game as GameName, listOfPokemon, matchSpeciesToTypes } from 'utils';
import { State } from 'state';

import { gameOfOriginToColor, generateEmptyPokemon, getEncounterMap, listOfGames } from 'utils';
import { CurrentPokemonEdit } from '.';

import { AddPokemonButton } from 'components/AddPokemonButton';
import { BaseEditor } from 'components/BaseEditor';
import { Box, BoxForm } from 'components/Box';
import { PokemonIcon } from 'components/PokemonIcon';
import { ErrorBoundary } from 'components/Shared';
import { cx } from 'emotion';
import { PokemonFixtures } from 'utils/fixtures';
import { addPokemon } from 'actions';

export interface PokemonEditorProps {
    team: Pokemon[];
    boxes: Boxes;
    game: Game;
    style: State['style'];

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

export function PokemonLocationChecklistControls({
    pokemon
}: {
    pokemon: Pokemon[];
}) {

    return <div className='pokemon-location-checklist-controls'>

    </div>;
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
    const [excludeGifts, setExcludeGifts] = React.useState(false);
    const [currentGame, setCurrentGame] = React.useState<GameName>('None');
    const encounterMap = getEncounterMap(game.name);

    const getLocIcon = (name: string) => {
        const pokemonFiltered = pokemon
            .filter((p) => p.met?.trim().toLocaleLowerCase() === name.toLocaleLowerCase() && (currentGame === 'None' || p.gameOfOrigin === currentGame));

        return pokemonFiltered.map(poke => {
            if (poke && !poke.hidden && (!poke.gift || !excludeGifts)) {
                return (
                    <>
                        <Icon icon="tick" />
                        <PokemonIcon style={{ pointerEvents: 'none'}} {...poke} />
                    </>
                );
            }
            if (poke && poke.hidden) {
                return (
                    <>
                        <Icon icon="cross" />
                        <PokemonIcon style={{ pointerEvents: 'none' }} {...poke} />
                    </>
                );
            }
            return <Icon icon="circle" />;
        });
    };

    const createMapAnalytics = () => {

    };

    return (
        <div>
            <PokemonLocationChecklistControls
                pokemon={pokemon}
            />
            <div className={'flex items-center'}>
                <label className={cx(Classes.CONTROL, Classes.CHECKBOX)} style={{margin: '.25rem 0' }}>
                    <input type='checkbox' checked={excludeGifts} onChange={e => setExcludeGifts(e?.target.checked)} />
                    <span className={Classes.CONTROL_INDICATOR}></span>
                    <span className={Classes.LABEL}>Exclude Gifts</span>
                </label>
                <label className={cx(Classes.CONTROL)} style={{margin: '.25rem 0'}}>
                    <span className={Classes.LABEL}>Filter by Game</span>
                    <div className={Classes.SELECT} style={{marginLeft: '0.25rem'}}>
                        <select onChange={e => setCurrentGame(e?.target.value as GameName)}>
                            {listOfGames.map(game => <option key={game}>{game}</option>)}
                        </select>
                    </div>
                </label>
            </div>
            {encounterMap.map((area) => {
                return (
                    <div
                        key={area.toString()}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            margin: '2px',
                            borderBottom: `1px solid ${style?.editorDarkMode ? '#222' : '#efefef'}`,
                        }}>
                        {getLocIcon(area)}
                        <div style={{ marginLeft: '4px' }}>{area}</div>
                    </div>
                );
            })}
            <Callout intent={Intent.WARNING} style={{ fontSize: '80%', marginTop: '0.5rem' }}>
                Tip: Pokémon with the "hidden" attribute are a great option for including Pokemon
                that got away on a certain route!
            </Callout>
        </div>
    );
};

const MassEditor = React.lazy(() => import('components/PokemonEditor/MassEditor'));

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
        // const {team} = this.props;

        // listOfPokemon.slice(906).forEach((value) => {
        //     this.props.addPokemon(
        //         generateEmptyPokemon(team, {
        //             species: value,
        //             // @ts-ignore cuzi said so
        //             types: matchSpeciesToTypes(value)
        //         }));
        // });
    }

    public render() {
        const { team, boxes, game, style } = this.props;

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
                        <PokemonLocationChecklist style={style} pokemon={team} game={game} />
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
    }),
    {
        addPokemon: addPokemon,
    },
    null,
    { pure: true },
)(PokemonEditorBase as any);

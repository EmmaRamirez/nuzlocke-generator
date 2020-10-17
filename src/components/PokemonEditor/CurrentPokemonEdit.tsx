import * as React from 'react';
import {
    speciesToNumber,
    getSpriteIcon,
    getAdditionalFormes,
    StoreContext,
    listOfPokemon,
    matchSpeciesToTypes,
    listOfItems,
    listOfLocations,
    listOfAbilities,
    getGameGeneration,
    listOfNatures,
    Game,
    Forme,
    EvolutionTree,
    getDeepObject,
    listOfPokeballs,
    getListOfTypes,
} from 'utils';
import { Pokemon, Editor } from 'models';
import { Boxes } from 'models';
import { CurrentPokemonInput } from 'components/PokemonEditor';
import { DeletePokemonButton } from 'components/DeletePokemonButton';
import { Autocomplete, ErrorBoundary } from 'components/Shared';
import { selectPokemon, editPokemon } from 'actions';
import { connect } from 'react-redux';
import { listOfGames, accentedE } from 'utils';
import { PokemonIconBase } from 'components/PokemonIcon';
import { cx } from 'emotion';
import * as Styles from './styles';
const uuid = require('uuid');
import {
    Classes,
    Icon,
    Popover,
    Position,
    PopoverInteractionKind,
    Button,
    Intent,
    Menu,
    MenuItem,
} from '@blueprintjs/core';
import { addPokemon } from 'actions';
import { State } from 'state';
import { CurrentPokemonLayoutItem } from './CurrentPokemonLayoutItem';
import { MoveEditor } from 'components/MoveEditor';
import { POSITION_BOTTOM } from '@blueprintjs/core/lib/esm/common/classes';
import { BadgeInput } from 'components/TrainerEditor';
import { pokemon } from 'reducers/pokemon';

const pokeball = require('assets/pokeball.png');

export interface CopyPokemonButtonProps {
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export const CopyPokemonButton: React.SFC<CopyPokemonButtonProps> = ({
    onClick,
}: CopyPokemonButtonProps) => {
    return (
        <Popover
            interactionKind={PopoverInteractionKind.HOVER}
            position={Position.TOP}
            content={<div style={{ padding: '1rem' }}>{`Copy Pok${accentedE}mon`}</div>}>
            <Icon
                title="Copy Pokemon"
                icon="duplicate"
                className={cx(Styles.copyButton)}
                onClick={onClick}
            />
        </Popover>
    );
};

export interface CurrentPokemonEditProps {
    selectedId: Pokemon['id'];
    box: any;
    pokemon: Pokemon[];
    selectPokemon: selectPokemon;
    editPokemon: editPokemon;
    addPokemon: addPokemon;
    game: { name: Game; customName: string };
    editor: Editor;
    customTypes: State['customTypes'];
}

export interface CurrentPokemonEditState {
    selectedId: string;
    expandedView: boolean;
    isMoveEditorOpen: boolean;
    box: Boxes;
}

const getEvos = (species): string[] | undefined => {
    return EvolutionTree?.[species];
};

export function EvolutionSelection({ currentPokemon, onEvolve }) {
    const evos = getEvos(currentPokemon?.species);

    if (!evos?.length) {
        return null;
    }

    if (evos?.length === 1) {
        const species = evos?.[0];
        return (
            <Button onClick={onEvolve(species)} className={Classes.MINIMAL} intent={Intent.PRIMARY}>
                Evolve
            </Button>
        );
    } else {
        return (
            <Popover
                popoverClassName={'no-list-item-types'}
                minimal
                position={Position.BOTTOM_LEFT}
                interactionKind={PopoverInteractionKind.CLICK_TARGET_ONLY}
                content={
                    <>
                        {evos.map((evo) => (
                            <div className={Styles.evoMenuItem} key={evo} onClick={onEvolve(evo)}>
                                {evo}
                            </div>
                        ))}
                    </>
                }>
                <Button className={Classes.MINIMAL} intent={Intent.PRIMARY}>
                    Evolve
                </Button>
            </Popover>
        );
    }
}

export class CurrentPokemonEditBase extends React.Component<
CurrentPokemonEditProps,
CurrentPokemonEditState
> {
    public constructor(props: CurrentPokemonEditProps) {
        super(props);
        this.state = {
            selectedId: '5',
            box: [],
            isMoveEditorOpen: false,
            expandedView: false,
        };
    }

    // eslint-disable-next-line camelcase
    public UNSAFE_componentWillMount() {
        this.setState({
            selectedId: this.props.selectedId,
            box: this.props.box,
        });
    }

    // eslint-disable-next-line camelcase
    public UNSAFE_componentWillReceiveProps(
        nextProps: CurrentPokemonEditProps,
        prevProps: CurrentPokemonEditProps,
    ) {
        if (nextProps.selectedId !== prevProps.selectedId) {
            this.setState({ selectedId: nextProps.selectedId });
        }
    }

    private copyPokemon = (e) => {
        const currentPokemon = this.getCurrentPokemon();
        if (currentPokemon) {
            const newPokemon = {
                ...currentPokemon,
                id: uuid(),
                position: currentPokemon.position! + 1,
            };
            this.props.addPokemon(newPokemon);
        }
    };

    public expandView = (_) => {
        this.setState({
            expandedView: !this.state.expandedView,
        });
    };

    private getCurrentPokemon() {
        return this.props.pokemon.find((v: Pokemon) => v.id === this.state.selectedId);
    }

    private parseTree(tree) {}

    private evolvePokemon = (species) => (e) => {
        const edit = {
            species,
        };

        this.props.editPokemon(edit, this.state.selectedId);
    };

    private toggleDialog = () => this.setState({ isMoveEditorOpen: !this.state.isMoveEditorOpen });

    private getTypes() {
        const { customTypes, editor } = this.props;
        return getListOfTypes(customTypes, editor.temtemMode);
    }

    public moreInputs(currentPokemon: Pokemon) {
        const {editPokemon, selectPokemon} = this.props;
        const pokemonForLink = this.props.pokemon.map((p) => ({
            key: `${p.nickname} (${p.species})`,
            value: p.id,
        }));

        return (
            <div className="expanded-edit">
                <CurrentPokemonInput
                    labelName="Forme"
                    inputName="forme"
                    placeholder=""
                    value={currentPokemon.forme}
                    type="select"
                    options={['Normal', ...getAdditionalFormes(currentPokemon.species)]}
                    pokemon={currentPokemon}
                />
                <CurrentPokemonInput
                    labelName="Types"
                    inputName="types"
                    value={currentPokemon.types}
                    type="double-select"
                    options={this.getTypes()}
                />
                <BadgeInput
                    checkpointsCleared={currentPokemon.checkpoints}
                    onChange={checkpoints => editPokemon({checkpoints}, currentPokemon.id)}
                />
                <CurrentPokemonLayoutItem checkboxes>
                    <CurrentPokemonInput
                        labelName="Shiny"
                        inputName="shiny"
                        value={currentPokemon.shiny}
                        type="checkbox"
                    />
                    <CurrentPokemonInput
                        labelName="Egg"
                        inputName="egg"
                        value={currentPokemon.egg}
                        type="checkbox"
                    />
                    <CurrentPokemonInput
                        labelName="Hidden"
                        inputName="hidden"
                        value={currentPokemon.hidden}
                        type="checkbox"
                    />
                    <CurrentPokemonInput
                        labelName="MVP"
                        inputName="mvp"
                        value={currentPokemon.mvp}
                        type="checkbox"
                    />
                </CurrentPokemonLayoutItem>
                <CurrentPokemonInput
                    labelName="Custom Image"
                    inputName="customImage"
                    placeholder="http://.."
                    value={currentPokemon.customImage}
                    type="text"
                />
                <CurrentPokemonInput
                    labelName="Custom Icon"
                    inputName="customIcon"
                    placeholder="http://.."
                    value={currentPokemon.customIcon}
                    type="text"
                />
                <CurrentPokemonInput
                    labelName="Cause of Death"
                    inputName="causeOfDeath"
                    value={currentPokemon.causeOfDeath}
                    type="text"
                />
                <Autocomplete
                    items={listOfItems}
                    name="item"
                    label="Item"
                    placeholder="Item"
                    value={currentPokemon.item || ''}
                    onChange={(e) => {
                        const edit = {
                            item: e.target.value,
                        };
                        editPokemon(edit, this.state.selectedId);
                        selectPokemon(this.state.selectedId);
                    }}
                />
                <CurrentPokemonInput
                    labelName="Custom Item Image"
                    inputName="customItemImage"
                    placeholder="http://.."
                    value={currentPokemon.customItemImage}
                    type="text"
                />
                <CurrentPokemonInput
                    labelName="Pokeball"
                    inputName="pokeball"
                    value={currentPokemon.pokeball}
                    type="select"
                    options={[
                        'None',
                        ...listOfPokeballs.map(
                            (ball) =>
                                `${ball.charAt(0).toUpperCase() + ball.slice(1, ball.length)} Ball`,
                        ),
                    ]}
                />
                <CurrentPokemonLayoutItem>
                    <CurrentPokemonInput
                        labelName="Wonder Traded"
                        inputName="wonderTradedFor"
                        value={currentPokemon.wonderTradedFor}
                        type="text"
                    />
                    <CurrentPokemonInput
                        labelName="Position"
                        inputName="position"
                        disabled={true}
                        value={currentPokemon.position}
                        type="number"
                    />
                    <CurrentPokemonInput
                        labelName="Game of Origin"
                        inputName="gameOfOrigin"
                        value={currentPokemon.gameOfOrigin}
                        type="select"
                        options={listOfGames}
                    />
                </CurrentPokemonLayoutItem>
                <CurrentPokemonLayoutItem>
                    <CurrentPokemonInput
                        labelName="Link To..."
                        inputName="linkedTo"
                        value={currentPokemon?.linkedTo}
                        type="select"
                        options={[
                            {
                                key: 'None',
                                value: null,
                            },
                            ...pokemonForLink,
                        ]}
                        usesKeyValue={true}
                    />
                </CurrentPokemonLayoutItem>
                <CurrentPokemonLayoutItem>
                    <CurrentPokemonInput
                        labelName="Notes"
                        inputName="notes"
                        value={currentPokemon.notes}
                        type="textArea"
                    />
                    {/* <PokemonNotes /> */}
                </CurrentPokemonLayoutItem>
                <CurrentPokemonLayoutItem disabled>
                    {currentPokemon.extraData && (
                        <CurrentPokemonInput
                            labelName="Extra Data"
                            inputName="extraData"
                            type="text"
                            disabled
                            value={JSON.stringify(currentPokemon.extraData)}
                        />
                    )}
                </CurrentPokemonLayoutItem>
            </div>
        );
    }

    public render() {
        const currentPokemon = this.getCurrentPokemon();

        if (currentPokemon == null) {
            return (
                <div className="current-pokemon no-pokemon-selected">
                    <img alt="pokeball" src={pokeball} /> <p>Select a Pok&eacute;mon to edit</p>
                </div>
            );
        }

        return (
            <div className="current-pokemon">
                <span className="current-pokemon-header">
                    <PokemonIconBase
                        className="current-pokemon-image"
                        id={currentPokemon.id}
                        species={currentPokemon.species}
                        forme={currentPokemon.forme}
                        shiny={currentPokemon.shiny}
                        gender={currentPokemon.gender}
                        customIcon={currentPokemon.customIcon}
                        selectedId={null}
                        onClick={() => {}}
                    />
                    <CurrentPokemonInput
                        labelName="Status"
                        inputName="status"
                        value={currentPokemon.status}
                        type="select"
                        options={this.state.box.map((n) => n.name)}
                    />
                    <div className={cx(Styles.iconBar)}>
                        <EvolutionSelection
                            currentPokemon={currentPokemon}
                            onEvolve={this.evolvePokemon}
                        />
                        <CopyPokemonButton onClick={this.copyPokemon} />
                        <DeletePokemonButton id={this.state.selectedId} />
                    </div>
                </span>
                <CurrentPokemonLayoutItem>
                    <ErrorBoundary>
                        <Autocomplete
                            items={(listOfPokemon as unknown) as string[]}
                            name="species"
                            label="Species"
                            disabled={currentPokemon.egg}
                            placeholder="Missing No."
                            value={currentPokemon.species}
                            onChange={(e) => {
                                const edit = {
                                    species: e.target.value,
                                };
                                this.props.editPokemon(edit, this.state.selectedId);
                                this.props.editPokemon(
                                    {
                                        types: matchSpeciesToTypes(
                                            e.target.value,
                                            // @TODO: tighten type
                                            currentPokemon.forme as any,
                                            getGameGeneration(this.props.game.name as Game),
                                        ),
                                    },
                                    this.state.selectedId,
                                );
                                this.props.selectPokemon(this.state.selectedId);
                            }}
                        />
                    </ErrorBoundary>
                    <CurrentPokemonInput
                        labelName="Nickname"
                        inputName="nickname"
                        value={currentPokemon.nickname}
                        placeholder="Fluffy"
                        type="text"
                    />
                </CurrentPokemonLayoutItem>
                <CurrentPokemonLayoutItem>
                    <CurrentPokemonInput
                        labelName="Level"
                        inputName="level"
                        placeholder="5"
                        value={currentPokemon.level}
                        type="number"
                    />
                    <Autocomplete
                        items={listOfLocations}
                        name="met"
                        label="Met Location"
                        placeholder="Pallet Town"
                        value={currentPokemon.met || ''}
                        onChange={(e) => {
                            if (!e?.target?.value) {
                                return;
                            }
                            const edit = {
                                met: e.target.value,
                            };
                            this.props.editPokemon(edit, this.state.selectedId);
                            this.props.selectPokemon(this.state.selectedId);
                        }}
                    />
                    <CurrentPokemonInput
                        labelName="Met Level"
                        inputName="metLevel"
                        placeholder="5"
                        value={currentPokemon.metLevel}
                        type="number"
                    />
                </CurrentPokemonLayoutItem>
                <CurrentPokemonLayoutItem>
                    <CurrentPokemonInput
                        labelName="Gender"
                        inputName="gender"
                        placeholder=""
                        value={currentPokemon.gender}
                        type="select"
                        options={['Neutral', 'Male', 'Female']}
                    />
                    <CurrentPokemonInput
                        labelName="Nature"
                        inputName="nature"
                        placeholder="Sassy"
                        value={currentPokemon.nature}
                        type="select"
                        options={listOfNatures}
                        pokemon={currentPokemon}
                    />
                    <Autocomplete
                        items={listOfAbilities}
                        name="ability"
                        label="Ability"
                        placeholder=""
                        value={currentPokemon.ability || ''}
                        onChange={(e) => {
                            const edit = {
                                ability: e.target.value,
                            };
                            this.props.editPokemon(edit, this.state.selectedId);
                            this.props.selectPokemon(this.state.selectedId);
                        }}
                    />
                </CurrentPokemonLayoutItem>
                <CurrentPokemonLayoutItem>
                    <CurrentPokemonInput
                        labelName="Moves"
                        inputName="moves"
                        placeholder=""
                        value={currentPokemon.moves}
                        type="moves"
                    />
                    <Button intent={Intent.PRIMARY} onClick={this.toggleDialog} minimal>
                        Edit Moves
                    </Button>
                </CurrentPokemonLayoutItem>
                <MoveEditor isOpen={this.state.isMoveEditorOpen} toggleDialog={this.toggleDialog} />
                {this.state.expandedView ? this.moreInputs(currentPokemon) : null}
                <br />
                <Button
                    onClick={this.expandView}
                    data-expandedview={this.state.expandedView.toString()}
                    intent={Intent.PRIMARY}
                    className={cx(Classes.FILL, 'current-pokemon-more')}
                    icon={this.state.expandedView ? 'symbol-triangle-up' : 'symbol-triangle-down'}>
                    {this.state.expandedView ? 'Less' : 'More'}
                </Button>
            </div>
        );
    }
}

export const CurrentPokemonEdit = connect(
    (state: Pick<State, keyof State>) => ({
        box: state.box,
        selectedId: state.selectedId,
        pokemon: state.pokemon,
        game: state.game,
        editor: state.editor,
        customTypes: state.customTypes,
    }),
    {
        selectPokemon,
        editPokemon,
        addPokemon,
    },
)(CurrentPokemonEditBase);

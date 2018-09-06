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
} from 'utils';
import { Pokemon } from 'models';
import { onClick, Boxes } from 'types';
import { CurrentPokemonInput } from 'components/PokemonEditor';
import { DeletePokemonButton } from 'components/DeletePokemonButton';
import { Autocomplete, ErrorBoundary } from 'components/Shared';
import { selectPokemon, editPokemon } from 'actions';
import { connect } from 'react-redux';
import { listOfGames, accentedE } from 'utils';
import { PokemonIconBase } from 'components/PokemonIcon';
import { cx } from 'emotion';
import * as Styles from './styles';
import * as uuid from 'uuid/v4';
import { Classes, Icon, Popover, Position, PopoverInteractionKind } from '@blueprintjs/core';
import { addPokemon } from 'actions';
import { State } from 'state';
import { game } from 'reducers/game';
import { CurrentPokemonLayoutItem } from './CurrentPokemonLayoutItem';

const pokeball = require('assets/pokeball.png');

export interface CopyPokemonButtonProps {
    onClick: (event: React.MouseEvent<SVGElement>) => void;
}

export const CopyPokemonButton: React.SFC<CopyPokemonButtonProps> = ({ onClick }: CopyPokemonButtonProps) => {
    return (
        <Popover interactionKind={PopoverInteractionKind.HOVER} position={Position.TOP} content={<div style={{ padding: '1rem' }}>{`Copy Pok${accentedE}mon`}</div>}>
            <Icon title='Copy Pokemon' icon='duplicate' className={cx(Styles.copyButton)} onClick={onClick} />
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
    game: { name: Game };
}

export interface CurrentPokemonEditState {
    selectedId: string;
    expandedView: boolean;
    box: Boxes;
}

export class CurrentPokemonEditBase extends React.Component<CurrentPokemonEditProps, CurrentPokemonEditState> {
    constructor(props: CurrentPokemonEditProps) {
        super(props);
        this.state = {
            selectedId: '5',
            box: [],
            expandedView: false,
        };
    }

    public componentWillMount() {
        this.setState({
            selectedId: this.props.selectedId,
            box: this.props.box
        });
    }

    public componentWillReceiveProps(nextProps: CurrentPokemonEditProps, prevProps: CurrentPokemonEditProps) {
        if (nextProps.selectedId !== prevProps.selectedId) {
            this.setState({ selectedId: nextProps.selectedId });
        }
    }

    private copyPokemon = e => {
        const currentPokemon = this.getCurrentPokemon();
        if (currentPokemon) {
            const newPokemon = { ...currentPokemon, id: uuid(), position: currentPokemon.position! + 1 };
            this.props.addPokemon(newPokemon);
        }
    }

    public moreInputs(currentPokemon: Pokemon) {
        return (
            <div className='expanded-edit'>
                <CurrentPokemonInput
                    labelName='Forme'
                    inputName='forme'
                    placeholder=''
                    value={currentPokemon.forme}
                    type='select'
                    options={['Normal', ...getAdditionalFormes(currentPokemon.species)]}
                />
                <CurrentPokemonInput
                    labelName='Types'
                    inputName='types'
                    value={currentPokemon.types}
                    type='double-select'
                    options={[
                        'Bug',
                        'Dark',
                        'Dragon',
                        'Electric',
                        'Fairy',
                        'Fighting',
                        'Fire',
                        'Flying',
                        'Ghost',
                        'Grass',
                        'Ground',
                        'Ice',
                        'Normal',
                        'Poison',
                        'Psychic',
                        'Rock',
                        'Steel',
                        'Water',
                        'None',
                    ]}
                />
                <CurrentPokemonLayoutItem>
                    <CurrentPokemonInput
                        labelName='Shiny'
                        inputName='shiny'
                        value={currentPokemon.shiny}
                        type='checkbox'
                    />
                    <CurrentPokemonInput
                        labelName='Champion'
                        inputName='champion'
                        value={currentPokemon.champion}
                        type='checkbox'
                    />
                    <CurrentPokemonInput
                        labelName='Egg'
                        inputName='egg'
                        value={currentPokemon.egg}
                        type='checkbox'
                    />
                </CurrentPokemonLayoutItem>
                <CurrentPokemonInput
                    labelName='Custom Image'
                    inputName='customImage'
                    placeholder='http://..'
                    value={currentPokemon.customImage}
                    type='text'
                />
                <CurrentPokemonInput
                    labelName='Custom Icon'
                    inputName='customIcon'
                    placeholder='http://..'
                    value={currentPokemon.customIcon}
                    type='text'
                />
                <CurrentPokemonInput
                    labelName='Cause of Death'
                    inputName='causeOfDeath'
                    value={currentPokemon.causeOfDeath}
                    type='text'
                />
                <Autocomplete
                    items={listOfItems}
                    name='item'
                    label='Item'
                    placeholder='Item'
                    value={currentPokemon.item || ''}
                    onChange={e => {
                        const edit = {
                            item: e.target.value,
                        };
                        this.props.editPokemon(edit, this.state.selectedId);
                        this.props.selectPokemon(this.state.selectedId);
                    }}
                />
                <CurrentPokemonLayoutItem>
                    <CurrentPokemonInput
                        labelName='Wonder Traded'
                        inputName='wonderTradedFor'
                        value={currentPokemon.wonderTradedFor}
                        type='text'
                    />
                    <CurrentPokemonInput
                        labelName='Position'
                        inputName='position'
                        disabled={true}
                        value={currentPokemon.position}
                        type='number'
                    />
                    <CurrentPokemonInput
                        labelName='Game of Origin'
                        inputName='gameOfOrigin'
                        value={currentPokemon.gameOfOrigin}
                        type='select'
                        options={listOfGames}
                    />
                </CurrentPokemonLayoutItem>
            </div>
        );
    }

    public expandView = (e: React.SyntheticEvent<HTMLButtonElement>) => {
        this.setState({
            expandedView: !this.state.expandedView,
        });
    };

    private getCurrentPokemon () {
        return this.props.pokemon.find((v: Pokemon) => v.id === this.state.selectedId);
    }

    public render() {
        const currentPokemon = this.getCurrentPokemon();

        if (currentPokemon == null) {
            return (
                <div className='current-pokemon no-pokemon-selected'>
                    <img alt='pokeball' src={pokeball} /> <p>Select a Pok&eacute;mon to edit</p>
                </div>
            );
        }

        return (
            <div className='current-pokemon'>
                <span className='current-pokemon-header'>
                    <PokemonIconBase
                        className='current-pokemon-image'
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
                        labelName='Status'
                        inputName='status'
                        value={currentPokemon.status}
                        type='select'
                        options={this.state.box.map(n => n.name)}
                    />
                    <div className={cx(Styles.iconBar)}>
                        <CopyPokemonButton onClick={this.copyPokemon} />
                        <DeletePokemonButton id={this.state.selectedId} />
                    </div>
                </span>
                <CurrentPokemonLayoutItem>
                    <ErrorBoundary>
                        <Autocomplete
                            items={listOfPokemon}
                            name='species'
                            label='Species'
                            placeholder='Missing No.'
                            value={currentPokemon.species}
                            onChange={e => {
                                const edit = {
                                    species: e.target.value,
                                };
                                this.props.editPokemon(edit, this.state.selectedId);
                                this.props.editPokemon(
                                    { types: matchSpeciesToTypes(
                                        e.target.value,
                                        currentPokemon.forme as Forme,
                                        getGameGeneration(this.props.game.name as Game)
                                    ) },
                                    this.state.selectedId,
                                );
                                this.props.selectPokemon(this.state.selectedId);
                            }}
                        />
                    </ErrorBoundary>
                    <CurrentPokemonInput
                        labelName='Nickname'
                        inputName='nickname'
                        value={currentPokemon.nickname}
                        placeholder='Fluffy'
                        type='text'
                    />
                </CurrentPokemonLayoutItem>
                <CurrentPokemonLayoutItem>
                    <CurrentPokemonInput
                        labelName='Level'
                        inputName='level'
                        placeholder='5'
                        value={currentPokemon.level}
                        type='number'
                    />
                    <Autocomplete
                        items={listOfLocations}
                        name='met'
                        label='Met Location'
                        placeholder='Pallet Town'
                        value={currentPokemon.met || ''}
                        onChange={e => {
                            const edit = {
                                met: e.target.value,
                            };
                            this.props.editPokemon(edit, this.state.selectedId);
                            this.props.selectPokemon(this.state.selectedId);
                        }}
                    />
                    <CurrentPokemonInput
                        labelName='Met Level'
                        inputName='metLevel'
                        placeholder='5'
                        value={currentPokemon.metLevel}
                        type='number'
                    />
                </CurrentPokemonLayoutItem>
                <CurrentPokemonLayoutItem>
                    <CurrentPokemonInput
                        labelName='Gender'
                        inputName='gender'
                        placeholder=''
                        value={currentPokemon.gender}
                        type='select'
                        options={['Neutral', 'Male', 'Female']}
                    />
                    <CurrentPokemonInput
                        labelName='Nature'
                        inputName='nature'
                        placeholder='Sassy'
                        value={currentPokemon.nature}
                        type='select'
                        options={listOfNatures}
                    />
                    <Autocomplete
                        items={listOfAbilities}
                        name='ability'
                        label='Ability'
                        placeholder=''
                        value={currentPokemon.ability || ''}
                        onChange={e => {
                            const edit = {
                                ability: e.target.value,
                            };
                            this.props.editPokemon(edit, this.state.selectedId);
                            this.props.selectPokemon(this.state.selectedId);
                        }}
                    />
                </CurrentPokemonLayoutItem>
                <CurrentPokemonInput
                    labelName='Moves'
                    inputName='moves'
                    placeholder=''
                    value={currentPokemon.moves}
                    type='moves'
                />
                {this.state.expandedView ? this.moreInputs(currentPokemon) : null}
                <br />
                <button
                    onClick={this.expandView}
                    data-expandedview={this.state.expandedView.toString()}
                    className='pt-button pt-intent-primary pt-fill current-pokemon-more'>
                    {this.state.expandedView ? (
                        <span>
                            Less <span className='pt-icon-symbol-triangle-up' />
                        </span>
                    ) : (
                        <span>
                            More <span className='pt-icon-symbol-triangle-down' />
                        </span>
                    )}{' '}
                </button>
            </div>
        );
    }
}

export const CurrentPokemonEdit = connect(
    (state:Pick<State, keyof State>) => ({
        box: state.box,
        selectedId: state.selectedId,
        pokemon: state.pokemon,
        game: state.game,
    }),
    {
        selectPokemon,
        editPokemon,
        addPokemon,
    }
)(CurrentPokemonEditBase);
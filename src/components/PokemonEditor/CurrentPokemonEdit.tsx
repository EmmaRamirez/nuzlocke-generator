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
} from 'utils';
import { Pokemon } from 'models';
import { onClick, Boxes } from 'types';
import { CurrentPokemonInput } from 'components/PokemonEditor';
import { DeletePokemonButton } from 'components/DeletePokemonButton';
import { Autocomplete } from 'components/Shared';
import { selectPokemon, editPokemon } from 'actions';
import { connect } from 'react-redux';
import { listOfGames } from 'utils';
import { PokemonIconBase } from 'components/PokemonIcon';

const pokeball = require('assets/pokeball.png');

export interface CurrentPokemonEditProps {
    selectedId: Pokemon['id'];
    box: any;
    pokemon: Pokemon[];
    selectPokemon: selectPokemon;
    editPokemon: editPokemon;
}

export interface CurrentPokemonEditState {
    selectedId: string;
    expandedView: boolean;
    box: Boxes;
}

export class CurrentPokemonEditBase extends React.Component<CurrentPokemonEditProps, CurrentPokemonEditState> {
    constructor(props) {
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

    public componentWillReceiveProps(nextProps, prevProps) {
        if (nextProps.selectedId !== prevProps.selectedId) {
            this.setState({ selectedId: nextProps.selectedId });
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
                    type='text'
                />
                <CurrentPokemonInput
                    labelName='Game of Origin'
                    inputName='gameOfOrigin'
                    value={currentPokemon.gameOfOrigin}
                    type='select'
                    options={listOfGames}
                />
            </div>
        );
    }

    public expandView = (e: React.SyntheticEvent<HTMLButtonElement>) => {
        this.setState({
            expandedView: !this.state.expandedView,
        });
    };

    public render() {
        const currentPokemon = this.props.pokemon.find((v: Pokemon) => v.id === this.state.selectedId);

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
                        isShiny={currentPokemon.shiny}
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
                    <DeletePokemonButton id={this.state.selectedId} />
                </span>
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
                            { types: matchSpeciesToTypes(e.target.value) },
                            this.state.selectedId,
                        );
                        this.props.selectPokemon(this.state.selectedId);
                    }}
                />
                <CurrentPokemonInput
                    labelName='Nickname'
                    inputName='nickname'
                    value={currentPokemon.nickname}
                    placeholder='Fluffy'
                    type='text'
                />
                <CurrentPokemonInput
                    labelName='Level'
                    inputName='level'
                    placeholder='5'
                    value={currentPokemon.level}
                    type='text'
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
                    type='text'
                />
                <CurrentPokemonInput
                    labelName='Gender'
                    inputName='gender'
                    placeholder=''
                    value={currentPokemon.gender}
                    type='select'
                    options={['Male', 'Female', 'Neutral']}
                />
                <CurrentPokemonInput
                    labelName='Nature'
                    inputName='nature'
                    placeholder='Sassy'
                    value={currentPokemon.nature}
                    type='select'
                    options={[
                        'Adamant',
                        'Bashful',
                        'Bold',
                        'Brave',
                        'Calm',
                        'Careful',
                        'Docile',
                        'Gentle',
                        'Hardy',
                        'Hasty',
                        'Impish',
                        'Jolly',
                        'Lax',
                        'Lonely',
                        'Mild',
                        'Modest',
                        'Naive',
                        'Naughty',
                        'Quiet',
                        'Quirky',
                        'Rash',
                        'Relaxed',
                        'Sassy',
                        'Serious',
                        'Timid',
                        'None',
                    ]}
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
    (state:any) => ({
        box: state.box,
        selectedId: state.selectedId,
        pokemon: state.pokemon
    }),
    {
        selectPokemon,
        editPokemon
    }
)(CurrentPokemonEditBase);
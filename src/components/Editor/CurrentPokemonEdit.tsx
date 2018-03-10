import * as React from 'react';
import {
    speciesToNumber,
    getSpriteIcon,
    getAdditionalFormes,
    StoreContext,
    listOfPokemon,
    matchSpeciesToTypes,
} from 'utils';
import { Pokemon } from 'models';
import { onClick } from 'types';
import { CurrentPokemonInput } from './CurrentPokemonInput';
import { LinkedDeletePokemonButton } from './LinkedDeletePokemonButton';
import { Autocomplete } from '../Shared';
import { selectPokemon, editPokemon } from 'actions';
import { listOfGames } from 'utils';

interface CurrentPokemonEditState {
    selectedId: string;
    expandedView: boolean;
}

@StoreContext
export class CurrentPokemonEdit extends React.Component<{}, CurrentPokemonEditState> {
    constructor(props: any) {
        super(props);
        this.state = {
            selectedId: '5',
            expandedView: false,
        };
    }

    public componentWillMount() {
        this.context.store.subscribe(() => {
            this.setState({
                selectedId: this.context.store.getState().selectedId,
            });
        });
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
                <CurrentPokemonInput
                    labelName='Item'
                    inputName='item'
                    value={currentPokemon.item}
                    type='text'
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
        // const SpeciesComplete = new Autocomplete({
        //     items: [],
        //     placeholder: 'Missing No.',
        //     name: 'species',
        //     label: 'Species'
        // }).typeOf<string>();
        const currentPokemon = this.context.store
            .getState()
            .pokemon.find((v: Pokemon) => v.id === this.state.selectedId);

        if (currentPokemon == null) {
            return <div className='current-pokemon'>Select a Pok&eacute;mon to edit</div>;
        }

        return (
            <div className='current-pokemon'>
                <span className='current-pokemon-header'>
                    <img
                        className='current-pokemon-image'
                        alt='icon'
                        src={getSpriteIcon(currentPokemon.species, currentPokemon.forme)}
                    />
                    <CurrentPokemonInput
                        labelName='Status'
                        inputName='status'
                        value={currentPokemon.status}
                        type='select'
                        options={['Team', 'Boxed', 'Dead', 'Champs']}
                    />
                    <LinkedDeletePokemonButton id={this.state.selectedId} />
                </span>
                {/* <CurrentPokemonInput
                    labelName='Species'
                    inputName='species'
                    value={currentPokemon.species}
                    placeholder='Missing No.'
                    type='text'
                /> */}
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
                        this.context.store.dispatch(editPokemon(edit, this.state.selectedId));
                        this.context.store.dispatch(
                            editPokemon(
                                { types: matchSpeciesToTypes(e.target.value) },
                                this.state.selectedId,
                            ),
                        );
                        this.context.store.dispatch(selectPokemon(this.state.selectedId));
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
                <CurrentPokemonInput
                    labelName='Met Location'
                    inputName='met'
                    placeholder='Pallet Town'
                    value={currentPokemon.met}
                    type='text'
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
                <CurrentPokemonInput
                    labelName='Ability'
                    inputName='ability'
                    placeholder=''
                    value={currentPokemon.ability}
                    type='text'
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

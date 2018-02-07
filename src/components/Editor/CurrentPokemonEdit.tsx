import * as React from 'react';
import { speciesToNumber, getSpriteIcon, StoreContext } from '../../utils';
import { Pokemon } from '../../models';
import { onClick } from '../../types';
import { CurrentPokemonInput } from './CurrentPokemonInput';
import { LinkedDeletePokemonButton } from './LinkedDeletePokemonButton';

interface CurrentPokemonEditState {
    selectedId: string;
    expandedView: boolean;
}

const getAdditionalFormes = (species:string | undefined):string[] => {
    if (species == null) return [];
    const s = species.toLowerCase();
    if (s === 'pikachu') {
        return [
            'Rock Star',
            'Belle',
            'Pop Star',
            'Ph. D',
            'Libre',
            'Original Cap',
            'Hoenn Cap',
            'Sinnoh Cap',
            'Unova Cap',
            'Kalos Cap',
            'Alola Cap',
            'Partner Cap'
        ];
    }
    if (s === 'pichu') {
        return [
            'Spiky-eared'
        ];
    }
    if (s === 'unown') {
        return [
            'A',
            'B',
            'C',
            'D',
            'E',
            'F',
            'G',
            'H',
            'I',
            'J',
            'K',
            'L',
            'M',
            'N',
            'O',
            'P',
            'Q',
            'R',
            'S',
            'T',
            'U',
            'V',
            'W',
            'X',
            'Y',
            'Z'
        ];
    }
    if (s === 'castform') {
        return [
            'Sunny',
            'Rainy',
            'Snowy'
        ];
    }
    if (s === 'Deoxys') {
        return [
            'Attack',
            'Defense',
            'Speed'
        ];
    }
    if (s === 'burmy' || s === 'wormadam') {
        return [
            'Plant',
            'Sandy',
            'Trash'
        ];
    }
    if (s === 'shellos' || s === 'gastrodon') {
        return [
            'West Sea',
            'East Sea'
        ];
    }
    if (s === 'rotom') {
        return [
            'Heat',
            'Wash',
            'Frost',
            'Fan',
            'Mow'
        ];
    }
    if (s === 'giratina') {
        return [
            'Altered',
            'Origin'
        ];
    }
    if (s === 'shaymin') {
        return [
            'Land',
            'Sky'
        ];
    }
    if (s === 'basculin') {
        return [
            'Red-Striped',
            'Blue-Striped'
        ];
    }
    if (s === 'deerling' || s === 'sawsbuck') {
        return [
            'Spring',
            'Summer',
            'Autumn',
            'Winter'
        ];
    }
    if (s === 'tornadus' || s === 'thundurus' || s === 'landorus') {
        return [
            'Incarnate',
            'Therian'
        ];
    }
    if (s === 'kyurem') {
        return [
            'White Kyurem',
            'Black Kyurem'
        ];
    }
    if (s === 'keldeo') {
        return [
            'Resolute'
        ];
    }
    if (s === 'meloetta') {
        return [
            'Aria',
            'Pirouette'
        ];
    }
    if (s === 'genesect') {
        return [
            'Shock Drive',
            'Burn Drive',
            'Chill Drive',
            'Douse Drive'
        ];
    }
    if (s === 'flabébé' || s === 'floette' || s === 'florges') {
        return [
            'Red',
            'Yellow',
            'Orange',
            'Blue',
            'White'
        ];
    }
    if (s === 'zygarde') {
        return [
            '10%',
            '50%',
            'Complete'
        ];
    }
    if (s === 'hoopa') {
        return [
            'Confined',
            'Unbound'
        ];
    }
    if (s === 'Oricorio') {
        return [
            'Baile',
            'Pom-Pom',
            'Pa\'u',
            'Sensu'
        ];
    }
    if (s === 'lycanroc') {
        return [
            'Midday',
            'Midnight',
            'Dusk'
        ];
    }
    if (s === 'wishiwashi') {
        return [
            'Solo',
            'School'
        ];
    }
    if (s === 'Necroza') {
        return [
            'Dusk Mane',
            'Dawn Wings',
            'Ultra'
        ];
    }
    if (s === 'rattata' || s === 'raticate' || s === 'raichu' || s === 'sandshrew' || s === 'sandslash' || s === 'vulpix' || s === 'ninetales' || s === 'diglett' || s === 'dugtrio' || s === 'meowth' || s === 'persian' || s === 'geodude' || s === 'graveler' || s === 'golemn' || s === 'grimer' || s === 'muk' || s === 'exeggutor' || s === 'marowak') {
        return [
            'Alolan'
        ];
    }
    return [];
};


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
                    options={[
                        'Normal',
                        ...getAdditionalFormes(currentPokemon.species)
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
                    value={currentPokemon.customImage}
                    type='text'
                />
                <CurrentPokemonInput
                    labelName='Cause of Death'
                    inputName='causeOfDeath'
                    value={currentPokemon.causeOfDeath}
                    type='text'
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
            </div>
        );
    }

    public expandView = (e: React.SyntheticEvent<HTMLButtonElement>) => {
        this.setState({
            expandedView: !this.state.expandedView,
        });
    };

    public render() {
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
                        alt='Current Pokemon being edited'
                        src={getSpriteIcon(currentPokemon.species, currentPokemon.forme)}
                    />
                    <CurrentPokemonInput
                        labelName='Status'
                        inputName='status'
                        value={currentPokemon.status}
                        type='select'
                        options={['Team', 'Boxed', 'Dead']}
                    />
                    <LinkedDeletePokemonButton id={this.state.selectedId} />
                </span>
                <CurrentPokemonInput
                    labelName='Species'
                    inputName='species'
                    value={currentPokemon.species}
                    placeholder='Missing No.'
                    type='text'
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
                    type='text'
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

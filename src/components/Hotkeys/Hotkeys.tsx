import * as React from 'react';
import { connect } from 'react-redux';
import { reducers } from 'reducers';
import { selectPokemon } from 'actions';
import { Pokemon } from 'models';
import { sortPokes, sortPokesReverse, noop } from 'utils';
import { selectedId } from 'reducers/selectedId';

export const hotkeys = [
    {
        key: 'j',
        label: 'Previous Pokemon',
        onKeyUp: 'previousPokemon',
    },
    {
        key: 'k',
        label: 'Next Pokemon',
        onKeyUp: 'nextPokemon'
    }
];

export interface HotkeysProps {
    selectPokemon: selectPokemon;
    pokemon: Pokemon[];
    selectedId: string;
}

export class HotkeysBase extends React.PureComponent<HotkeysProps> {
    public globalHotkeysEvents: any;

    constructor(props) {
        super(props);
        this.globalHotkeysEvents = {
            handleKeyDown: this.handleKeyDown,
            handleKeyUp: this.handleKeyUp
        };
    }

    public componentDidMount() {
        document.addEventListener('keydown', this.globalHotkeysEvents.handleKeyDown);
        document.addEventListener('keyup', this.globalHotkeysEvents.handleKeyUp);
    }

    public componentWillMount() {
        document.removeEventListener('keydown', this.globalHotkeysEvents.handleKeyDown);
        document.removeEventListener('keyup', this.globalHotkeysEvents.handleKeyUp);
    }


    private handleKeyDown = (e: KeyboardEvent) => {
        return;
    }

    private handleKeyUp = (e: KeyboardEvent) => {
        hotkeys.map(hotkey => {
            if (e.key === hotkey.key) {
                if (this.isTextInput(e)) {
                    noop();
                } else {
                    this[hotkey.onKeyUp]();
                }
            }
        });
    }

    private isTextInput(e: KeyboardEvent) {
        const elem = e.target as HTMLElement;
        if (elem == null || elem.closest == null) {
            return false;
        }
        const editable = elem.closest('input, textarea, [contenteditable=true]');

        if (editable == null) {
            return false;
        }

        if (editable.tagName.toLowerCase() === 'input') {
            const inputType = (editable as HTMLInputElement).type;
            if (inputType === 'checkbox' || inputType === 'radio') {
                return false;
            }
        }

        if ((editable as HTMLInputElement).readOnly) {
            return false;
        }

        return true;
    }

    private getFirstPokemonId () {
        return this.props.pokemon.sort(sortPokes)[0].id;
    }

    private getLastPokemonId () {
        return this.props.pokemon.sort(sortPokesReverse)[0].id;
    }

    private previousPokemon () {
        const poke = this.props.pokemon.find(p => p.id === this.props.selectedId);
        const position = poke!.position;
        const prevPoke = this.props.pokemon.find(p => p.position === position! - 1);
        const id = prevPoke ? prevPoke.id : this.getLastPokemonId();
        this.props.selectPokemon(id);
        console.log('j', poke, position, prevPoke, id);
    }

    private nextPokemon () {
        const poke = this.props.pokemon.find(p => p.id === this.props.selectedId);
        const position = poke!.position;
        const nextPoke = this.props.pokemon.find(p => p.position === position! + 1);
        const id = nextPoke ? nextPoke.id : this.getFirstPokemonId();
        this.props.selectPokemon(id);
        console.log('k', poke, position, nextPoke, id);
    }

    public render() {
        return <div />;
    }
}

export const Hotkeys = connect(
    (state: Partial<typeof reducers>) => ({
        pokemon: state.pokemon,
        selectedId: state.selectedId
    }),
    {
        selectPokemon,
    }
)(HotkeysBase as any);
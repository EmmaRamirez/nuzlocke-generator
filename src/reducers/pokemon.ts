import { Action, ADD_POKEMON, DELETE_POKEMON, EDIT_POKEMON, REPLACE_STATE } from '../actions';
import { generateEmptyPokemon } from 'utils';

const pokemonState = [generateEmptyPokemon()];

export function pokemon(
    state = pokemonState,
    action: Action<ADD_POKEMON> | Action<DELETE_POKEMON> | Action<EDIT_POKEMON | REPLACE_STATE>,
) {
    switch (action.type) {
        case 'ADD_POKEMON':
            return [...state, action.pokemon];
        case 'DELETE_POKEMON':
            return state.filter((val, index) => {
                return val.id !== action.id;
            });
        case 'EDIT_POKEMON':
            const pokemonToEdit = state.find(poke => poke.id === action.id);
            const newPoke = { ...pokemonToEdit, ...action.edits };
            if (state.length === 1) {
                return [Object.assign({}, ...state, action.edits)];
            }
            return [...state.filter(poke => poke.id !== action.id), newPoke];
        case 'REPLACE_STATE':
            return action.replaceWith.pokemon;
        default:
            return state;
    }
}

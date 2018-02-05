import { Action } from './action';
import { Pokemon } from '../models';

export type ADD_POKEMON = 'ADD_POKEMON';
export const ADD_POKEMON: ADD_POKEMON = 'ADD_POKEMON';

export const addPokemon = (pokemon: Pokemon): Action<ADD_POKEMON> => {
    return {
        type: ADD_POKEMON,
        pokemon,
    };
};

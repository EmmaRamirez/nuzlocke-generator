import { Action } from './action';

export type DELETE_POKEMON = 'DELETE_POKEMON';
export const DELETE_POKEMON: DELETE_POKEMON = 'DELETE_POKEMON';

export type deletePokemon = (id: string) => Action<DELETE_POKEMON>;
export const deletePokemon = (id: string): Action<DELETE_POKEMON> => {
    return {
        type: DELETE_POKEMON,
        id,
    };
};

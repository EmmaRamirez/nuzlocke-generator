import { addPokemon, ADD_POKEMON } from '../addPokemon';
import { Pokemon } from 'models';

declare var expect: any;

describe('addPokemon', () => {
    xit('returns expected output', () => {
        const pokemon: Pokemon = {
            id: '0',
            species: 'Testmon',
            nickname: 'This is a test',
        };
        expect(addPokemon(pokemon)).toEqual({
            type: ADD_POKEMON,
            pokemon,
        });
    });
});

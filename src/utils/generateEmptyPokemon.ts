import * as uuid from 'uuid/v4';
import { Pokemon } from 'models';

export function generateEmptyPokemon(pokemon:Pokemon[]): Pokemon {
    let position = 0;
    if (pokemon && pokemon.length > 0) {
        try {
            position = parseInt(pokemon[pokemon.length - 1].position as any) + 1;
        } catch {
            console.log('Attempted to generate position, but failed.');
        }
    }
    const genStatus = () => {
        if (pokemon.filter(poke => poke.status === 'Team').length >= 6) return 'Boxed';
        return 'Team';
    };
    return {
        id: uuid(),
        position: position,
        species: '',
        nickname: '',
        status: genStatus(),
        gender: 'Male',
        level: 0,
        met: '',
        metLevel: 0,
        nature: 'Adamant',
        ability: '',
        types: ['Normal', 'None'],
    };
}
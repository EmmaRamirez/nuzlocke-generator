import { generateEmptyPokemon } from './generateEmptyPokemon';
import { Types } from './Types';



export const Fixtures = {
    Pikachu: {
        ...generateEmptyPokemon(),
        species: 'Pikachu',
        nickname: 'Sparky',
        types: [Types.Electric, Types.Electric]
    }
};
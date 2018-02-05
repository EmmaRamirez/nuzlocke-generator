import { Action, ADD_POKEMON, DELETE_POKEMON, EDIT_POKEMON } from '../actions';

const pokemonState = [
    {
        id: '5',
        species: 'Croagunk',
        nickname: 'Greg',
        types: ['Poison', 'Fighting'],
        status: 'Team',
        level: 34,
        gender: 'Male',
        met: 'Pastoria City',
        metLevel: 1,
        nature: 'Rash',
        ability: 'Dry Skin',
        moves: ['Bullet Punch', 'Cross Chop', 'Poison Jab', 'Taunt'],
    },
];

export function pokemon(
    state = pokemonState,
    action: Action<ADD_POKEMON> | Action<DELETE_POKEMON> | Action<EDIT_POKEMON>,
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
        default:
            return state;
    }
}

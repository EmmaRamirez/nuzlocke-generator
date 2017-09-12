import {
  Action,
  ADD_POKEMON,
  DELETE_POKEMON
} from '../actions';

export function pokemon(state = { pokemon: [] }, action:Action<ADD_POKEMON> | Action<DELETE_POKEMON>) {
  switch (action.type) {
    case 'ADD_POKEMON':
      return Object.assign({}, state, {
        pokemon: [
          ...state.pokemon,
          action.pokemon
        ]
      }
    );
    case 'DELETE_POKEMON':
      return Object.assign({}, state, {
        pokemon: state.pokemon.filter((val, index) => {
          return val.id !== action.id;
        })
      }
    );
    default:
      return state;
  }
}
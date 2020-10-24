import { listOfPokemon, Species } from './listOfPokemon';

export function speciesToNumber(s: Species): number | null {
    if (s == null) return 132;
    return listOfPokemon.indexOf(s) + 1;
}

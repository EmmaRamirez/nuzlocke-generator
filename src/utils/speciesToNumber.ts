import { listOfPokemon } from './listOfPokemon';

export function speciesToNumber(s: string): number | null {
    if (s == null) return 133;
    return listOfPokemon.indexOf(s) + 1;
}

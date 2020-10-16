import { Species } from './listOfPokemon';

export type EvolutionTree = {[S in Species]?: Species[]};

export const EvolutionTree: EvolutionTree = {
    Bulbasaur: ['Ivysaur'],
    Ivysaur: ['Venusaur'],
    Charmander: ['Charmeleon'],
    Charmeleon: ['Charizard'],
    Squirtle: ['Wartortle'],
    Wartortle: ['Blastoise'],
    Pidgey: ['Pidgeotto'],
    Pidgeotto: ['Pidgeot'],
    Caterpie: ['Metapod'],
    Metapod: ['Butterfree'],
    Weedle: ['Kakuna'],
    Kakuna: ['Beedrill'],
    Eevee: ['Jolteon', 'Flareon', 'Vaporeon', 'Sylveon', 'Umbreon', 'Espeon', 'Leafeon', 'Glaceon'],

    Turtwig: ['Grotle'],
    Grotle: ['Torterra'],

    Gligar: ['Gliscor'],
    Shieldon: ['Bastiodon'],
    Budew: ['Roselia'],
    Roselia: ['Roserade'],



};

export interface EvolutionTree {
    [species: string]: EvolutionTree | null;
}


export const EvolutionTree: EvolutionTree = {
    'Bulbasaur': {
        'Ivysaur': {
            'Venusaur': null
        }
    },
    'Charmander': {
        'Charmeleon': {
            'Charizard': null
        }
    },
    'Squirtle': {
        'Wartortle': {
            'Blastoise': null
        }
    },
    'Caterpie': {
        'Metapod': {
            'Butterfree': null,
        }
    },
    'Weedle': {
        'Kakuna': {
            'Beedrill': null,
        }
    },
    'Pidgey': {
        'Pidgeotto': {
            'Pidgeot': null
        }
    },
    'Rattata': {
        'Raticate': null,
    },

    'Eevee': {
        'Flareon': null,
        'Jolteon': null,
        'Vaporeon': null,
        'Umbreon': null,
        'Espeon': null,
        'Leafeon': null,
        'Glaceon': null,
        'Sylveon': null,
    }
};
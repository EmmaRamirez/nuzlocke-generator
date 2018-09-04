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
    'Pichu': {
        'Pikachu': {
            'Raichu': null
        }
    },
    'Ekans': {
        'Arbok': null,
    },
    'Sandshrew': {
        'Sandlsash': null,
    },
    'Spearow': {
        'Fearow': null
    },
    'Zubat': {
        'Golbat': {
            'Crobat': null
        }
    },
    'Poliwag': {
        'Poliwhirl': {
            'Poliwrath': null,
            'Politoed': null,
        }
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
import { Species } from './listOfPokemon';

export type EvolutionTree = { [S in Species]?: Species[] };

export const EvolutionTree: EvolutionTree = {
    Bulbasaur: ['Ivysaur'],
    Ivysaur: ['Venusaur'],
    Charmander: ['Charmeleon'],
    Charmeleon: ['Charizard'],
    Squirtle: ['Wartortle'],
    Wartortle: ['Blastoise'],

    Caterpie: ['Metapod'],
    Metapod: ['Butterfree'],
    Weedle: ['Kakuna'],
    Kakuna: ['Beedrill'],
    Pidgey: ['Pidgeotto'],
    Pidgeotto: ['Pidgeot'],
    Rattata: ['Raticate'],
    Pichu: ['Pikachu'],
    Pikachu: ['Raichu'],

    Spearow: ['Fearow'],
    Ekans: ['Arbok'],
    Sandshrew: ['Sandslash'],
    'Nidoran♀': ['Nidorina'],
    Nidorina: ['Nidoqueen'],
    'Nidoran♂': ['Nidorino'],
    Nidorino: ['Nidoking'],

    Cleffa: ['Clefairy'],
    Clefairy: ['Clefable'],
    Igglybuff: ['Jigglypuff'],
    Jigglypuff: ['Wigglytuff'],

    Zubat: ['Golbat'],
    Golbat: ['Crobat'],

    Oddish: ['Gloom'],
    Gloom: ['Vileplume', 'Bellossom'],

    Diglett: ['Dugtrio'],
    Meowth: ['Persian', 'Perrserker'],
    Psyduck: ['Golduck'],
    Mankey: ['Primeape'],
    Growlithe: ['Arcanine'],
    Poliwag: ['Poliwhirl'],
    Poliwhirl: ['Politoed', 'Poliwrath'],
    Abra: ['Kadabra'],
    Kadabra: ['Alakazam'],

    Machop: ['Machoke'],
    Machoke: ['Machamp'],

    Bellsprout: ['Weepinbell'],
    Weepinbell: ['Victreebel'],

    Tentacool: ['Tentacruel'],
    Geodude: ['Graveler'],
    Graveler: ['Golem'],

    Ponyta: ['Rapidash'],
    Slowpoke: ['Slowking', 'Slowbro'],

    Magnemite: ['Magneton'],
    Magneton: ['Magnezone'],

    'Farfetch\'d': ['Sirfetch\'d'],
    Doduo: ['Dodrio'],

    Seel: ['Dewgong'],
    Grimer: ['Muk'],
    Shellder: ['Cloyster'],
    Gastly: ['Haunter'],
    Haunter: ['Gengar'],

    Drowzee: ['Hypno'],
    Krabby: ['Kingler'],
    Voltorb: ['Electrode'],

    Exeggcute: ['Exeggutor'],
    Cubone: ['Marowak'],
    Tyrogue: ['Hitmonchan', 'Hitmonlee', 'Hitmontop'],

    Lickitung: ['Lickilicky'],
    Koffing: ['Weezing'],

    Rhyhorn: ['Rhydon'],
    Rhydon: ['Rhyperior'],
    Happiny: ['Chansey'],
    Chansey: ['Blissey'],

    Tangela: ['Tangrowth'],
    Horsea: ['Seadra'],
    Seadra: ['Kingdra'],
    Goldeen: ['Seaking'],
    Staryu: ['Starmie'],
    'Mime Jr.': ['Mr. Mime'],
    'Mr. Mime': ['Mr. Rime'],

    Scyther: ['Scizor'],
    Smoochum: ['Jynx'],

    Elekid: ['Electabuzz'],
    Electabuzz: ['Electivire'],
    Magby: ['Magmar'],
    Magmar: ['Magmortar'],
    Magikarp: ['Gyarados'],
    Porygon: ['Porygon2'],
    Porygon2: ['Porygon-Z'],
    Omanyte: ['Omastar'],
    Kabuto: ['Kabutops'],
    Munchlax: ['Snorlax'],
    Dratini: ['Dragonair'],
    Dragonair: ['Dragonite'],

    Eevee: ['Jolteon', 'Flareon', 'Vaporeon', 'Sylveon', 'Umbreon', 'Espeon', 'Leafeon', 'Glaceon'],

    Turtwig: ['Grotle'],
    Grotle: ['Torterra'],

    Gligar: ['Gliscor'],
    Shieldon: ['Bastiodon'],
    Budew: ['Roselia'],
    Roselia: ['Roserade'],
};

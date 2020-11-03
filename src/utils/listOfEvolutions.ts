import { Species } from './listOfPokemon';
import { flatten } from 'ramda';
const uniq = require('lodash/uniq');

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
    Onix: ['Steelix'],
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
    Eevee: ['Jolteon', 'Flareon', 'Vaporeon', 'Sylveon', 'Umbreon', 'Espeon', 'Leafeon', 'Glaceon'],
    Omanyte: ['Omastar'],
    Kabuto: ['Kabutops'],
    Munchlax: ['Snorlax'],
    Dratini: ['Dragonair'],
    Dragonair: ['Dragonite'],

    Chikorita: ['Bayleef'],
    Bayleef: ['Meganium'],
    Cyndaquil: ['Quilava'],
    Quilava: ['Typhlosion'],

    Totodile: ['Croconaw'],
    Croconaw: ['Feraligatr'],

    Hoothoot: ['Noctowl'],
    Sentret: ['Furret'],

    Ledyba: ['Ledian'],
    Spinarak: ['Ariados'],

    Togepi: ['Togetic'],
    Togetic: ['Togekiss'],

    Mareep: ['Flaaffy'],
    Flaaffy: ['Ampharos'],
    Wooper: ['Quagsire'],

    Hoppip: ['Skiploom'],
    Skiploom: ['Jumpluff'],

    Pineco: ['Forretress'],
    Yanma: ['Yanmega'],

    Sunkern: ['Sunflora'],

    Wynaut: ['Wobbuffet'],
    Aipom: ['Ambipom'],
    Snubbull: ['Granbull'],

    Azurill: ['Marill'],
    Marill: ['Azumarill'],
    Remoraid: ['Octillery'],
    Chinchou: ['Lanturn'],
    Swinub: ['Piloswine'],
    Piloswine: ['Mamoswine'],
    Teddiursa: ['Ursaring'],
    Phanpy: ['Donphan'],
    Mantyke: ['Mantine'],

    Murkrow: ['Honchkrow'],
    Misdreavus: ['Mismagius'],
    Houndour: ['Houndoom'],
    Slugma: ['Magcargo'],

    Sneasel: ['Weavile'],
    Larvitar: ['Pupitar'],
    Pupitar: ['Tyranitar'],
    Gligar: ['Gliscor'],


    Turtwig: ['Grotle'],
    Grotle: ['Torterra'],


    Shieldon: ['Bastiodon'],
    Budew: ['Roselia'],
    Roselia: ['Roserade'],
    Burmy: ['Wormadam', 'Mothim'],
};

const cycleThrough = (species: Species) => {
    const found: Species[] = [];
    for (const pokemon in EvolutionTree) {
        if (EvolutionTree[pokemon].includes(species)) {
            found.push(pokemon as Species);
        }
    }
    return found;
};

export const getEvolutionLine = (species: Species, linear: boolean = false): Species[] => {
    const line: Species[] = [];

    // include queries species
    line.push(species);

    const getPriors = (species) => {
        const priors = cycleThrough(species);
        if (priors.length) {
            line.push(...priors);
            priors.forEach(prior => {
                getPriors(prior);
                getNextEvo(prior);
            });
        }
    };

    const getNextEvo = (species: Species) => {
        const evolution = EvolutionTree[species];

        console.log(`evo for ${species}`, evolution, cycleThrough(species));

        if (!evolution) {
            getPriors(species);
        }
        if (evolution && evolution.length === 1) {
            line.push(evolution[0]);
            if (EvolutionTree[evolution[0]]) {
                getNextEvo(evolution[0]);
            }
        }
        if (evolution && evolution.length > 1) {
            return evolution.forEach(ev => getNextEvo(ev));
        }
    };

    getNextEvo(species);


    return uniq(line);
};



const tree = [
    ['Bulbasaur', 'Ivysaur', 'Venusaur'],
    ['Burmy', ['Mothim', 'Wormadam']],
    ['Wurmple', ['Silcoon', 'Cascoon'], ['Beautifly', 'Dustox']]
];

const getFlat = tree.map(branch => flatten(branch));

import { Types, Generation } from 'utils';
import { Forme } from './Forme';

const match  = ({ s, f, g, species, forme, generation }: { species: string[], forme?: string[], generation?: Generation[], s: string, f?: string, g?: Generation }) => {
    if (species.includes(s)) {
        if (generation) {
            if (g && generation.includes(g)) {
                if (forme && f && forme.includes(f)) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } else {
            if (f && forme && forme.includes(f)) {
                return true;
            } else {
                return false;
            }
        }
    }
    return false;
};

export const handleSpeciesTypeEdgeCases = ({ species, forme, generation }: { species: string, forme?: Forme, generation?: Generation}): [Types, Types] | null => {
    const s = species;
    const f = forme || undefined;
    const g = generation || undefined;
    const data = { s, f, g };
    if (match({
        ...data,
        species: ['Rattata', 'Raticate'],
        forme: ['Alola'],
    })) return [Types.Dark, Types.Normal];

    if (match({
        ...data,
        species: ['Raichu'],
        forme: ['Alola']
    })) return [Types.Electric, Types.Psychic];

    if (match({
        ...data,
        species: ['Sandslash', 'Sandshrew'],
        forme: ['Alola'],
    })) return [Types.Ice, Types.Steel];

    if (match({
        ...data,
        species: ['Vulpix'],
        forme: ['Alola'],
    })) return [Types.Ice, Types.Ice];

    if (match({
        ...data,
        species: ['Ninetales'],
        forme: ['Alola'],
    })) return [Types.Ice, Types.Fairy];

    if (match({
        ...data,
        species: ['Diglett', 'Dugtrio'],
        forme: ['Alola'],
    })) return [Types.Ground, Types.Steel];

    if (match({
        ...data,
        species: ['Meowth', 'Persian'],
        forme: ['Alola'],
    })) return [Types.Dark, Types.Dark];

    if (match({
        ...data,
        species: ['Geodude', 'Graveler', 'Golem'],
        forme: ['Alola']
    })) return [Types.Rock, Types.Electric];

    if (match({
        ...data,
        species: ['Marowak'],
        forme: ['Alola'],
    })) return [Types.Ghost, Types.Fire];

    if (match({
        ...data,
        species: ['Clefairy', 'Clefable', 'Cleffa', 'Togepi'],
        generation: [Generation.Gen1, Generation.Gen2, Generation.Gen3, Generation.Gen4,
        Generation.Gen5]
    })) return [Types.Normal, Types.Normal];

    if (match({
        ...data,
        species: ['Togetic', 'Togekiss'],
        generation: [Generation.Gen1, Generation.Gen2, Generation.Gen3, Generation.Gen4, Generation.Gen5],
    })) return [Types.Normal, Types.Flying];

    if (match({
        ...data,
        species: ['Ralts', 'Kirlia', 'Gardevoir', 'Mr. Mime', 'Mime Jr.'],
        generation: [Generation.Gen1, Generation.Gen2, Generation.Gen3, Generation.Gen4, Generation.Gen5]
    })) return [Types.Psychic, Types.Psychic];

    return null;
};

export const matchSpeciesToTypes = (species: string, forme?: Forme, generation?: Generation): [Types, Types] => {
    const result = handleSpeciesTypeEdgeCases({ species, forme, generation });
    if (result) return result;
    switch (species) {
        /**
         * @type Grass Types
         */
        case 'Bulbasaur':
        case 'Ivysaur':
        case 'Venusaur':
        case 'Roselia':
        case 'Budew':
        case 'Roserade':
        case 'Oddish':
        case 'Gloom':
        case 'Vileplume':
        case 'Bellsprout':
        case 'Weepinbell':
        case 'Victreebel':
        case 'Foongus':
        case 'Amoonguss':
            return [Types.Grass, Types.Poison];
        case 'Tangela':
        case 'Tangrowth':
        case 'Chikorita':
        case 'Bayleef':
        case 'Meganium':
        case 'Sunkern':
        case 'Sunflora':
        case 'Treecko':
        case 'Grovyle':
        case 'Sceptile':
        case 'Bellossom':
        case 'Servine':
        case 'Serperior':
        case 'Cherubi':
        case 'Cherrim':
        case 'Petilil':
        case 'Lilligant':
        case 'Leafeon':
        case 'Turtwig':
        case 'Grotle':
        case 'Carnivine':
        case 'Fomantis':
        case 'Lurantis':
            return [Types.Grass, Types.Grass];
        case 'Torterra':
            return [Types.Grass, Types.Ground];
        case 'Hoppip':
        case 'Skiploom':
        case 'Jumpluff':
        case 'Rowlet':
        case 'Dartrix':
            return [Types.Grass, Types.Flying];
        case 'Decidueye':
            return [Types.Grass, Types.Ghost];
        /**
         * @type Fire Types
         */
        case 'Charmander':
        case 'Charmeleon':
        case 'Vulpix':
        case 'Ninetales':
        case 'Growlithe':
        case 'Arcanine':
        case 'Ponyta':
        case 'Rapidash':
        case 'Magmar':
        case 'Flareon':
        case 'Cyndaquil':
        case 'Quilava':
        case 'Typhlosion':
        case 'Slugma':
        case 'Magby':
        case 'Entei':
        case 'Torchic':
        case 'Torkoal':
        case 'Chimchar':
        case 'Magmortar':
        case 'Tepig':
        case 'Pansear':
        case 'Simisear':
        case 'Darumaka':
        case 'Darmanitan':
        case 'Heatmor':
        case 'Fennekin':
        case 'Braixen':
        case 'Litten':
        case 'Torracat':
            return [Types.Fire, Types.Fire];
        case 'Charizard':
        case 'Moltres':
        case 'Ho-Oh':
        case 'Fletchinder':
        case 'Talonflame':
            return [Types.Fire, Types.Flying];
        /**
         * @type Water Type
         */
        case 'Squirtle':
        case 'Wartortle':
        case 'Blastoise':
        case 'Psyduck':
        case 'Golduck':
        case 'Poliwag':
        case 'Poliwhirl':
        case 'Seel':
        case 'Shellder':
        case 'Krabby':
        case 'Kingler':
        case 'Horsea':
        case 'Seadra':
        case 'Goldeen':
        case 'Seaking':
        case 'Staryu':
        case 'Magikarp':
        case 'Vaporeon':
        case 'Totodile':
        case 'Croconaw':
        case 'Feraligatr':
        case 'Politoed':
        case 'Remoraid':
        case 'Octillery':
        case 'Suicune':
        case 'Mudkip':
        case 'Wailmer':
        case 'Wailord':
        case 'Corphish':
        case 'Feebas':
        case 'Milotic':
        case 'Castform':
        case 'Clamperl':
        case 'Huntail':
        case 'Gorebyss':
        case 'Luvdisc':
        case 'Kyogre':
        case 'Piplup':
        case 'Prinplup':
        case 'Buizel':
        case 'Floatzel':
        case 'Shellos':
        case 'Finneon':
        case 'Lumineon':
        case 'Phione':
        case 'Manaphy':
        case 'Oshawott':
        case 'Dewott':
        case 'Samurott':
        case 'Panpour':
        case 'Simipour':
        case 'Tympole':
        case 'Basculin':
        case 'Alomomola':
        case 'Froakie':
        case 'Frogadier':
        case 'Clauncher':
        case 'Clawitzer':
        case 'Popplio':
        case 'Brionne':
        case 'Wishiwashi':
        case 'Pyukumuku':
            return [Types.Water, Types.Water];
        case 'Slowpoke':
        case 'Slowbro':
        case 'Slowking':
        case 'Starmie':
            return [Types.Water, Types.Psychic];
        case 'Gyarados':
        case 'Mantine':
            return [Types.Water, Types.Flying];
        /**
         * @type Fighting Type
         */
        case 'Mankey':
        case 'Primeape':
        case 'Machop':
        case 'Machoke':
        case 'Machamp':
        case 'Hitmonlee':
        case 'Hitmonchan':
        case 'Tyrogue':
        case 'Hitmontop':
        case 'Makuhita':
        case 'Hariyama':
        case 'Riolu':
        case 'Timburr':
        case 'Gurdurr':
        case 'Conkeldurr':
        case 'Throh':
        case 'Sawk':
        case 'Mienfoo':
        case 'Mienshao':
        case 'Pancham':
        case 'Crabrawler':
        case 'Passimian':
            return [Types.Fighting, Types.Fighting];
        /**
         * @type Flying
         */
        case 'Tornadus':
            return [Types.Flying, Types.Flying];
        case 'Noibat':
        case 'Noivern':
            return [Types.Flying, Types.Dragon];
        /**
         * @type Ground
         */
        case 'Sandshrew':
        case 'Sandslash':
        case 'Diglett':
        case 'Dugtrio':
        case 'Cubone':
        case 'Marowak':
        case 'Groudon':
        case 'Phanpy':
        case 'Donphan':
        case 'Trapinch':
        case 'Hippopotas':
        case 'Hippowdon':
        case 'Drilbur':
        case 'Mudbray':
        case 'Mudsdale':
            return [Types.Ground, Types.Ground];
        /**
         * @type Rock
         */
        case 'Geodude':
        case 'Graveler':
        case 'Golem':
        case 'Onix':
        case 'Rhyhorn':
        case 'Rhydon':
        case 'Rhyperior':
        case 'Sudowoodo':
            return [Types.Rock, Types.Ground];
        /**
         * @type Ghost
         */
        case 'Misdreavus':
        case 'Shuppet':
        case 'Banette':
        case 'Duskull':
        case 'Dusclops':
        case 'Mismagius':
        case 'Dusknoir':
        case 'Yamask':
        case 'Cofagrigus':
            return [Types.Ghost, Types.Ghost];
        case 'Gastly':
        case 'Haunter':
        case 'Gengar':
            return [Types.Ghost, Types.Poison];
        case 'Drifloon':
        case 'Drifblim':
            return [Types.Ghost, Types.Flying];
        case 'Spiritomb':
            return [Types.Ghost, Types.Dark];
        case 'Giratina':
            return [Types.Ghost, Types.Dragon];
        case 'Litwick':
        case 'Lampent':
        case 'Chandelure':
            return [Types.Ghost, Types.Fire];
        case 'Phantump':
        case 'Trevenant':
        case 'Pumpkaboo':
        case 'Gourgeist':
        case 'Dhelmise':
            return [Types.Ghost, Types.Grass];
        case 'Sandygast':
        case 'Palossand':
            return [Types.Ghost, Types.Ground];

        case 'Shedinja':
            return [Types.Bug, Types.Ghost];
        case 'Sabeleye':
            return [Types.Dark, Types.Ghost];
        case 'Rotom':
            return [Types.Electric, Types.Ghost];
        case 'Blacephalon':
            return [Types.Fire, Types.Ghost];
        case 'Golett':
        case 'Golurk':
            return [Types.Ground, Types.Ghost];
        case 'Froslass':
            return [Types.Ice, Types.Ghost];
        case 'Hoopa':
        case 'Lunala':
            return [Types.Psychic, Types.Ghost];
        case 'Honedge':
        case 'Doublade':
        case 'Aegislash':
            return [Types.Steel, Types.Ghost];
        case 'Frillish':
        case 'Jellicent':
            return [Types.Water, Types.Ghost];
        /**
         * @type Fighting
         */
        case 'Meditite':
        case 'Medicham':
            return [Types.Fighting, Types.Psychic];
        case 'Lucario':
            return [Types.Fighting, Types.Steel];
        case 'Pangoro':
            return [Types.Fighting, Types.Dark];
        case 'Hawlucha':
            return [Types.Fighting, Types.Flying];
        case 'Crabominable':
            return [Types.Fighting, Types.Ice];
        case 'Heracross':
        case 'Buzzwole':
        case 'Pheromosa':
            return [Types.Bug, Types.Fighting];
        case 'Scraggy':
        case 'Scrafty':
            return [Types.Dark, Types.Fighting];
        case 'Hakamo-o':
        case 'Kommo-o':
            return [Types.Dragon, Types.Fighting];
        case 'Combusken':
        case 'Blaziken':
        case 'Monferno':
        case 'Infernape':
        case 'Pignite':
        case 'Emboar':
            return [Types.Fire, Types.Fighting];
        case 'Breloom':
        case 'Virizion':
        case 'Chensaught':
            return [Types.Grass, Types.Fighting];
        case 'Stufful':
        case 'Bewear':
            return [Types.Normal, Types.Fighting];
        case 'Gallade':
            return [Types.Psychic, Types.Fighting];
        case 'Terrakon':
            return [Types.Rock, Types.Fighting];
        case 'Cobalion':
            return [Types.Steel, Types.Fighting];
        case 'Poliwrath':
        case 'Keldeo':
            return [Types.Water, Types.Fighting];
        case 'Croagunk':
        case 'Toxicroak':
            return [Types.Poison, Types.Fighting];
        case 'Marshadow':
            return [Types.Ghost, Types.Fighting];
        case 'Dratini':
        case 'Dragonair':
        case 'Bagon':
        case 'Shelgon':
        case 'Druddigon':
            return [Types.Dragon, Types.Dragon];
        case 'Dragonite':
        case 'Salamence':
            return [Types.Dragon, Types.Flying];
        case 'Omanyte':
        case 'Omastar':
        case 'Kabuto':
        case 'Kabutops':
        case 'Tirtuoga':
        case 'Carracosta':
        case 'Corsola':
        case 'Binacle':
        case 'Barbaracle':
            return [Types.Water, Types.Rock];
        /**
         * @type Bug
         */
        case 'Caterpie':
        case 'Metapod':
        case 'Pinsir':
        case 'Pineco':
        case 'Wurmple':
        case 'Silcoon':
        case 'Volbeat':
        case 'Illumise':
        case 'Kricketot':
        case 'Kricketune':
        case 'Burmy':
        case 'Karrablast':
        case 'Shelmet':
        case 'Accelogr':
        case 'Scatterbug':
        case 'Spewpa':
        case 'Grubbin':
            return [Types.Bug, Types.Bug];
        case 'Joltik':
        case 'Galvantula':
        case 'Charjabug':
        case 'Vikavolt':
            return [Types.Bug, Types.Electric];
        case 'Cutiefly':
        case 'Ribombee':
            return [Types.Bug, Types.Fairy];
        case 'Larvesta':
        case 'Volcarona':
            return [Types.Bug, Types.Fire];
        case 'Butterfree':
        case 'Scyther':
        case 'Ledyba':
        case 'Ledian':
        case 'Yanma':
        case 'Beautifly':
        case 'Masquerain':
        case 'Ninjask':
        case 'Mothim':
        case 'Combee':
        case 'Vespiquen':
        case 'Yanmega':
        case 'Vivillon':
            return [Types.Bug, Types.Flying];
        case 'Paras':
        case 'Parasect':
        case 'Sewaddle':
        case 'Wormadam':
        case 'Swadloon':
        case 'Leavanny':
            return [Types.Bug, Types.Grass];
        case 'Nincada':
            return [Types.Bug, Types.Ground];
        case 'Weedle':
        case 'Kakuna':
        case 'Beedrill':
        case 'Venonat':
        case 'Venomoth':
        case 'Spinarak':
        case 'Ariados':
        case 'Dustox':
        case 'Venipede':
        case 'Whirlipede':
        case 'Scolipede':
            return [Types.Bug, Types.Poison];
        case 'Shuckle':
        case 'Dwebble':
        case 'Crustle':
            return [Types.Bug, Types.Rock];
        case 'Forretress':
        case 'Scizor':
        case 'Escavalier':
        case 'Durant':
        case 'Genesect':
            return [Types.Bug, Types.Steel];
        case 'Surskit':
        case 'Wimpod':
        case 'Golisopod':
            return [Types.Bug, Types.Water];
        case 'Dewpider':
        case 'Araquanid':
            return [Types.Bug, Types.Water];
        case 'Anorith':
        case 'Armaldo':
            return [Types.Rock, Types.Bug];
        case 'Skorupi':
            return [Types.Poison, Types.Bug];
        case 'Wooper':
        case 'Quagsire':
        case 'Marshtomp':
        case 'Swampert':
        case 'Gastrodon':
        case 'Barboach':
        case 'Whiscash':
            return [Types.Water, Types.Ground];
        case 'Mr. Mime':
        case 'Ralts':
        case 'Kirlia':
        case 'Gardevoir':
        case 'Mime Jr.':
        case 'Tapu Lele':
            return [Types.Psychic, Types.Fairy];
        /**
         * @type Fairy
         */
        case 'Clefairy':
        case 'Clefable':
        case 'Cleffa':
        case 'Togepi':
        case 'Snubbull':
        case 'Granbull':
        case 'Flabébé':
        case 'Floette':
        case 'Florges':
        case 'Spritzee':
        case 'Aromatisse':
        case 'Swirlix':
        case 'Slurpuff':
        case 'Sylveon':
        case 'Xerneas':
        case 'Comfey':
            return [Types.Fairy, Types.Fairy];
        case 'Togetic':
        case 'Togekiss':
            return [Types.Fairy, Types.Flying];
        case 'Dedenne':
        case 'Tapu Koko':
            return [Types.Electric, Types.Fairy];
        case 'Mimikyu':
            return [Types.Ghost, Types.Fairy];
        case 'Cottonee':
        case 'Whimsicott':
        case 'Morelull':
        case 'Shiinotic':
        case 'Tapu Bulu':
            return [Types.Grass, Types.Fairy];
        case 'Jigglypuff':
        case 'Wigglytuff':
        case 'Igglybuff':
        case 'Azurill':
            return [Types.Normal, Types.Fairy];
        case 'Carbink':
        case 'Diancie':
            return [Types.Rock, Types.Fairy];
        case 'Mawile':
        case 'Klefki':
        case 'Magearna':
            return [Types.Steel, Types.Fairy];
        case 'Marill':
        case 'Azumarill':
        case 'Primarina':
        case 'Tapu Fini':
            return [Types.Water, Types.Fairy];
        case 'Umbreon':
        case 'Poochyena':
        case 'Mightyena':
        case 'Absol':
        case 'Darkrai':
        case 'Purrloin':
        case 'Liepard':
        case 'Zorua':
        case 'Zoroark':
            return [Types.Dark, Types.Dark];
        case 'Deino':
        case 'Zweilous':
        case 'Hydreigon':
        case 'Guzzlord':
            return [Types.Dark, Types.Dragon];
        case 'Hondour':
        case 'Hondoom':
            return [Types.Dark, Types.Fire];
        case 'Murkrow':
        case 'Honchkrow':
        case 'Vullaby':
        case 'Mandibuzz':
        case 'Yveltal':
            return [Types.Dark, Types.Flying];
        case 'Sableye':
            return [Types.Dark, Types.Ghost];
        case 'Sneasel':
        case 'Weavile':
            return [Types.Dark, Types.Ice];
        case 'Inkay':
        case 'Malamar':
            return [Types.Dark, Types.Psychic];
        case 'Pawniard':
        case 'Bisharp':
            return [Types.Dark, Types.Steel];
        case 'Incineroar':
            return [Types.Fire, Types.Dark];
        case 'Nuzleaf':
        case 'Shiftry':
        case 'Cacturne':
            return [Types.Grass, Types.Dark];
        case 'Sandile':
        case 'Krokorok':
        case 'Krookodile':
            return [Types.Ground, Types.Dark];
        case 'Stunky':
        case 'Skuntank':
        case 'Drapion':
            return [Types.Poison, Types.Dark];
        case 'Tyranitar':
            return [Types.Rock, Types.Dark];
        case 'Carvanha':
        case 'Sharpedo':
        case 'Crawdaunt':
        case 'Greninja':
            return [Types.Water, Types.Dark];
        /**
         * @type Electric
         */
        case 'Pikachu':
        case 'Raichu':
        case 'Voltorb':
        case 'Electabuzz':
        case 'Jolteon':
        case 'Electrode':
        case 'Pichu':
        case 'Mareep':
        case 'Flaaffy':
        case 'Ampharos':
        case 'Elekid':
        case 'Raikou':
        case 'Electrike':
        case 'Manectric':
        case 'Plusle':
        case 'Minun':
        case 'Shinx':
        case 'Luxio':
        case 'Luxray':
        case 'Pachirisu':
        case 'Electivire':
        case 'Blitzle':
        case 'Zebstrika':
        case 'Tynamo':
        case 'Elektrik':
        case 'Elektross':
        case 'Xurkitree':
        case 'Zeraora':
            return [Types.Electric, Types.Electric];
        case 'Magnemite':
        case 'Magneton':
        case 'Magnezone':
        case 'Togedemaru':
            return [Types.Electric, Types.Steel];
        case 'Zapdos':
        case 'Emolga':
        case 'Thundurus':
            return [Types.Electric, Types.Flying];
        case 'Chinchou':
        case 'Lanturn':
            return [Types.Water, Types.Electric];
        /**
         * @type Psychic
         */
        case 'Abra':
        case 'Kadabra':
        case 'Alakazam':
        case 'Drowzee':
        case 'Hypno':
        case 'Mewtwo':
        case 'Mew':
        case 'Unown':
        case 'Wobbuffet':
        case 'Espeon':
        case 'Spoink':
        case 'Grumpig':
        case 'Chimecho':
        case 'Wynaut':
        case 'Deoxys':
        case 'Chingling':
        case 'Uxie':
        case 'Mesprit':
        case 'Azelf':
        case 'Cresselia':
        case 'Munna':
        case 'Musharna':
        case 'Gothita':
        case 'Gothorita':
        case 'Gothitelle':
        case 'Solosis':
        case 'Duosion':
        case 'Reuniclus':
        case 'Elgyem':
        case 'Beeheeyem':
        case 'Espurr':
        case 'Meowstic':
        case 'Cosmog':
        case 'Cosmoem':
        case 'Necrozma':
            return [Types.Psychic, Types.Psychic];
        case 'Magcargo':
            return [Types.Fire, Types.Rock];
        case 'Exeggcute':
        case 'Exeggutor':
        case 'Celebi':
            return [Types.Grass, Types.Psychic];
        case 'Tentacool':
        case 'Tentacruel':
            return [Types.Water, Types.Poison];
        case 'Farfetch\’d':
            return [Types.Normal, Types.Flying];
        case 'Dewgong':
        case 'Cloyster':
            return [Types.Water, Types.Ice];
        case 'Ekans':
        case 'Arbok':
        case 'Nidoran♀':
        case 'Nidorina':
        case 'Nidoran♂':
        case 'Nidorino':
        case 'Grimer':
        case 'Muk':
        case 'Koffing':
        case 'Weezing':
            return [Types.Poison, Types.Poison];
        case 'Nidoqueen':
        case 'Nidoking':
            return [Types.Poison, Types.Ground];
        case 'Zubat':
        case 'Golbat':
        case 'Crobat':
            return [Types.Poison, Types.Flying];
        case 'Aerodactyl':
            return [Types.Rock, Types.Flying];
        case 'Articuno':
        case 'Delibird':
            return [Types.Ice, Types.Flying];
        case 'Lapras':
            return [Types.Water, Types.Ice];
        case 'Xatu':
        case 'Natu':
        case 'Lugia':
            return [Types.Psychic, Types.Flying];
        case 'Swinub':
        case 'Piloswine':
        case 'Mamoswine':
            return [Types.Ground, Types.Ice];
        case 'Kingdra':
            return [Types.Water, Types.Dragon];
        case 'Jynx':
        case 'Smoochum':
            return [Types.Ice, Types.Psychic];
        /**
         * @type Normal
         */
        case 'Rattata':
        case 'Raticate':
        case 'Meowth':
        case 'Persian':
        case 'Eevee':
        case 'Porygon':
        case 'Sentret':
        case 'Furret':
        case 'Ditto':
        case 'Lickitung':
        case 'Kangaskhan':
        case 'Snorlax':
        case 'Teddiursa':
        case 'Ursaring':
        case 'Aipom':
        case 'Chansey':
        case 'Blissey':
        case 'Miltank':
        case 'Stantler':
        case 'Tauros':
        case 'Dunsparce':
        case 'Porygon2':
        case 'Smeargle':
        case 'Zigzagoon':
        case 'Linoone':
        case 'Slakoth':
        case 'Vigoroth':
        case 'Slaking':
        case 'Whismur':
        case 'Loudred':
        case 'Exploud':
        case 'Skitty':
        case 'Delcatty':
        case 'Spinda':
        case 'Zangoose':
        case 'Kecleon':
        case 'Bidoof':
        case 'Ambipom':
        case 'Buneary':
        case 'Lopunny':
        case 'Glameow':
        case 'Purugly':
        case 'Happiny':
        case 'Munchlax':
        case 'Lickilicky':
        case 'Porygon-Z':
        case 'Regigigas':
        case 'Arceus':
        case 'Patrat':
        case 'Watchog':
        case 'Lillipup':
        case 'Herdier':
        case 'Stoutland':
        case 'Audino':
        case 'Minccino':
        case 'Cinccino':
        case 'Bouffalant':
        case 'Bunnelby':
        case 'Furfrou':
        case 'Yungoos':
        case 'Gumshoos':
        case 'Type: Null':
        case 'Silvally':
        case 'Komala':
            return [Types.Normal, Types.Normal];
        case 'Drampa':
            return [Types.Normal, Types.Dragon];
        case 'Deerling':
        case 'Sawsbuck':
            return [Types.Normal, Types.Grass];
        case 'Diggersby':
            return [Types.Normal, Types.Ground];
        case 'Girafarig':
        case 'Meloetta':
        case 'Oranguru':
            return [Types.Normal, Types.Psychic];
        case 'Bibarel':
            return [Types.Normal, Types.Water];
        case 'Steelix':
            return [Types.Steel, Types.Ground];
        case 'Qwilfish':
            return [Types.Water, Types.Poison];
        case 'Skarmory':
            return [Types.Steel, Types.Flying];
        case 'Houndour':
        case 'Houndoom':
            return [Types.Dark, Types.Fire];
        case 'Larvitar':
        case 'Pupitar':
            return [Types.Rock, Types.Ground];
        case 'Lotad':
        case 'Lombre':
        case 'Ludicolo':
            return [Types.Grass, Types.Water];
        case 'Gligar':
        case 'Gliscor':
            return [Types.Ground, Types.Flying];
        case 'Pelipper':
        case 'Wingull':
            return [Types.Water, Types.Flying];
        case 'Aron':
        case 'Lairon':
        case 'Aggron':
            return [Types.Rock, Types.Steel];
        case 'Gulpin':
        case 'Swalot':
            return [Types.Poison, Types.Poison];
        case 'Numel':
        case 'Camerupt':
            return [Types.Fire, Types.Ground];
        case 'Altaria':
            return [Types.Dragon, Types.Flying];
        case 'Baltoy':
        case 'Claydol':
            return [Types.Ground, Types.Psychic];
        case 'Lileep':
        case 'Cradily':
            return [Types.Rock, Types.Grass];
        case 'Lunatone':
        case 'Solrock':
            return [Types.Rock, Types.Psychic];
        case 'Snorunt':
        case 'Glalie':
        case 'Regice':
        case 'Glaceon':
        case 'Vanillite':
        case 'Vanillish':
        case 'Vanilluxe':
        case 'Cubchoo':
        case 'Beartic':
        case 'Cryogonal':
        case 'Bergmite':
        case 'Avalugg':
            return [Types.Ice, Types.Ice];
        case 'Beldum':
        case 'Metang':
        case 'Metagross':
        case 'Jirachi':
            return [Types.Steel, Types.Psychic];
        case 'Regirock':
            return [Types.Rock, Types.Rock];
        case 'Cascoon':
            return [Types.Bug, Types.Bug];
        case 'Nosepass':
            return [Types.Rock, Types.Rock];
        case 'Seedot':
        case 'Shroomish':
            return [Types.Grass, Types.Grass];
        case 'Vibrava':
        case 'Flygon':
        case 'Gible':
        case 'Gabite':
        case 'Garchomp':
            return [Types.Dragon, Types.Ground];
        case 'Cacnea':
            return [Types.Grass, Types.Grass];
        case 'Seviper':
            return [Types.Poison, Types.Poison];
        case 'Tropius':
            return [Types.Grass, Types.Flying];
        case 'Spheal':
        case 'Sealeo':
        case 'Walrein':
            return [Types.Water, Types.Ice];
        case 'Relicanth':
            return [Types.Rock, Types.Water];
        case 'Registeel':
            return [Types.Steel, Types.Steel];
        case 'Latias':
        case 'Latios':
            return [Types.Dragon, Types.Psychic];
        case 'Rayquaza':
            return [Types.Dragon, Types.Flying];
        case 'Empoleon':
            return [Types.Water, Types.Steel];
        case 'Cranidos':
        case 'Rampardos':
            return [Types.Rock, Types.Rock];
        case 'Shieldon':
        case 'Bastiodon':
            return [Types.Rock, Types.Steel];
        case 'Bronzor':
        case 'Bronzong':
            return [Types.Steel, Types.Psychic];
        case 'Bonsly':
            return [Types.Rock, Types.Rock];
        case 'Mantyke':
            return [Types.Water, Types.Flying];
        case 'Snover':
        case 'Abomasnow':
            return [Types.Grass, Types.Ice];
        case 'Probopass':
            return [Types.Rock, Types.Steel];
        case 'Dialga':
            return [Types.Dragon, Types.Steel];
        case 'Palkia':
            return [Types.Dragon, Types.Water];
            // 'Heatran',
            // 'Shaymin',
            // 'Victini',
            // 'Snivy',
            // 'Pansage',
            // 'Simisage',
            // 'Roggenrola',
            // 'Boldore',
            // 'Gigalith',
            // 'Woobat',
            // 'Swoobat',
            // 'Excadrill',
            // 'Palpitoad',
            // 'Seismitoad',
            // 'Maractus',
            // 'Sigilyph',
            // 'Tirtouga',
            // 'Archen',
            // 'Archeops',
            // 'Trubbish',
            // 'Garbodor',
            // 'Ducklett',
            // 'Swanna',
            // 'Ferroseed',
            // 'Ferrothorn',
            // 'Klink',
            // 'Klang',
            // 'Klinklang',
            // 'Eelektrik',
            // 'Eelektross',
            // 'Beheeyem',
            // 'Axew',
            // 'Fraxure',
            // 'Haxorus',
            // 'Accelgor',
            // 'Stunfisk',
            // 'Terrakion',
            // 'Reshiram',
            // 'Zekrom',
            // 'Landorus',
            // 'Kyurem',
            // 'Chespin',
            // 'Quilladin',
            // 'Chesnaught',
            // 'Delphox',
            // 'Litleo',
            // 'Pyroar',
            // 'Skiddo',
            // 'Gogoat',
            // 'Skrelp',
            // 'Dragalge',
            // 'Helioptile',
            // 'Heliolisk',
            // 'Tyrunt',
            // 'Tyrantrum',
            // 'Amaura',
            // 'Aurorus',
            // 'Goomy',
            // 'Sliggoo',
            // 'Goodra',
            // 'Zygarde',
            // 'Volcanion',
            // 'Oricorio',
            // 'Rockruff',
            // 'Lycanroc',
            //  'Mareanie',
            // 'Toxapex',
            // 'Fomantis',
            // 'Lurantis',
            // 'Salandit',
            // 'Salazzle',
            // 'Bounsweet',
            // 'Steenee',
            // 'Tsareena',
            // 'Minior',
            // 'Turtonator',
            // 'Bruxish',
            // 'Jangmo-o',
            // 'Solgaleo',
            // 'Nihilego',
            // 'Celesteela',
            // 'Kartana',
        case 'Taillow':
        case 'Pidgey':
        case 'Pidgeotto':
        case 'Pidgeot':
        case 'Spearow':
        case 'Fearow':
        case 'Farfetch\'d':
        case 'Doduo':
        case 'Dodrio':
        case 'Hoothoot':
        case 'Noctowl':
        case 'Swellow':
        case 'Swablu':
        case 'Starly':
        case 'Staravia':
        case 'Staraptor':
        case 'Chatot':
        case 'Pidove':
        case 'Tranquill':
        case 'Unfezant':
        case 'Rufflet':
        case 'Braviary':
        case 'Fletchling':
        case 'Pikipek':
        case 'Trumbeak':
        case 'Toucannon':
            return [Types.Normal, Types.Flying];
        default:
            // @ts-ignore
            return [Types.Normal, Types.Normal];
    }
};

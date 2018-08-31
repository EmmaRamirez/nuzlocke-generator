import { Types, Generation } from 'utils';

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

export const handleSpeciesTypeEdgeCases = ({ species, forme, generation }): [Types, Types] | null => {
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
        species: ['Clefairy', 'Clefable', 'Cleffa'],
        generation: [Generation.Gen1, Generation.Gen2, Generation.Gen3, Generation.Gen4,
        Generation.Gen5]
    })) return [Types.Normal, Types.Normal];

    if (match({
        ...data,
        species: ['Ralts', 'Kirlia', 'Gardevoir', 'Mr. Mime', 'Mime Jr.'],
        generation: [Generation.Gen1, Generation.Gen2, Generation.Gen3, Generation.Gen4, Generation.Gen5]
    })) return [Types.Psychic, Types.Psychic];

    return null;
};

export const matchSpeciesToTypes = (species: string, forme?: string, generation?: Generation): [Types, Types] => {
    const result = handleSpeciesTypeEdgeCases({ species, forme, generation });
    if (result) return result;
    switch (species) {
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
        case 'Tornadus':
            return [Types.Flying, Types.Flying];
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
        case 'Geodude':
        case 'Graveler':
        case 'Golem':
        case 'Onix':
        case 'Rhyhorn':
        case 'Rhydon':
        case 'Rhyperior':
            return [Types.Rock, Types.Ground];
        case 'Noibat':
        case 'Noivern':
            return [Types.Flying, Types.Dragon];
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
        case 'Tailow':
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
        case 'Decidueye':
            return [Types.Grass, Types.Ghost];
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
        case 'Mr. Mime':
        case 'Ralts':
        case 'Kirlia':
        case 'Gardevoir':
        case 'Mime Jr.':
        case 'Tapu Lele':
            return [Types.Psychic, Types.Fairy];
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
        case 'Pikachu':
        case 'Raichu':
        case 'Voltorb':
        case 'Electabuzz':
        case 'Jolteon':
        case 'Electrode':
        case 'Pichu':
        case 'Mareep':
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
        case 'Magenton':
        case 'Magnezone':
        case 'Togedemaru':
            return [Types.Electric, Types.Steel];
        case 'Zapdos':
        case 'Emolga':
        case 'Thundurus':
            return [Types.Electric, Types.Flying];
        default:
            return [Types.Normal, Types.Normal];
    }
};

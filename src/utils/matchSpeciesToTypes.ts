export const matchSpeciesToTypes = (species: string): string[] => {
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
            return ['Grass', 'Poison'];
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
            return ['Fire', 'Fire'];
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
            return ['Water', 'Water'];
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
            return ['Fighting', 'Fighting'];
        case 'Misreavus':
        case 'Shuppet':
        case 'Banette':
        case 'Duskull':
        case 'Dusclops':
        case 'Mismagius':
        case 'Dusknoir':
        case 'Yamask':
        case 'Cofagrigus':
            return ['Ghost', 'Ghost'];
        case 'Gastly':
        case 'Haunter':
        case 'Gengar':
            return ['Ghost', 'Poison'];
        case 'Drifloon':
        case 'Drifblim':
            return ['Ghost', 'Flying'];
        case 'Spiritomb':
            return ['Ghost', 'Dark'];
        case 'Giratina':
            return ['Ghost', 'Dragon'];
        case 'Litwick':
        case 'Lampent':
        case 'Chandelure':
            return ['Ghost', 'Fire'];
        case 'Phantump':
        case 'Trevenant':
        case 'Pumpkaboo':
        case 'Gourgeist':
        case 'Dhelmise':
            return ['Ghost', 'Grass'];
        case 'Sandygast':
        case 'Palossand':
            return ['Ghost', 'Ground'];
        case 'Shedinja':
            return ['Bug', 'Ghost'];
        case 'Sabeleye':
            return ['Dark', 'Ghost'];
        case 'Rotom':
            return ['Electric', 'Ghost'];
        case 'Blacephalon':
            return ['Fire', 'Ghost'];
        case 'Decidueye':
            return ['Grass', 'Ghost'];
        case 'Golett':
        case 'Golurk':
            return ['Ground', 'Ghost'];
        case 'Froslass':
            return ['Ice', 'Ghost'];
        case 'Hoopa':
        case 'Lunala':
            return ['Psychic', 'Ghost'];
        case 'Honedge':
        case 'Doublade':
        case 'Aegislash':
            return ['Steel', 'Ghost'];
        case 'Frillish':
        case 'Jellicent':
            return ['Water', 'Ghost'];
        case 'Meditite':
        case 'Medicham':
            return ['Fighting', 'Psychic'];
        case 'Lucario':
            return ['Fighting', 'Steel'];
        case 'Pangoro':
            return ['Fighitng', 'Dark'];
        case 'Hawlucha':
            return ['Fighting', 'Flying'];
        case 'Crabominable':
            return ['Fighting', 'Ice'];
        case 'Heracross':
        case 'Buzzwole':
        case 'Pheromosa':
            return ['Bug', 'Fighting'];
        case 'Scraggy':
        case 'Scrafty':
            return ['Dark', 'Fighting'];
        case 'Hakamo-o':
        case 'Kommo-o':
            return ['Dragon', 'Fighting'];
        case 'Combusken':
        case 'Blaziken':
        case 'Monferno':
        case 'Infernape':
        case 'Pignite':
        case 'Emboar':
            return ['Fire', 'Fighting'];
        case 'Breloom':
        case 'Virizion':
        case 'Chensaught':
            return ['Grass', 'Fighting'];
        case 'Stufful':
        case 'Bewear':
            return ['Normal', 'Fighting'];
        case 'Gallade':
            return ['Psychic', 'Fighting'];
        case 'Terrakon':
            return ['Rock', 'Fighting'];
        case 'Cobalion':
            return ['Steel', 'Fighting'];
        case 'Poliwrath':
        case 'Keldeo':
            return ['Water', 'Fighting'];
        case 'Croagunk':
        case 'Toxicroak':
            return ['Poison', 'Fighting'];
        case 'Marshadow':
            return ['Ghost', 'Fighting'];
        case 'Dratini':
        case 'Dragonair':
        case 'Bagon':
        case 'Shelgon':
        case 'Druddigon':
            return ['Dragon', 'Dragon'];
        case 'Dragonite':
        case 'Salamence':
            return ['Dragon', 'Flying'];
        default:
            return ['Normal', 'Normal'];
    }
};

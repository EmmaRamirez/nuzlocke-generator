export const GEN_3_HELD_ITEM_MAP = [];

export const GEN_3_CHARACTER_MAP = [];

// Gen 3 location index to location name mapping
// Based on https://bulbapedia.bulbagarden.net/wiki/List_of_locations_by_index_number_in_Generation_III
// Indices 0x00-0x57: Hoenn (Ruby, Sapphire, Emerald)
// Indices 0x58-0xC4: Kanto (FireRed, LeafGreen, Emerald)
// Indices 0xC5-0xD4: Emerald-exclusive
// Indices 0xFD-0xFF: Special (all games)
export const GEN_3_LOCATIONS: Record<number, string> = {
  // Hoenn locations (0x00-0x57)
  0x00: 'Littleroot Town',
  0x01: 'Oldale Town',
  0x02: 'Dewford Town',
  0x03: 'Lavaridge Town',
  0x04: 'Fallarbor Town',
  0x05: 'Verdanturf Town',
  0x06: 'Pacifidlog Town',
  0x07: 'Petalburg City',
  0x08: 'Slateport City',
  0x09: 'Mauville City',
  0x0a: 'Rustboro City',
  0x0b: 'Fortree City',
  0x0c: 'Lilycove City',
  0x0d: 'Mossdeep City',
  0x0e: 'Sootopolis City',
  0x0f: 'Ever Grande City',
  0x10: 'Route 101',
  0x11: 'Route 102',
  0x12: 'Route 103',
  0x13: 'Route 104',
  0x14: 'Route 105',
  0x15: 'Route 106',
  0x16: 'Route 107',
  0x17: 'Route 108',
  0x18: 'Route 109',
  0x19: 'Route 110',
  0x1a: 'Route 111',
  0x1b: 'Route 112',
  0x1c: 'Route 113',
  0x1d: 'Route 114',
  0x1e: 'Route 115',
  0x1f: 'Route 116',
  0x20: 'Route 117',
  0x21: 'Route 118',
  0x22: 'Route 119',
  0x23: 'Route 120',
  0x24: 'Route 121',
  0x25: 'Route 122',
  0x26: 'Route 123',
  0x27: 'Route 124',
  0x28: 'Route 125',
  0x29: 'Route 126',
  0x2a: 'Route 127',
  0x2b: 'Route 128',
  0x2c: 'Route 129',
  0x2d: 'Route 130',
  0x2e: 'Route 131',
  0x2f: 'Route 132',
  0x30: 'Route 133',
  0x31: 'Route 134',
  0x32: 'Underwater',
  0x33: 'Granite Cave',
  0x34: 'Mt. Chimney',
  0x35: 'Safari Zone',
  0x36: 'Battle Tower',
  0x37: 'Weather Institute',
  0x38: 'Sealed Chamber',
  0x39: 'Victory Road',
  0x3a: 'Shoal Cave',
  0x3b: 'Cave of Origin',
  0x3c: 'Fiery Path',
  0x3d: 'Mt. Pyre',
  0x3e: 'Team Aqua Hideout',
  0x3f: 'Meteor Falls',
  0x40: 'Team Magma Hideout',
  0x41: 'Mirage Island',
  0x42: 'Hideout',
  0x43: 'Safari Zone',
  0x44: 'Scorched Slab',
  0x45: 'Island Cave',
  0x46: 'Desert Ruins',
  0x47: 'Ancient Tomb',
  0x48: 'Inside of Truck',
  0x49: 'Secret Base',
  0x4a: 'Petalburg Woods',
  0x4b: 'Slateport City',
  0x4c: 'Slateport City',
  0x4d: 'Contest Hall',
  0x4e: 'Lilycove City',
  0x4f: 'Lilycove City',
  0x50: 'S.S. Tidal',
  0x51: 'Abandoned Ship',
  0x52: 'Mossdeep City',
  0x53: 'Sky Pillar',
  0x54: 'Mystery Zone',
  0x55: 'Underwater',
  0x56: 'Secret Base',
  0x57: 'Ferry',

  // Kanto locations (0x58-0xC4)
  0x58: 'Pallet Town',
  0x59: 'Viridian City',
  0x5a: 'Pewter City',
  0x5b: 'Cerulean City',
  0x5c: 'Lavender Town',
  0x5d: 'Vermilion City',
  0x5e: 'Celadon City',
  0x5f: 'Fuchsia City',
  0x60: 'Cinnabar Island',
  0x61: 'Indigo Plateau',
  0x62: 'Saffron City',
  0x63: 'Route 1',
  0x64: 'Route 2',
  0x65: 'Route 3',
  0x66: 'Route 4',
  0x67: 'Route 5',
  0x68: 'Route 6',
  0x69: 'Route 7',
  0x6a: 'Route 8',
  0x6b: 'Route 9',
  0x6c: 'Route 10',
  0x6d: 'Route 11',
  0x6e: 'Route 12',
  0x6f: 'Route 13',
  0x70: 'Route 14',
  0x71: 'Route 15',
  0x72: 'Route 16',
  0x73: 'Route 17',
  0x74: 'Route 18',
  0x75: 'Route 19',
  0x76: 'Route 20',
  0x77: 'Route 21',
  0x78: 'Route 22',
  0x79: 'Route 23',
  0x7a: 'Route 24',
  0x7b: 'Route 25',
  0x7c: 'Viridian Forest',
  0x7d: 'Mt. Moon',
  0x7e: 'S.S. Anne',
  0x7f: 'Underground Path',
  0x80: 'Underground Path',
  0x81: "Diglett's Cave",
  0x82: 'Victory Road',
  0x83: 'Rocket Hideout',
  0x84: 'Silph Co.',
  0x85: 'Pokémon Mansion',
  0x86: 'Safari Zone',
  0x87: 'Pokémon League',
  0x88: 'Rock Tunnel',
  0x89: 'Seafoam Islands',
  0x8a: 'Pokémon Tower',
  0x8b: 'Cerulean Cave',
  0x8c: 'Power Plant',
  0x8d: 'One Island',
  0x8e: 'Two Island',
  0x8f: 'Three Island',
  0x90: 'Four Island',
  0x91: 'Five Island',
  0x92: 'Seven Island',
  0x93: 'Six Island',
  0x94: 'Kindle Road',
  0x95: 'Treasure Beach',
  0x96: 'Cape Brink',
  0x97: 'Bond Bridge',
  0x98: 'Three Isle Port',
  0x99: 'Sevii Isle 6',
  0x9a: 'Sevii Isle 7',
  0x9b: 'Sevii Isle 8',
  0x9c: 'Sevii Isle 9',
  0x9d: 'Resort Gorgeous',
  0x9e: 'Water Labyrinth',
  0x9f: 'Five Isle Meadow',
  0xa0: 'Memorial Pillar',
  0xa1: 'Outcast Island',
  0xa2: 'Green Path',
  0xa3: 'Water Path',
  0xa4: 'Ruin Valley',
  0xa5: 'Trainer Tower',
  0xa6: 'Canyon Entrance',
  0xa7: 'Sevault Canyon',
  0xa8: 'Tanoby Ruins',
  0xa9: 'Sevii Isle 22',
  0xaa: 'Sevii Isle 23',
  0xab: 'Sevii Isle 24',
  0xac: 'Navel Rock',
  0xad: 'Mt. Ember',
  0xae: 'Berry Forest',
  0xaf: 'Icefall Cave',
  0xb0: 'Rocket Warehouse',
  0xb1: 'Trainer Tower',
  0xb2: 'Dotted Hole',
  0xb3: 'Lost Cave',
  0xb4: 'Pattern Bush',
  0xb5: 'Altering Cave',
  0xb6: 'Tanoby Chambers',
  0xb7: 'Three Isle Path',
  0xb8: 'Tanoby Key',
  0xb9: 'Birth Island',
  0xba: 'Monean Chamber',
  0xbb: 'Liptoo Chamber',
  0xbc: 'Weepth Chamber',
  0xbd: 'Dilford Chamber',
  0xbe: 'Scufib Chamber',
  0xbf: 'Rixy Chamber',
  0xc0: 'Viapois Chamber',
  0xc1: 'Ember Spa',
  0xc2: 'Special Area',
  0xc3: 'Pokémon Network Center',
  0xc4: 'Celadon Dept.',

  // Emerald-exclusive locations (0xC5-0xD4)
  0xc5: 'Special Area',
  0xc6: 'Southern Island',
  0xc7: 'Fiery Path',
  0xc8: 'Jagged Pass',
  0xc9: 'Mossdeep City',
  0xca: 'Artisan Cave',
  0xcb: 'Safari Zone',
  0xcc: 'Underwater',
  0xcd: 'Terra Cave',
  0xce: 'Underwater',
  0xcf: 'Underwater',
  0xd0: 'Underwater',
  0xd1: 'Desert Underpass',
  0xd2: 'Altering Cave',
  0xd3: 'Navel Rock',
  0xd4: 'Trainer Hill',

  // Special locations (0xFD-0xFF)
  0xfd: 'Gift Egg',
  0xfe: 'In-game Trade',
  0xff: 'Fateful Encounter',
};

// Gen 3 internal species ID to National Dex number mapping
// Based on National Pokédex order (https://bulbapedia.bulbagarden.net/wiki/List_of_Pokémon_by_National_Pokédex_number)
// Direct 1:1 mapping for Gen 1-3 Pokemon (National Dex #1-386)
export const GEN_3_POKEMON_MAP: Record<number, number> = {
  0: 0, // None/Egg
  1: 1, // Bulbasaur
  2: 2, // Ivysaur
  3: 3, // Venusaur
  4: 4, // Charmander
  5: 5, // Charmeleon
  6: 6, // Charizard
  7: 7, // Squirtle
  8: 8, // Wartortle
  9: 9, // Blastoise
  10: 10, // Caterpie
  11: 11, // Metapod
  12: 12, // Butterfree
  13: 13, // Weedle
  14: 14, // Kakuna
  15: 15, // Beedrill
  16: 16, // Pidgey
  17: 17, // Pidgeotto
  18: 18, // Pidgeot
  19: 19, // Rattata
  20: 20, // Raticate
  21: 21, // Spearow
  22: 22, // Fearow
  23: 23, // Ekans
  24: 24, // Arbok
  25: 25, // Pikachu
  26: 26, // Raichu
  27: 27, // Sandshrew
  28: 28, // Sandslash
  29: 29, // Nidoran♀
  30: 30, // Nidorina
  31: 31, // Nidoqueen
  32: 32, // Nidoran♂
  33: 33, // Nidorino
  34: 34, // Nidoking
  35: 35, // Clefairy
  36: 36, // Clefable
  37: 37, // Vulpix
  38: 38, // Ninetales
  39: 39, // Jigglypuff
  40: 40, // Wigglytuff
  41: 41, // Zubat
  42: 42, // Golbat
  43: 43, // Oddish
  44: 44, // Gloom
  45: 45, // Vileplume
  46: 46, // Paras
  47: 47, // Parasect
  48: 48, // Venonat
  49: 49, // Venomoth
  50: 50, // Diglett
  51: 51, // Dugtrio
  52: 52, // Meowth
  53: 53, // Persian
  54: 54, // Psyduck
  55: 55, // Golduck
  56: 56, // Mankey
  57: 57, // Primeape
  58: 58, // Growlithe
  59: 59, // Arcanine
  60: 60, // Poliwag
  61: 61, // Poliwhirl
  62: 62, // Poliwrath
  63: 63, // Abra
  64: 64, // Kadabra
  65: 65, // Alakazam
  66: 66, // Machop
  67: 67, // Machoke
  68: 68, // Machamp
  69: 69, // Bellsprout
  70: 70, // Weepinbell
  71: 71, // Victreebel
  72: 72, // Tentacool
  73: 73, // Tentacruel
  74: 74, // Geodude
  75: 75, // Graveler
  76: 76, // Golem
  77: 77, // Ponyta
  78: 78, // Rapidash
  79: 79, // Slowpoke
  80: 80, // Slowbro
  81: 81, // Magnemite
  82: 82, // Magneton
  83: 83, // Farfetch'd
  84: 84, // Doduo
  85: 85, // Dodrio
  86: 86, // Seel
  87: 87, // Dewgong
  88: 88, // Grimer
  89: 89, // Muk
  90: 90, // Shellder
  91: 91, // Cloyster
  92: 92, // Gastly
  93: 93, // Haunter
  94: 94, // Gengar
  95: 95, // Onix
  96: 96, // Drowzee
  97: 97, // Hypno
  98: 98, // Krabby
  99: 99, // Kingler
  100: 100, // Voltorb
  101: 101, // Electrode
  102: 102, // Exeggcute
  103: 103, // Exeggutor
  104: 104, // Cubone
  105: 105, // Marowak
  106: 106, // Hitmonlee
  107: 107, // Hitmonchan
  108: 108, // Lickitung
  109: 109, // Koffing
  110: 110, // Weezing
  111: 111, // Rhyhorn
  112: 112, // Rhydon
  113: 113, // Chansey
  114: 114, // Tangela
  115: 115, // Kangaskhan
  116: 116, // Horsea
  117: 117, // Seadra
  118: 118, // Goldeen
  119: 119, // Seaking
  120: 120, // Staryu
  121: 121, // Starmie
  122: 122, // Mr. Mime
  123: 123, // Scyther
  124: 124, // Jynx
  125: 125, // Electabuzz
  126: 126, // Magmar
  127: 127, // Pinsir
  128: 128, // Tauros
  129: 129, // Magikarp
  130: 130, // Gyarados
  131: 131, // Lapras
  132: 132, // Ditto
  133: 133, // Eevee
  134: 134, // Vaporeon
  135: 135, // Jolteon
  136: 136, // Flareon
  137: 137, // Porygon
  138: 138, // Omanyte
  139: 139, // Omastar
  140: 140, // Kabuto
  141: 141, // Kabutops
  142: 142, // Aerodactyl
  143: 143, // Snorlax
  144: 144, // Articuno
  145: 145, // Zapdos
  146: 146, // Moltres
  147: 147, // Dratini
  148: 148, // Dragonair
  149: 149, // Dragonite
  150: 150, // Mewtwo
  151: 151, // Mew
  152: 152, // Chikorita
  153: 153, // Bayleef
  154: 154, // Meganium
  155: 155, // Cyndaquil
  156: 156, // Quilava
  157: 157, // Typhlosion
  158: 158, // Totodile
  159: 159, // Croconaw
  160: 160, // Feraligatr
  161: 161, // Sentret
  162: 162, // Furret
  163: 163, // Hoothoot
  164: 164, // Noctowl
  165: 165, // Ledyba
  166: 166, // Ledian
  167: 167, // Spinarak
  168: 168, // Ariados
  169: 169, // Crobat
  170: 170, // Chinchou
  171: 171, // Lanturn
  172: 172, // Pichu
  173: 173, // Cleffa
  174: 174, // Igglybuff
  175: 175, // Togepi
  176: 176, // Togetic
  177: 177, // Natu
  178: 178, // Xatu
  179: 179, // Mareep
  180: 180, // Flaaffy
  181: 181, // Ampharos
  182: 182, // Bellossom
  183: 183, // Marill
  184: 184, // Azumarill
  185: 185, // Sudowoodo
  186: 186, // Politoed
  187: 187, // Hoppip
  188: 188, // Skiploom
  189: 189, // Jumpluff
  190: 190, // Aipom
  191: 191, // Sunkern
  192: 192, // Sunflora
  193: 193, // Yanma
  194: 194, // Wooper
  195: 195, // Quagsire
  196: 196, // Espeon
  197: 197, // Umbreon
  198: 198, // Murkrow
  199: 199, // Slowking
  200: 200, // Misdreavus
  201: 201, // Unown
  202: 202, // Wobbuffet
  203: 203, // Girafarig
  204: 204, // Pineco
  205: 205, // Forretress
  206: 206, // Dunsparce
  207: 207, // Gligar
  208: 208, // Steelix
  209: 209, // Snubbull
  210: 210, // Granbull
  211: 211, // Qwilfish
  212: 212, // Scizor
  213: 213, // Shuckle
  214: 214, // Heracross
  215: 215, // Sneasel
  216: 216, // Teddiursa
  217: 217, // Ursaring
  218: 218, // Slugma
  219: 219, // Magcargo
  220: 220, // Swinub
  221: 221, // Piloswine
  222: 222, // Corsola
  223: 223, // Remoraid
  224: 224, // Octillery
  225: 225, // Delibird
  226: 226, // Mantine
  227: 227, // Skarmory
  228: 228, // Houndour
  229: 229, // Houndoom
  230: 230, // Kingdra
  231: 231, // Phanpy
  232: 232, // Donphan
  233: 233, // Porygon2
  234: 234, // Stantler
  235: 235, // Smeargle
  236: 236, // Tyrogue
  237: 237, // Hitmontop
  238: 238, // Smoochum
  239: 239, // Elekid
  240: 240, // Magby
  241: 241, // Miltank
  242: 242, // Blissey
  243: 243, // Raikou
  244: 244, // Entei
  245: 245, // Suicune
  246: 246, // Larvitar
  247: 247, // Pupitar
  248: 248, // Tyranitar
  249: 249, // Lugia
  250: 250, // Ho-Oh
  251: 251, // Celebi
  252: 252, // Treecko
  253: 253, // Grovyle
  254: 254, // Sceptile
  255: 255, // Torchic
  256: 256, // Combusken
  257: 257, // Blaziken
  258: 258, // Mudkip
  259: 259, // Marshtomp
  260: 260, // Swampert
  261: 261, // Poochyena
  262: 262, // Mightyena
  263: 263, // Zigzagoon
  264: 264, // Linoone
  265: 265, // Wurmple
  266: 266, // Silcoon
  267: 267, // Beautifly
  268: 268, // Cascoon
  269: 269, // Dustox
  270: 270, // Lotad
  271: 271, // Lombre
  272: 272, // Ludicolo
  273: 273, // Seedot
  274: 274, // Nuzleaf
  275: 275, // Shiftry
  276: 276, // Taillow
  277: 277, // Swellow
  278: 278, // Wingull
  279: 279, // Pelipper
  280: 280, // Ralts
  281: 281, // Kirlia
  282: 282, // Gardevoir
  283: 283, // Surskit
  284: 284, // Masquerain
  285: 285, // Shroomish
  286: 286, // Breloom
  287: 287, // Slakoth
  288: 288, // Vigoroth
  289: 289, // Slaking
  290: 290, // Nincada
  291: 291, // Ninjask
  292: 292, // Shedinja
  293: 293, // Whismur
  294: 294, // Loudred
  295: 295, // Exploud
  296: 296, // Makuhita
  297: 297, // Hariyama
  298: 298, // Azurill
  299: 299, // Nosepass
  300: 300, // Skitty
  301: 301, // Delcatty
  302: 302, // Sableye
  303: 303, // Mawile
  304: 304, // Aron
  305: 305, // Lairon
  306: 306, // Aggron
  307: 307, // Meditite
  308: 308, // Medicham
  309: 309, // Electrike
  310: 310, // Manectric
  311: 311, // Plusle
  312: 312, // Minun
  313: 313, // Volbeat
  314: 314, // Illumise
  315: 315, // Roselia
  316: 316, // Gulpin
  317: 317, // Swalot
  318: 318, // Carvanha
  319: 319, // Sharpedo
  320: 320, // Wailmer
  321: 321, // Wailord
  322: 322, // Numel
  323: 323, // Camerupt
  324: 324, // Torkoal
  325: 325, // Spoink
  326: 326, // Grumpig
  327: 327, // Spinda
  328: 328, // Trapinch
  329: 329, // Vibrava
  330: 330, // Flygon
  331: 331, // Cacnea
  332: 332, // Cacturne
  333: 333, // Swablu
  334: 334, // Altaria
  335: 335, // Zangoose
  336: 336, // Seviper
  337: 337, // Lunatone
  338: 338, // Solrock
  339: 339, // Barboach
  340: 340, // Whiscash
  341: 341, // Corphish
  342: 342, // Crawdaunt
  343: 343, // Baltoy
  344: 344, // Claydol
  345: 345, // Lileep
  346: 346, // Cradily
  347: 347, // Anorith
  348: 348, // Armaldo
  349: 349, // Feebas
  350: 350, // Milotic
  351: 351, // Castform
  352: 352, // Kecleon
  353: 353, // Shuppet
  354: 354, // Banette
  355: 355, // Duskull
  356: 356, // Dusclops
  357: 357, // Tropius
  358: 358, // Chimecho
  359: 359, // Absol
  360: 360, // Wynaut
  361: 361, // Snorunt
  362: 362, // Glalie
  363: 363, // Spheal
  364: 364, // Sealeo
  365: 365, // Walrein
  366: 366, // Clamperl
  367: 367, // Huntail
  368: 368, // Gorebyss
  369: 369, // Relicanth
  370: 370, // Luvdisc
  371: 371, // Bagon
  372: 372, // Shelgon
  373: 373, // Salamence
  374: 374, // Beldum
  375: 375, // Metang
  376: 376, // Metagross
  377: 377, // Regirock
  378: 378, // Regice
  379: 379, // Registeel
  380: 380, // Latias
  381: 381, // Latios
  382: 382, // Kyogre
  383: 383, // Groudon
  384: 384, // Rayquaza
  385: 385, // Jirachi
  386: 386, // Deoxys
  387: 0, // Old Unown B
  388: 0, // Old Unown C
  389: 0, // Old Unown D
  390: 0, // Old Unown E
  391: 0, // Old Unown F
  392: 0, // Old Unown G
  393: 0, // Old Unown H
  394: 0, // Old Unown I
  395: 0, // Old Unown J
  396: 0, // Old Unown K
  397: 0, // Old Unown L
  398: 0, // Old Unown M
  399: 0, // Old Unown N
  400: 0, // Old Unown O
  401: 0, // Old Unown P
  402: 0, // Old Unown Q
  403: 0, // Old Unown R
  404: 0, // Old Unown S
  405: 0, // Old Unown T
  406: 0, // Old Unown U
  407: 0, // Old Unown V
  408: 0, // Old Unown W
  409: 0, // Old Unown X
  410: 0, // Old Unown Y
  411: 0, // Old Unown Z
};

// Gen 3 Pokémon ability mapping by species ID (1: Bulbasaur, etc.)
// Source: https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_Ability
export const ABILITY_MAP: { [speciesId: number]: string[] } = {
  // 1-3: Bulbasaur line
  1: ['Overgrow'],
  2: ['Overgrow'],
  3: ['Overgrow'],
  // 4-6: Charmander line
  4: ['Blaze'],
  5: ['Blaze'],
  6: ['Blaze'],
  // 7-9: Squirtle line
  7: ['Torrent'],
  8: ['Torrent'],
  9: ['Torrent'],
  // 10-12: Caterpie line
  10: ['Shield Dust'],
  11: ['Shed Skin'],
  12: ['Compound Eyes'],
  // 13-15: Weedle line
  13: ['Shield Dust'],
  14: ['Shed Skin'],
  15: ['Intimidate'],
  // 16-18: Pidgey line
  16: ['Keen Eye'],
  17: ['Keen Eye'],
  18: ['Keen Eye'],
  // 19-20: Rattata line
  19: ['Run Away', 'Guts'],
  20: ['Run Away', 'Guts'],
  // 21-22: Spearow line
  21: ['Keen Eye'],
  22: ['Keen Eye'],
  // 23-24: Ekans line
  23: ['Intimidate'],
  24: ['Intimidate'],
  // 25-26: Pikachu line
  25: ['Static'],
  26: ['Static'],
  // 27-28: Sandshrew line
  27: ['Sand Veil'],
  28: ['Sand Veil'],
  // 29-31: Nidoran♀ line
  29: ['Poison Point'],
  30: ['Poison Point'],
  31: ['Poison Point'],
  // 32-34: Nidoran♂ line
  32: ['Poison Point'],
  33: ['Poison Point'],
  34: ['Poison Point'],
  // 35-36: Clefairy line
  35: ['Cute Charm'],
  36: ['Cute Charm'],
  // 37-38: Vulpix line
  37: ['Flash Fire'],
  38: ['Flash Fire'],
  // 39-40: Jigglypuff line
  39: ['Cute Charm'],
  40: ['Cute Charm'],
  // 41-42: Zubat line
  41: ['Inner Focus'],
  42: ['Inner Focus'],
  // 43-45: Oddish line
  43: ['Chlorophyll'],
  44: ['Chlorophyll'],
  45: ['Chlorophyll'],
  // 46-47: Paras line
  46: ['Effect Spore'],
  47: ['Effect Spore'],
  // 48-49: Venonat line
  48: ['Compound Eyes'],
  49: ['Shield Dust'],
  // 50-51: Diglett line
  50: ['Sand Veil'],
  51: ['Sand Veil'],
  // 52-53: Meowth line
  52: ['Pickup'],
  53: ['Limber'],
  // 54-55: Psyduck line
  54: ['Damp', 'Cloud Nine'],
  55: ['Damp', 'Cloud Nine'],
  // 56-57: Mankey line
  56: ['Vital Spirit'],
  57: ['Vital Spirit'],
  // 58-59: Growlithe line
  58: ['Intimidate'],
  59: ['Intimidate'],
  // 60-62: Poliwag line
  60: ['Water Absorb', 'Damp'],
  61: ['Water Absorb', 'Damp'],
  62: ['Water Absorb', 'Damp'],
  // 63-65: Abra line
  63: ['Synchronize'],
  64: ['Synchronize'],
  65: ['Synchronize'],
  // 66-68: Machop line
  66: ['Guts'],
  67: ['Guts'],
  68: ['Guts'],
  // 69-71: Bellsprout line
  69: ['Chlorophyll'],
  70: ['Chlorophyll'],
  71: ['Chlorophyll'],
  // 72-73: Tentacool line
  72: ['Clear Body', 'Liquid Ooze'],
  73: ['Clear Body', 'Liquid Ooze'],
  // 74-76: Geodude line
  74: ['Rock Head', 'Sturdy'],
  75: ['Rock Head', 'Sturdy'],
  76: ['Rock Head', 'Sturdy'],
  // 77-78: Ponyta line
  77: ['Run Away', 'Flash Fire'],
  78: ['Run Away', 'Flash Fire'],
  // 79-80: Slowpoke line
  79: ['Oblivious', 'Own Tempo'],
  80: ['Oblivious', 'Own Tempo'],
  // 81-82: Magnemite line
  81: ['Magnet Pull'],
  82: ['Magnet Pull'],
  // 83: Farfetch'd
  83: ['Keen Eye'],
  // 84-85: Doduo line
  84: ['Run Away', 'Early Bird'],
  85: ['Run Away', 'Early Bird'],
  // 86-87: Seel line
  86: ['Thick Fat'],
  87: ['Thick Fat'],
  // 88-89: Grimer line
  88: ['Stench', 'Sticky Hold'],
  89: ['Stench', 'Sticky Hold'],
  // 90-91: Shellder line
  90: ['Shell Armor'],
  91: ['Shell Armor'],
  // 92-94: Gastly line
  92: ['Levitate'],
  93: ['Levitate'],
  94: ['Levitate'],
  // 95: Onix
  95: ['Rock Head', 'Sturdy'],
  // 96-97: Drowzee line
  96: ['Insomnia'],
  97: ['Insomnia'],
  // 98-99: Krabby line
  98: ['Hyper Cutter', 'Shell Armor'],
  99: ['Hyper Cutter', 'Shell Armor'],
  // 100-101: Voltorb line
  100: ['Soundproof', 'Static'],
  101: ['Soundproof', 'Static'],
  // 102-103: Exeggcute line
  102: ['Chlorophyll'],
  103: ['Chlorophyll'],
  // 104-105: Cubone line
  104: ['Rock Head', 'Lightning Rod'],
  105: ['Rock Head', 'Lightning Rod'],
  // 106: Hitmonlee
  106: ['Limber'],
  // 107: Hitmonchan
  107: ['Keen Eye'],
  // 108: Lickitung
  108: ['Own Tempo', 'Oblivious'],
  // 109-110: Koffing line
  109: ['Levitate'],
  110: ['Levitate'],
  // 111-112: Rhyhorn line
  111: ['Lightning Rod', 'Rock Head'],
  112: ['Lightning Rod', 'Rock Head'],
  // 113: Chansey
  113: ['Natural Cure', 'Serene Grace'],
  // 114: Tangela
  114: ['Chlorophyll'],
  // 115: Kangaskhan
  115: ['Early Bird'],
  // 116-117: Horsea line
  116: ['Swift Swim'],
  117: ['Swift Swim'],
  // 118-119: Goldeen line
  118: ['Swift Swim', 'Water Veil'],
  119: ['Swift Swim', 'Water Veil'],
  // 120-121: Staryu line
  120: ['Illuminate', 'Natural Cure'],
  121: ['Illuminate', 'Natural Cure'],
  // 122: Mr. Mime
  122: ['Soundproof'],
  // 123: Scyther
  123: ['Swarm'],
  // 124: Jynx
  124: ['Oblivious', 'Forewarn'],
  // 125: Electabuzz
  125: ['Static'],
  // 126: Magmar
  126: ['Flame Body'],
  // 127: Pinsir
  127: ['Hyper Cutter'],
  // 128: Tauros
  128: ['Intimidate'],
  // 129-130: Magikarp line
  129: ['Swift Swim'],
  130: ['Intimidate'],
  // 131: Lapras
  131: ['Water Absorb', 'Shell Armor'],
  // 132: Ditto
  132: ['Limber'],
  // 133-136: Eevee line
  133: ['Run Away', 'Adaptability'],
  134: ['Water Absorb'],
  135: ['Volt Absorb'],
  136: ['Flash Fire'],
  // 137: Porygon
  137: ['Trace'],
  // 138-139: Omanyte line
  138: ['Swift Swim', 'Shell Armor'],
  139: ['Swift Swim', 'Shell Armor'],
  // 140-141: Kabuto line
  140: ['Swift Swim', 'Battle Armor'],
  141: ['Swift Swim', 'Battle Armor'],
  // 142: Aerodactyl
  142: ['Rock Head', 'Pressure'],
  // 143: Snorlax
  143: ['Immunity', 'Thick Fat'],
  // 144: Articuno
  144: ['Pressure'],
  // 145: Zapdos
  145: ['Pressure'],
  // 146: Moltres
  146: ['Pressure'],
  // 147-149: Dratini line
  147: ['Shed Skin'],
  148: ['Shed Skin'],
  149: ['Inner Focus'],
  // 150: Mewtwo
  150: ['Pressure'],
  // 151: Mew
  151: ['Synchronize'],
  // 152-154: Chikorita line
  152: ['Overgrow'],
  153: ['Overgrow'],
  154: ['Overgrow'],
  // 155-157: Cyndaquil line
  155: ['Blaze'],
  156: ['Blaze'],
  157: ['Blaze'],
  // 158-160: Totodile line
  158: ['Torrent'],
  159: ['Torrent'],
  160: ['Torrent'],
  // 161-162: Sentret line
  161: ['Run Away', 'Keen Eye'],
  162: ['Run Away', 'Keen Eye'],
  // 163-164: Hoothoot line
  163: ['Insomnia'],
  164: ['Insomnia'],
  // 165-166: Ledyba line
  165: ['Swarm', 'Early Bird'],
  166: ['Swarm', 'Early Bird'],
  // 167-168: Spinarak line
  167: ['Swarm', 'Insomnia'],
  168: ['Swarm', 'Insomnia'],
  // 169: Crobat
  169: ['Inner Focus'],
  // 170-171: Chinchou line
  170: ['Volt Absorb', 'Illuminate'],
  171: ['Volt Absorb', 'Illuminate'],
  // 172: Pichu
  172: ['Static'],
  // 173: Cleffa
  173: ['Cute Charm'],
  // 174: Igglybuff
  174: ['Cute Charm'],
  // 175-176: Togepi line
  175: ['Hustle', 'Serene Grace'],
  176: ['Hustle', 'Serene Grace'],
  // 177-178: Natu line
  177: ['Synchronize', 'Early Bird'],
  178: ['Synchronize', 'Early Bird'],
  // 179-181: Mareep line
  179: ['Static'],
  180: ['Static'],
  181: ['Static'],
  // 182: Bellossom
  182: ['Chlorophyll'],
  // 183-184: Marill line
  183: ['Thick Fat', 'Huge Power'],
  184: ['Thick Fat', 'Huge Power'],
  // 185: Sudowoodo
  185: ['Sturdy', 'Rock Head'],
  // 186: Politoed
  186: ['Water Absorb', 'Damp'],
  // 187-189: Hoppip line
  187: ['Chlorophyll', 'Leaf Guard'],
  188: ['Chlorophyll', 'Leaf Guard'],
  189: ['Chlorophyll', 'Leaf Guard'],
  // 190: Aipom
  190: ['Run Away', 'Pickup'],
  // 191-192: Sunkern line
  191: ['Chlorophyll', 'Solar Power'],
  192: ['Chlorophyll', 'Solar Power'],
  // 193: Yanma
  193: ['Speed Boost'],
  // 194-195: Wooper line
  194: ['Water Absorb', 'Damp'],
  195: ['Water Absorb', 'Damp'],
  // 196-197: Espeon/Umbreon
  196: ['Synchronize'],
  197: ['Synchronize'],
  // 198: Murkrow
  198: ['Insomnia'],
  // 199: Slowking
  199: ['Oblivious', 'Own Tempo'],
  // 200: Misdreavus
  200: ['Levitate'],
  // 201: Unown
  201: ['Levitate'],
  // 202: Wobbuffet
  202: ['Shadow Tag'],
  // 203: Girafarig
  203: ['Inner Focus', 'Early Bird'],
  // 204-205: Pineco line
  204: ['Sturdy'],
  205: ['Sturdy'],
  // 206: Dunsparce
  206: ['Serene Grace', 'Run Away'],
  // 207: Gligar
  207: ['Hyper Cutter', 'Sand Veil'],
  // 208: Steelix
  208: ['Rock Head', 'Sturdy'],
  // 209-210: Snubbull line
  209: ['Intimidate', 'Run Away'],
  210: ['Intimidate', 'Run Away'],
  // 211: Qwilfish
  211: ['Poison Point', 'Swift Swim'],
  // 212: Scizor
  212: ['Swarm', 'Technician'],
  // 213: Shuckle
  213: ['Sturdy', 'Gluttony'],
  // 214: Heracross
  214: ['Swarm', 'Guts'],
  // 215: Sneasel
  215: ['Inner Focus', 'Keen Eye'],
  // 216-217: Teddiursa line
  216: ['Pickup', 'Quick Feet'],
  217: ['Guts', 'Quick Feet'],
  // 218-219: Slugma line
  218: ['Magma Armor', 'Flame Body'],
  219: ['Magma Armor', 'Flame Body'],
  // 220-221: Swinub line
  220: ['Oblivious', 'Snow Cloak'],
  221: ['Oblivious', 'Snow Cloak'],
  // 222: Corsola
  222: ['Hustle', 'Natural Cure'],
  // 223-224: Remoraid line
  223: ['Hustle', 'Sniper'],
  224: ['Suction Cups', 'Sniper'],
  // 225: Delibird
  225: ['Vital Spirit', 'Hustle'],
  // 226: Mantine
  226: ['Swift Swim', 'Water Absorb'],
  // 227: Skarmory
  227: ['Keen Eye', 'Sturdy'],
  // 228-229: Houndour line
  228: ['Early Bird', 'Flash Fire'],
  229: ['Early Bird', 'Flash Fire'],
  // 230: Kingdra
  230: ['Swift Swim', 'Sniper'],
  // 231-232: Phanpy line
  231: ['Pickup', 'Sand Veil'],
  232: ['Sturdy', 'Sand Veil'],
  // 233: Porygon2
  233: ['Trace', 'Download'],
  // 234: Stantler
  234: ['Intimidate', 'Frisk'],
  // 235: Smeargle
  235: ['Own Tempo', 'Technician'],
  // 236-238: Tyrogue line and baby forms
  236: ['Guts', 'Steadfast'],
  237: ['Guts'],
  238: ['Oblivious', 'Own Tempo'],
  // 239: Elekid
  239: ['Static'],
  // 240: Magby
  240: ['Flame Body'],
  // 241: Miltank
  241: ['Thick Fat', 'Scrappy'],
  // 242: Blissey
  242: ['Natural Cure', 'Serene Grace'],
  // 243: Raikou
  243: ['Pressure'],
  // 244: Entei
  244: ['Pressure'],
  // 245: Suicune
  245: ['Pressure'],
  // 246-248: Larvitar line
  246: ['Guts'],
  247: ['Shed Skin'],
  248: ['Sand Stream'],
  // 249: Lugia
  249: ['Pressure'],
  // 250: Ho-Oh
  250: ['Pressure'],
  // 251: Celebi
  251: ['Natural Cure'],
  // 252-254: Treecko line
  252: ['Overgrow'],
  253: ['Overgrow'],
  254: ['Overgrow'],
  // 255-257: Torchic line
  255: ['Blaze'],
  256: ['Blaze'],
  257: ['Blaze'],
  // 258-260: Mudkip line
  258: ['Torrent'],
  259: ['Torrent'],
  260: ['Torrent'],
  // 261-262: Poochyena line
  261: ['Run Away', 'Quick Feet'],
  262: ['Intimidate', 'Quick Feet'],
  // 263-264: Zigzagoon line
  263: ['Pickup', 'Gluttony'],
  264: ['Pickup', 'Gluttony'],
  // 265-267: Wurmple line -> includes Silcoon/Beautifly and Cascoon/Dustox
  265: ['Shield Dust', 'Run Away'],
  266: ['Shed Skin'],
  267: ['Swarm'],
  268: ['Shed Skin'],
  269: ['Shield Dust', 'Compound Eyes'],
  // 270-271: Lotad line
  270: ['Rain Dish', 'Swift Swim'],
  271: ['Rain Dish', 'Swift Swim'],
  272: ['Rain Dish', 'Swift Swim'],
  // 273-275: Seedot line
  273: ['Chlorophyll', 'Early Bird'],
  274: ['Chlorophyll', 'Early Bird'],
  275: ['Chlorophyll', 'Early Bird'],
  // 276-277: Taillow line
  276: ['Guts'],
  277: ['Guts'],
  // 278-279: Wingull line
  278: ['Keen Eye', 'Hydration'],
  279: ['Keen Eye', 'Hydration'],
  // 280-282: Ralts line
  280: ['Synchronize', 'Trace'],
  281: ['Synchronize', 'Trace'],
  282: ['Synchronize', 'Trace'],
  // 283-284: Surskit line
  283: ['Swift Swim'],
  284: ['Intimidate'],
  // 285-286: Shroomish line
  285: ['Effect Spore', 'Poison Heal'],
  286: ['Effect Spore', 'Poison Heal'],
  // 287-289: Slakoth line
  287: ['Truant'],
  288: ['Vital Spirit'],
  289: ['Truant'],
  // 290-292: Nincada line (292: Shedinja)
  290: ['Compound Eyes', 'Run Away'],
  291: ['Speed Boost'],
  292: ['Wonder Guard'],
  // 293-295: Whismur line
  293: ['Soundproof'],
  294: ['Soundproof'],
  295: ['Soundproof'],
  // 296-297: Makuhita line
  296: ['Thick Fat', 'Guts'],
  297: ['Thick Fat', 'Guts'],
  // 298: Azurill
  298: ['Thick Fat', 'Huge Power'],
  // 299: Nosepass
  299: ['Sturdy', 'Magnet Pull'],
  // 300-301: Skitty line
  300: ['Cute Charm', 'Normalize'],
  301: ['Cute Charm', 'Normalize'],
  // 302: Sableye
  302: ['Keen Eye', 'Stall'],
  // 303: Mawile
  303: ['Hyper Cutter', 'Intimidate'],
  // 304-306: Aron line
  304: ['Sturdy', 'Rock Head'],
  305: ['Sturdy', 'Rock Head'],
  306: ['Sturdy', 'Rock Head'],
  // 307-308: Meditite line
  307: ['Pure Power'],
  308: ['Pure Power'],
  // 309-310: Electrike line
  309: ['Lightning Rod', 'Static'],
  310: ['Lightning Rod', 'Static'],
  // 311: Plusle
  311: ['Plus'],
  // 312: Minun
  312: ['Minus'],
  // 313: Volbeat
  313: ['Illuminate', 'Swarm'],
  // 314: Illumise
  314: ['Oblivious', 'Tinted Lens'],
  // 315: Roselia
  315: ['Natural Cure', 'Poison Point'],
  // 316-317: Gulpin line
  316: ['Liquid Ooze', 'Sticky Hold'],
  317: ['Liquid Ooze', 'Sticky Hold'],
  // 318-319: Carvanha line
  318: ['Rough Skin', 'Speed Boost'],
  319: ['Rough Skin', 'Speed Boost'],
  // 320-321: Wailmer line
  320: ['Water Veil', 'Oblivious'],
  321: ['Water Veil', 'Oblivious'],
  // 322-323: Numel line
  322: ['Oblivious', 'Simple'],
  323: ['Oblivious', 'Simple'],
  // 324: Torkoal
  324: ['White Smoke', 'Shell Armor'],
  // 325-326: Spoink line
  325: ['Thick Fat', 'Own Tempo'],
  326: ['Thick Fat', 'Own Tempo'],
  // 327: Spinda
  327: ['Own Tempo', 'Tangled Feet'],
  // 328-330: Trapinch line
  328: ['Hyper Cutter', 'Arena Trap'],
  329: ['Levitate'],
  330: ['Levitate'],
  // 331-332: Cacnea line
  331: ['Sand Veil', 'Water Absorb'],
  332: ['Sand Veil', 'Water Absorb'],
  // 333-334: Swablu line
  333: ['Natural Cure', 'Cloud Nine'],
  334: ['Natural Cure', 'Cloud Nine'],
  // 335: Zangoose
  335: ['Immunity', 'Toxic Boost'],
  // 336: Seviper
  336: ['Shed Skin', 'Infiltrator'],
  // 337-338: Lunatone/Solgaleo
  337: ['Levitate'],
  338: ['Levitate'],
  // 339-340: Barboach line
  339: ['Oblivious', 'Anticipation'],
  340: ['Oblivious', 'Anticipation'],
  // 341-342: Corphish line
  341: ['Hyper Cutter', 'Adaptability'],
  342: ['Hyper Cutter', 'Adaptability'],
  // 343-344: Baltoy line
  343: ['Levitate'],
  344: ['Levitate'],
  // 345-346: Lileep line
  345: ['Suction Cups', 'Storm Drain'],
  346: ['Suction Cups', 'Storm Drain'],
  // 347-348: Anorith line
  347: ['Battle Armor', 'Swift Swim'],
  348: ['Battle Armor', 'Swift Swim'],
  // 349-350: Feebas line
  349: ['Swift Swim', 'Oblivious'],
  350: ['Marvel Scale', 'Oblivious'],
  // 351: Castform
  351: ['Forecast'],
  // 352: Kecleon
  352: ['Color Change', 'Protean'],
  // 353-354: Shuppet line
  353: ['Insomnia', 'Frisk'],
  354: ['Insomnia', 'Frisk'],
  // 355-356: Duskull line
  355: ['Levitate', 'Frisk'],
  356: ['Levitate', 'Frisk'],
  // 357: Tropius
  357: ['Chlorophyll', 'Solar Power'],
  // 358: Chimecho
  358: ['Levitate'],
  // 359: Absol
  359: ['Pressure', 'Super Luck'],
  // 360: Wynaut
  360: ['Shadow Tag', 'Telepathy'],
  // 361-362: Snorunt line
  361: ['Inner Focus', 'Ice Body'],
  362: ['Inner Focus', 'Ice Body'],
  // 363-365: Spheal line
  363: ['Thick Fat', 'Ice Body'],
  364: ['Thick Fat', 'Ice Body'],
  365: ['Thick Fat', 'Ice Body'],
  // 366-368: Clamperl/Huntail/Gorebyss
  366: ['Shell Armor', 'Rattled'],
  367: ['Swift Swim', 'Water Veil'],
  368: ['Swift Swim', 'Hydration'],
  // 369: Relicanth
  369: ['Swift Swim', 'Rock Head'],
  // 370: Luvdisc
  370: ['Swift Swim', 'Hydration'],
  // 371-373: Bagon line
  371: ['Rock Head', 'Sheer Force'],
  372: ['Rock Head', 'Sheer Force'],
  373: ['Intimidate', 'Moxie'],
  // 374-376: Beldum line
  374: ['Clear Body', 'Light Metal'],
  375: ['Clear Body', 'Light Metal'],
  376: ['Clear Body', 'Light Metal'],
  // 377: Regirock
  377: ['Clear Body'],
  // 378: Regice
  378: ['Clear Body'],
  // 379: Registeel
  379: ['Clear Body'],
  // 380: Latias
  380: ['Levitate'],
  // 381: Latios
  381: ['Levitate'],
  // 382: Kyogre
  382: ['Drizzle'],
  // 383: Groudon
  383: ['Drought'],
  // 384: Rayquaza
  384: ['Air Lock'],
  // 385: Jirachi
  385: ['Serene Grace'],
  // 386: Deoxys
  386: ['Pressure'],
};

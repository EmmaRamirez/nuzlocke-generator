export const getAdditionalFormes = (species: string | undefined): string[] => {
    if (species == null) return [];
    const s = species.toLowerCase();
    if (s === 'pikachu') {
        return [
            'Rock Star',
            'Belle',
            'Pop Star',
            'Ph. D',
            'Libre',
            'Original Cap',
            'Hoenn Cap',
            'Sinnoh Cap',
            'Unova Cap',
            'Kalos Cap',
            'Alola Cap',
            'Partner Cap',
            'Gigantamax',
        ];
    }
    if (s === 'pichu') {
        return ['Spiky-eared'];
    }
    if (s === 'unown') {
        return [
            'A',
            'B',
            'C',
            'D',
            'E',
            'F',
            'G',
            'H',
            'I',
            'J',
            'K',
            'L',
            'M',
            'N',
            'O',
            'P',
            'Q',
            'R',
            'S',
            'T',
            'U',
            'V',
            'W',
            'X',
            'Y',
            'Z',
            '!',
            '?'
        ];
    }
    if (s === 'castform') {
        return ['Sunny', 'Rainy', 'Snowy'];
    }
    if (s === 'deoxys') {
        return ['Attack', 'Defense', 'Speed'];
    }
    if (s === 'burmy' || s === 'wormadam') {
        return ['Plant', 'Sandy', 'Trash'];
    }
    if (s === 'shellos' || s === 'gastrodon') {
        return ['West Sea', 'East Sea'];
    }
    if (s === 'rotom') {
        return ['Heat', 'Wash', 'Frost', 'Fan', 'Mow'];
    }
    if (s === 'giratina') {
        return ['Altered', 'Origin'];
    }
    if (s === 'shaymin') {
        return ['Land', 'Sky'];
    }
    if (s === 'basculin') {
        return ['Red-Striped', 'Blue-Striped'];
    }
    if (s === 'deerling' || s === 'sawsbuck') {
        return ['Spring', 'Summer', 'Autumn', 'Winter'];
    }
    if (s === 'tornadus' || s === 'thundurus' || s === 'landorus') {
        return ['Incarnate', 'Therian'];
    }
    if (s === 'kyurem') {
        return ['White Kyurem', 'Black Kyurem'];
    }
    if (s === 'keldeo') {
        return ['Resolute'];
    }
    if (s === 'meloetta') {
        return ['Aria', 'Pirouette'];
    }
    if (s === 'genesect') {
        return ['Shock Drive', 'Burn Drive', 'Chill Drive', 'Douse Drive'];
    }
    if (s === 'flabébé' || s === 'floette' || s === 'florges') {
        return ['Red', 'Yellow', 'Orange', 'Blue', 'White'];
    }
    if (s === 'furfrou') {
        return [
            'Heart',
            'Diamond',
            'Star',
            'Pharaoh',
            'Kabuki',
            'La Reine',
            'Matron',
            'Dandy',
            'Debutante',
        ];
    }
    if (s === 'zygarde') {
        // Removal of 50% is to avoid confusion
        return ['10%', 'Complete'];
    }
    if (s === 'hoopa') {
        return ['Confined', 'Unbound'];
    }
    if (s === 'Oricorio') {
        return ['Baile', 'Pom-Pom', 'Pa\'u', 'Sensu'];
    }
    if (s === 'lycanroc') {
        return ['Midday', 'Midnight', 'Dusk'];
    }
    if (s === 'wishiwashi') {
        return ['Solo', 'School'];
    }
    if (s === 'Necroza') {
        return ['Dusk Mane', 'Dawn Wings', 'Ultra'];
    }
    if (
        s === 'rattata' ||
        s === 'raticate' ||
        s === 'raichu' ||
        s === 'sandshrew' ||
        s === 'sandslash' ||
        s === 'vulpix' ||
        s === 'ninetales' ||
        s === 'diglett' ||
        s === 'dugtrio' ||
        s === 'persian' ||
        s === 'geodude' ||
        s === 'graveler' ||
        s === 'golem' ||
        s === 'grimer' ||
        s === 'muk' ||
        s === 'exeggutor' ||
        s === 'marowak'
    ) {
        return ['Alolan'];
    }
    if (
        s === 'meowth'
    ) {
        return ['Alolan', 'Galarian'];
    }
    if (
        s === 'ponyta' ||
        s === 'rapidash' ||
        s === 'farfetch\'d' ||
        s === 'weezing' ||
        s === 'mr. mime' ||
        s === 'corsola' ||
        s === 'zigzagoon' ||
        s === 'linoone' ||
        s === 'darumaka' ||
        s === 'darmanitan' ||
        s === 'yamask' ||
        s === 'stunfisk'
    ) {
        return ['Galarian'];
    }
    if (
        s === 'venusaur' ||
        s === 'blastoise' ||
        s === 'alakazam' ||
        s === 'kangaskhan' ||
        s === 'pinsir' ||
        s === 'gyarados' ||
        s === 'aerodactyl' ||
        s === 'ampharos' ||
        s === 'scizor' ||
        s === 'heracross' ||
        s === 'houndoom' ||
        s === 'tyrantiar' ||
        s === 'blaziken' ||
        s === 'gardevoir' ||
        s === 'mawile' ||
        s === 'aggron' ||
        s === 'medicham' ||
        s === 'manectric' ||
        s === 'aanette' ||
        s === 'absol' ||
        s === 'garchomp' ||
        s === 'lucario' ||
        s === 'abomasnow' ||
        s === 'beedrill' ||
        s === 'pidgeot' ||
        s === 'slowbro' ||
        s === 'steelix' ||
        s === 'sceptile' ||
        s === 'swampert' ||
        s === 'sableye' ||
        s === 'sharpedo' ||
        s === 'camerupt' ||
        s === 'altaria' ||
        s === 'glalie' ||
        s === 'salamence' ||
        s === 'metagross' ||
        s === 'latias' ||
        s === 'latios' ||
        s === 'rayquaza' ||
        s === 'lopunny' ||
        s === 'gallade' ||
        s === 'audino' ||
        s === 'diancie'
    ) {
        return ['Mega'];
    }
    if (s === 'gengar') {
        return ['Mega', 'Gigantamax'];
    }
    if (s === 'mewtwo') {
        return ['Mega-X', 'Mega-Y'];
    }
    if (s === 'charizard') {
        return ['Mega-X', 'Mega-Y', 'Gigantamax'];
    }
    if (s === 'kyogre' || s === 'groudon') {
        return ['Primal'];
    }
    if (s === 'alcremie') {
        return ['Vanilla Cream', 'Matcha Cream', 'Ruby Cream', 'Mint Cream', 'Lemon Cream', 'Salted Cream', 'Ruby Swirl', 'Caramel Swirl', 'Rainbow Swirl'];
    }
    if (
        s === 'snorlax' ||
        s === 'eevee' ||
        s === 'butterfree' ||
        s === 'corvinight' ||
        s === 'alcremie' ||
        s === 'drednaw' ||
        s === 'machamp' ||
        s === 'toxtricity' ||
        s === 'melmetal' ||
        s === 'coalossal' ||
        s === 'sandaconda' ||
        s === 'centiskorch' ||
        s === 'grimmsnarl' ||
        s === 'hatterene' ||
        s === 'copperajah' ||
        s === 'duralodon' ||
        s === 'flapple' ||
        s === 'appletun' ||
        s === 'orbeetle' ||
        s === 'garbodor' ||
        s === 'kingler' ||
        s === 'lapras'
    ) {
        return ['Gigantamax'];
    }
    return [];
};

export const matchSpeciesToTypes = (species: string): string[] => {
    switch (species) {
        case 'Bulbasaur':
        case 'Ivysaur':
        case 'Venusaur':
        case 'Roselia':
        case 'Budew':
        case 'Roserade':
            return ['Grass', 'Poison'];
        case 'Charmander':
        case 'Charmeleon':
        case 'Vulpix':
        case 'Ninetales':
            return ['Fire', 'Fire'];
        case 'Croagunk':
        case 'Toxicroak':
            return ['Poison', 'Fighting'];
        default:
            return ['Normal', 'Normal'];
    }
};

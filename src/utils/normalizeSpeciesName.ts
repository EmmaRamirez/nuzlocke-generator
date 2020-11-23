import { listOfPokemon, Species } from './listOfPokemon';

export const normalizeSpeciesName = (species: Species) => {
    if (species == null) return 'unknown';
    if (species === 'Nidoran♀') return 'nidoran-f';
    if (species === 'Nidoran♂') return 'nidoran-m';
    if (species === 'Mr. Mime') return 'mr-mime';
    if (species === 'Mr. Rime') return 'mr-rime';
    if (species.startsWith('Farfetch')) return 'farfetchd';
    if (species.startsWith('Sirfetch')) return 'sirfetchd';
    if (species === 'Mime Jr.') return 'mime-jr';
    if (species === 'Flabébé') return 'flabebe';
    if (species === 'Type: Null') return 'type-null';
    if (species.startsWith('Tapu')) return species.toLowerCase().replace(/\s/, '-');
    if (listOfPokemon.indexOf(species) < 0) return 'unknown';
    return species.toLowerCase();
};

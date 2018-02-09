import { speciesToNumber } from './speciesToNumber';

export const getSpriteIcon = (species: string, forme: string | undefined) => {
    const n = speciesToNumber(species) || 150;
    const getForme = forme => {
        if (forme === 'Alolan') {
            return '-a';
        }
        if (forme === 'Heart') return '-h';
        if (forme === 'Star') return '-s';
        if (forme === 'Diamond') return '-d';
        if (forme === 'Debutante') return '-de';
        if (forme === 'Matron') return '-m';
        if (forme === 'Dandy') return '-da';
        if (forme === 'La Reine') return '-l';
        if (forme === 'Kabuki') return '-k';
        if (forme === 'Pharaoh') return '-p';
        return '';
    };
    return `https://www.serebii.net/pokedex-sm/icon/${n.toString().padStart(3, '0') +
        getForme(forme)}.png`;
};

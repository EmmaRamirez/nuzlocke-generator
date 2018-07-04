import * as React from 'react';
import { connect } from 'react-redux';
import { getSpriteIcon, speciesToNumber, StoreContext } from '../../utils';
import { pokemon } from 'reducers/pokemon';

interface PokemonIconProps {
    id: string;
    species: string;
    forme: string;
    onClick: () => void;
    selectedId: string;
    isShiny?: boolean;
}

const formatSpeciesName = (species: string | null) => {
    if (species == null) return 'ditto';
    if (species === 'Mr. Mime') return 'mr-mime';
    if (species === 'Mime Jr.') return 'mime-jr';
    if (species === 'Flabébé') return 'flabebe';
    return species.toLowerCase();
};

const getForme = () => {
    return '';
};

export const PokemonIconBase: React.SFC<PokemonIconProps> = ({
    id,
    species,
    forme,
    onClick,
    selectedId,
    isShiny
}: PokemonIconProps) => {
    return (
        <div
            role='icon'
            onClick={e => {
                e.preventDefault();
                onClick();
            }}
            className={id === selectedId ? 'pokemon-icon selected' : 'pokemon-icon'}>
            <span className={`pkspr pkmn-${formatSpeciesName(species)}${isShiny ? 'color-shiny' : ''}${getForme()}`}></span>
        </div>
    );
};

export const PokemonIcon = connect((state: any) => ({ selectedId: state.selectedId }))(
    PokemonIconBase,
);

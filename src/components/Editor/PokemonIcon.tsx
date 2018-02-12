import * as React from 'react';
import { connect } from 'react-redux';
import { getSpriteIcon, speciesToNumber, StoreContext } from '../../utils';

interface PokemonIconProps {
    id: string;
    species: string;
    forme: string;
    onClick: () => void;
    selectedId: string;
}

export const PokemonIconBase:React.SFC<PokemonIconProps> = ({ id, species, forme, onClick, selectedId }:PokemonIconProps) => {
    return (
        <div
            role='icon'
            onClick={e => {
                e.preventDefault();
                onClick();
            }}
            className={id === selectedId ? 'pokemon-icon selected' : 'pokemon-icon'}>
            <img src={getSpriteIcon(species, forme)} alt={species} />
        </div>
    );
};

export const PokemonIcon = connect(
    (state:any) => ({ selectedId: state.selectedId })
)(PokemonIconBase);
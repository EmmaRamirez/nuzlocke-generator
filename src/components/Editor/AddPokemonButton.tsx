import * as React from 'react';
import { onClick } from '../../types';

export const AddPokemonButton = ({ added, onClick }: { added: boolean; onClick: onClick }) => (
    <button
        className='pt-intent-success pt-button add-new-pokemon'
        onClick={e => {
            e.preventDefault();
            onClick();
        }}>
        <span className='pt-icon-add' /> Add New Pokemon
    </button>
);

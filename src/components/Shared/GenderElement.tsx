import * as React from 'react';

export type GenderElementProps = 'Male' | 'm' | 'Female' | 'f' | 'genderless' | null;

export const GenderElement = (gender: GenderElementProps) => {
    if (gender === 'Male' || gender === 'm') {
        return <span className='pokemon-gender gender-color-male'>&#9794;</span>;
    } else if (gender === 'Female' || gender === 'f') {
        return <span className='pokemon-gender gender-color-female'>&#9792;</span>;
    } else {
        return null;
    }
};

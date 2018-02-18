import * as React from 'react';

export const getGenderElement = gender => {
    if (gender === 'Male' || gender === 'm') {
        return <span className='pokmeon-gender gender-color-male'>&#9794;</span>;
    } else if (gender === 'Female' || gender === 'f') {
        return <span className='pokemon-gender gender-color-female'>&#9792;</span>;
    } else {
        return null;
    }
};

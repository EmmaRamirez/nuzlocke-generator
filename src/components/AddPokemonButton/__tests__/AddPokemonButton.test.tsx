import * as React from 'react';
import { AddPokemonButtonBase as AddPokemonButton } from '..';
import { render, fireEvent, screen } from '@testing-library/react';

describe('<AddPokemonButton />', () => {
    it('renders its contents can be fired', () => {
        const mockOnClick = jest.fn();
        render(<AddPokemonButton onClick={mockOnClick} />);

        expect(screen.getByRole('button')).toBeTruthy();
        fireEvent.click(screen.getByRole('button'));
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
});

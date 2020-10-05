import * as React from 'react';
import { BoxedPokemonBase, BoxedPokemonProps } from '../BoxedPokemon';
import { render, screen, waitFor } from '@testing-library/react';
import { PokemonFixtures } from 'utils/fixtures';
import { styleDefaults } from 'utils';
describe(BoxedPokemonBase.name, () => {


    it('renders a Boxed Pokemon', async () => {

        // @ts-expect-error
        const props: BoxedPokemonProps = {
            ...PokemonFixtures.Pikachu,
            style: styleDefaults,
        };

        render(<BoxedPokemonBase {...props} />);

        await waitFor(() => screen.getByTestId('boxed-pokemon-name'));

        console.log(screen.debug());

        expect(screen.getByTestId('boxed-pokemon-name').textContent).toContain(PokemonFixtures.Pikachu.nickname);
    });
});

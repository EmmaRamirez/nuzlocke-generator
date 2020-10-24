import * as React from 'react';
import { BoxedPokemon } from '../BoxedPokemon2';
import { generateEmptyPokemon } from 'utils';
import { render, screen } from '@testing-library/react';
import { TestProvider } from 'utils/TestProvider';

const poke = {
    ...generateEmptyPokemon(),
    species: 'Pikachu',
    nickname: 'Pikazzy',
    level: 50,
    metLevel: 3,
    causeOfDeath: 'Died doing what he loved.',
};

describe(`<${BoxedPokemon.name} />`, () => {
    it('renders its content', () => {
        render(
            <TestProvider>
                <BoxedPokemon pokemon={poke} />
            </TestProvider>,
        );
        expect(screen.getByTestId('boxed-pokemon')).toBeDefined();
    });
});

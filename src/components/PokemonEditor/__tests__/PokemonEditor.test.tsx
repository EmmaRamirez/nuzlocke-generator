import * as React from 'react';
import { PokemonEditorBase } from '..';
import { styleDefaults } from 'utils';
import { render, screen } from 'utils/testUtils';

describe('<PokemonEditor />', () => {
    it('renders its contents', () => {
        render(
            <PokemonEditorBase
                style={styleDefaults}
                team={[]}
                boxes={[]}
                game={{ name: 'Red', customName: '' }}
                excludedAreas={[]}
                customAreas={[]}
            />
        );
        expect(screen.getByTestId('pokemon-editor')).toBeDefined();
    });
});
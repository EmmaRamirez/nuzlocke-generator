import * as React from 'react';
import { mount } from 'enzyme';
import { DeadPokemonBase } from '../DeadPokemon';
import { generateEmptyPokemon, styleDefaults } from 'utils';
import { Pokemon } from 'models';

const poke = {
    ...generateEmptyPokemon(),
    species: 'Pikachu',
    nickname: 'Pikazzy',
    level: 50,
    metLevel: 3,
    causeOfDeath: 'Died doing what he loved.',
};

describe('<DeadPokemon />', () => {
    it('renders its content', () => {
        const wrapper = mount(
            <DeadPokemonBase
                game={{ name: 'Red', customName: '' }}
                style={styleDefaults}
                selectPokemon={jest.fn()}
                {...poke}
            />,
        );
        expect(wrapper.text()).toContain(poke.causeOfDeath);
        expect(wrapper.text()).toContain(poke.nickname);
    });
});

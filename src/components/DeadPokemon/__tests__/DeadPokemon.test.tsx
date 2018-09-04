import * as React from 'react';
import { mount } from 'enzyme';
import { DeadPokemonBase } from '../DeadPokemon';
import { generateEmptyPokemon, styleDefaults } from 'utils';

const Pokemon = {
    ...generateEmptyPokemon(),
    species: 'Pikachu',
    nickname: 'Pikazzy',
};

describe('<DeadPokemon />', () => {
    it('renders its content', () => {
        const wrapper = mount(<DeadPokemonBase game={{ name: 'Red' }} style={styleDefaults} selectPokemon={jest.fn()} {...Pokemon} />);
        expect(wrapper.text()).toContain(Pokemon.species);
        expect(wrapper.text()).toContain(Pokemon.nickname);
    });
});
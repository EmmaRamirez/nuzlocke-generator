import * as React from 'react';
import { mount } from 'enzyme';
import { DeadPokemonBase } from '../DeadPokemon';
import { generateEmptyPokemon, styleDefaults } from 'utils';
import { Pokemon } from 'models';

const Pokemon: Pokemon = {
    ...generateEmptyPokemon(),
    species: 'Pikachu',
    nickname: 'Pikazzy',
    level: 50,
    metLevel: 3,
    causeOfDeath: `Died doing what he loved.`
};

describe('<DeadPokemon />', () => {
    it('renders its content', () => {
        const wrapper = mount(<DeadPokemonBase game={{ name: 'Red' }} style={styleDefaults} selectPokemon={jest.fn()} {...Pokemon} />);
        expect(wrapper.text()).toContain(Pokemon.causeOfDeath);
        expect(wrapper.text()).toContain(Pokemon.nickname);
    });
});
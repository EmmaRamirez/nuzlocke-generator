import * as React from 'react';
import { shallow } from 'enzyme';
import { AddPokemonButtonBase as AddPokemonButton } from '..';

describe('<AddPokemonButton />', () => {
    it('renders its contents', () => {
        const wrapper = shallow(<AddPokemonButton onClick={() => {}} />);
        expect(wrapper.is('.add-new-pokemon')).toBe(true);
    });
});

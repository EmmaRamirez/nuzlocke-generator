import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { AppBase as App } from '..';
import { seeRelease, editRule, selectPokemon } from 'actions';
import { styleDefaults, generateEmptyPokemon } from 'utils';

describe('<App />', () => {
    it('renders', () => {
        const wrapper = mount(<App style={styleDefaults} rules={['1', '2']} />);
        expect(wrapper).toBeDefined();
    });
});
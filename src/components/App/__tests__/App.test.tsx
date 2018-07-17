import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { AppBase as App } from '..';
import { seeRelease, editRule, selectPokemon } from 'actions';
import { styleDefaults, generateEmptyPokemon } from 'utils';

describe('<App />', () => {
    it('renders', () => {
        const wrapper = mount(<App
            seeRelease={seeRelease}
            sawRelease={{
            '0.0.8-beta': true
        }} style={styleDefaults} rules={['1', '2']} editRule={editRule} />);
        expect(wrapper).toBeDefined();
    });
});
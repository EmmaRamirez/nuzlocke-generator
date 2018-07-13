import * as React from 'react';
import { shallow } from 'enzyme';
import { Autocomplete } from '..';

describe('<Autcomplete />', () => {
    it('renders its contents', () => {
        const wrapper = shallow(<Autocomplete value={'test'} onChange={() => {}} items={['test', 'test2', 'test-2']} />);
        expect(wrapper.is('.autocomplete')).toBe(true);
        expect(wrapper.contains('.autocomplete-items')).toBe(true);
    });
});
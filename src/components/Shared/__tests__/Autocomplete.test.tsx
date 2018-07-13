import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { Autocomplete } from '..';

describe('<Autcomplete />', () => {
    it('renders its contents', () => {
        const component = <Autocomplete value={'test'} onChange={() => {}} items={['test', 'test2', 'test-2']} />;
        const wrapper = shallow(component);
        expect(wrapper.is('.autocomplete')).toBe(true);
        const mountedWrapper = mount(component);
        mountedWrapper.setState({ isOpen: true, visibleItems: ['test', 'test3'] });
        expect(mountedWrapper.find('.autocomplete-items').length).toBe(1);
        expect(mountedWrapper.find('[role="item"]').length).toBe(2);
    });
});
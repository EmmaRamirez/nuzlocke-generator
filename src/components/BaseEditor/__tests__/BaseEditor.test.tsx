import * as React from 'react';
import { BaseEditor } from '..';
import { shallow } from 'enzyme';

describe('<BaseEditor />', () => {
    it('renders its contents', () => {
        const wrapper = shallow(<BaseEditor name='test' />);
        expect(wrapper.prop('className')).toBe('test-editor base-editor');
    });
});
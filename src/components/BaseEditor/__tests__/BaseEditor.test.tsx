import * as React from 'react';
import { BaseEditor } from '..';
import { shallow, mount } from 'enzyme';

describe.skip('<BaseEditor />', () => {
    it('renders its contents', () => {
        const wrapper = shallow(<BaseEditor name="test" />);
        expect(wrapper.prop('className')).toBe('test-editor base-editor');
    });

    it('renders its children', () => {
        const wrapper = mount(
            <BaseEditor name="test">
                <div>Hello World!</div>
            </BaseEditor>,
        );
        expect(wrapper.contains(<div>Hello World!</div>)).toBe(true);
    });
});

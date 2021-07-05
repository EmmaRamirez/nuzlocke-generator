import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { Autocomplete } from '..';
import { getDisplayNameForTest } from 'utils/getDisplayNameForTest';
import { GenderElement, Gender } from '../GenderElement';

describe.skip(GenderElement.name, () => {
    it('renders its contents [male]', () => {
        const subject = GenderElement('m');
        const m = shallow(subject!);
        expect(m.find('.gender-color-male').length).toBe(1);
    });

    it('renders its contents [female]', () => {
        const subject = GenderElement('f');
        const m = shallow(subject!);
        expect(m.find('.gender-color-female').length).toBe(1);
    });

    it('renders its content [neutral]', () => {
        const subject = GenderElement(null);
        expect(subject).toBeNull();
    });
});

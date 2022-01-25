import * as React from 'react';
import { render, screen } from 'utils/testUtils';
import { Autocomplete } from '..';

describe('<Autcomplete />', () => {
    it('renders its contents', () => {
        const component = (
            <Autocomplete onInput={() => {}} value={'test'} onChange={() => {}} items={['test', 'test2', 'test-2']} />
        );
        render(component);
        expect(screen).toBeDefined();
    });
});

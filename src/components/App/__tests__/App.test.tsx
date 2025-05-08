import * as React from 'react';
import { AppBase as App } from '..';
import { styleDefaults } from 'utils';
import { editor } from 'reducers/editor';
import { render, screen } from 'utils/testUtils';

describe.skip('<App />', () => {
    it('renders', () => {
        render(
            <App
                editor={editor(undefined, { type: 'CHANGE_EDITOR_SIZE' })}
                view={{ dialogs: { imageUploader: false } }}
                style={styleDefaults}
            />,
        );
        expect(screen.getByTestId('app')).toBeDefined();
    });
});

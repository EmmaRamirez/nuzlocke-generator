import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { AppBase as App } from '..';
import { seeRelease, editRule, selectPokemon } from 'actions';
import { styleDefaults, generateEmptyPokemon } from 'utils';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

describe('<App />', () => {
    it('renders', () => {
        const store = configureStore()({});
        const wrapper = mount(
            <Provider store={store}>
                <App view={{dialogs: {imageUploader: false}}} style={styleDefaults} />
            </Provider>,
        );
        expect(wrapper).toBeDefined();
    });
});

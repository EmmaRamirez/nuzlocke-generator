import * as React from 'react';
import { mount } from 'enzyme';
import { PokemonEditorBase } from '..';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { generateEmptyPokemon, styleDefaults } from 'utils';
import { State } from 'state';

describe('<PokemonEditor />', () => {
    it.skip('renders its contents', () => {
        const store = configureStore()({
            pokemon: [generateEmptyPokemon(), generateEmptyPokemon()],
            style: {
                editorDarkMode: false,
            },
        } as State);
        const wrapper = mount(
            <Provider store={store}>
                <PokemonEditorBase
                    style={styleDefaults}
                    team={[]}
                    boxes={[]}
                    game={{ name: 'Red', customName: '' }}
                />
            </Provider>,
        );
        expect(wrapper).toBeDefined();
        expect(wrapper.debug()).toContain('BaseEditor');
        expect(wrapper.find('.bp3-intent-primary').first().text()).toContain('Open Mass Editor');
    });
});
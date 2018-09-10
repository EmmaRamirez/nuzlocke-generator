import * as React from 'react';
import { mount } from 'enzyme';
import { PokemonEditorBase } from '..';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { generateEmptyPokemon } from 'utils';
import { State } from 'state';

describe('<PokemonEditor />', () => {
    it('renders its contents', () => {
        const store = configureStore()({
            pokemon: [generateEmptyPokemon(), generateEmptyPokemon()],
            style: {
                editorDarkMode: false,
            },
        } as State);
        const wrapper = mount(
            <Provider store={store}>
                <PokemonEditorBase team={[]} boxes={[]} game={{ name: 'Red' }} />
            </Provider>,
        );
        expect(wrapper).toBeDefined();
        expect(wrapper.debug()).toContain('BaseEditor');
        expect(
            wrapper
                .find('.pt-intent-primary')
                .first()
                .text(),
        ).toContain('Open Mass Editor');
    });
});

// /<BaseEditor name='Pokemon'>
// <div className='button-row' style={{ display: 'flex' }}>
//     <AddPokemonButton defaultPokemon={{ ...generateEmptyPokemon(team), gameOfOrigin: this.props.game.name || 'None' }} />
//     <Button
//         icon={'heat-grid'}
//         onClick={this.openMassEditor}
//         style={{ marginLeft: 'auto' }}
//         className='pt-intent-primary pt-minimal'>
//         Open Mass Editor
//     </Button>
// </div>
// <br />
// {this.renderBoxes(boxes, team)}
// <br />
// <CurrentPokemonEdit />
// </BaseEditor>
// <MassEditor
// // @ts-ignore: Props issues with isMassEditorOpen/isOpen
// isOpen={this.state.isMassEditorOpen}
// toggleDialog={e =>
//     this.setState({ isMassEditorOpen: !this.state.isMassEditorOpen })
// }
// />

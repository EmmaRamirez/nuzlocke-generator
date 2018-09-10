import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { BadgeInputBase as BadgeInput, TrainerInfoEditField } from '..';
import { TrainerKeys } from 'models';
import { editTrainer } from 'actions';
import { styleDefaults } from 'utils';

describe('<BadgeInput />', () => {
    it('renders its contents', () => {
        const wrapper = mount(
            <BadgeInput
                style={styleDefaults}
                trainer={TrainerKeys}
                game={{ name: 'Emerald' }}
                editTrainer={editTrainer}
                enableCheckpointsEditor={false}
            />,
        );
        // TODO: Write proper test -- this component needs to be refactored
        expect(wrapper).toBeDefined();
    });
});

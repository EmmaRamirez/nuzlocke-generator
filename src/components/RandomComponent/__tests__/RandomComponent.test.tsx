import * as React from 'react';
import { shallow, mount } from 'enzyme';
import * as emotion from 'emotion';
import configureStore from 'redux-mock-store';

import { RandomComponentBase, RandomComponent, RandomComponentProps } from '../RandomComponent';
import { Action, modifyDeletionConfirmation, MODIFY_DELETION_CONFIRMATION } from 'actions';
import { reducers } from 'reducers';


const props: RandomComponentProps = {
    onClick: e => {},
    modifyDeletionConfirmation: b => ({ type: MODIFY_DELETION_CONFIRMATION, newStatus: b }),
    confirmation: reducers.confirmation,
};

describe(`<${RandomComponentBase.name} />` , () => {
    it('shallow versus mount', () => {

        const child = <div>
            <div>
                <div>{'Child'}</div>
                <RandomComponentBase {...props}></RandomComponentBase>
            </div>
        </div>;

        const shallowWrapper = shallow(<RandomComponentBase {...props} >{ child }</RandomComponentBase>);
        const mountWrapper = mount(<RandomComponentBase {...props}>{ child }</RandomComponentBase>);

        console.log(shallowWrapper.debug());
        expect(shallowWrapper.text()).toContain('Child');
        expect(shallowWrapper.text()).not.toContain('No Children Provided');


        console.log(mountWrapper.debug());
        expect(mountWrapper.text()).toContain('Child');
        expect(mountWrapper.text()).toContain('No Children Provided');

    });

    it('tests children', () => {
        const wrapperWithChildren = mount(
            <RandomComponentBase {...props}>
                <div className='child-1'>
                    <div className='child-1-1'>Child 1</div>
                    <div className='child-1-2'>Child 2</div>
                </div>
                <div className='child-2'></div>
            </RandomComponentBase>
        );

        const wrapperWithoutChildren = mount(<RandomComponentBase {...props} />);

        expect(wrapperWithChildren.childAt(0).text()).toContain('Child 1');
        expect(wrapperWithoutChildren.text()).toContain('No Children Provided');
    });

    it('renders the clicks section', () => {
        const wrapper = mount(<RandomComponentBase {...props} />);
        expect(wrapper.find('.clicks')).toMatchSnapshot();
    });

});

describe(`<${RandomComponent.displayName} />`, () => {
    const middlewares = [];
    const mockStore = configureStore(middlewares);

    beforeEach(() => {
        const initialState = {};
        this.store = mockStore(initialState);
    });

    it('should dispatch actions', () => {

        this.store.dispatch(modifyDeletionConfirmation(true));

        const actions = this.store.getActions();
        const expected = { type: MODIFY_DELETION_CONFIRMATION, newStatus: true };

        expect(actions).toEqual([expected]);
    });

    it('simulates clicks', () => {
        const RC: React.ComponentClass<RandomComponentProps & { store: any }> = RandomComponent as any;
        const click = jest.fn();

        const wrapper = mount(<RC onClick={click} confirmation={reducers.confirmation} store={this.store} modifyDeletionConfirmation={modifyDeletionConfirmation} />);

        wrapper.find('#click-this').simulate('click');

        expect(click.mock.calls.length).toBe(1);
    });

    it('simulates clicks + counter', () => {
        const RC: React.ComponentClass<RandomComponentProps & { store: any }> = RandomComponent as any;

        const wrapper = mount(<RC {...props} store={this.store} />);

        expect(wrapper.find('.clicks').text()).toBe('0');

        wrapper.find('#b1').simulate('click');

        expect(wrapper.find('.clicks').text()).toBe('-1');

        wrapper.find('#b2').simulate('click');
        wrapper.find('#b2').simulate('click');

        expect(wrapper.find('.clicks').text()).toBe('1');
    });
});
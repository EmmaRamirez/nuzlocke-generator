import * as React from 'react';
import * as sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import { ErrorBoundary } from '..';

class ErroneousComponent extends React.Component {
    public render() {
        throw new Error('Failure');
        return <div />;
    }
}

describe('<ErroBoundary />', () => {
    it('renders its children', () => {
        const wrapper = shallow(
            <ErrorBoundary>
                <div>Test</div>
            </ErrorBoundary>,
        );
        expect(wrapper.contains(<div>Test</div>)).toBe(true);
    });

    it('catches errors and renders errorMessage', () => {
        const spy = sinon.spy(ErrorBoundary.prototype, 'componentDidCatch');
        const wrapper = mount(
            <ErrorBoundary errorMessage={<div>Error!</div>}>
                <ErroneousComponent />
            </ErrorBoundary>,
        );
        expect(ErrorBoundary.prototype.componentDidCatch).toHaveProperty('callCount', 1);
    });
});

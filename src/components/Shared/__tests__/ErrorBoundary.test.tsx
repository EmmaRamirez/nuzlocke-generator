import * as React from 'react';
import * as sinon from 'sinon';
import { ErrorBoundary } from '..';
import { screen, render } from 'utils/testUtils';
class ErroneousComponent extends React.Component {
  public render() {
    throw new Error('Failure');
    return <div />;
  }
}

describe('<ErroBoundary />', () => {
  it('renders its children', () => {
    render(
      <ErrorBoundary>
        <div data-testid="test">Test</div>
      </ErrorBoundary>
    );
    expect(screen.getByTestId('test').textContent).toContain('Test');
  });

  it('catches errors and renders errorMessage', () => {
    const spy = sinon.spy(ErrorBoundary.prototype, 'componentDidCatch');
    // the mount here triggers the error
    render(
      <ErrorBoundary errorMessage={<div>Error!</div>}>
        <ErroneousComponent />
      </ErrorBoundary>
    );
    expect(ErrorBoundary.prototype.componentDidCatch).toHaveProperty('callCount', 1);
  });
});

import * as React from 'react';
import { screen, render } from 'utils/testUtils';
import { Result } from '../Result2';

describe(Result.name, () => {
  it('returns a result element', () => {
    render(<Result />);
    expect(screen.getByTestId('result')).toBeDefined();
  });
});

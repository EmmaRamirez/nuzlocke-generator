import * as React from 'react';
import { screen, render } from '@testing-library/react';
import { Result } from '../Result2';
import { TestProvider } from 'utils/TestProvider';

describe(Result.name, () => {
    it('returns a result element', () => {
        render(<TestProvider><Result /></TestProvider>);
        expect(screen.getByTestId('result')).toBeDefined();
    });
});

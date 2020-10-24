import * as React from 'react';
import { ErrorBoundary } from 'components';

const Skeleteon = <div style={{ width: '100%', height: '100px' }} className="bp3-skeleton"></div>;

export function SuspenseBoundary(child: React.LazyExoticComponent<any>) {
    return <ErrorBoundary>
        <React.Suspense fallback={Skeleteon}>
            {child}
        </React.Suspense>
    </ErrorBoundary>;
}

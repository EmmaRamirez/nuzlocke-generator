import * as React from 'react';

type ReactPortal = any;

interface ErrorBoundaryProps {
    errorMessage?: string;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, { hasError: boolean }> {
    constructor(props: any) {
        super(props);
        this.state = {
            hasError: false,
        };
    }

    public componentDidCatch() {
        this.setState({
            hasError: true,
        });
    }

    public render(): string | number | false | Element | Element[] | ReactPortal | null {
        if (this.state.hasError) {
            return (
                <div className='error-boundary'>
                    {this.props.errorMessage || 'Something went wrong.'}
                </div>
            );
        }
        return this.props.children;
    }
}

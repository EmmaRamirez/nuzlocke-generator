import * as React from 'react';

interface ErrorBoundaryProps {
    errorMessage?: React.ReactNode;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, { hasError: boolean }> {
    public constructor(props: any) {
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

    public render() {
        if (this.state.hasError) {
            return (
                <div className="error-boundary">
                    {this.props.errorMessage || 'Something went wrong.'}
                </div>
            );
        }
        return this.props.children;
    }
}

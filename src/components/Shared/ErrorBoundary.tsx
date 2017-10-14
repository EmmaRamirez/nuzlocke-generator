import * as React from 'react';

export class ErrorBoundary extends React.Component<any, { hasError: boolean }> {
  constructor(props:any) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  public componentDidCatch() {
    this.setState({
      hasError: true
    });
  }

  public render() {
    if (this.state.hasError) {
      return <div className='error-boundary'>Oh no! Something went wrong.</div>;
    }
    return this.props.children;
  }
}
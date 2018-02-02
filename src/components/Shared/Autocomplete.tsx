import * as React from 'react';

interface AutocompleteProps<T> {
  items: T[];
}

interface AutocompleteState<T> {
  visibleItems: T[];
}

export class Autocomplete<T> extends React.Component<AutocompleteProps<T>, AutocompleteState<T>> {
  constructor(props) {
    super(props);
  }

  public typeOf<T>() {
    return new Autocomplete<T>(this.props);
  }

  public render() {
    return <div></div>;
  }
}
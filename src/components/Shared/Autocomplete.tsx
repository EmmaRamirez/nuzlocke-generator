import * as React from 'react';

interface AutocompleteProps<T> {
    items: T[];
}

interface AutocompleteState<T> {
    visibleItems: T[];
    currentValue: string;
}

export class Autocomplete<T> extends React.Component<AutocompleteProps<T>, AutocompleteState<T>> {
    constructor(props) {
        super(props);
        this.state = {
            visibleItems: [],
            currentValue: '',
        };
    }

    public typeOf<T>() {
        return new Autocomplete<T>(this.props);
    }

    private selectItem = _ => {};

    private renderItems () {
        return this.state.visibleItems.map((v, i) => {
            return <li role='item' onClick={this.selectItem}>{v}</li>;
        });
    }

    private updateItems = (e:any) => {
        this.setState({
            visibleItems: this.props.items.filter(i => (i as any).contains(e.target.value) )
        });
    };

    public render() {
        return (
            <div className='pt-input autocomplete'>
                <input type='text' onChange={this.updateItems} value={this.state.currentValue} />
                <ul className='autocomplete-items'>
                    { this.renderItems() }
                </ul>
            </div>
        );
    }
}

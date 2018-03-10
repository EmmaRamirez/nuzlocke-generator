import * as React from 'react';

interface AutocompleteProps {
    items: string[];
    placeholder?: string;
    name?: string;
    label?: string;
    value: string;
    onChange: any;
}

interface AutocompleteState {
    visibleItems: string[];
    currentValue: string;
    isOpen: boolean;
}

import './Autocomplete.styl';

export class Autocomplete extends React.Component<AutocompleteProps, AutocompleteState> {
    constructor(props) {
        super(props);
        this.state = {
            visibleItems: [],
            currentValue: '',
            isOpen: false,
        };
    }

    private selectItem(v) {
        console.log(v);
        this.setState({ currentValue: v, isOpen: false });
        this.props.onChange({
            target: {
                value: v,
            },
        });
    }

    public componentWillMount() {
        this.setState({ currentValue: this.props.value });
    }

    public componentWillUnmount() {
        this.setState({
            isOpen: false,
            visibleItems: [],
        });
    }

    public componentWillReceiveProps(nextProps) {
        this.setState({ currentValue: nextProps.value });
    }

    private renderItems() {
        return this.state.visibleItems.map((v, i) => {
            return (
                <li key={i} role='item' onClick={e => this.selectItem(v)} style={
                    v === this.state.currentValue ? { color: 'lightblue' } : {}
                }>
                    {v}
                </li>
            );
        });
    }

    private updateItems = (e: any) => {
        this.setState({
            currentValue: e.target.value,
            visibleItems: this.props.items.filter(i => i.startsWith(e.target.value)),
        });
        this.props.onChange(e);
    };

    private openList = e => this.setState({ isOpen: true });

    private closeList = e => {
        this.setState({ isOpen: false });
        this.setState({ visibleItems: [] });
    };

    private handleKeyDown = e => {
        if (e.which === 27 || e.which === 13 || e.which === 9) {
            this.closeList(e);
        }
        if (e.which === 38 || e.which === 40) {
            this.handleMovement(e);
            this.setState({ isOpen: true });
        }
    };

    private handleMovement = e => {
        const currentIndex = this.state.visibleItems.indexOf(this.state.currentValue);
        if (e.which === 38) {
            this.selectItem(this.state.visibleItems[currentIndex - 1]);
        } else {
            this.selectItem(this.state.visibleItems[currentIndex + 1]);
        }
    }



    public render() {
        return (
            <div className='current-pokemon-input-wrapper autocomplete'>
                <label>{this.props.label}</label>
                <input
                    onKeyDown={this.handleKeyDown}
                    onFocus={this.openList}
                    placeholder={this.props.placeholder}
                    name={this.props.name}
                    type='text'
                    onChange={this.updateItems}
                    value={this.state.currentValue}
                />
                {this.state.isOpen ? (
                    <ul className='autocomplete-items has-nice-scrollbars'>{this.renderItems()}</ul>
                ) : null}
            </div>
        );
    }
}

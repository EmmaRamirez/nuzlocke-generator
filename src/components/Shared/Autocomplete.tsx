import * as React from 'react';

export interface AutocompleteProps {
    items: string[];
    placeholder?: string;
    name?: string;
    label?: string;
    disabled?: boolean;
    value: string;
    onChange: any;
    className?: string;
}

export interface AutocompleteState {
    visibleItems: string[];
    currentValue: string;
    isOpen: boolean;
}

import './Autocomplete.css';
import { cx } from 'emotion';

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
                <li
                    key={i}
                    role='item'
                    onClick={e => this.selectItem(v)}
                    style={v === this.state.currentValue ? { color: 'lightblue' } : {}}>
                    {v}
                </li>
            );
        });
    }

    private updateItems = (e: any) => {
        if (e.target.value === '') {
            this.setState({
                currentValue: e.target.value,
                visibleItems: this.props.items,
            });
        } else {
            this.setState({
                currentValue: e.target.value,
                visibleItems: this.props.items.filter(i => i.startsWith(e.target.value)),
            });
        }
        this.props.onChange(e);
    };

    private openList = e => this.setState({ isOpen: true });

    private closeList = e => {
        setTimeout(() => {
            this.setState({ isOpen: false });
            this.setState({ visibleItems: [] });
        }, 250);
    };

    private handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.which === 13) {
            e.preventDefault();
            if (this.state.visibleItems.includes(this.state.currentValue)) {
                this.closeList(e);
            } else {
                this.selectItem(this.state.visibleItems[0]);
            }
        }
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
    };

    public render() {
        const {className} = this.props;
        return (
            <div className={cx('current-pokemon-input-wrapper', 'autocomplete')}>
                <label>{this.props.label}</label>
                <input
                    className={cx(className)}
                    onKeyDown={this.handleKeyDown}
                    onFocus={this.openList}
                    onBlur={this.closeList}
                    placeholder={this.props.placeholder}
                    name={this.props.name}
                    type='text'
                    onChange={this.updateItems}
                    value={this.state.currentValue}
                    disabled={this.props.disabled}
                />
                {this.state.isOpen ? (
                    <ul className='autocomplete-items has-nice-scrollbars'>{this.renderItems()}</ul>
                ) : null}
            </div>
        );
    }
}

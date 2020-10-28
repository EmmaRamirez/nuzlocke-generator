import * as React from 'react';
import { cx } from 'emotion';
import { debounce } from 'lodash';
import './Autocomplete.css';

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

export class Autocomplete extends React.Component<AutocompleteProps, AutocompleteState> {
    public constructor(props) {
        super(props);
        this.state = {
            visibleItems: this.props.items,
            currentValue: this.props.value,
            isOpen: false,
        };
    }

    private selectItem(v) {
        this.setState({ currentValue: v, isOpen: false });
        this.props.onChange({
            target: {
                value: v,
            },
        });
        this.setState({
            visibleItems: this.props.items,
        });
    }

    public componentWillUnmount() {
        this.setState({
            isOpen: false,
            visibleItems: [],
        });
    }

    public componentDidUpdate(prevProps) {
        // if (this.isDebouncing) {
        //   return;
        // }
        const {value} = this.props;

        const {value: oldValue} = prevProps;
        const {currentValue} = this.state;

        if (typeof value !== 'undefined' && oldValue !== value && currentValue !== value) {
            // Update state.value if new value passed via props, yep re-render should happen
            this.setState({
                currentValue: value
            });
        }
    }

    private renderItems() {
        return this.state.visibleItems.map((v, i) => {
            return (
                <li
                    key={i}
                    role="item"
                    onClick={(e) => this.selectItem(v)}
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
                visibleItems: this.props.items.filter((i) =>
                    i.toLowerCase().startsWith(e.target.value.toLowerCase()),
                ),
            });
        }
    };

    private openList = (e) => this.setState({ isOpen: true });

    private closeList = (e) => {
        setTimeout(() => {
            this.setState({ isOpen: false });
            this.setState({ visibleItems: [] });
        }, 250);
        this.props.onChange(e);
    };

    private handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.which === 13) {
            e.preventDefault();
            if (this.state.visibleItems.includes(this.state.currentValue)) {
                this.closeList(e);
            } else {
                this.selectItem(this.state.visibleItems[0]);
            }
            this.props.onChange(e);
        }
        if (e.which === 27 || e.which === 13 || e.which === 9) {
            this.closeList(e);
        }
        if (e.which === 38 || e.which === 40) {
            this.handleMovement(e);
            this.setState({ isOpen: true });
        }
    };

    private handleMovement = (e) => {
        const currentIndex = this.state.visibleItems.indexOf(this.state.currentValue);
        if (e.which === 38) {
            this.selectItem(this.state.visibleItems[currentIndex - 1]);
        } else {
            this.selectItem(this.state.visibleItems[currentIndex + 1]);
        }
    };

    public render() {
        const { className } = this.props;
        return (
            <div className={cx('current-pokemon-input-wrapper', 'autocomplete')}>
                <label>{this.props.label}</label>
                <input
                    autoComplete="off"
                    className={cx(className)}
                    onKeyDown={this.handleKeyDown}
                    onFocus={this.openList}
                    onBlur={this.closeList}
                    placeholder={this.props.placeholder}
                    name={this.props.name}
                    type="text"
                    onChange={this.updateItems}
                    value={this.state.currentValue}
                    disabled={this.props.disabled}
                />
                {this.state.isOpen ? (
                    <ul className="autocomplete-items has-nice-scrollbars">{this.renderItems()}</ul>
                ) : null}
            </div>
        );
    }
}

// const closeList = () => {
//     setTimeout(() => {
//         setIsOpen(false);
//         setVisibleItems(false);
//     }, 250);
// };

// export function Autocomplete({}: AutocompleteProps) {
//     const [visibleItems, setVisibleItems] = React.useState([]);
//     const [currentValue, setCurrentValue] = React.useState('');
//     const [isOpen, setIsOpen] = React.useState(false);

//     return <div className={cx('current-pokemon-input-wrapper', 'autocomplete')}>
//         <label>{this.props.label}</label>
//         <input
//             autoComplete="off"
//             className={cx(className)}
//             onKeyDown={this.handleKeyDown}
//             onFocus={this.openList}
//             onBlur={this.closeList}
//             placeholder={this.props.placeholder}
//             name={this.props.name}
//             type="text"
//             onChange={this.updateItems}
//             value={this.state.currentValue}
//             disabled={this.props.disabled}
//         />
//         {this.state.isOpen ? (
//             <ul className="autocomplete-items has-nice-scrollbars">{this.renderItems()}</ul>
//         ) : null}
//     </div>;
// }

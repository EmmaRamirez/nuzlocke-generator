import * as React from 'react';
import { cx } from 'emotion';
import './Autocomplete.css';
const debounce = require('lodash.debounce');


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

const renderItems = (visibleItems: string[], selectItem: any, innerValue: string) => visibleItems.map((v, i) => {
    return (
        <li
            key={i}
            role="item"
            onClick={(e) => selectItem(e)(v)}
            className={v === innerValue ? 'autocomplete-selected' : ''}>
            {v}
        </li>
    );
});

const filter = (items, str) => items.filter(i => i.toLowerCase().startsWith(str.toLowerCase()));

export function Autocomplete ({
    label,
    name,
    placeholder,
    onChange,
    className,
    disabled,
    items,
    // onInput,
    value,
}: AutocompleteProps) {
    const [innerValue, setValue] = React.useState('');
    const [isOpen, setIsOpen] = React.useState(false);
    const [visibleItems, setVisibleItems] = React.useState<string[]>([]);

    const delayedValue = React.useCallback(
        debounce((e) => onChange(e), 300),
        [value]
    );

    React.useEffect(() => {
        console.log(innerValue, isOpen, visibleItems.length);

        setValue(value);
        setVisibleItems(filter(items, value));
        // setIsOpen(false);
    }, [value, items]);

    const changeEvent = (e) => {
        setValue(e.target.value);

        if (e.target.value === '') {
            setVisibleItems(items);
        } else {
            setVisibleItems(filter(items, e.target.value));
        }

        delayedValue(e);
    };

    const handleMovement = (e) => {
        const currentIndex = visibleItems?.indexOf(innerValue);
        if (e.which === 38) {
            selectItem(e)(visibleItems[currentIndex - 1]);
        } else {
            selectItem(e)(visibleItems[currentIndex + 1]);
        }
    };
    const openList = (e) => {
        setIsOpen(true);
    };
    const closeList = (e) => {
        setTimeout(() => {
            setIsOpen(false);
            setVisibleItems(items);
        }, 250);
        setValue(e.target.value);
    };
    const handleKeyDown = (e: React.KeyboardEvent) => {
        e.persist();
        if (e.which === 13) {
            e.preventDefault();
            if (visibleItems.includes(innerValue)) {
                closeList(e);
            } else {
                selectItem(e)(visibleItems[0]);
            }
            onChange(e);
        }
        if (e.which === 8) {
            setVisibleItems(items);
        }
        if (e.which === 27 || e.which === 13 || e.which === 9) {
            closeList(e);
        }
        if (e.which === 38 || e.which === 40) {
            handleMovement(e);
            setIsOpen(true);
        }
    };
    const selectItem = (e) => (value) => {
        changeEvent({ ...e, target:{value}});
    };

    return <div className={cx('current-pokemon-input-wrapper', 'autocomplete')}>
        <label>{label}</label>
        <input
            autoComplete="off"
            className={cx(className)}
            onKeyDown={handleKeyDown}
            onFocus={openList}
            onBlur={closeList}
            placeholder={placeholder}
            name={name}
            type="text"
            onChange={changeEvent}
            value={innerValue}
            disabled={disabled}
            data-testid="autocomplete"
        />
        {isOpen ? (
            <ul className="autocomplete-items has-nice-scrollbars">{renderItems(
                visibleItems,
                selectItem,
                innerValue,
            )}</ul>
        ) : null}
    </div>;
}
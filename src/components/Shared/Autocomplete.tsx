import * as React from 'react';
import { cx } from 'emotion';
import './Autocomplete.css';
import { useDebounceCallback } from '@react-hook/debounce';
import { css } from 'emotion';
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
    /* @NOTE: this value should always be in conjunction with disabled
       it is used to obscure unimportant data, like Species when a Pokemon is an egg */
    makeInvisibleText?: boolean;
}

const renderItems = (visibleItems: string[], selectItem: any, innerValue: string, selectedValue: string) => visibleItems.map((v, i) => {
    return (
        <li
            key={i}
            onClick={(e) => selectItem(e)(v)}
            className={v === selectedValue ? 'autocomplete-selected' : ''}>
            {v}
        </li>
    );
});

const filter = (items, str) => items?.filter(i => i?.toLowerCase().startsWith(str.toLowerCase()));

const invisibleText = css`
    color: transparent !important;
`;

export function Autocomplete ({
    label,
    name,
    placeholder,
    onChange,
    className,
    disabled,
    makeInvisibleText,
    items,
    // onInput,
    value,
}: AutocompleteProps) {
    const [innerValue, setValue] = React.useState('');
    const [selectedValue, setSelectedValue] = React.useState('');
    const [isOpen, setIsOpen] = React.useState(false);
    const [visibleItems, setVisibleItems] = React.useState<string[]>([]);

    const delayedValue = useDebounceCallback(
        (e) => onChange(e), 300,
    );

    React.useEffect(() => {
        setValue(value);
        setVisibleItems(filter(items, value));
        // setIsOpen(false);
    }, [value, items]);

    const changeEvent = (innerEvent: boolean = true) => (e) => {
        innerEvent && e.persist();
        setValue(e.target.value);
        setVisibleItems(filter(items, e.target.value));
        delayedValue({ target: { value: e.target.value }});
    };

    const handleMovement = (e) => {
        const currentIndex = visibleItems?.indexOf(selectedValue);
        if (e.which === 38) {
            setSelectedValue(visibleItems[currentIndex - 1]);
        } else {
            setSelectedValue(visibleItems[currentIndex + 1]);
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
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        e.persist();
        setVisibleItems(filter(items, e.currentTarget.value));

        switch (e.which) {
            case 13:
                e.preventDefault();
                if (selectedValue) {
                    setValue(selectedValue);
                }
                closeList(e);
                changeEvent(false)({ ...e, target: { value: selectedValue !== '' ? selectedValue : innerValue }});
                break;
            case 8:
                break;
            case 27:
            case 9:
                closeList(e);
                break;
            case 38:
            case 40:
                handleMovement(e);
                setIsOpen(true);
                break;
            default:
                setSelectedValue('');
                break;
        }
    };
    const selectItem = (e) => (value) => {
        changeEvent(false)({ ...e, target:{value}});
    };

    return <div className={cx('current-pokemon-input-wrapper', 'autocomplete')}>
        <label>{label}</label>
        <input
            autoComplete="off"
            className={cx(className, makeInvisibleText && invisibleText)}
            onKeyDown={handleKeyDown}
            onFocus={openList}
            onBlur={closeList}
            placeholder={placeholder}
            name={name}
            type="text"
            onChange={changeEvent()}
            value={innerValue}
            disabled={disabled}
            data-testid="autocomplete"
        />
        {isOpen ? (
            <ul className="autocomplete-items has-nice-scrollbars">{renderItems(
                visibleItems,
                selectItem,
                innerValue,
                selectedValue,
            )}</ul>
        ) : null}
    </div>;
}
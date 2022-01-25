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
    onInput: any;
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

const determineTopValue = (scrollTop: number, value: number) => scrollTop + value;

export function Autocomplete ({
    label,
    name,
    placeholder,
    onChange,
    className,
    disabled,
    makeInvisibleText,
    items,
    onInput,
    value,
}: AutocompleteProps) {
    const [innerValue, setValue] = React.useState('');
    const [selectedValue, setSelectedValue] = React.useState('');
    const [isOpen, setIsOpen] = React.useState(false);
    const [visibleItems, setVisibleItems] = React.useState<string[]>([]);
    const inputRef = React.useRef<HTMLInputElement>(null);
    const itemsRef = React.useRef<HTMLUListElement>(null);

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
        onInput({ ...e, currentTarget: { value: e.target.value }});
    };



    const handleMovement = (e) => {
        const currentIndex = visibleItems?.indexOf(selectedValue);
        const scrollTop = itemsRef.current?.scrollTop || 0;
        console.log('scrollTop', scrollTop, itemsRef?.current?.scrollTop);
        if (e.which === 38) {
            itemsRef.current?.scrollTo({ top: determineTopValue(scrollTop, -10), behavior: 'smooth' });
            setSelectedValue(visibleItems[currentIndex - 1]);
        } else {
            itemsRef.current?.scrollTo({ top: determineTopValue(scrollTop, 10), behavior: 'smooth' });
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

        switch (e.key) {
            case 'Enter':
                e.preventDefault();
                if (selectedValue) {
                    setValue(selectedValue);
                }
                closeList(e);
                changeEvent(false)({ ...e, target: { value: selectedValue !== '' ? selectedValue : innerValue }});
                break;
            case 'Backspace':
                setSelectedValue(visibleItems?.[0]);
                break;
            case 'Escape':
            case 'Tab':
                closeList(e);
                break;
            case 'ArrowDown':
            case 'ArrowUp':
                handleMovement(e);
                setIsOpen(true);
                break;
            default:
                setSelectedValue('');
                break;
        }
    };
    const selectItem = (e) => (value) => {
        changeEvent(false)({ ...e, target: {value}});
    };

    return <div className={cx('current-pokemon-input-wrapper', 'autocomplete')}>
        {label && <label>{label}</label>}
        <input
            autoComplete="off"
            className={cx(className, makeInvisibleText && invisibleText)}
            onKeyDown={handleKeyDown}
            onFocus={openList}
            onBlur={closeList}
            onInput={onInput}
            placeholder={placeholder}
            name={name}
            type="text"
            onChange={changeEvent()}
            value={innerValue}
            disabled={disabled}
            data-testid="autocomplete"
            ref={inputRef}
        />
        {isOpen ? (
            <ul
                ref={itemsRef}
                style={{
                    top: (inputRef?.current?.offsetHeight || 20) + 5,
                    width: inputRef?.current?.offsetWidth,
                }} className="autocomplete-items has-nice-scrollbars">{renderItems(
                    visibleItems,
                    selectItem,
                    innerValue,
                    selectedValue,
                )}</ul>
        ) : null}
    </div>;
}
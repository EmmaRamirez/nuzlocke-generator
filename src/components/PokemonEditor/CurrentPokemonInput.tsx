import * as React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';

import {
    matchSpeciesToTypes,
    getMoveType,
    formatBallText,
    typeToColor,
    getContrastColor,
    matchNatureToToxtricityForme,
} from 'utils';
import { editPokemon, selectPokemon, editStat } from 'actions';

import { ErrorBoundary } from 'components/Shared';

import { TagInput, Classes, TextArea } from '@blueprintjs/core';
import { State } from 'state';
import { Pokemon } from 'models';
import { cx } from 'emotion';
import { useDebounceCallback } from '@react-hook/debounce';

interface CurrentPokemonInputProps {
    labelName: string;
    inputName: string;
    type:
    | 'number'
    | 'text'
    | 'select'
    | 'checkbox'
    | 'double-select'
    | 'moves'
    | 'textArea'
    | 'autocomplete'
    | 'rich-text';
    value: any;
    placeholder?: string;
    transform?: (v: any) => string;
    disabled?: boolean;
    options?: string[] | { key: string; value: string | null }[];
    pokemon?: Pokemon;
    usesKeyValue?: boolean;
    className?: string;
    items?: string[];
    key: string;
}

// selectedId: state.selectedId,
//         customMoveMap: state.customMoveMap,
//         customTypes: state.customTypes,
//     }),
//     { editPokemon, selectPokemon },

interface ChangeArgs {
    inputName: CurrentPokemonInputProps['inputName'];
    position?: number;
    value?: any;
    pokemon?: Pokemon;
    edit: { [x: string]: any };
}

const createEdit = ({ inputName, value, pokemon, edit }: ChangeArgs) => {
    if (inputName === 'species') {
        return {
            ...edit,
            types: matchSpeciesToTypes(edit['species'])
        };
    } else if (inputName === 'nature' && pokemon?.species === 'Toxtricity') {
        return {
            ...edit,
            forme: matchNatureToToxtricityForme(value),
        };
    } else if (inputName === 'forme') {
        return {
            ...edit,
            types: pokemon && matchSpeciesToTypes(pokemon?.species, value)
        };
    }

    return edit;
};

export type InputTypesFromState = Partial<
Pick<State, 'selectedId' | 'customMoveMap' | 'customTypes'>
>;
export type InputTypesFromActions = {};
export type InputTypesFromInternalState = {
    setEdit: React.Dispatch<
    React.SetStateAction<{
        [x: string]: any;
    }>
    >;
    edit: { [x: string]: any };
    onChange: (event: React.ChangeEvent<HTMLElement>) => void;
};
export type PokemonInputProps = CurrentPokemonInputProps &
InputTypesFromState &
InputTypesFromInternalState;

export const renderItems = (visibleItems, setSelectedItem) => (
    visibleItems.map((v, i) => {
        return (
            <li
                key={i}
                role="item"
                onClick={(e) => setSelectedItem(v)}
                style={v === this.state.currentValue ? { color: 'lightblue' } : {}}>
                {v}
            </li>
        );
    })
);

export function PokemonAutocompleteInput({
    className,
    placeholder,
    inputName,
    edit,
    disabled,
    onChange,
    setEdit,
    items,
}: PokemonInputProps) {
    const [isOpen, setIsOpen] = React.useState(false);
    const [visibleItems, setVisibleItems] = React.useState(items);
    const [selectedItem, setSelectedItem] = React.useState();
    const handleKeyDown = () => {};
    const updateItems = () => {};
    const closeList = () => {};
    const openList = () => {};


    return <>
        <input
            autoComplete="off"
            className={cx(className)}
            onKeyDown={handleKeyDown}
            onFocus={openList}
            onBlur={closeList}
            placeholder={placeholder}
            name={inputName}
            type="text"
            value={edit[inputName]}
            disabled={disabled}
            onChange={onChange}
            onInput={(e) => setEdit({ [inputName]: e.currentTarget.value })}
        />
        {isOpen ? (
            <ul className="autocomplete-items has-nice-scrollbars">{renderItems(visibleItems, setSelectedItem)}</ul>
        ) : null}
    </>;
}

export function PokemonTextInput({
    inputName,
    type,
    value,
    placeholder,
    disabled,
    selectedId,
    edit,
    setEdit,
    onChange,
}: PokemonInputProps) {
    return (
        <input
            onChange={onChange}
            onInput={(e) => setEdit({ [inputName]: e.currentTarget.value })}
            type={type}
            name={inputName}
            value={edit[inputName]}
            placeholder={placeholder}
            disabled={disabled}
            className={disabled ? `${Classes.DISABLED} ${Classes.TEXT_MUTED}` : ''}
        />
    );
}

export function PokemonTextAreaInput({
    inputName,
    type,
    value,
    placeholder,
    disabled,
    onChange,
    setEdit,
    edit,
}: PokemonInputProps) {
    return (
        <TextArea
            onChange={onChange}
            onInput={(e) => setEdit({ [inputName]: e.currentTarget.value })}
            name={inputName}
            value={edit[inputName]}
            placeholder={placeholder}
            disabled={disabled}
            style={{ width: '100%' }}
            className={disabled ? `${Classes.DISABLED} ${Classes.TEXT_MUTED} bp3-fill` : ''}
        />
    );
}

export function PokemonNumberInput({
    inputName,
    type,
    value,
    placeholder,
    disabled,
    onChange,
    setEdit,
    edit,
}: PokemonInputProps) {
    return (
        <input
            onChange={onChange}
            onInput={(e) => setEdit({ [inputName]: e.currentTarget.value })}
            type={type}
            name={inputName}
            value={edit[inputName]}
            placeholder={placeholder}
            disabled={disabled}
        />
    );
}

export function PokemonSelectInput({
    inputName,
    value,
    type,
    usesKeyValue,
    options,
    placeholder,
    onChange,
    edit,
    setEdit,
}: PokemonInputProps) {
    return (
        <div className={Classes.SELECT} style={inputName === 'status' ? { width: '120px' } : {}}>
            {inputName === 'pokeball' && value && value !== 'None' ? (
                <img
                    style={{ position: 'absolute' }}
                    alt={value}
                    src={`icons/pokeball/${formatBallText(value)}.png`}
                />
            ) : null}
            <select
                onChange={(e) => {
                    onChange(e);
                    setEdit({ [inputName]: e.currentTarget.value });
                }}
                value={value}
                style={inputName === 'pokeball' ? { paddingLeft: '2rem' } : {}}
                name={inputName}>
                {!usesKeyValue
                    ? options
                        ? // @ts-expect-error array mapping, re-check
                          options?.map((item, index) => <option key={index}>{item}</option>)
                        : null
                    : // @ts-expect-error array mapping, re-check
                      options?.map((item, index) => (
                          <option value={item.value} key={index}>
                              {item.key}
                          </option>
                      ))}
            </select>
        </div>
    );
}

export function PokemonDoubleSelectInput({
    inputName,
    value,
    type,
    usesKeyValue,
    options,
    placeholder,
    onChange,
    edit,
    setEdit,
}: PokemonInputProps) {
    if (!Array.isArray(edit[inputName])) {
        throw new Error('Could not read input as Array');
    }

    const onSelect = React.useMemo(() => (position: number) => (e) => {
        onChange(e);
        const newEdit = [
            ...edit[inputName]
        ];
        newEdit[position] = e.currentTarget.value;
        setEdit({ [inputName]: newEdit });
    }, [inputName, edit]);

    return (
        <span className="double-select-wrapper">
            <div className={Classes.SELECT}>
                <select onChange={onSelect(0)} value={edit?.[inputName]?.[0]} name={inputName}>
                    {options
                        ?
                        // @ts-expect-error @TODO: mapping
                        options.map((item: string, index: number) => (
                            <option value={item} key={index}>
                                {item}
                            </option>
                        ))
                        : null}
                </select>
            </div>
            <span>&nbsp;</span>
            <div className={Classes.SELECT}>
                <select onChange={onSelect(1)} value={edit?.[inputName]?.[1]} name={inputName}>
                    {options
                        ?
                        // @ts-expect-error @TODO: mapping
                        options.map((item, index) => (
                            <option value={item} key={index}>
                                {item}
                            </option>
                        ))
                        : null}
                </select>
            </div>
        </span>
    );
};

export function PokemonCheckboxInput({
    inputName,
    value,
    type,
    usesKeyValue,
    options,
    placeholder,
    onChange,
    edit,
    setEdit,
}: PokemonInputProps) {
    return (
        <label className={cx(Classes.CONTROL, Classes.CHECKBOX)}>
            <input
                onChange={(e) => {
                    onChange(e);
                    setEdit({ [inputName]: e.currentTarget.checked });
                }}
                checked={edit[inputName]}
                type={type}
                name={inputName}
            />
            <span className={Classes.CONTROL_INDICATOR} />
        </label>
    );
}

export function PokemonMoveInput({
    inputName,
    value,
    type,
    usesKeyValue,
    options,
    placeholder,
    onChange,
    edit,
    setEdit,
    customTypes,
    customMoveMap,
    selectedId,
}: PokemonInputProps) {
    const dispatch = useDispatch();

    return <ErrorBoundary>
        <TagInput
            fill
            leftIcon="ninja"
            tagProps={(v, i) => {
                // @TODO: Fix inconsitencies with bad parameter types
                const background =
                    typeToColor(
                        // @ts-expect-error @TODO: fix mapping
                        customMoveMap?.find((m) => m?.move === v)?.type ||
                            getMoveType(v?.toString()?.trim() || ''),
                        customTypes,
                    ) || 'transparent';
                const color = getContrastColor(background);
                return {
                    style: {
                        background,
                        color,
                    },
                };
            }}
            onChange={(values) => {
                const edit = {
                    moves: values,
                };
                selectedId && dispatch(editPokemon(edit, selectedId));
            }}
            values={value || []}
        />
    </ErrorBoundary>;
}

export function CurrentPokemonInput(props: CurrentPokemonInputProps) {
    const { inputName, value } = props;
    const selectedId = useSelector<State, State['selectedId']>((state) => state.selectedId);
    const customMoveMap = useSelector<State, State['customMoveMap']>(
        (state) => state.customMoveMap,
    );
    const customTypes = useSelector<State, State['customTypes']>((state) => state.customTypes);
    const dispatch = useDispatch();

    const [edit, setEdit] = React.useState({ [inputName]: value });
    if (!selectedId) {
        return null;
    }
    const onChange = useDebounceCallback(() => dispatch(editPokemon(createEdit({inputName, value: edit[inputName], edit, pokemon: props.pokemon}), selectedId)), 300);
    React.useEffect(() => setEdit({ [inputName]: value }), [inputName, value]);

    return (
        <span
            className={`current-pokemon-input-wrapper current-pokemon-${props.type} ${props.type === 'autocomplete' && 'autocomplete'} current-pokemon-${props.inputName}`}>
            <label>{props.labelName}</label>
            {getInput({ ...props, selectedId, onChange, setEdit, edit, customMoveMap })}
        </span>
    );
}

export function getInput(props: PokemonInputProps) {
    switch (props.type) {
        case 'text':
            return <PokemonTextInput {...props} />;
        case 'textArea':
            return <PokemonTextAreaInput {...props} />;
        case 'select':
            return <PokemonSelectInput {...props} />;
        case 'checkbox':
            return <PokemonCheckboxInput {...props} />;
        case 'moves':
            return <PokemonMoveInput {...props} />;
        case 'number':
            return <PokemonNumberInput {...props} />;
        case 'double-select':
            return <PokemonDoubleSelectInput {...props} />;
        case 'autocomplete':
            return <PokemonAutocompleteInput {...props} />;
        default:
            return 'No input for this type exists.';
    }
}

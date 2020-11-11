import * as React from 'react';
import { Omit } from 'ramda';
const debounce = require('lodash.debounce');


export interface TrainerInfoEditField {
    label: React.ReactElement<any> | string;
    name: string;
    placeholder: string;
    onEdit?: any;
    onInput?: any;
    value?: string;
    element?: (inputProps: Omit<TrainerInfoEditField, 'element'>) => any;
}

export function TrainerInfoEditField ({
    label,
    name,
    placeholder,
    onEdit,
    onInput,
    value,
    element,
}: TrainerInfoEditField) {
    const [innerValue, setValue] = React.useState('');

    const delayedValue = React.useCallback(
        debounce((e) => onEdit(e), 300),
        [value]
    );

    React.useEffect(() => {
        value && setValue(value);
    }, [value]);

    const onChange = (e) => {
        e.persist();
        setValue(e.target.value);
        delayedValue(e);
    };


    return <div className="trainer-info-field">
        <label>{label}</label>
        {element ? (
            element({ label, name, placeholder, onEdit, onInput, value: innerValue })
        ) : (
            <input
                type="text"
                value={innerValue}
                onChange={onChange}
                placeholder={placeholder}
                name={name}
            />
        )}
    </div>;
}

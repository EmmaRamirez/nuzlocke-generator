import * as React from 'react';
import { Omit } from 'ramda';

export interface TrainerInfoEditField {
    label: React.ReactElement<any> | string;
    name: string;
    placeholder: string;
    onChange?: any;
    onInput?: any;
    value?: string;
    element?: (inputProps: Omit<TrainerInfoEditField, 'element'>) => any;
}

export const TrainerInfoEditField = ({
    label,
    name,
    placeholder,
    onChange,
    onInput,
    value,
    element,
}: TrainerInfoEditField) => (
    <div className='trainer-info-field'>
        <label>{label}</label>
        {element ? (
            element({ label, name, placeholder, onChange, onInput, value })
        ) : (
            <input
                type='text'
                value={value}
                onChange={onChange}
                onInput={onInput}
                placeholder={placeholder}
                name={name}
            />
        )}
    </div>
);

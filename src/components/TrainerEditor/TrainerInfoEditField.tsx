import * as React from 'react';
import { Omit } from 'ramda';

export interface TrainerInfoEditField {
    label: string;
    name: string;
    placeholder: string;
    onChange: any;
    value: string;
    element: (inputProps: Omit<TrainerInfoEditField, 'element'>) => any;
}

export const TrainerInfoEditField = ({ label, name, placeholder, onChange, value, element }: TrainerInfoEditField) => (
    <div className='trainer-info-field'>
        <label>{label}</label>
        {element ? (
            element({ label, name, placeholder, onChange, value })
        ) : (
            <input
                type='text'
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                name={name}
            />
        )}
    </div>
);

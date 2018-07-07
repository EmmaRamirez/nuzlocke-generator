import * as React from 'react';

export const TrainerInfoEditField = ({ label, name, placeholder, onChange, value, element }) => (
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

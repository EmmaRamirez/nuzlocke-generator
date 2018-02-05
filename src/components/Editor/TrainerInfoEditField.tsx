import * as React from 'react';

export const TrainerInfoEditField = ({ label, name, placeholder, onInput }) => (
    <div className='trainer-info-field'>
        <label>{label}</label>
        <input type='text' onInput={onInput} placeholder={placeholder} name={name} />
    </div>
);

import * as React from 'react';

export const TrainerInfoEditField = ({ label, name, placeholder, onChange, value }) => (
    <div className='trainer-info-field'>
        <label>{label}</label>
        <input type='text' value={value} onChange={onChange} placeholder={placeholder} name={name} />
    </div>
);

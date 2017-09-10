import * as React from 'react';

export const TrainerInfoEditField = ({ label, name, placeholder }) => (
  <div className='trainer-info-field'>
    <label>{ label }</label>
    <input type='text' placeholder={placeholder} name={name} />
  </div>
);
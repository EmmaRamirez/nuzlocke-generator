import * as React from 'react';

export const StyleEditor = () => {
  return <div className='style-editor'>
    <h4>Style</h4>
    <div>
      <span>Template </span>
      <div className='pt-select'>
        <select>
          <option>Default Dark</option>
        </select>
      </div>
    </div>
  </div>;
};
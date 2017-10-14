import * as React from 'react';

export const getGenderElement = (gender) => {
  if (gender === 'Male' || gender === 'm') {
    return <span style={{color: 'lightblue'}}>&#9794;</span>;
  } else if (gender === 'Female' || gender === 'f') {
    return <span style={{color: 'pink'}}>&#9792;</span>;
  } else {
    return <span></span>;
  }
};
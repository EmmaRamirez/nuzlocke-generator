import * as React from 'react';

export const AddPokemonButton = ({ added, onClick }) => <button className='pt-intent-success pt-button add-new-pokemon' onClick={e => {
  e.preventDefault();
  onClick();
}}><span className='pt-icon-add' /> Add New Pokemon</button>;
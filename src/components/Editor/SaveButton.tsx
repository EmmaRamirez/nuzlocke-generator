import * as React from 'react';

/**
 * SaveButton properties
 */
export interface SaveButtonProps {
  /** Describes if data has been saved and there is no new data. */
  saved: boolean;
  /** onClick event for component */
  onClick: () => void;
}

/**
 * SaveButton component, basis for LinkedSaveButton component which saves the current edit data.
 * @param SaveButtonProps {SaveButtonProps}
 */
export const SaveButton = ({ saved = false, onClick }: SaveButtonProps) => <button className={saved ? 'pt-button pt-intent-success' : 'pt-button'} onClick={e => {
  e.preventDefault();
  onClick();
}}>
  { saved ? <span><span className='pt-icon-saved' /> Saved</span> : <span><span className='pt-icon-floppy-disk' /> Save</span> }
</button>;
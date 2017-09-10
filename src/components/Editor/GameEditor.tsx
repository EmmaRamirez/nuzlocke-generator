import * as React from 'react';

export class GameEditor extends React.Component<{}, {}> {
  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <div className='game-editor'>
        <h4>Game</h4>
        <label>Game </label>
        <div className='pt-select'>
          <select>
            <option>Red</option>
            <option>Pearl</option>
            <option selected>Sun</option>
          </select>
        </div>
        <button className='pt-button'>Import</button>
        <button className='pt-button'>Export</button>
        <button className='pt-button'><span className='pt-icon-floppy-disk' /> Save</button>
      </div>
    );
  }
}
import * as React from 'react';

export class GameEditor extends React.Component<{}, {}> {
  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <div className='game-editor'>
        <label>Game</label>
        <select>
          <option>Red</option>
          <option>Pearl</option>
          <option>Sun</option>
        </select>
      </div>
    );
  }
}
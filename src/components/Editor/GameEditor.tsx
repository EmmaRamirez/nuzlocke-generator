import * as React from 'react';
import { Store } from 'redux';

import { StoreContext } from '../../utils';
import { LinkedSaveButton } from '../containers';




@StoreContext
export class GameEditor extends React.Component<{}, {}> {
  constructor(props) {
    super(props);
  }

  public componentWillMount() {
    console.log(
      this.context.store
    );
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
        <LinkedSaveButton data={ this.context.store.getState().nuzlocke }/>
      </div>
    );
  }
}
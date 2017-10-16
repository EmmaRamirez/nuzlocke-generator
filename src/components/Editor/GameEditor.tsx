import * as React from 'react';
import { Store } from 'redux';

import { StoreContext } from '../../utils';
import { LinkedSaveButton } from './LinkedSaveButton';


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
        <input className='pt-input' type='text' defaultValue='Sun' dir='auto' />
        <br/>
        <button className='pt-button'>Import</button>
        <button className='pt-button'>Export</button>
        <LinkedSaveButton data={{
          pokemon: this.context.store.getState().pokemon,
          trainer: {},
          game: this.context.store.getState().game,
          style: {}
        }}/>
      </div>
    );
  }
}
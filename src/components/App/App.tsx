import { Hotkey, Hotkeys, HotkeysTarget } from '@blueprintjs/core';
import * as localForage from 'localforage';
import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Editor } from '../Editor';
import { Result } from '../Result';

const result = require('../../assets/img/result.png');

@HotkeysTarget
export class App extends React.Component<{}, {}> {
  private data;

  constructor(props:any) {
    super(props);
  }

  public componentWillMount() {
    const data = {
      game: {},
      pokemon: [],
      trainer: {}
    };

  }

  public renderHotkeys() {
    return <Hotkeys>
      <Hotkey
        global={true}
        combo='h'
        label='Nothing'
        onKeyDown={ () => { console.log('pressed h'); } }
      />
    </Hotkeys>;
  }

  public render() {
    return (
      <div className='app' role='main'>
        <Editor />
        <Result />
      </div>
    );
  }
}
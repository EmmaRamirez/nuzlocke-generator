import { Hotkey, Hotkeys, HotkeysTarget } from '@blueprintjs/core';
import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Editor } from '../Editor';


@HotkeysTarget
export class App extends React.Component<{}, {}> {
  constructor(props:any) {
    super(props);
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
      </div>
    );
  }
}
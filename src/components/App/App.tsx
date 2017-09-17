import { Hotkey, Hotkeys, HotkeysTarget } from '@blueprintjs/core';
import * as localForage from 'localforage';
import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Store } from 'redux';
import { saveNuzlocke } from '../../actions';

import { Editor } from '../Editor';
import { Result } from '../Result';

const result = require('../../assets/img/result.png');

interface AppState {
  data: object;
}

interface AppContext {
  store: Store<any>;
}

function StoreContext (target:any) {
  target.contextTypes = target.contextTypes || {};
  target.contextTypes.store = React.PropTypes.object.isRequired;
}

@StoreContext
@HotkeysTarget
export class App extends React.Component<{}, AppState> {
  public context: AppContext;

  constructor(props:any) {
    super(props);
  }

  public componentWillMount() {
    // if (localForage.getItem('data') != null) {
    //   localForage.setItem('data', {
    //     game: {},
    //     pokemon: [],
    //     trainer: {}
    //   });
    // }

    // localForage.getItem('data').then((data) => {
    //   this.context.store.dispatch(saveNuzlocke(data));
    //   console.log('store dispatched ', data);
    // }).catch((err) => {
    //   console.error(err, 'No localStorage item was found.');
    // });
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
import * as React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import { GameEditor } from './GameEditor';
import { PokemonEditor } from './PokemonEditor';
import { TrainerEditor } from './TrainerEditor';


require('./editor.styl');

export class Editor extends React.Component<{}, {}> {
  constructor(props:object) {
    super(props);
  }

  public render() {
    return (
      <Scrollbars
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        className='editor'
        style={{ width: '33%', height: '100vh', padding: '.25rem' }}
      >
        <GameEditor />
        <TrainerEditor />
        <PokemonEditor pokemon={['Bulbasaur', 'Ivysaur', 'Venusaur', 'Pikachu', 'Arceus']} />
      </Scrollbars>
    );
  }
}
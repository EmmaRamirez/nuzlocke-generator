import * as React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import { GameEditor } from './GameEditor';
import { PokemonEditor } from './PokemonEditor';
import { StyleEditor } from './StyleEditor';
import { TrainerEditor } from './TrainerEditor';

require('./editor.styl');

/**
 * The main editor interface.
 */
export class Editor extends React.Component<{}, {}> {
    constructor(props: object) {
        super(props);
    }

    public render() {
        return (
            <Scrollbars
                autoHide
                autoHideTimeout={1000}
                autoHideDuration={200}
                className='editor'
                style={{ width: '33%', minWidth: '30rem', maxWidth: '40rem', height: '100vh', padding: '.25rem' }}>
                <GameEditor />
                <TrainerEditor />
                <PokemonEditor />
                <StyleEditor />
            </Scrollbars>
        );
    }
}

import * as React from 'react';

import { PokemonIconBase } from '../Editor/PokemonIcon';
import { gameOfOriginToColor } from './gameOfOriginToColor';

export class ChampsPokemon extends React.Component<any> {
    constructor(props) {
        super(props);
    }

    public render() {
        return (
            <div
                style={{
                    width: '32px',
                    background: gameOfOriginToColor(this.props.gameOfOrigin),
                    display: 'inline-block',
                }}>
                <PokemonIconBase {...this.props as any} />
            </div>
        );
    }
}

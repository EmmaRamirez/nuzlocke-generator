import * as React from 'react';

import { PokemonIconBase } from '../Editor/PokemonIcon';

export class ChampsPokemon extends React.Component<any> {
    constructor(props) {
        super(props);
    }

    public render() {
        return (
            <div
                style={{
                    width: '32px',
                    background: '#f3563a',
                    display: 'inline-block',
                }}>
                <PokemonIconBase {...this.props as any} />
            </div>
        );
    }
}

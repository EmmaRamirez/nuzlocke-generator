import * as React from 'react';

import { PokemonIcon } from 'components/PokemonIcon';
import { gameOfOriginToColor } from 'utils';

export class ChampsPokemon extends React.Component<any> {
    constructor(props) {
        super(props);
    }

    public render() {
        return (
            <div
                className='champs-pokemon'
                style={{
                    height: '48px',
                    width: '48px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: gameOfOriginToColor(this.props.gameOfOrigin),
                    cursor: 'pointer',
                }}>
                <PokemonIcon {...this.props as any} />
            </div>
        );
    }
}

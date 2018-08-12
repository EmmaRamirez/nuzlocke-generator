import * as React from 'react';

import { PokemonIcon } from 'components/PokemonIcon';
import { gameOfOriginToColor, Game } from 'utils';
import { Pokemon } from 'models';

export type ChampsPokemonProps = { [P in keyof Pokemon]?: any };

export class ChampsPokemon extends React.Component<ChampsPokemonProps> {
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

import { Tag } from '@blueprintjs/core';
import { PokemonIcon } from 'components';
import * as React from 'react';
import { State } from 'state';
import { Game, gameOfOriginToColor } from 'utils';

export interface NuzlockeGameTagsProps {
    isCurrent?: boolean;
    darkMode?: boolean;
    game: Game;
    data: State;
    color: string;
}

export function NuzlockeGameTags({
    isCurrent,
    darkMode,
    game,
    data,
    color,
}: NuzlockeGameTagsProps) {
    return <>
        <div style={{display: 'flex', flexDirection: 'column', width: '6rem', marginRight: '2rem', justifyContent: 'space-between', alignItems: 'space-between'}}>
            <Tag round style={{
                background: gameOfOriginToColor(game),
                color: darkMode ? color : game === 'None' ? '#000' : color,
            }}>{game}</Tag>
            {isCurrent && <Tag round style={{
                background: 'rgba(0,0,0,0.1)',
                color: darkMode ? '#fff' : '#000',
                marginTop: '2px',
            }}>
                Current
            </Tag>}
        </div>
        <div style={{
            display: 'flex',
            width: '20rem',
            justifyContent: 'center',
            alignItems: 'center',
            pointerEvents: 'none',
        }}>
            {data?.pokemon?.filter(p => p.status === 'Team').map(poke => <PokemonIcon key={poke.id} {...poke} />)}
        </div>
    </>;
};

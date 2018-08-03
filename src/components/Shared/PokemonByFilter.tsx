import * as React from 'react';
import { Tooltip, Position } from '@blueprintjs/core';
import { Pokemon } from 'models';
import { PokemonIcon } from 'components/PokemonIcon';
import { sortPokes } from 'utils';

export function PokemonByFilter(team: Pokemon[], filter?: string): JSX.Element[] {
    let filterFunction: any;
    if (filter != null) filterFunction = poke => poke.status === filter;
    if (filter == null) filterFunction = poke => true;
    return team
        .filter(filterFunction)
        .sort(sortPokes)
        .map((poke, index) => {
            return (
                <Tooltip key={index} content={poke.nickname || ''} position={Position.TOP}>
                    <PokemonIcon
                        id={poke.id}
                        species={poke.species}
                        forme={poke.forme}
                        isShiny={poke.shiny}
                    />
                </Tooltip>
            );
        });
}

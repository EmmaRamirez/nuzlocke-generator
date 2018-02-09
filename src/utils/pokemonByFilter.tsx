import * as React from 'react';
import { Tooltip, Position } from '@blueprintjs/core';
import { Pokemon } from 'models';
import { LinkedPokemonIcon } from 'components/Editor';
import { sortPokes } from './sortPokes';

export function pokemonByFilter(team: Pokemon[], filter?: string): JSX.Element[] {
    let filterFunction: any;
    if (filter != null) filterFunction = poke => poke.status === filter;
    if (filter == null) filterFunction = poke => true;
    return team
        .filter(filterFunction)
        .sort(sortPokes)
        .map((poke, index) => {
            return (
                <Tooltip key={index} content={poke.nickname || ''} position={Position.TOP}>
                    <LinkedPokemonIcon id={poke.id} species={poke.species} forme={poke.forme} />
                </Tooltip>
            );
        });
}

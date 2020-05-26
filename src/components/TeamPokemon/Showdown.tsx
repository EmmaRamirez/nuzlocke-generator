import * as React from 'react';
import { Pokemon } from 'models';

export const Showdown: React.SFC<Pokemon> = (pokemon: Pokemon) => {
    return (
        <div>
            <div>{pokemon.nickname && `(${pokemon.nickname})`} {pokemon.species} {pokemon.gender === 'f' ? '(F)' : '(M)'} {pokemon.item && `@ ${pokemon.item}`}</div>
            {pokemon?.ability && <div>Ability: {pokemon.ability && 'Cursed Body'}</div>}
            {pokemon?.level && <div>Level: {pokemon.level}</div>}
            {pokemon?.shiny && <div>Shiny: Yes</div>}
            {/* EVs: 252 HP / 252 Atk / 4 SpD  */}
            {pokemon?.nature && <div>{pokemon?.nature} Nature</div>}
            {pokemon?.moves?.map(move => <div>- {move}</div>)}
            {pokemon?.notes}
        </div>
    );
};

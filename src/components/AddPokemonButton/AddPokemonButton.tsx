import * as React from 'react';
import { useDispatch } from 'react-redux';
import { addPokemon, selectPokemon } from 'actions';
import { Button, Intent } from '@blueprintjs/core';
import { Pokemon } from 'models';
import { isLocal, listOfPokemon, generateEmptyPokemon } from 'utils';
import { take } from 'ramda';

export function AddPokemonButton ({ pokemon }: {pokemon: Pokemon}) {
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(addPokemon(pokemon));
        dispatch(selectPokemon(pokemon.id));
    };

    const onDoubleClick = () => {
        if (isLocal()) {
            take(151, listOfPokemon).forEach(species => {
                dispatch(addPokemon(generateEmptyPokemon(undefined, {species})));
            });
        }
    };

    return <Button
        icon="add"
        intent={Intent.SUCCESS}
        className="add-new-pokemon"
        onClick={onClick}
        onDoubleClick={onDoubleClick}
    >
    Add New Pokémon
    </Button>;
}

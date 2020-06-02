import * as React from 'react';
import { onClick } from 'types';
import { connect } from 'react-redux';
import { addPokemon, selectPokemon } from 'actions';
import { Button, Intent } from '@blueprintjs/core';

export const AddPokemonButtonBase = ({ onClick }: { onClick: onClick }) => (
    <Button
        icon='add'
        intent={Intent.SUCCESS}
        className="add-new-pokemon"
        onClick={(e) => {
            e.preventDefault();
            onClick && onClick();
        }}>
        Add New Pokemon
    </Button>
);

export const AddPokemonButton = connect(null, (dispatch, ownProps: any) => ({
    onClick: () => {
        dispatch(addPokemon(ownProps.defaultPokemon));
        dispatch(selectPokemon(ownProps.defaultPokemon.id));
    },
}))(AddPokemonButtonBase);

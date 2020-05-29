import * as React from 'react';
import { onClick } from 'types';
import { connect } from 'react-redux';
import { addPokemon, selectPokemon } from 'actions';

export const AddPokemonButtonBase = ({ onClick }: { onClick: onClick }) => (
    <button
        className="pt-intent-success pt-button add-new-pokemon"
        onClick={(e) => {
            e.preventDefault();
            onClick && onClick();
        }}
    >
        <span className="pt-icon-add" /> &nbsp;Add New Pokemon
    </button>
);

export const AddPokemonButton = connect(null, (dispatch, ownProps: any) => ({
    onClick: () => {
        dispatch(addPokemon(ownProps.defaultPokemon));
        dispatch(selectPokemon(ownProps.defaultPokemon.id));
    },
}))(AddPokemonButtonBase);

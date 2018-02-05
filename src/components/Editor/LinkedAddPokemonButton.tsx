import { connect } from 'react-redux';
import { addPokemon, selectPokemon } from '../../actions';
import { AddPokemonButton } from '../Editor/AddPokemonButton';

const mapStateToProps = (state, ownProps) => {
    return { added: ownProps.added };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(addPokemon(ownProps.defaultPokemon));
            dispatch(selectPokemon(ownProps.defaultPokemon.id));
        },
    };
};

export const LinkedAddPokemonButton = connect(mapStateToProps, mapDispatchToProps)(
    AddPokemonButton,
);

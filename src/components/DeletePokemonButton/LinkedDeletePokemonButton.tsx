import { connect } from 'react-redux';
import { deletePokemon, modifyDeletionConfirmation } from 'actions';
import { DeletePokemonButton } from 'components/DeletePokemonButton';

const mapStateToProps = (state, ownProps) => {
    return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(deletePokemon(ownProps.id));
        },
        onChange: event => {
            dispatch(modifyDeletionConfirmation(!event.target.checked));
        },
    };
};

export const LinkedDeletePokemonButton = connect(mapStateToProps, mapDispatchToProps)(
    DeletePokemonButton,
);

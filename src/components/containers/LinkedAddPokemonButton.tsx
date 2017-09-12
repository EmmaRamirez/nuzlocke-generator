import { connect } from 'react-redux';
import { addPokemon } from '../../actions';
import { AddPokemonButton } from '../Editor/AddPokemonButton';

const mapStateToProps = (state, ownProps) => {
  return { added: ownProps.added };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(addPokemon(ownProps.defaultPokemon));
    }
  };
};

export const LinkedAddPokemonButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPokemonButton);
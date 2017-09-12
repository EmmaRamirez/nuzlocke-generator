import { connect } from 'react-redux';
import { selectPokemon } from '../../actions';
import { PokemonIcon } from '../Editor/PokemonIcon';

const mapStateToProps = (state, ownProps) => {
  return {
    selectedId: state.selectedId
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(selectPokemon(ownProps.id));
    }
  };
};

export const LinkedPokemonIcon = connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonIcon);
import { isEqual } from 'lodash';
import { connect } from 'react-redux';
import { saveNuzlocke } from '../../actions';
import { SaveButton } from '../Editor/SaveButton';

const mapStateToProps = (state, ownProps) => {
  console.log(isEqual(state.nuzlocke.nuzlocke, ownProps.data));
  return {
    saved: isEqual(state.nuzlocke.nuzlocke, ownProps.data)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log('ownProps', ownProps);
  return {
    onClick: () => {
      dispatch(saveNuzlocke(ownProps.data));
    }
  };
};

export const LinkedSaveButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(SaveButton);
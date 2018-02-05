import { isEqual } from 'lodash';
import { connect } from 'react-redux';
import { saveNuzlocke } from '../../actions';
import { SaveButton } from '../Editor/SaveButton';

const mapStateToProps = (state, ownProps) => {
    return {
        saved: isEqual(state.nuzlocke, ownProps.data),
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(saveNuzlocke(ownProps.data));
        },
    };
};

export const LinkedSaveButton = connect(mapStateToProps, mapDispatchToProps)(SaveButton);

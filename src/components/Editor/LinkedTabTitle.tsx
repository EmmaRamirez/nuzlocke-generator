import { isEqual } from 'lodash';
import { connect } from 'react-redux';
import { editBox } from '../../actions';
import { TabTitle } from '../Editor/TabTitle';

const mapStateToProps = (state, ownProps) => {
    return {
        title: state.box[ownProps.boxId].name,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onChange: e => {
            dispatch(editBox(e.target.textContent, ownProps.boxId));
        },
    };
};

export const LinkedTabTitle = connect(mapStateToProps, mapDispatchToProps)(TabTitle);

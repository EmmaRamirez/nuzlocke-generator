import { connect } from 'react-redux';
import { editTrainer } from '../../actions';
import { TrainerInfoEditField } from './TrainerInfoEditField';

const mapStateToProps = (state, ownProps) => {
    return {
        value: state.trainer[ownProps.name]
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onChange: e => {
            dispatch(
                editTrainer({
                    [ownProps.name]: e.target.value,
                }),
            );
        },
    };
};

export const LinkedTrainerInfoEditField = connect(mapStateToProps, mapDispatchToProps)(
    TrainerInfoEditField,
);

import { connect } from 'react-redux';
import { editTrainer } from '../../actions';
import { TrainerInfoEditField } from './TrainerInfoEditField';

const mapStateToProps = (state, ownProps) => {
    return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onInput: e => {
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

import { connect, Dispatch } from 'react-redux';
import { editTrainer } from '../../actions';
import { TrainerInfoEditField } from './TrainerInfoEditField';
import { State } from 'state';

const mapStateToProps = (state: Pick<State, keyof State>, ownProps: TrainerInfoEditField) => {
    return {
        // @ts-ignore
        value: state.trainer[ownProps.name],
    };
};

const mapDispatchToProps = (dispatch: Dispatch<State>, ownProps: TrainerInfoEditField) => {
    return {
        onChange: (e: any) => {
            dispatch(
                editTrainer({
                    [ownProps.name]: e.target.value,
                }),
            );
        },
    };
};

export const LinkedTrainerInfoEditField = connect(mapStateToProps, mapDispatchToProps)(
    TrainerInfoEditField as any,
);

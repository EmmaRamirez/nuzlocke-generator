import * as React from 'react';

import { BadgeInput } from 'components/TrainerEditor/BadgeInput';
import { Popover, PopoverInteractionKind, Position, Menu, Icon } from '@blueprintjs/core';
import { listOfTrainers } from 'utils';
import { TrainerInfoEditField } from './TrainerInfoEditField';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'state';
import { editTrainer } from 'actions';

const capitalize = (s: string) => s[0].toUpperCase() + s.slice(1);

const SpanBlock = ({ text }) => (
    <span
        style={{
            background: 'rgba(0, 0, 0, 0.1)',
            display: 'inline-block',
            padding: '0 3px',
            margin: '2px',
            borderRadius: '.25rem',
        }}>
        {text}
    </span>
);


// import { connect } from 'react-redux';
// import { editTrainer } from 'actions';
// import { TrainerInfoEditField } from './TrainerInfoEditField';
// import { State } from 'state';

// const mapStateToProps = (state: Pick<State, keyof State>, ownProps: TrainerInfoEditField) => {
//     return {
//         // @ts-ignore
//         value: state.trainer[ownProps.name],
//     };
// };

// const mapDispatchToProps = (dispatch, ownProps: TrainerInfoEditField) => {
//     return {
//         onChange: (e: any) => {
//             dispatch(
//                 editTrainer({
//                     [ownProps.name]: e.target.value,
//                 }),
//             );
//         },
//     };
// };

// export const LinkedTrainerInfoEditField = connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(TrainerInfoEditField as any);





export function TrainerInfoEditor() {
    const trainer = useSelector<State, State['trainer']>(state => state.trainer);
    const dispatch = useDispatch();

    return <div className="trainer-info-editor">
        <TrainerInfoEditField
            onInput={this.onInput}
            onEdit={e => dispatch(editTrainer({ name: e.target.value }))}
            value={trainer.name}
            label="Trainer Name"
            name="name"
            placeholder="Trainer Name"
        />
        <TrainerInfoEditField
            onInput={this.onInput}
            label="ID"
            name="id"
            placeholder="Trainer ID"
        />
        <TrainerInfoEditField
            onInput={this.onInput}
            label="Time"
            name="time"
            placeholder="0:00"
        />
        <TrainerInfoEditField
            onInput={this.onInput}
            label="Money"
            name="money"
            placeholder="$0"
        />
        <TrainerInfoEditField
            onInput={this.onInput}
            label="Title"
            name="title"
            placeholder=""
        />
        <BadgeInput />
        <TrainerInfoEditField
            onInput={this.onInput}
            label={
                <Popover
                    minimal={true}
                    interactionKind={PopoverInteractionKind.HOVER}
                    position={Position.BOTTOM}
                    content={
                        <Menu>
                            Type: image url. You can also specify a plain string of{' '}
                            {listOfTrainers.map((t) => (
                                <SpanBlock key={t} text={capitalize(t)} />
                            ))}
                        </Menu>
                    }>
                    <span>
                        Trainer Image <Icon icon="info-sign" />
                    </span>
                </Popover>
            }
            name="image"
            placeholder="http://..."
        />
        <TrainerInfoEditField
            onInput={this.onInput}
            label="Notes"
            name="notes"
            placeholder=""
        />
        {/* <Button
            style={{ borderRadius: '0' }}
            intent={Intent.PRIMARY}
            icon='plus'>
            Add New Field
        </Button> */}
    </div>;
}

import * as React from 'react';

import { BadgeInput } from 'components/TrainerEditor/BadgeInput';
import { LinkedTrainerInfoEditField } from 'components/TrainerEditor/LinkedTrainerInfoEditField';

import { Popover, PopoverInteractionKind, Position, Menu, Icon } from '@blueprintjs/core';

import { listOfTrainers } from 'utils';

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

export class TrainerInfoEditor extends React.Component<{}, {}> {
    private onInput = (e) => {};

    public render() {
        return (
            <div className="trainer-info-editor">
                <LinkedTrainerInfoEditField
                    onInput={this.onInput}
                    label="Trainer Name"
                    name="name"
                    placeholder="Trainer Name"
                />
                <LinkedTrainerInfoEditField
                    onInput={this.onInput}
                    label="ID"
                    name="id"
                    placeholder="Trainer ID"
                />
                <LinkedTrainerInfoEditField
                    onInput={this.onInput}
                    label="Time"
                    name="time"
                    placeholder="0:00"
                />
                <LinkedTrainerInfoEditField
                    onInput={this.onInput}
                    label="Money"
                    name="money"
                    placeholder="$0"
                />
                <LinkedTrainerInfoEditField
                    onInput={this.onInput}
                    label="Title"
                    name="title"
                    placeholder=""
                />
                <BadgeInput enableCheckpointsEditor />
                <LinkedTrainerInfoEditField
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
                <LinkedTrainerInfoEditField
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
            </div>
        );
    }
}

import * as React from 'react';
import { connect } from 'react-redux';

import { Styles } from 'utils';
import { TrainerInfoEditField } from 'components/TrainerEditor/TrainerInfoEditField';
import { editTrainer } from 'actions';
import { Trainer } from 'models';

import { Popover, Menu, Button, Position, Checkbox, Dialog, Classes } from '@blueprintjs/core';
import { CheckpointsEditor } from './CheckpointsEditor';
import { cx } from 'emotion';
import { State } from 'state';
import { Checkpoints } from 'reducers/checkpoints';

export interface BadgeInputProps {
    trainer: Trainer;
    checkpoints: Checkpoints;
    game: any;
    editTrainer: any;
    style: Styles;
    enableCheckpointsEditor: boolean;
}

export interface BadgeInputState {
    isOpen: boolean;
}

export class BadgeInputBase extends React.Component<BadgeInputProps, BadgeInputState> {
    constructor(props: BadgeInputProps) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    private toggleCheckpointsEditor = (e: React.SyntheticEvent<HTMLElement>) =>
        this.setState({ isOpen: !this.state.isOpen });

    public render() {
        const trainerBadges = this.props.trainer.badges ? this.props.trainer.badges : [];
        return (
            <>
                {this.props.enableCheckpointsEditor ? (
                    <Dialog
                        isOpen={this.state.isOpen}
                        onClose={this.toggleCheckpointsEditor}
                        className={cx(Classes.DIALOG, {
                            [Classes.DARK]: this.props.style.editorDarkMode,
                        })}
                        canOutsideClickClose={false}
                        title='Checkpoints Editor'
                        icon='badge'
                        style={{ width: '44rem' }}>
                        <div className={Classes.DIALOG_BODY}>
                            <CheckpointsEditor
                                checkpoints={this.props.checkpoints}
                            />
                        </div>
                    </Dialog>
                ) : null}
                <TrainerInfoEditField
                    label='Checkpoints'
                    name='badges'
                    placeholder='...'
                    value={''}
                    onChange={null}
                    element={inputProps => (
                        <Popover
                            minimal={true}
                            content={
                                <Menu>
                                    {this.props.checkpoints.map(badge => (
                                        <Checkbox
                                            onChange={(e: any) => {
                                                if (!e.target.checked || trainerBadges.some(b => b.name === badge.name)) {
                                                    this.props.editTrainer({
                                                        badges: trainerBadges.filter(b => b.name !== badge.name)
                                                    });
                                                } else {
                                                    this.props.editTrainer({
                                                        badges: [...trainerBadges, badge ]
                                                    });
                                                }
                                            }}
                                            checked={trainerBadges.some(b => b.name === badge.name)}
                                            key={badge.name}
                                            label={badge.name}
                                        />
                                    ))}
                                    {this.props.enableCheckpointsEditor ? (
                                        <Button
                                            onClick={this.toggleCheckpointsEditor}
                                            className='pt-minimal'>
                                            Customize Checkpoints
                                        </Button>
                                    ) : null}
                                </Menu>
                            }
                            position={Position.BOTTOM}>
                            <Button
                                style={{
                                    borderRadius: 0,
                                    width: '170px',
                                }}>
                                Select Checkpoints
                            </Button>
                        </Popover>
                    )}
                />
            </>
        );
    }
}

export const BadgeInput = connect(
    (state: Pick<State, keyof State>) => ({
        checkpoints: state.checkpoints,
        trainer: state.trainer,
        game: state.game,
        style: state.style,
    }),
    {
        editTrainer,
    },
)(BadgeInputBase);

import * as React from 'react';
import { connect } from 'react-redux';

import { getBadges } from 'utils';
import { TrainerInfoEditField } from 'components/TrainerEditor/TrainerInfoEditField';
import { editTrainer } from 'actions';
import { Trainer } from 'models';

import { Popover, Menu, Button, Position, Checkbox, Dialog, Classes } from '@blueprintjs/core';
import { CheckpointsEditor } from './CheckpointsEditor';
import { cx } from 'emotion';

export interface BadgeInputProps {
    trainer: Trainer;
    game: any;
    editTrainer: any;
}

export interface BadgeInputState {
    badges: Set<string>;
    isOpen: boolean;
}

const handleDeletion = (badges, badge) => {
    badges.delete(badge);
    return badges;
};

export class BadgeInputBase extends React.Component<BadgeInputProps, BadgeInputState> {
    constructor(props) {
        super(props);
        this.state = {
            badges: new Set([]),
            isOpen: false,
        };
    }

    public componentWillMount() {
        this.setState({ badges: new Set(this.props.trainer.badges) });
    }

    private toggleCheckpointsEditor = e => this.setState({ isOpen: !this.state.isOpen });

    public render() {
        return (
            <>
                <Dialog
                    isOpen={this.state.isOpen}
                    onClose={this.toggleCheckpointsEditor}
                    className={Classes.DIALOG}
                    title='Checkpoints Editor'
                    icon='badge'
                >
                    <div className={Classes.DIALOG_BODY}>
                        <CheckpointsEditor checkpoints={this.state.badges} />
                    </div>
                </Dialog>
                <TrainerInfoEditField
                    label='Checkpoints'
                    name='badges'
                    placeholder='...'
                    value={null}
                    onChange={null}
                    element={inputProps => (
                        <Popover
                            minimal={true}
                            content={
                                <Menu>
                                    {getBadges(this.props.game.name).map(badge => (
                                        <Checkbox
                                            onChange={(e: any) => {
                                                this.setState(
                                                    {
                                                        badges: this.state.badges.has(badge)
                                                            ? handleDeletion(this.state.badges, badge)
                                                            : this.state.badges.add(badge),
                                                    },
                                                    () => {
                                                        this.props.editTrainer({
                                                            badges: Array.from(this.state.badges),
                                                        });
                                                    },
                                                );
                                            }}
                                            checked={
                                                this.props.trainer &&
                                                this.props.trainer.badges &&
                                                this.props.trainer.badges.includes(badge)
                                            }
                                            key={badge}
                                            label={badge}
                                        />
                                    ))}
                                    <Button onClick={this.toggleCheckpointsEditor} className='pt-minimal'>Customize Checkpoints</Button>
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
    (state: any) => ({
        trainer: state.trainer,
        game: state.game,
    }),
    {
        editTrainer,
    },
)(BadgeInputBase);

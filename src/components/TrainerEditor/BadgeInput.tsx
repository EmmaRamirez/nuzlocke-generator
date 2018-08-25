import * as React from 'react';
import { connect } from 'react-redux';

import { getBadges, Styles } from 'utils';
import { TrainerInfoEditField } from 'components/TrainerEditor/TrainerInfoEditField';
import { editTrainer } from 'actions';
import { Trainer, Badge } from 'models';

import { Popover, Menu, Button, Position, Checkbox, Dialog, Classes } from '@blueprintjs/core';
import { CheckpointsEditor } from './CheckpointsEditor';
import { cx } from 'emotion';
import { DeepSet } from 'utils';

export interface BadgeInputProps {
    trainer: Trainer;
    game: any;
    editTrainer: any;
    style: Styles;
}

export interface BadgeInputState {
    badges: Set<Badge>;
    isOpen: boolean;
}

const handleDeletion = (badges: Set<Badge>, badge: Badge) => {
    badges.delete(badge);
    return badges;
};

const has = (badges: Badge[] | undefined, badge: Badge) => {
    if (badges) {
        return badges.some(b => b.name === badge.name);
    }
    return false;
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

    private add (badges: Set<Badge>, b: Badge) {
        badges.add(b);
        return badges;
    }

    public render() {
        return (
            <>
                <Dialog
                    isOpen={this.state.isOpen}
                    onClose={this.toggleCheckpointsEditor}
                    className={cx(Classes.DIALOG, { [Classes.DARK]: this.props.style.editorDarkMode}) }
                    title='Checkpoints Editor'
                    icon='badge'
                >
                    <div className={Classes.DIALOG_BODY}>
                        <CheckpointsEditor checkpoints={new DeepSet(getBadges(this.props.game.name))} />
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
                                                        badges: has(this.props.trainer.badges, badge)
                                                            ? handleDeletion(this.state.badges, badge)
                                                            : this.add(this.state.badges, badge),
                                                    },
                                                    () => {
                                                        this.props.editTrainer({
                                                            badges: Array.from(this.state.badges),
                                                        });
                                                    },
                                                );
                                            }}
                                            checked={
                                                has(this.props.trainer.badges, badge)
                                            }
                                            key={badge.name}
                                            label={badge.name}
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
        style: state.style,
    }),
    {
        editTrainer,
    },
)(BadgeInputBase);

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
import { State } from 'state';

export interface BadgeInputProps {
    trainer: Trainer;
    game: any;
    editTrainer: any;
    style: Styles;
    enableCheckpointsEditor: boolean;
}

export interface BadgeInputState {
    badges: DeepSet<Badge>;
    isOpen: boolean;
}

export class BadgeInputBase extends React.Component<BadgeInputProps, BadgeInputState> {
    constructor(props: BadgeInputProps) {
        super(props);
        this.state = {
            badges: new DeepSet(),
            isOpen: false,
        };
    }

    public componentWillMount() {
        this.setState({ badges: new DeepSet(this.props.trainer.badges) });
    }

    private toggleCheckpointsEditor = (e: React.SyntheticEvent<HTMLElement>) =>
        this.setState({ isOpen: !this.state.isOpen });

    private handleBadge(badge: Badge): DeepSet<Badge> {
        const mutableBadges = this.state.badges;
        if (mutableBadges.has(badge)) {
            mutableBadges.delete(badge);
            return mutableBadges;
        } else {
            mutableBadges.add(badge);
            return mutableBadges;
        }
        return mutableBadges;
    }

    public render() {
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
                        style={{ width: '33rem' }}>
                        <div className={Classes.DIALOG_BODY}>
                            <CheckpointsEditor
                                checkpoints={new DeepSet(getBadges(this.props.game.name))}
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
                                    {getBadges(this.props.game.name).map(badge => (
                                        <Checkbox
                                            onChange={(e: any) => {
                                                this.setState(
                                                    {
                                                        badges: this.handleBadge(badge),
                                                    },
                                                    () => {
                                                        this.props.editTrainer({
                                                            badges: this.state.badges.toArray(),
                                                        });
                                                    },
                                                );
                                            }}
                                            checked={this.state.badges.has(badge)}
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
        trainer: state.trainer,
        game: state.game,
        style: state.style,
    }),
    {
        editTrainer,
    },
)(BadgeInputBase);

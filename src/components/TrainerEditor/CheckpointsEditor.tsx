import * as React from 'react';
import { cx } from 'react-emotion';
import {
    Classes,
    Button,
    Icon,
    Intent,
    Toaster,
    Popover,
    PopoverInteractionKind,
} from '@blueprintjs/core';
import { classWithDarkTheme, Styles } from 'utils';
import * as styles from './style';
import { connect } from 'react-redux';
import { Badge } from 'models';
import { getAllBadges } from 'utils';
import { State } from 'state';
import { Checkpoints } from 'reducers/checkpoints';
import { addCustomCheckpoint, editCheckpoint, deleteCheckpoint, reorderCheckpoints } from 'actions';

export interface CheckpointsSelectProps {
    checkpoint: Badge;
    onEdit: (img, name) => void;
}

export interface CheckpointsSelectState {
    showOptions: boolean;
}

export class CheckpointsSelect extends React.Component<
    CheckpointsSelectProps,
    CheckpointsSelectState
> {
    private renderOptions(checkpointTargetName) {
        return (
            <div style={{ padding: '1rem', height: '400px', overflowY: 'auto' }}>
                {getAllBadges().map((badge, key) => {
                    return (
                        <Button onClick={e => this.props.onEdit({ image: badge.image }, checkpointTargetName)} key={key} name={badge.name} style={{ display: 'block' }} className={Classes.MINIMAL}>
                            <img
                                className={cx(styles.checkpointImage(1))}
                                alt={badge.name}
                                src={`./img/checkpoints/${badge.image}.png`}
                            />{' '}
                            {badge.name}
                        </Button>
                    );
                })}
            </div>
        );
    }

    public render() {
        const { checkpoint } = this.props;
        return (
            <Popover
                minimal
                interactionKind={PopoverInteractionKind.CLICK}
                content={this.renderOptions(checkpoint.name)}>
                <div
                    role='select'
                    className={cx(styles.checkpointSelect, Classes.SELECT, Classes.BUTTON)}>
                    <div>
                        <img
                            className={cx(styles.checkpointImage(1))}
                            alt={checkpoint.name}
                            src={`./img/checkpoints/${checkpoint.image}.png`}
                        />{' '}
                        {checkpoint.name}
                    </div>
                </div>
            </Popover>
        );
    }
}

export interface CheckpointsEditorProps {
    checkpoints: Checkpoints;
    style: Styles;
    addCheckpoint: addCustomCheckpoint;
    editCheckpoint: editCheckpoint;
    deleteCheckpoint: deleteCheckpoint;
    reorderCheckpoints: reorderCheckpoints;
}

export interface CheckpointsEditorState {
    badgeNumber: number;
}

export class CheckpointsEditorBase extends React.Component<
    CheckpointsEditorProps,
    CheckpointsEditorState
> {
    public state = { badgeNumber: 0 };

    private addCheckpoint = (e: any) => {
        this.setState({
            badgeNumber: this.state.badgeNumber + 1,
        }, () => {
            this.props.addCheckpoint({ name: `Custom Badge ${this.state.badgeNumber}`, image: 'unknown' });
        });
    };

    private onUpload = (e: any) => {
        const size = e.target.files[0].size / 1024 / 1024;
        if (size > 0.5) {
            const toaster = Toaster.create();
            toaster.show({
                message: `File size of 500KB exceeded. File was ${size.toFixed(2)}MB`,
                intent: Intent.DANGER,
            });
        } else {
        }
    };

    private onSortEnd = ({ oldIndex, newIndex }) => this.props.reorderCheckpoints(oldIndex, newIndex);

    private renderCheckpoints(checkpoints: Checkpoints) {
        return (
            checkpoints &&
            checkpoints.map((checkpoint, key) => {
                return (
                    <li
                        key={key}
                        className={cx(
                            classWithDarkTheme(
                                styles,
                                'checkpointsItem',
                                this.props.style.editorDarkMode,
                            ),
                        )}>
                        {/* <Icon icon='drag-handle-vertical' /> */}
                        <div className={cx(styles.checkpointName)}>
                            <img
                                className={cx(styles.checkpointImage())}
                                alt={checkpoint.name}
                                src={`./img/checkpoints/${checkpoint.image}.png`}
                            />
                            <input onChange={e => this.props.editCheckpoint({ name: e.target.value }, checkpoint.name)} className={Classes.INPUT} type='text' value={checkpoint.name} />
                        </div>
                        <CheckpointsSelect onEdit={(i, n) => this.props.editCheckpoint(i, n)} checkpoint={checkpoint} />
                        {/* <div className={cx(styles.checkpointImageUploadWrapper)}>Use Custom Image <input onChange={this.onUpload} type='file' /></div> */}
                        <Icon style={{ cursor: 'pointer' }} onClick={e => this.props.deleteCheckpoint(checkpoint.name)} className={cx(styles.checkpointDelete)} icon='trash' />
                    </li>
                );
            })
        );
    }

    public render() {
        return (
            <div className={cx(styles.checkpointsEditor)}>
                <ul className={cx(styles.checkpointsList)}>
                    {this.renderCheckpoints(this.props.checkpoints)}
                </ul>
                <div className={cx(styles.checkpointButtons)}>
                    <Button onClick={this.addCheckpoint} icon='plus' intent={Intent.SUCCESS}>
                        {' '}
                        Add Checkpoint
                    </Button>
                </div>
            </div>
        );
    }
}

export const CheckpointsEditor = connect(
    (state: Pick<State, keyof State>) => ({
        style: state.style,
    }),
    {
        addCheckpoint: addCustomCheckpoint,
        editCheckpoint,
        deleteCheckpoint,
        reorderCheckpoints,
    }
)(CheckpointsEditorBase);

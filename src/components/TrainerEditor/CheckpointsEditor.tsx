import * as React from 'react';
import { cx, css } from 'react-emotion';
import { Classes, Button, Icon, Intent, Toaster, Popover, PopoverInteractionKind } from '@blueprintjs/core';
import { classWithDarkTheme, Styles } from 'utils';
import * as styles from './style';
import { connect } from 'react-redux';
import { Badge } from 'models';
import { DeepSet, getAllBadges } from 'utils';
import { style } from 'reducers/style';


export interface CheckpointsSelectProps {
    checkpoint: Badge;
}

export interface CheckpointsSelectState {
    showOptions: boolean;
}

export class CheckpointsSelect extends React.Component<CheckpointsSelectProps, CheckpointsSelectState> {
    private renderOptions() {
        return <div style={{ padding: '1rem', height: '400px', overflowY: 'auto' }}>
            { getAllBadges().map((badge, key) => {
                return <Button key={key} style={{ display: 'block' }} className={Classes.MINIMAL}>
                    <img className={cx(styles.checkpointImage(1))} alt={badge.name} src={`./img/${badge.image}.png`} /> {badge.name}
                </Button>;
            }) }
        </div>;
    }

    public render() {
        const { checkpoint } = this.props;
        return (
            <Popover minimal interactionKind={PopoverInteractionKind.CLICK} content={this.renderOptions()}>
                <div role='select' className={cx(Classes.SELECT, Classes.BUTTON)}>
                    <div>
                        <img className={cx(styles.checkpointImage(1))} alt={checkpoint.name} src={`./img/${checkpoint.image}.png`} /> {checkpoint.name}
                    </div>
                </div>
            </Popover>
        );
    }
}

export interface CheckpointsEditorProps {
    checkpoints?: DeepSet<Badge>;
    style: Styles;
}

export class CheckpointsEditorBase extends React.Component<CheckpointsEditorProps> {

    private addCheckpoint = e => {
        console.log(e);
    }

    private onUpload = e => {
        const size = e.target.files[0].size / 1024 / 1024;
        if (size > 0.5) {
            const toaster = Toaster.create();
            toaster.show({ message: `File size of 500KB exceeded. File was ${size.toFixed(2)}MB`, intent: Intent.DANGER });
        } else {

        }
    }

    private renderCheckpoints (checkpoints: CheckpointsEditorProps['checkpoints']) {
        return checkpoints && checkpoints.toArray().map((checkpoint, key) => {
            return (
                <li key={key} className={cx(classWithDarkTheme(styles, 'checkpointsItem', this.props.style.editorDarkMode))}>
                    <div className={cx(styles.checkpointName)}>
                        <img className={cx(styles.checkpointImage())} alt={checkpoint.name} src={`./img/${checkpoint.image}.png`} />
                        <input className={Classes.INPUT} type='text' value={ checkpoint.name } />
                    </div>
                    <CheckpointsSelect checkpoint={checkpoint} />
                    {/* <div className={cx(styles.checkpointImageUploadWrapper)}>Use Custom Image <input onChange={this.onUpload} type='file' /></div> */}
                    <Icon className={cx(styles.checkpointDelete)} icon='trash' />
                </li>
            );
        });
    }

    public render() {
        return <div className={cx(styles.checkpointsEditor)}>
            <ul className={cx(styles.checkpointsList)}>
                { this.renderCheckpoints(this.props.checkpoints) }
            </ul>
            <div className={cx(styles.checkpointButtons)}>
                <Button icon='plus' onClick={this.addCheckpoint} intent={Intent.SUCCESS}>{' '}Add Checkpoint</Button>
            </div>
        </div>;
    }
}

export const CheckpointsEditor: React.ComponentClass<Partial<CheckpointsEditorProps>> = connect(
    (state: any) => ({ style: state.style }),
    null
)(CheckpointsEditorBase);
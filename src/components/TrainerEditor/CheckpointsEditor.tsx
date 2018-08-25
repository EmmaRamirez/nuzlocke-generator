import * as React from 'react';
import { cx, css } from 'react-emotion';
import { Classes, Button, Icon, Intent, Toaster } from '@blueprintjs/core';
import { classWithDarkTheme, Styles } from 'utils';
import * as styles from './style';
import { connect } from 'react-redux';
import { Badge } from 'models';
import { DeepSet } from 'utils';
import { style } from 'reducers/style';


export interface CheckpointsSelectProps {
    checkpoint: Badge;
}

export interface CheckpointsSelectState {
    showOptions: boolean;
}

export class CheckpointsSelect extends React.Component<CheckpointsSelectProps, CheckpointsSelectState> {
    public state = { showOptions: false };

    private openSelect = e => {
        this.setState({ showOptions: true });
    }

    private renderOptions() {
        return <div>
            <img className={cx(styles.checkpointImage(1))} alt={'fdsaf'} src={`./img/rainbow-badge.png`} /> Boulder
        </div>;
    }

    public render() {
        const { checkpoint } = this.props;
        return (
            <div role='select' onClick={this.openSelect} className={cx(Classes.SELECT, Classes.BUTTON, styles.checkpointSelect)}>
                <div>
                    <img className={cx(styles.checkpointImage(1))} alt={checkpoint.name} src={`./img/boulder-badge.png`} /> Boulder
                </div>
                { this.state.showOptions && this.renderOptions() }
            </div>
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
                    <div className={cx(styles.checkpointImageUploadWrapper)}>Use Custom Image <input onChange={this.onUpload} type='file' /></div>
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
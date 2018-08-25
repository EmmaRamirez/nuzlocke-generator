import * as React from 'react';
import { cx, css } from 'react-emotion';
import { Classes, Button, Icon, Intent } from '@blueprintjs/core';
import { classWithDarkTheme, Styles } from 'utils';
import * as styles from './style';
import { connect } from 'react-redux';
import { Badge } from 'models';
import { DeepSet } from 'utils';
import { style } from 'reducers/style';


export interface CheckpointsSelectProps {
    checkpoint: Badge;
}

export class CheckpointsSelect extends React.Component<CheckpointsSelectProps> {
    public render() {
        const { checkpoint } = this.props;
        return (
            <div className={cx(Classes.SELECT, Classes.BUTTON, styles.checkpointSelect)}>
                <span>
                    <img className={cx(styles.checkpointImage(1))} alt={checkpoint.name} src={`./img/boulder-badge.png`} /> Boulder
                </span>
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

    private renderCheckpoints (checkpoints: CheckpointsEditorProps['checkpoints']) {
        return checkpoints && checkpoints.toArray().map((checkpoint, key) => {
            return (
                <li key={key} className={cx(classWithDarkTheme(styles, 'checkpointsItem', this.props.style.editorDarkMode))}>
                    <div className={cx(styles.checkpointName)}>
                        <img className={cx(styles.checkpointImage())} alt={checkpoint.name} src={`./img/${checkpoint.image}.png`} />
                        <input className={Classes.INPUT} type='text' value={ checkpoint.name } />
                    </div>
                    <CheckpointsSelect checkpoint={checkpoint} />
                    <div className={cx(styles.checkpointImageUploadWrapper)}>Use Custom Image <input type='file' /></div>
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
                <Button onClick={this.addCheckpoint} intent={Intent.SUCCESS}><Icon icon='plus' /> Add Checkpoint</Button>
            </div>
        </div>;
    }
}

export const CheckpointsEditor: React.ComponentClass<Partial<CheckpointsEditorProps>> = connect(
    (state: any) => ({ style: state.style }),
    null
)(CheckpointsEditorBase);
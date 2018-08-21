import * as React from 'react';
import { cx, css } from 'react-emotion';


const checkpointsEditor = css`

`;

export interface CheckpointsEditorProps {
    checkpoints: Set<string>;
}

export class CheckpointsEditor extends React.Component<CheckpointsEditorProps> {

    private renderCheckpoints (checkpoints: CheckpointsEditorProps['checkpoints']) {
        return Array.from(checkpoints).map((checkpoint, key) => {
            return <li key={key}>{ checkpoint }</li>;
        });
    }

    public render() {
        return <div className={cx(checkpointsEditor)}>
            <ul>
                { this.renderCheckpoints(this.props.checkpoints) }
            </ul>
        </div>;
    }
}
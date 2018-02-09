import * as React from 'react';
import { TrainerInfoEditor } from './TrainerInfoEditor';

export class TrainerEditor extends React.Component<{}, {}> {
    public render() {
        return (
            <div className='trainer-editor'>
                <h4>Trainer</h4>
                <TrainerInfoEditor />
            </div>
        );
    }
}

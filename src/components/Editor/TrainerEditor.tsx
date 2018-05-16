import * as React from 'react';
import { TrainerInfoEditor } from './TrainerInfoEditor';
import { BaseEditor } from './BaseEditor';

export class TrainerEditor extends React.Component<{}, {}> {
    public render() {
        return (
            <BaseEditor name='Trainer'>
                <TrainerInfoEditor />
            </BaseEditor>
        );
    }
}

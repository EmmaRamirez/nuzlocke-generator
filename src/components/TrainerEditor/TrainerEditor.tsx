import * as React from 'react';
import { TrainerInfoEditor } from 'components/TrainerEditor/TrainerInfoEditor';
import { BaseEditor } from 'components/BaseEditor';

export class TrainerEditor extends React.Component<{}, {}> {
    public render() {
        return (
            <BaseEditor icon='person' name="Trainer">
                <TrainerInfoEditor />
            </BaseEditor>
        );
    }
}

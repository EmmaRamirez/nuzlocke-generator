import * as React from 'react';
import { BaseEditor } from 'components/BaseEditor';
import { Button, Intent } from '@blueprintjs/core';

export interface BugReporterProps {
    reportingUrl?: string;
}

export class BugReporter extends React.Component<BugReporterProps> {
    public render() {
        return (
            <BaseEditor name='Bug Reporter' defaultOpen={false}>

                <Button className={'pt-minimal'} intent={Intent.SUCCESS}>Report Bug <img style={{height: '20px', verticalAlign: 'bottom'}} alt='' role='presentation' src='./icons/pokemon/regular/caterpie.png' /></Button>
            </BaseEditor>
        );
    }
}

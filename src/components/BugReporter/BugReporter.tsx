import * as React from 'react';
import { BaseEditor } from 'components/BaseEditor';
import { Button, Intent, TextArea, Checkbox, Toaster } from '@blueprintjs/core';
import { connect } from 'react-redux';

export interface BugReporterProps {
    reportingUrl?: string;
    state: any;
}

export interface BugReporterState {
    userReport: string;
    includeNuzlocke: boolean;
}

export class BugReporterBase extends React.Component<BugReporterProps, BugReporterState> {
    public state = {
        userReport: '',
        includeNuzlocke: true,
    };

    public render() {
        const {userReport, includeNuzlocke} = this.state;

        return (
            <BaseEditor name='Bug Reporter' defaultOpen={false}>
                <div style={{margin: '.5rem'}}>
                    <TextArea style={{width: '100%'}} value={userReport} onChange={this.updateReport} />
                    <div style={{
                        padding: '.5rem',
                        display: 'flex',
                        alignItems: 'baseline',
                        justifyContent: 'space-between',
                    }}>
                        <Checkbox
                            onChange={e => this.setState(state => ({ includeNuzlocke: !state.includeNuzlocke }))}
                            checked={includeNuzlocke}
                            label={'include nuzlocke.json file'}
                        />
                        <Button disabled={!userReport} onClick={this.sendBugReport} className='pt-minimal' intent={Intent.DANGER}>Report Bug <img style={{height: '20px', verticalAlign: 'bottom'}} alt='' role='presentation' src='./icons/pokemon/regular/caterpie.png' /></Button>
                    </div>
                </div>
            </BaseEditor>
        );
    }

    private updateReport = (e) => {
        const text = e.target.value;
        this.setState({
            userReport: text,
        });
    }

    private sendBugReport = (e) => {
        const {userReport} = this.state;
        const {state} = this.props;
        const url = 'https://api.github.com/repos/EmmaRamirez/nuzlocke-generator/issues';

        fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/vnd.github.cloak-preview',
                Authorization: `Token ${'c85fbb8edcb862061da7c9dc649dbf0455e256b4'}`,
            },
            body: JSON.stringify({
                title: 'Bug Report',
                body: `${userReport}

\`\`\`json
${JSON.stringify(state)}
\`\`\`
                `,
                assigness: ['EmmaRamirez'],
                labels: [
                    'User Submitted',
                    'Type: Bug',
                ]
            }),
        })
            .then(res => res.json())
            .then(data => {
                if (data && data.url) {
                    const toaster = Toaster.create();
                    toaster.show({
                        message: `Bug report sent!`,
                        intent: Intent.SUCCESS,
                    });
                    this.setState({userReport: ''});
                }
            });
    }
}

export const BugReporter = connect(
    state => ({state}),
)(BugReporterBase);

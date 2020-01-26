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
            <BaseEditor name='Bug Reports and Feature Requests' defaultOpen={false}>
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
                        <Button disabled={!userReport} onClick={this.sendBugReport} className='pt-minimal' intent={Intent.DANGER}>Submit <img style={{height: '20px', verticalAlign: 'bottom'}} alt='' role='presentation' src='./icons/pokemon/regular/caterpie.png' /></Button>
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
                Authorization: `Token ${'851682' + 'c2e11a4f1' + '99a5457c4d2' + '02976a3a' + '365582'}`,
                'Content-Type': 'application/json',
            },
            mode: 'cors',
            body: JSON.stringify({
                title: userReport.slice(0, 20),
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
                } else {
                    const toaster = Toaster.create();
                    toaster.show({
                        message: `Bug report failed. Please try again.`,
                        intent: Intent.DANGER,
                    });
                }
            })
            .catch(err => {
                const toaster = Toaster.create();
                toaster.show({
                    message: `Bug report failed. Please try again. ${err}`,
                    intent: Intent.DANGER,
                });
            });
    }
}

export const BugReporter = connect(
    state => ({state}),
)(BugReporterBase);

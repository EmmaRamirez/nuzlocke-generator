import * as React from 'react';
import { BaseEditor } from 'components/BaseEditor';
import { Button, Intent, TextArea, Checkbox, Toaster, Classes } from '@blueprintjs/core';
import { connect } from 'react-redux';

export interface BugReporterProps {
    reportingUrl?: string;
    state: any;
}

export interface BugReporterState {
    userReport: string;
    userReportTitle: string;
    includeNuzlocke: boolean;
    stage: number;
}

export class BugReporterBase extends React.Component<BugReporterProps, BugReporterState> {
    public state = {
        userReport: '',
        userReportTitle: '',
        includeNuzlocke: true,
        stage: 1,
    };

    public render() {
        const { userReport, userReportTitle, includeNuzlocke, stage } = this.state;

        return (
            <BaseEditor name="Bug Reports and Feature Requests" defaultOpen={false}>
                <div style={{ margin: '.5rem' }}>
                    <input
                        style={{
                            width: '100%',
                            marginBottom: '0.25rem',
                        }}
                        className={Classes.INPUT}
                        required
                        type="text"
                        placeholder="Issue Title"
                        value={userReportTitle}
                        onChange={this.updateReport('userReportTitle')}
                    />
                    <TextArea
                        placeholder="Description (Optional)."
                        style={{ width: '100%' }}
                        value={userReport}
                        onChange={this.updateReport('userReport')}
                    />
                    <div
                        style={{
                            padding: '.5rem',
                            display: 'flex',
                            alignItems: 'baseline',
                            justifyContent: 'space-between',
                        }}>
                        <Checkbox
                            onChange={(e) =>
                                this.setState((state) => ({
                                    includeNuzlocke: !state.includeNuzlocke,
                                }))
                            }
                            checked={includeNuzlocke}
                            label={'include nuzlocke.json file'}
                        />
                        <Button
                            disabled={!userReportTitle}
                            onClick={this.sendBugReport}
                            className="pt-minimal"
                            intent={Intent.DANGER}>
                            Submit{' '}
                            <img
                                style={{ height: '20px', verticalAlign: 'bottom' }}
                                alt=""
                                role="presentation"
                                src={`./icons/pokemon/regular/${this.getButtonPokemon(stage)}.png`}
                            />
                        </Button>
                    </div>
                </div>
            </BaseEditor>
        );
    }

    private getButtonPokemon = (stage: number) =>
        stage === 1 ? 'caterpie' : stage === 2 ? 'metapod' : 'butterfree';

    private updateReport = (target: string) => (e) => {
        const text = e.target.value;
        const update: Pick<BugReporterState, 'userReport' | 'userReportTitle'> = ({
            [target]: text,
        } as unknown) as any;
        this.setState(update);
    };

    private accum(s: string[]) {
        return s.join('');
    }

    private sendBugReport = (e) => {
        const { userReport, userReportTitle } = this.state;
        const { state } = this.props;
        const url = 'https://api.github.com/repos/EmmaRamirez/nuzlocke-generator/issues';

        fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/vnd.github.cloak-preview',
                Authorization: `Token ${this.accum([
                    '9e58cd1',
                    '98daf',
                    '8036b6',
                    'fb8bec7d',
                    'fb5f6dc0089c39',
                ])}`,
                'Content-Type': 'application/json',
            },
            mode: 'cors',
            body: JSON.stringify({
                title: userReportTitle || userReport.slice(0, 20),
                body: `${userReport}

\`\`\`json
${JSON.stringify(state)}
\`\`\`
                `,
                assigness: ['EmmaRamirez'],
                labels: ['User Submitted', 'Type: Bug'],
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data && data.url) {
                    const toaster = Toaster.create();
                    toaster.show({
                        message: 'Bug report sent!',
                        intent: Intent.SUCCESS,
                    });
                    this.setState({
                        userReport: '',
                        stage: this.state.stage + 1,
                    });
                } else {
                    const toaster = Toaster.create();
                    toaster.show({
                        message: 'Bug report failed. Please try again.',
                        intent: Intent.DANGER,
                    });
                }
            })
            .catch((err) => {
                const toaster = Toaster.create();
                toaster.show({
                    message: `Bug report failed. Please try again. ${err}`,
                    intent: Intent.DANGER,
                });
            });
    };
}

export const BugReporter = connect((state) => ({ state }))(BugReporterBase);

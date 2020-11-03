import * as React from 'react';
import { Dialog, IDialogProps, Classes, Button } from '@blueprintjs/core';
import { cx } from 'emotion';
import * as styles from 'components/Result/styles';
import { generateReleaseNotes, releaseNotes, Styles, classWithDarkTheme } from 'utils';
import { version } from 'package';
const ReactMarkdown = require('react-markdown');
import { tail } from 'ramda';

const croagunk = require('assets/img/croagunk.gif');

export interface ReleaseDialogProps {
    onClose: (e?: React.SyntheticEvent) => void;
    style: Styles;
}

export class ReleaseDialog extends React.Component<
IDialogProps & ReleaseDialogProps,
{ seePrevious?: boolean }
> {
    public state = {
        seePrevious: false,
    };

    public render() {
        const { seePrevious } = this.state;

        return (
            <Dialog
                isOpen={this.props.isOpen}
                onClose={this.props.onClose}
                icon="document"
                title={`Release Notes ${version}`}
                className={`release-dialog ${
                    this.props.style.editorDarkMode ? 'bp3-dark' : 'bp3-light'
                }`}>
                <div className={Classes.DIALOG_BODY}>
                    <div className="release-notes-wrapper">
                        <h3
                            className={cx(
                                classWithDarkTheme(
                                    styles,
                                    'heading',
                                    this.props.style.editorDarkMode,
                                ),
                            )}>
                            {version}{' '}
                            <img style={{ display: 'inline' }} alt="Croagunk" src={croagunk.default} />
                        </h3>
                        <ReactMarkdown
                            className="release-notes"
                            source={generateReleaseNotes(version)}
                        />
                        <Button
                            onClick={(e) => this.setState({ seePrevious: !this.state.seePrevious })}
                            icon={seePrevious ? 'symbol-triangle-up' : 'symbol-triangle-down'}>
                            Previous Relase Notes
                        </Button>
                        {seePrevious &&
                            tail(Object.keys(releaseNotes).reverse()).map((key) => {
                                return (
                                    <ReactMarkdown
                                        key={key}
                                        className="release-notes"
                                        source={`#### ${key}\n${generateReleaseNotes(key)}`}
                                    />
                                );
                            })}
                    </div>
                </div>
            </Dialog>
        );
    }
}

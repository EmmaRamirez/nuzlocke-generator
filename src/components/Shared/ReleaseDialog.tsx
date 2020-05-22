import * as React from 'react';
import { Dialog, IDialogProps, Classes } from '@blueprintjs/core';
import { cx } from 'emotion';
import * as styles from 'components/Result/styles';
import { generateReleaseNotes, Styles, classWithDarkTheme } from 'utils';
import { pkg } from 'package';
import * as ReactMarkdown from 'react-markdown';

const croagunk = require('assets/img/croagunk.gif');

export interface ReleaseDialogProps {
    onClose: (e?: React.SyntheticEvent) => void;
    style: Styles;
}

export class ReleaseDialog extends React.Component<IDialogProps & ReleaseDialogProps> {
    public render() {
        return (
            <Dialog
                isOpen={this.props.isOpen}
                onClose={this.props.onClose}
                icon='document'
                title={`Release Notes ${pkg.version}`}
                className={`release-dialog ${
                    this.props.style.editorDarkMode ? 'pt-dark' : 'pt-light'
                }`}>
                <div className={Classes.DIALOG_BODY}>
                    <div className='release-notes-wrapper'>
                        <h3
                            className={cx(
                                classWithDarkTheme(
                                    styles,
                                    'heading',
                                    this.props.style.editorDarkMode,
                                ),
                            )}>
                            {pkg.version}{' '}
                            <img style={{ display: 'inline' }} alt='Croagunk' src={croagunk} />
                        </h3>
                        <ReactMarkdown
                            className='release-notes'
                            source={generateReleaseNotes(pkg.version)}
                        />
                    </div>
                </div>
            </Dialog>
        );
    }
}

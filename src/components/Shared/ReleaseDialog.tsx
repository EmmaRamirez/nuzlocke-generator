import * as React from 'react';
import { Dialog, Classes, Button, DialogProps } from '@blueprintjs/core';
import { css, cx } from 'emotion';
import * as styles from 'components/Result/styles';
import { generateReleaseNotes, releaseNotes, Styles, classWithDarkTheme } from 'utils';
import { version } from 'package';
const ReactMarkdown = require('react-markdown');
import { tail } from 'ramda';
import { getMajorVersion } from 'utils/getMajorVersion';

const croagunk = require('assets/img/croagunk.gif');
const togepi = require('assets/icons/pokemon/regular/togepi.png');
const porygon2 = require('assets/icons/pokemon/regular/porygon2.png');
const lapras = require('assets/icons/pokemon/regular/lapras.png');
const magneton = require('assets/icons/pokemon/regular/magneton.png');
const noctowl = require('assets/icons/pokemon/regular/noctowl.png');
const calyrex = require('assets/icons/pokemon/regular/calyrex.png');
const dugtrio = require('assets/icons/pokemon/regular/dugtrio.png');
const kubfu = require('assets/icons/pokemon/regular/kubfu.png');
const porygon = require('assets/icons/pokemon/regular/porygon.png');
const mew = require('assets/icons/pokemon/regular/mew.png');

export const getMascot = v => {
    switch (v) {
        case '1.9':
            return togepi.default;
        case '1.8':
            return porygon2.default;
        case '1.7':
            return lapras.default;
        case '1.6':
            return magneton.default;
        case '1.5':
            return noctowl.default;
        case '1.4':
            return calyrex.default;
        case '1.3':
            return dugtrio.default;
        case '1.2':
            return kubfu.default;
        case '1.1':
            return porygon.default;
        case '1.0':
            return mew.default;
        default:
            return croagunk.default;
    };
};

const mascot = css`
    display: inline-block;
`;
export interface ReleaseDialogProps {
    onClose: (e?: React.SyntheticEvent) => void;
    style: Styles;
}

export class ReleaseDialog extends React.Component<
DialogProps & ReleaseDialogProps,
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
                    this.props.style.editorDarkMode ? Classes.DARK : ''
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
                            <img className={mascot} alt="mascot" src={getMascot(getMajorVersion(version))} />
                        </h3>
                        <ReactMarkdown
                            className="release-notes"
                            source={generateReleaseNotes(version)}
                        />
                        <Button
                            onClick={() => this.setState({ seePrevious: !this.state.seePrevious })}
                            icon={seePrevious ? 'symbol-triangle-up' : 'symbol-triangle-down'}>
                            Previous Relase Notes
                        </Button>
                        {seePrevious &&
                            tail(Object.keys(releaseNotes).reverse()).map((key) => {
                                return (
                                    <ReactMarkdown
                                        key={key}
                                        className="release-notes"
                                        source={`#### ![${mascot}](${getMascot(getMajorVersion(key))}) ${key}\n${generateReleaseNotes(key)}`}
                                    />
                                );
                            })}
                    </div>
                </div>
            </Dialog>
        );
    }
}

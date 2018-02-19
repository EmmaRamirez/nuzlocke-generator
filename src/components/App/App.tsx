import * as React from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { Store } from 'redux';

import { seeRelease, editRule } from 'actions';
import { Editor } from '../Editor';
import { Result } from '../Result';
import { VersionTag } from './VersionTag';
import { generateReleaseNotes } from 'utils';

import { Dialog } from '@blueprintjs/core';

import * as ReactMarkdown from 'react-markdown';

const pkg = require('../../../package.json');
const croagunk = require('assets/img/croagunk.gif');

import './app.styl';

export interface AppProps {
    seeRelease: seeRelease;
    sawRelease: boolean;
    style: any;
    rules: any;
    editRule: any;
}

export class AppBase extends React.Component<AppProps, { isOpen: boolean }> {
    constructor(props: any) {
        super(props);
        this.state = {
            isOpen: !this.props.sawRelease[pkg.version],
        };
    }

    public componentWillMount() {
        if (this.props.rules[1] !== 'You can only catch may the first Pokemon you encounter in an area') {
            this.props.editRule(1, 'You can only catch may the first Pokemon you encounter in an area');
        }
    }

    private closeDialog = e => {
        this.props.seeRelease(pkg.version);
        this.toggleDialog(null);
    };

    private toggleDialog = e => this.setState({ isOpen: !this.state.isOpen });

    public render() {
        return (
            <div className='app' role='main'>
                <VersionTag
                    version={pkg.version}
                    onClick={this.toggleDialog}
                    darkMode={this.props.style.editorDarkMode}
                />
                <Editor />
                <Result />
                <Dialog
                    isOpen={this.state.isOpen}
                    onClose={this.closeDialog}
                    icon='document'
                    title={`Release Notes ${pkg.version}`}
                    className={`release-dialog ${
                        this.props.style.editorDarkMode ? 'pt-dark' : 'pt-light'
                    }`}>
                    <div className='pt-dialog-body'>
                        <div className='release-notes-wrapper'>
                            <h3 className='heading'>
                                {pkg.version} <img alt='Croagunk' src={croagunk} />
                            </h3>
                            <ReactMarkdown
                                className='release-notes'
                                source={generateReleaseNotes(pkg.version)}
                            />
                        </div>
                    </div>
                </Dialog>
            </div>
        );
    }
}

export const App = connect(
    (state: any) => ({
        sawRelease: state.sawRelease,
        style: state.style,
        rules: state.rules
    }),
    {
        seeRelease,
        editRule,
    },
)(AppBase);

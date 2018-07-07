import * as React from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { Store } from 'redux';

import { seeRelease, editRule } from 'actions';
import { VersionTag } from './VersionTag';
import { generateReleaseNotes } from 'utils';
import * as Loadable from 'react-loadable';

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

function Loading () {
    return <div>Loading...</div>;
}

const Editor = Loadable({
    loader: () => import('components/Editor'),
    loading: Loading,
    render(loaded) {
        return <loaded.Editor />;
    }
});

const Result = Loadable({
    loader: () => import('components/Result'),
    loading: Loading,
    render(loaded) {
        return <loaded.Result />;
    }
});


export class AppBase extends React.Component<AppProps, { isOpen: boolean }> {
    constructor(props: any) {
        super(props);
        this.state = {
            isOpen: !this.props.sawRelease[pkg.version],
        };
    }

    private closeDialog = e => {
        this.props.seeRelease(pkg.version);
        this.toggleDialog(null);
    };

    private toggleDialog = e => this.setState({ isOpen: !this.state.isOpen });

    public render() {
        return (
            <div className='app' role='main'>
                <Editor />
                <Result />
                <VersionTag
                    version={pkg.version}
                    onClick={this.toggleDialog}
                    darkMode={this.props.style.editorDarkMode}
                />
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
        rules: state.rules,
    }),
    {
        seeRelease,
        editRule,
    },
)(AppBase);

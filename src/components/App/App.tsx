import * as React from 'react';
import * as PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom';
import { Store } from 'redux';

import { saveNuzlocke } from '../../actions';
import { BasicComponentWithTypes } from '../../services';
import { Editor } from '../Editor';
import { Result } from '../Result';
import { VersionTag } from './VersionTag';
import { generateReleaseNotes } from 'utils';

import { Dialog } from '@blueprintjs/core';

import * as ReactMarkdown from 'react-markdown';

const pkg = require('../../../package.json');

const result = require('../../assets/img/result.png');


export class App extends React.Component<{}, { isOpen: boolean }> {

    constructor(props: any) {
        super(props);
        this.state = {
            isOpen: true
        };
    }

    public componentWillMount() {}

    private toggleDialog = e => this.setState({ isOpen: !this.state.isOpen });

    public render() {
        return (
            <div className='app' role='main'>
                <VersionTag version={pkg.version} onClick={this.toggleDialog} />
                <Editor />
                <Result />
                <Dialog
                    isOpen={this.state.isOpen}
                    onClose={this.toggleDialog}
                    iconName='document'
                    title={`Release Notes ${pkg.version}`}
                >
                    <div className='pt-dialog-body'>
                        <ReactMarkdown source={generateReleaseNotes(pkg.version)} />
                    </div>
                </Dialog>
            </div>
        );
    }
}

import * as React from 'react';
import { Dialog, Button } from '@blueprintjs/core';
import { connect } from 'react-redux';
import { reducers } from 'reducers';
import * as ReactMarkdown from 'react-markdown';

import { generateReleaseNotes } from 'utils';
import { changeEditorSize, editStyle, seeRelease } from 'actions';
import { pkg } from 'package';

const croagunk = require('assets/img/croagunk.gif');

export interface TopBarProps {
    onClickDownload: any;

    editor: any;
    style: any;
    sawRelease: { [x: string]: boolean };

    changeEditorSize: changeEditorSize;
    editStyle: editStyle;
    seeRelease: seeRelease;
}

export interface TopBarState {
    isOpen: boolean;
}

export class TopBarBase extends React.Component<TopBarProps, TopBarState> {
    public state = {
        isOpen: !this.props.sawRelease[pkg.version]
    };

    private closeDialog = e => {
        this.props.seeRelease(pkg.version);
        this.toggleDialog(null);
    };

    private toggleDialog = _ => this.setState({ isOpen: !this.state.isOpen });

    public render() {
        return (
            <div className={`pt-header top-bar ${this.props.style.editorDarkMode ? 'pt-dark' : 'pt-light' }`}>
                <Button
                    onClick={_ => this.props.changeEditorSize(!this.props.editor.minimized)}
                    className='pt-minimal' icon={ this.props.editor.minimized ? 'minimize' : 'maximize'}
                >
                    { this.props.editor.minimized ? 'Maximize' : 'Minimize' } Editor
                </Button>
                <Button onClick={this.props.onClickDownload} className='pt-minimal' icon='download'>Download Image</Button>
                <Button
                    onClick={_ => { this.props.editStyle({ editorDarkMode: !this.props.style.editorDarkMode }); }}
                    className='pt-minimal'
                    icon={this.props.style.editorDarkMode ? 'flash' : 'moon'}
                >
                    { this.props.style.editorDarkMode ? 'Light' : 'Dark'} Mode
                </Button>
                <Button
                    onClick={this.toggleDialog}
                    className='pt-minimal'
                    icon='star'
                >
                    0.0.9-beta
                </Button>
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

export const TopBar = connect<Partial<typeof reducers>, any, any>(
    (state: Partial<typeof reducers>) => ({
        editor: state.editor,
        style: state.style,
        sawRelease: state.sawRelease,
    }),
    {
        changeEditorSize,
        editStyle,
        seeRelease
    }
)(TopBarBase);
import * as React from 'react';
import { Dialog, Button } from '@blueprintjs/core';
import { connect } from 'react-redux';
import { reducers } from 'reducers';
import * as ReactMarkdown from 'react-markdown';

import { generateReleaseNotes, classWithDarkTheme } from 'utils';
import { changeEditorSize, editStyle, seeRelease } from 'actions';
import * as styles from 'components/Result/styles';
import { pkg } from 'package';
import { cx } from 'emotion';
import { style } from 'reducers/style';

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

const darkModeStyle = (mode) => mode ? { color: '#fff' } : {};

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
            <div className={cx(classWithDarkTheme(styles, 'topBar', this.props.style.editorDarkMode))}>
                <Button
                    style={darkModeStyle(this.props.style.editorDarkMode)}
                    onClick={_ => this.props.changeEditorSize(!this.props.editor.minimized)}
                    className='pt-minimal' icon={ this.props.editor.minimized ? 'minimize' : 'maximize'}
                >
                    { this.props.editor.minimized ? 'Maximize' : 'Minimize' } Editor
                </Button>
                <Button style={darkModeStyle(this.props.style.editorDarkMode)} onClick={this.props.onClickDownload} className='pt-minimal' icon='download'>Download Image</Button>
                <Button
                    style={darkModeStyle(this.props.style.editorDarkMode)}
                    onClick={_ => { this.props.editStyle({ editorDarkMode: !this.props.style.editorDarkMode }); }}
                    className='pt-minimal'
                    icon={this.props.style.editorDarkMode ? 'flash' : 'moon'}
                >
                    { this.props.style.editorDarkMode ? 'Light' : 'Dark'} Mode
                </Button>
                <Button
                    style={darkModeStyle(this.props.style.editorDarkMode)}
                    onClick={this.toggleDialog}
                    className='pt-minimal'
                    icon='star'
                >
                    { pkg.version }
                </Button>
                { this.props.children }
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
                            <h3 className={cx(classWithDarkTheme(styles, 'heading', this.props.style.editorDarkMode))}>
                                {pkg.version} <img style={{ display: 'inline' }} alt='Croagunk' src={croagunk} />
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
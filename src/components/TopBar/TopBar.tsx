import * as React from 'react';
import { Button, Switch } from '@blueprintjs/core';
import { connect } from 'react-redux';
import { reducers } from 'reducers';

import { changeEditorSize, editStyle, seeRelease } from 'actions';

import { pkg as Package } from 'package';

export interface TopBarProps {
    onClickDownload: any;

    editor: any;
    style: any;
    changeEditorSize: changeEditorSize;
    editStyle: editStyle;
}

export class TopBarBase extends React.PureComponent<TopBarProps> {

    public render() {
        return (
            <div className={`pt-header top-bar ${this.props.style.editorDarkMode ? 'pt-dark' : 'pt-light' }`}>
                <Button onClick={_ => this.props.changeEditorSize(!this.props.editor.minimized)} className='pt-minimal' icon={ this.props.editor.minimized ? 'minimize' : 'maximize'}>{ this.props.editor.minimized ? 'Maximize' : 'Minimize' } Editor</Button>
                <Button onClick={this.props.onClickDownload} className='pt-minimal' icon='download'>Download Image</Button>
                <Button onClick={_ => {
                    this.props.editStyle({ editorDarkMode: !this.props.style.editorDarkMode });
                }} className='pt-minimal' icon={this.props.style.editorDarkMode ? 'flash' : 'moon'}>{ this.props.style.editorDarkMode ? 'Light' : 'Dark'} Mode</Button>
                <Button className='pt-minimal' icon='star'>0.0.9-beta</Button>
            </div>
        );
    }
}

export const TopBar = connect(
    (state: Partial<typeof reducers>) => ({
        editor: state.editor,
        style: state.style
    }),
    {
        changeEditorSize,
        editStyle
    }
)(TopBarBase);
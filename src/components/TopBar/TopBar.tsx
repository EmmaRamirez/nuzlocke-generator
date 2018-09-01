import * as React from 'react';
import { Button, Classes } from '@blueprintjs/core';
import { connect } from 'react-redux';
import { reducers } from 'reducers';

import { classWithDarkTheme, isEmpty } from 'utils';
import { changeEditorSize, editStyle, seeRelease } from 'actions';
import * as styles from 'components/Result/styles';
import { pkg } from 'package';
import { cx } from 'emotion';
import { Pokemon } from 'models';
import { ReleaseDialog } from 'components/Shared';


export interface TopBarProps {
    onClickDownload: any;

    editor: any;
    style: any;
    sawRelease: { [x: string]: boolean };

    changeEditorSize: changeEditorSize;
    editStyle: editStyle;
    seeRelease: seeRelease;
    pokemon: Pokemon[];
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

    private isDownloadDisabled() {
        return this.props.style.teamImages === 'Sugimori'
                || this.props.style.spritesMode
                || this.props.pokemon.some(p => (p.status === 'Team' && !isEmpty(p.customImage)));
    }

    public render() {
        console.log('isDownloadDisabled', this.isDownloadDisabled());
        console.log('hasTeamCustom', this.props.pokemon.some(p => (p.status === 'Team' && !isEmpty(p.customImage))));
        return (
            <div className={cx(classWithDarkTheme(styles, 'topBar', this.props.style.editorDarkMode))}>
                <Button
                    style={darkModeStyle(this.props.style.editorDarkMode)}
                    onClick={_ => this.props.changeEditorSize(!this.props.editor.minimized)}
                    className={Classes.MINIMAL} icon={ this.props.editor.minimized ? 'minimize' : 'maximize'}
                >
                    { this.props.editor.minimized ? 'Maximize' : 'Minimize' } Editor
                </Button>
                <Button
                    style={darkModeStyle(this.props.style.editorDarkMode)}
                    onClick={this.props.onClickDownload}
                    className={Classes.MINIMAL}
                    disabled={this.isDownloadDisabled()}
                    title={this.isDownloadDisabled() ? `Disabled due to cross-origin resources.` : ''}
                    icon='download'
                >
                    Download Image
                </Button>
                <Button
                    style={darkModeStyle(this.props.style.editorDarkMode)}
                    onClick={_ => { this.props.editStyle({ editorDarkMode: !this.props.style.editorDarkMode }); }}
                    className={Classes.MINIMAL}
                    icon={this.props.style.editorDarkMode ? 'flash' : 'moon'}
                >
                    { this.props.style.editorDarkMode ? 'Light' : 'Dark'} Mode
                </Button>
                <Button
                    style={darkModeStyle(this.props.style.editorDarkMode)}
                    onClick={this.toggleDialog}
                    className={Classes.MINIMAL}
                    icon='star'
                >
                    { pkg.version }
                </Button>
                { this.props.children }
                <ReleaseDialog style={this.props.style} isOpen={this.state.isOpen} onClose={this.closeDialog} />
            </div>
        );
    }
}

export const TopBar = connect<Partial<typeof reducers>, any, any>(
    (state: Partial<typeof reducers>) => ({
        editor: state.editor,
        style: state.style,
        sawRelease: state.sawRelease,
        pokemon: state.pokemon,
    }),
    {
        changeEditorSize,
        editStyle,
        seeRelease
    }
)(TopBarBase);
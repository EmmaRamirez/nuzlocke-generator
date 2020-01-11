import * as React from 'react';
import { Button, Classes, Spinner } from '@blueprintjs/core';
import { connect } from 'react-redux';
import { reducers } from 'reducers';

import { classWithDarkTheme, isEmpty, Styles, TeamImagesType } from 'utils';
import { changeEditorSize, editStyle, seeRelease } from 'actions';
import * as styles from 'components/Result/styles';
import { pkg } from 'package';
import { cx } from 'emotion';
import { Pokemon, Editor } from 'models';
import { ReleaseDialog } from 'components/Shared';
import { State } from 'state';

export interface TopBarProps {
    onClickDownload: (e?: React.MouseEvent<HTMLElement>) => void;

    editor: Editor;
    style: Styles;
    sawRelease: { [x: string]: boolean };

    changeEditorSize: changeEditorSize;
    editStyle: editStyle;
    seeRelease: seeRelease;
    pokemon: Pokemon[];

    isDownloading?: boolean;
}

export interface TopBarState {
    isOpen: boolean;
}

const darkModeStyle = mode => (mode ? { color: '#fff' } : {});

export class TopBarBase extends React.Component<TopBarProps, TopBarState> {
    public state = {
        isOpen: !this.props.sawRelease[pkg.version],
    };

    public componentWillMount() {
        if (pkg.version.split('.')[2] !== 0) {
            this.props.seeRelease(pkg.version);
        }
    }

    private closeDialog = e => {
        this.props.seeRelease(pkg.version);
        this.toggleDialog(null);
    };

    private toggleDialog = _ => this.setState({ isOpen: !this.state.isOpen });

    private isDownloadDisabled() {
        return (
            this.props.style.teamImages === 'sugimori' ||
            this.props.style.spritesMode ||
            this.props.style.useSpritesForChampsPokemon ||
            this.props.pokemon.some(p => (p.status === 'Team' && !isEmpty(p.customImage)) || !isEmpty(p.customIcon) || p.status === 'Team' && !isEmpty(p.customItemImage))
        );
    }

    public render() {
        const {isDownloading} = this.props;
        return (
            <div
                className={cx(
                    classWithDarkTheme(styles, 'topBar', this.props.style.editorDarkMode),
                )}>
                <Button
                    style={darkModeStyle(this.props.style.editorDarkMode)}
                    onClick={_ => this.props.changeEditorSize(!this.props.editor.minimized)}
                    className={Classes.MINIMAL}
                    icon={this.props.editor.minimized ? 'minimize' : 'maximize'}>
                    {this.props.editor.minimized ? 'Maximize' : 'Minimize'} Editor
                </Button>
                {isDownloading ? <Button className={Classes.MINIMAL} style={{ ...darkModeStyle(this.props.style.editorDarkMode), height: '30px' }}><Spinner /> Downloading</Button> : <Button
                    style={darkModeStyle(this.props.style.editorDarkMode)}
                    onClick={this.props.onClickDownload}
                    className={Classes.MINIMAL}
                    disabled={this.isDownloadDisabled()}
                    title={
                        this.isDownloadDisabled() ? `Disabled due to cross-origin resources.` : ''
                    }
                    icon='download'>
                    Download Image
                </Button>}
                <Button
                    style={darkModeStyle(this.props.style.editorDarkMode)}
                    onClick={_ => {
                        this.props.editStyle({ editorDarkMode: !this.props.style.editorDarkMode });
                    }}
                    className={Classes.MINIMAL}
                    icon={this.props.style.editorDarkMode ? 'flash' : 'moon'}>
                    {this.props.style.editorDarkMode ? 'Light' : 'Dark'} Mode
                </Button>
                <Button
                    style={darkModeStyle(this.props.style.editorDarkMode)}
                    onClick={this.toggleDialog}
                    className={Classes.MINIMAL}
                    icon='star'>
                    {pkg.version}
                </Button>
                {this.props.children}
                <ReleaseDialog
                    style={this.props.style}
                    isOpen={this.state.isOpen}
                    onClose={this.closeDialog}
                />
            </div>
        );
    }
}

export const TopBar = connect(
    (state: Pick<State, keyof State>) => ({
        editor: state.editor,
        style: state.style,
        sawRelease: state.sawRelease,
        pokemon: state.pokemon,
    }),
    {
        changeEditorSize,
        editStyle,
        seeRelease,
    },
)(TopBarBase);

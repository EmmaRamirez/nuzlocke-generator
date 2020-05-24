import * as React from 'react';
import { Button, Classes, Spinner, Switch, Intent } from '@blueprintjs/core';
import { connect } from 'react-redux';
import { reducers } from 'reducers';
import * as styles from 'components/Result/styles';
import { classWithDarkTheme, isEmpty, Styles, TeamImagesType } from 'utils';
import { changeEditorSize, editStyle, seeRelease, toggleTemtemMode, toggleMobileResultView } from 'actions';
import { pkg } from 'package';
import { cx, css } from 'emotion';
import { Pokemon, Editor } from 'models';
import { ReleaseDialog } from 'components/Shared';
import { State } from 'state';
import {isMobile} from 'is-mobile';

export interface TopBarProps {
    onClickDownload: (e?: React.MouseEvent<HTMLElement>) => void;

    editor: Editor;
    style: Styles;
    sawRelease: { [x: string]: boolean };

    changeEditorSize: changeEditorSize;
    editStyle: editStyle;
    seeRelease: seeRelease;
    toggleTemtemMode: toggleTemtemMode;
    toggleMobileResultView: toggleMobileResultView;

    pokemon: Pokemon[];

    isDownloading?: boolean;
}

export interface TopBarState {
    isOpen: boolean;
    isMenuOpen: boolean;
}

const darkModeStyle = mode => (mode ? { color: '#fff' } : {});

export class TopBarBase extends React.Component<TopBarProps, TopBarState> {
    public state = {
        isOpen: !this.props.sawRelease[pkg.version],
        isMenuOpen: false,
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
            this.props.style.spritesMode ||
            this.props.style.useSpritesForChampsPokemon ||
            this.props.pokemon.some(p => (p.status === 'Team' && !isEmpty(p.customImage)) || !isEmpty(p.customIcon) || p.status === 'Team' && !isEmpty(p.customItemImage))
        );
    }

    public render() {
        const {isDownloading, editor: {showResultInMobile}} = this.props;
        const {isMenuOpen} = this.state;

        console.log('isMobile', isMobile());
        const shouldShow = isMobile() ? isMenuOpen : true;

        return (
            <div
                className={cx(
                    classWithDarkTheme(styles, 'topBar', this.props.style.editorDarkMode),
                    isMobile() && styles.topBar_mobile,
                    isMobile() && isMenuOpen && styles.topBar_mobile_open,
                )}>


                {isMobile() && <><Button
                    style={darkModeStyle(this.props.style.editorDarkMode)}
                    onClick={_ => this.setState(state => ({isMenuOpen: !state.isMenuOpen }))}
                    className={Classes.MINIMAL}
                    icon={'menu'}>
                    Nuzlocke Generator
                </Button><Button
                    style={{
                        ...darkModeStyle(this.props.style.editorDarkMode),
                        zIndex: 22,
                        position: 'relative',
                    }}
                    onClick={_ => this.props.toggleMobileResultView()}
                    className={cx(Classes.MINIMAL, styles.close_result_button)}
                    icon={showResultInMobile ? 'cross' : 'eye-open'}>
                    {showResultInMobile ? 'Close' : 'View Result'}
                </Button></>}

                {shouldShow && <>
                    <Button
                        style={darkModeStyle(this.props.style.editorDarkMode)}
                        onClick={_ => this.props.changeEditorSize(!this.props.editor.minimized)}
                        className={Classes.MINIMAL}
                        icon={this.props.editor.minimized ? 'minimize' : 'maximize'}>
                        {this.props.editor.minimized ? 'Maximize' : 'Minimize'} Editor
                    </Button>
                    {isDownloading ? <Button className={Classes.MINIMAL} style={{ ...darkModeStyle(this.props.style.editorDarkMode), height: '30px' }}>
                        <Spinner /> Downloading
                    </Button> : <Button
                        style={darkModeStyle(this.props.style.editorDarkMode)}
                        onClick={this.props.onClickDownload}
                        className={Classes.MINIMAL}
                        icon='download'>
                        Download Image
                    </Button>}
                    {this.isDownloadDisabled() && <Button style={darkModeStyle(this.props.style.editorDarkMode)}
                        className={Classes.MINIMAL}
                        intent={Intent.DANGER}
                        icon='error'
                    >Cross-origin resources detected. Downloads may not work.</Button>}
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
                    <Button className={Classes.MINIMAL}>
                        <Switch
                            style={{...darkModeStyle(this.props.style.editorDarkMode), marginBottom: 0}}
                            label='TemTem Mode'
                            checked={this.props.editor.temtemMode}
                            onChange={e => this.props.toggleTemtemMode()}
                        />
                    </Button>
                    {this.props.children}
                </>}
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
        toggleTemtemMode,
        toggleMobileResultView,
    },
)(TopBarBase);

/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import {
    Popover,
    Button,
    Menu,
    Position,
    MenuItem,
    Intent,
    Tag,
    Classes,
    Icon,
    Navbar,
    Toaster,
    NavbarGroup,
} from '@blueprintjs/core';
import { connect } from 'react-redux';
import { State } from 'state';
import { updateNuzlocke, deleteNuzlocke, newNuzlocke, switchNuzlocke, replaceState, updateSwitchNuzlocke } from 'actions';
import { NuzlockeSave, NuzlockeSaveControlsProps } from './NuzlockeSave';

export class NuzlockeSaveControlsBase extends React.Component<NuzlockeSaveControlsProps, {isOpen: boolean}> {
    public state = {isOpen: false};
    public render() {

        return <>
            <Button minimal icon='control' onClick={e => this.setState({isOpen: !this.state.isOpen})}>
                Manage Nuzlockes <Tag className={Classes.SMALL} intent={Intent.WARNING}>BETA</Tag>
            </Button>
            {this.state.isOpen && <NuzlockeSave />}
        </>;
    }
}


export const NuzlockeSaveControls = connect(
    (state: State) => ({
        darkMode: state.style.editorDarkMode,
    }),
    {
        updateNuzlocke,
        newNuzlocke,
        deleteNuzlocke,
        switchNuzlocke,
        replaceState,
        updateSwitchNuzlocke,
    }
)(NuzlockeSaveControlsBase as any);

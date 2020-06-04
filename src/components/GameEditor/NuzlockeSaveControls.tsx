import * as React from 'react';
import {
    Popover,
    Button,
    Menu,
    Position,
    MenuItem,
} from '@blueprintjs/core';
import { connect } from 'react-redux';
import { State } from 'state';
import { updateNuzlocke, deleteNuzlocke, newNuzlocke, switchNuzlocke, replaceState } from 'actions';

export interface NuzlockeSaveControlsProps {
    nuzlockes: State['nuzlockes'];
    state: string;
    updateNuzlocke: updateNuzlocke;
    deleteNuzlocke: deleteNuzlocke;
    newNuzlocke: newNuzlocke;
    switchNuzlocke: switchNuzlocke;
}

export class NuzlockeSaveControlsBase extends React.Component<NuzlockeSaveControlsProps> {


    public render() {
        return <Popover minimal={true} content={<Menu>
            {this.props.nuzlockes.saves.map(nuzlocke => {
                const id = nuzlocke.id;
                const isCurrent = this.props.nuzlockes.currentId === id;
                const data = nuzlocke.data;

                if (!data) {
                    return null;
                }

                // eslint-disable-next-line no-underscore-dangle
                return <MenuItem icon={isCurrent && 'star'} key={nuzlocke.id} text={`Nuzlocke ${nuzlocke.id}`} label={JSON.parse(data)._persist.version}>
                    <MenuItem onClick={() => this.props.deleteNuzlocke(id)} text='Delete Nuzlocke' />
                    <MenuItem onClick={() => {
                        this.props.switchNuzlocke(id);
                        // this.props.replaceState(JSON.parse(data));
                    }} text='Switch to this Nuzlocke' />
                </MenuItem>;
            })}
            <MenuItem text='New Nuzlocke' icon='add' onClick={() => this.props.newNuzlocke(this.props.state)} />

        </Menu>} position={Position.BOTTOM}>
            <Button icon="exchange">Switch Nuzlockes</Button>
        </Popover>;
    }
}

export const NuzlockeSaveControls = connect(
    (state: State) => ({
        state: JSON.stringify(state),
        nuzlockes: state.nuzlockes,
    }),
    {
        updateNuzlocke,
        newNuzlocke,
        deleteNuzlocke,
        switchNuzlocke,
    }
)(NuzlockeSaveControlsBase);

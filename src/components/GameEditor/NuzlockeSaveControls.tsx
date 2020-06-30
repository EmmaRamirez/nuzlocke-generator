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
import { updateNuzlocke, deleteNuzlocke, newNuzlocke, switchNuzlocke, replaceState } from 'actions';
import { PokemonIcon } from 'components';
import { gameOfOriginToColor, getContrastColor } from 'utils';
import { omit } from 'ramda';
import { createStore } from 'redux';
import { reducers, appReducers } from 'reducers';

export interface NuzlockeSaveControlsProps {
    nuzlockes: State['nuzlockes'];
    darkMode?: boolean;
    state: string;
    updateNuzlocke: updateNuzlocke;
    deleteNuzlocke: deleteNuzlocke;
    newNuzlocke: newNuzlocke;
    switchNuzlocke: switchNuzlocke;
    replaceState: replaceState;
}

const sort = (a, b) => a.id - b.id;

export class SaveBase extends React.Component<NuzlockeSaveControlsProps> {
    public componentDidMount() {
        const {nuzlockes} = this.props;
        if (!nuzlockes.currentId) {
            this.props.newNuzlocke(this.context.store.getState(), {isCopy: false});
        }
    }

    public renderMenu() {

        const {state, newNuzlocke, updateNuzlocke, deleteNuzlocke, switchNuzlocke} = this.props;
        const {nuzlockes} = this.props;
        const {currentId} = this.props.nuzlockes;
        const saves = nuzlockes.saves.sort(sort);

        return <div style={{
            padding: '0.5rem',
        }}>
            {saves.map(nuzlocke => {
                const id = nuzlocke.id;
                const {isCopy} = nuzlocke;
                const isCurrent = currentId === id;
                const data = nuzlocke.data;

                if (!data || data === '{}' || data === '{ }') {
                    return null;
                }

                let parsedData;

                try {
                    parsedData = isCurrent ? JSON.parse(state) : JSON.parse(data);
                } catch (e) {

                }

                if (!parsedData) {
                    return null;
                }

                const game = parsedData?.game?.name;
                const color = getContrastColor(gameOfOriginToColor(game));

                return <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    border: '1px solid #ccc',
                    padding: '0.5rem',
                    borderRadius: '0.25rem',
                    boxShadow: '0 0 4px rgba(0,0,0,0.1)',
                    marginBottom: '2px',
                }} key={nuzlocke.id}>
                    <div style={{display: 'flex', flexDirection: 'column', width: '6rem', marginRight: '2rem'}}>
                        <Tag round style={{
                            background: gameOfOriginToColor(game),
                            color: this.props.darkMode ? color : game === 'None' ? '#000' : color,
                        }}>{game}</Tag>
                    </div>
                    <div style={{
                        display: 'flex',
                        width: '20rem',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        {parsedData?.pokemon?.filter(p => p.status === 'Team').map(poke => <PokemonIcon key={poke.id} {...poke} />)}
                    </div>
                    <Popover content={<Menu><MenuItem shouldDismissPopover={false} disabled={isCurrent} icon='swap-horizontal' onClick={() => {
                        try {
                            updateNuzlocke(currentId, state);
                            switchNuzlocke(id);
                            replaceState(data);
                        } catch (e) {
                            const toaster = Toaster.create();
                            toaster.show({
                                message: `Failed to switch nuzlockes. ${e}`,
                                intent: Intent.DANGER,
                            });
                        }
                    }} text='Switch to this Nuzlocke' />
                    <MenuItem shouldDismissPopover={false} icon='trash' intent={Intent.DANGER} onClick={() => {
                        this.props.deleteNuzlocke(id);
                        if (saves.length > 0 && isCurrent) {
                            switchNuzlocke(saves[0].id);
                            replaceState(JSON.parse(saves[0].data));
                        }
                    }} text='Delete Nuzlocke' /></Menu>}>
                        <Icon style={{ transform: 'rotate(90deg)' }} icon="more" />
                    </Popover>
                </div>;
            })}
            <Button intent={Intent.SUCCESS} icon='add' onClick={() => {
                this.props.updateNuzlocke(this.props.nuzlockes.currentId, state);
                const data = createStore(appReducers).getState();
                this.props.newNuzlocke(JSON.stringify(data), {isCopy: false});
                this.props.replaceState(data);
            }}>
                New Nuzlocke
            </Button>

        </div>;
    }

    public render() {
        return this.renderMenu();
    }
}



export class NuzlockeSaveControlsBase extends React.Component<NuzlockeSaveControlsProps, {isOpen: boolean}> {
    public state = {isOpen: false};
    public render() {

        return <><Navbar>
            <NavbarGroup>
                <Button minimal icon='control' onClick={e => this.setState({isOpen: !this.state.isOpen})}>
                    Manage Nuzlockes <Tag className={Classes.SMALL} intent={Intent.WARNING}>BETA</Tag>
                </Button>
            </NavbarGroup>
        </Navbar>
        {this.state.isOpen && <Save />}
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
    }
)(NuzlockeSaveControlsBase as any);

export const Save = connect(
    (state: State) => ({
        nuzlockes: state.nuzlockes,
        state: JSON.stringify(omit(['nuzlockes'], state)),
        darkMode: state.style.editorDarkMode,
    }),
    {
        updateNuzlocke,
        newNuzlocke,
        deleteNuzlocke,
        switchNuzlocke,
        replaceState,
    }
)(SaveBase as any);

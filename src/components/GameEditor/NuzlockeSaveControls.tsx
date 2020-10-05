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
import { connect, Store } from 'react-redux';
import { State } from 'state';
import { updateNuzlocke, deleteNuzlocke, newNuzlocke, switchNuzlocke, replaceState, updateSwitchNuzlocke } from 'actions';
import { PokemonIcon } from 'components';
import { gameOfOriginToColor, getContrastColor, StoreContext } from 'utils';
import { omit } from 'ramda';
import { createStore } from 'redux';
import { appReducers } from 'reducers';

export interface NuzlockeSaveControlsProps {
    nuzlockes: State['nuzlockes'];
    darkMode?: boolean;
    state: string;
    updateNuzlocke: updateNuzlocke;
    deleteNuzlocke: deleteNuzlocke;
    newNuzlocke: newNuzlocke;
    switchNuzlocke: switchNuzlocke;
    replaceState: replaceState;
    updateSwitchNuzlocke: updateSwitchNuzlocke;
}

const sort = (a, b) => a.id - b.id;

export class SaveBase extends React.Component<NuzlockeSaveControlsProps> {
    // eslint-disable-next-line camelcase
    public UNSAFE_componentWillMount() {
        const {nuzlockes, newNuzlocke, state} = this.props;
        if (!nuzlockes.currentId || nuzlockes.currentId === '') {
            newNuzlocke(JSON.parse(state), {isCopy: false});
        }
    }

    public renderMenu() {

        const {state, replaceState, updateSwitchNuzlocke, newNuzlocke, updateNuzlocke, deleteNuzlocke, switchNuzlocke, darkMode} = this.props;
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
                    //parsedData = JSON.parse(data);
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
                    border: darkMode ? '1px solid #444' : '1px solid #ccc',
                    padding: '0.5rem',
                    borderRadius: '0.25rem',
                    boxShadow: '0 0 4px rgba(0,0,0,0.1)',
                    marginBottom: '2px',
                }} key={id}>
                    <div style={{display: 'flex', flexDirection: 'column', width: '6rem', marginRight: '2rem', justifyContent: 'space-between', alignItems: 'space-between'}}>
                        <Tag round style={{
                            background: gameOfOriginToColor(game),
                            color: darkMode ? color : game === 'None' ? '#000' : color,
                        }}>{game}</Tag>
                        {isCurrent && <Tag round style={{
                            background: 'rgba(0,0,0,0.1)',
                            color: darkMode ? '#fff' : '#000',
                            marginTop: '2px',
                        }}>
                            Current
                        </Tag>}
                    </div>
                    <div style={{
                        display: 'flex',
                        width: '20rem',
                        justifyContent: 'center',
                        alignItems: 'center',
                        pointerEvents: 'none',
                    }}>
                        {parsedData?.pokemon?.filter(p => p.status === 'Team').map(poke => <PokemonIcon key={poke.id} {...poke} />)}
                    </div>
                    <Popover content={<Menu><MenuItem shouldDismissPopover={false} disabled={isCurrent} icon='swap-horizontal' onClick={() => {
                        try {
                            console.log(
                                currentId,
                                id,
                                parsedData.pokemon.map(p => p.species),
                                JSON.parse(state).pokemon.map(p => p.species),
                            );
                            updateSwitchNuzlocke(currentId, id, state);
                            // switchNuzlocke(id);
                            replaceState(parsedData);
                        } catch (e) {
                            const toaster = Toaster.create();
                            toaster.show({
                                message: `Failed to switch nuzlockes. ${e}`,
                                intent: Intent.DANGER,
                            });
                        }
                    }} text='Switch to this Nuzlocke' />
                    <MenuItem disabled={saves.length === 1} shouldDismissPopover={false} icon='trash' intent={Intent.DANGER} onClick={() => {
                        try {
                            deleteNuzlocke(id);
                            if (isCurrent) {
                                switchNuzlocke(saves[0].id);
                                replaceState(JSON.parse(saves[0].data));
                            }
                        } catch (e) {
                            const toaster = Toaster.create();
                            toaster.show({
                                message: `Failed to delete nuzlocke. ${e}`,
                                intent: Intent.DANGER,
                            });
                        }
                    }} text='Delete Nuzlocke' /></Menu>}>
                        <Icon style={{ transform: 'rotate(90deg)' }} icon="more" />
                    </Popover>
                </div>;
            })}
            <Button intent={Intent.SUCCESS} icon='add' onClick={() => {
                updateNuzlocke(currentId, state);
                const data = createStore(appReducers)?.getState();
                newNuzlocke(JSON.stringify(data), {isCopy: false});
                replaceState(data);
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

        return <>
            <Button minimal icon='control' onClick={e => this.setState({isOpen: !this.state.isOpen})}>
                Manage Nuzlockes <Tag className={Classes.SMALL} intent={Intent.WARNING}>BETA</Tag>
            </Button>
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
        updateSwitchNuzlocke,
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
        updateSwitchNuzlocke,
    }
)(SaveBase as any);

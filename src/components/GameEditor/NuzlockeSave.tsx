/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import {
    Popover,
    Button,
    Menu,
    Position,
    MenuItem,
    Intent,
    Icon,
    Toaster,
} from '@blueprintjs/core';
import { connect } from 'react-redux';
import { State } from 'state';
import {
    updateNuzlocke,
    deleteNuzlocke,
    newNuzlocke,
    switchNuzlocke,
    replaceState,
    updateSwitchNuzlocke,
} from 'actions';
import { feature, gameOfOriginToColor, getContrastColor } from 'utils';
import { omit } from 'ramda';
import { createStore } from 'redux';
import { appReducers } from 'reducers';
import { NuzlockeGameTags } from './NuzlockeGameTags';
import { DeleteAlert } from 'components/DataEditor';

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

export interface NuzlockeSaveControlsState {
    isDeletingNuzlocke: boolean;
    deletionFunction?: () => void;
}

const sort = (a, b) => a.id - b.id;

export class NuzlockeSaveBase extends React.Component<
NuzlockeSaveControlsProps,
NuzlockeSaveControlsState
> {
    public state = {
        isDeletingNuzlocke: false,
        deletionFunction: undefined,
    };

    // eslint-disable-next-line camelcase
    public UNSAFE_componentWillMount() {
        const { nuzlockes, newNuzlocke, state } = this.props;
        if (!nuzlockes.currentId || nuzlockes.currentId === '') {
            newNuzlocke(state, { isCopy: false });
        }
    }

    private toggleIsDeletingNuzlocke = () => {
        this.setState((state) => ({ isDeletingNuzlocke: !state.isDeletingNuzlocke }));
    };

    public renderMenu() {
        const {
            state,
            replaceState,
            updateSwitchNuzlocke,
            newNuzlocke,
            updateNuzlocke,
            deleteNuzlocke,
            switchNuzlocke,
            darkMode,
        } = this.props;
        const { nuzlockes } = this.props;
        const { currentId } = this.props.nuzlockes;
        const saves = nuzlockes.saves.sort(sort);

        return (
            <div
                style={{
                    padding: '0.5rem',
                }}>
                {saves.map((nuzlocke) => {
                    const id = nuzlocke.id;
                    const { isCopy } = nuzlocke;
                    const isCurrent = currentId === id;
                    const data = nuzlocke.data;

                    if (!data || data === '{}' || data === '{ }') {
                        return null;
                    }

                    let parsedData;

                    try {
                        parsedData = isCurrent ? JSON.parse(state) : JSON.parse(data);
                        //parsedData = JSON.parse(data);
                    } catch (e) {}

                    if (!parsedData) {
                        return null;
                    }

                    const game = parsedData?.game?.name;
                    const color = getContrastColor(gameOfOriginToColor(game));

                    return (
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                border: darkMode ? '1px solid #444' : '1px solid #ccc',
                                padding: '0.5rem',
                                borderRadius: '0.25rem',
                                boxShadow: '0 0 4px rgba(0,0,0,0.1)',
                                marginBottom: '2px',
                                justifyContent: 'space-between',
                                // width: isMobile() ? '80%' : '100%',
                            }}
                            key={id}>
                            <NuzlockeGameTags
                                darkMode={darkMode}
                                game={game}
                                color={color}
                                data={parsedData}
                                isCurrent={isCurrent}
                                isCopy={isCopy}
                                size={((data.length * 2) / 1024).toFixed(2)}
                            />
                            <DeleteAlert
                                onConfirm={this.state.deletionFunction}
                                isOpen={this.state.isDeletingNuzlocke}
                                onCancel={this.toggleIsDeletingNuzlocke}
                                warningText="This will delete your Nuzlocke save without any to retrieve it. Are you sure you want to do this?"
                            />
                            <Popover
                                position={Position.BOTTOM_RIGHT}
                                content={
                                    <Menu>
                                        <MenuItem
                                            shouldDismissPopover={false}
                                            disabled={isCurrent}
                                            icon="swap-horizontal"
                                            onClick={() => {
                                                try {
                                                    updateSwitchNuzlocke(currentId, id, state);
                                                    replaceState(parsedData);
                                                } catch (e) {
                                                    const toaster = Toaster.create();
                                                    toaster.show({
                                                        message: `Failed to switch nuzlockes. ${e}`,
                                                        intent: Intent.DANGER,
                                                    });
                                                }
                                            }}
                                            text="Switch to this Nuzlocke"
                                        />
                                        <MenuItem
                                            shouldDismissPopover={false}
                                            icon="clipboard"
                                            onClick={(_) => {
                                                try {
                                                    if (typeof data !== 'string') {
                                                        throw new Error(
                                                            'Data is not in correct format.',
                                                        );
                                                    }
                                                    newNuzlocke(data, { isCopy: true });
                                                } catch (e) {
                                                    const toaster = Toaster.create();
                                                    toaster.show({
                                                        message: `Failed to copy nuzlocke. ${e}`,
                                                        intent: Intent.DANGER,
                                                    });
                                                }
                                            }}
                                            text="Copy this Nuzlocke"></MenuItem>
                                        {feature.hallOfFame && (
                                            <MenuItem
                                                shouldDismissPopover={false}
                                                onClick={() => {}}
                                                icon={'crown'}
                                                text="Submit to Hall of Fame"
                                            />
                                        )}
                                        <MenuItem
                                            disabled={saves.length === 1}
                                            shouldDismissPopover={false}
                                            icon="trash"
                                            intent={Intent.DANGER}
                                            onClick={() => {
                                                const deletionFunction = () => {
                                                    try {
                                                        deleteNuzlocke(id);
                                                        if (isCurrent) {
                                                            switchNuzlocke(saves[0].id);
                                                            replaceState(JSON.parse(saves[0].data));
                                                        }
                                                        this.toggleIsDeletingNuzlocke();
                                                    } catch (e) {
                                                        const toaster = Toaster.create();
                                                        toaster.show({
                                                            message: `Failed to delete nuzlocke. ${e}`,
                                                            intent: Intent.DANGER,
                                                        });
                                                    }
                                                };
                                                this.setState({
                                                    deletionFunction,
                                                    isDeletingNuzlocke: true,
                                                });
                                            }}
                                            text="Delete Nuzlocke"
                                        />
                                    </Menu>
                                }>
                                <Icon
                                    style={{ transform: 'rotate(90deg)', marginLeft: 'auto' }}
                                    icon="more"
                                />
                            </Popover>
                        </div>
                    );
                })}
                <Button
                    intent={Intent.SUCCESS}
                    icon="add"
                    onClick={() => {
                        updateNuzlocke(currentId, state);
                        const data = createStore(appReducers)?.getState();
                        newNuzlocke(JSON.stringify(data), { isCopy: false });
                        replaceState(data);
                    }}>
                    New Nuzlocke
                </Button>
            </div>
        );
    }

    public render() {
        return this.renderMenu();
    }
}

export const NuzlockeSave = connect(
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
    },
)(NuzlockeSaveBase as any);

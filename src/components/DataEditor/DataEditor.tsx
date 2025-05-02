import * as React from 'react';
import { connect, useSelector } from 'react-redux';
import {
    Button,
    ButtonGroup,
    Dialog,
    Callout,
    TextArea,
    Intent,
    Toaster,
    Switch,
    Classes,
    Checkbox,
    Icon,
    Popover,
    PopoverInteractionKind,
} from '@blueprintjs/core';
import { PokemonIcon } from 'components/PokemonIcon';
import { ErrorBoundary } from 'components/Shared';
import { v4 as uuid } from 'uuid';
import { persistor } from 'store';
import { newNuzlocke, replaceState, setEditorHistoryDisabled } from 'actions';
import { Game, Pokemon, Trainer } from 'models';
import { omit } from 'ramda';
import { BaseEditor } from 'components/BaseEditor';
import { State } from 'state';
import { noop } from 'redux-saga/utils';
import { feature, GameSaveFormat } from 'utils';
import { DeleteAlert } from './DeleteAlert';
import { isEmpty } from 'utils/isEmpty';
// @TODO: fix codegen imports
// import codegen from 'codegen.macro';
import { BoxMappings } from 'parsers/utils/boxMappings';
import { cx } from 'emotion';


export interface DataEditorProps {
    state: State;
    replaceState: replaceState;
    newNuzlocke: newNuzlocke;
    setEditorHistoryDisabled: setEditorHistoryDisabled;
}

export interface DataEditorState {
    isOpen: boolean;
    isClearAllDataOpen: boolean;
    mode: 'import' | 'export';
    data: string;
    href: string;
    selectedGame: GameSaveFormat;
    mergeDataMode: boolean;
    showSaveFileUI: boolean;
    overrideImport: boolean;
    isSettingsOpen: boolean;
    boxMappings: BoxMappings;
}

const getGameNumberOfBoxes = (game: GameSaveFormat) => {
    switch (game) {
        case 'RBY':
            return 12;
        case 'GS':
        case 'Crystal':
            return 14;
        default:
            return 12;
    }
};

const isValidJSON = (data: string): boolean => {
    try {
        JSON.parse(data);
        return true;
    } catch (e) {
        return false;
    }
};

// This is to handle very weird/rare edge cases where data
// can be parsed, but then in turn has to be "double-parsed"
const handleExceptions = (data) => {
    let updated: any = {};

    if (typeof data.pokemon === 'string') {
        const toaster = Toaster.create();
        toaster.show({
            message: 'Issue with data detected. Attempting to fix...',
            intent: Intent.DANGER,
        });
        for (const prop in data) {
            try {
                updated = { ...updated, [prop]: JSON.parse(data[prop])};
            } catch (e) {
                console.log(
                    `Failed to parse on ${prop}`
                );
            }
        }
    }

    return (isEmpty(updated)) ? data : updated;
};

export interface SaveGameSettingsDialogProps {
    onMergeDataChange: (e: any) => void;
    mergeDataMode: boolean;
    boxes: State['box'];
    selectedGame: GameSaveFormat;
    boxMappings: BoxMappings;
    setBoxMappings: ({key, status}) => void;
}

// Quick and dirty method of getting Array w n.length
const generateArray = (n: number) => {
    const arr: BoxMappings = [];
    for (let i = 1; i < n + 1; i++) {
        if (i === 2) {
            arr.push({key: i, status: 'Dead'});
        } else {
            arr.push({key: i, status: 'Boxed'});
        }
    }
    return arr;
};

const generateBoxMappingsDefault = (saveFormat) => generateArray(getGameNumberOfBoxes(saveFormat));

export function BoxSelect({boxes, value, boxKey, setBoxMappings}: {boxes: State['box'], value: string, boxKey: number, setBoxMappings: SaveGameSettingsDialogProps['setBoxMappings']}) {
    return <div className={Classes.SELECT}>
        <select
            value={value}
            onChange={e => setBoxMappings({ key: boxKey, status: e.target.value })}
        >
            {boxes.map((box) => (
                <option key={box.id} value={box.name}>
                    {box.name}
                </option>
            ))}
        </select>
    </div>;
}

export function SaveGameSettingsDialog({
    onMergeDataChange,
    mergeDataMode,
    boxes,
    selectedGame,
    boxMappings,
    setBoxMappings,
}: SaveGameSettingsDialogProps) {

    // const select = (
    //     <Select
    //         items={boxes}
    //         onItemSelect={() => {}}
    //     >
    //     </Select>
    // );

    return <div className={cx(Classes.DIALOG_BODY, 'has-nice-scrollbars')}>
        <Switch
            labelElement={<>
                <strong>Merge Data?</strong>
                <p className={Classes.TEXT_MUTED}>
                    Merges your current data with that of the save file, using an ID match algorithm.
                    Disabling this will overwrite your current data with that from the save file.
                    NOTE: this method of determining IDs is based off IVs in Gen I &amp; II.
                </p>
            </>}
            checked={mergeDataMode}
            onChange={onMergeDataChange}
        />

        <div style={{height: '60vh', overflow: 'auto', display: 'flex', flexDirection: 'column', flexWrap: 'wrap'}} className='has-nice-scrollbars'>
            {boxMappings.map((value, index) => {
                return <div style={{padding: '0.25rem'}}>
                    <BoxSelect boxKey={value.key} setBoxMappings={setBoxMappings} value={value.status} boxes={boxes} />
                    <div
                        className={Classes.BUTTON}
                        style={{marginLeft: '0.25rem',
                            cursor: 'default', width: '8rem'}}
                    >{`Box ${value.key}`}</div>
                </div>;
            })}
        </div>

    </div>;
}

export class DataEditorBase extends React.Component<DataEditorProps, DataEditorState> {
    public textarea: any;
    public fileInput: any;
    public nuzlockeJsonFileInput: any;

    public constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            isClearAllDataOpen: false,
            mode: 'export',
            data: '',
            href: '',
            selectedGame: 'RBY',
            mergeDataMode: true,
            showSaveFileUI: false,
            overrideImport: true,
            isSettingsOpen: false,
            boxMappings: [],
        };
    }

    public componentDidMount() {
        this.setState(state => ({
            boxMappings: generateBoxMappingsDefault(state.selectedGame)
        }));
    }

    private uploadJSON = (e) => {
        if (isValidJSON(e.target.value)) {
            this.setState({ data: e.target.value });
        } else {
            const toaster = Toaster.create();
            toaster.show({
                message: 'Failed to parse invalid JSON',
                intent: Intent.DANGER,
            });
        }
    };

    private uploadNuzlockeJsonFile = (e) => {
        const file = this.nuzlockeJsonFileInput.files[0];
        const reader = new FileReader();

        reader.readAsText(file, 'utf-8');
        reader.addEventListener('load', (event) => {
            const file = event?.target?.result;
            const data = file;
            // @ts-ignore
            this.setState({ data });
        });
    };

    private confirmImport = (e) => {
        let cmm = { customMoveMap: [] };
        const override = this.state.overrideImport;
        const data = handleExceptions(JSON.parse(this.state.data));
        const nuz = this.props.state;
        // @NOTE this prevents previously undefined states from blowing up the app
        const safeguards = { customTypes: [], customMoveMap: [], stats: [], excludedAreas: [], customAreas: [] };
        if (!Array.isArray(data.customMoveMap)) {
            noop();
        } else {
            cmm = { customMoveMap: data.customMoveMap };
        }
        this.props.replaceState({ ...safeguards, ...(override ? data : nuz), ...cmm });
        this.props.newNuzlocke(this.state.data, { isCopy: false });
        this.writeAllData();
        this.setState({ isOpen: false });
    };

    private importState = () => {
        this.setState({ mode: 'import' });
        this.setState({ isOpen: true });
    };

    private exportState = (state) => {
        this.setState({
            mode: 'export',
        });
        this.setState({ isOpen: true });
        this.setState({
            href: `data:text/plain;charset=utf-8,${encodeURIComponent(
                JSON.stringify(omit(['router', '._persist', 'editorHistory'], state)),
            )}`,
        });
    };

    private renderTeam(data) {
        let d: any;
        try {
            d = handleExceptions(JSON.parse(data));

        } catch {
            d = { pokemon: false };
        }

        if (d.pokemon) {
            return (
                <div
                    className="team-icons"
                    style={{
                        background: 'rgba(0, 0, 0, 0.1)',
                        borderRadius: '.25rem',
                        margin: '.25rem',
                        marginTop: '.5rem',
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                    {d?.pokemon
                        ?.filter((p) => p.status === 'Team')
                        ?.map((p) => {
                            return <PokemonIcon key={p.id} {...p} />;
                        })}
                </div>
            );
        } else {
            return null;
        }
    }

    private static determineGame({
        isYellow,
        selectedGame,
    }: {
        isYellow?: boolean,
        selectedGame?: GameSaveFormat
    }): Game {
        if (isYellow) return { name: 'Yellow', customName: '' };
        if (selectedGame === 'GS') return { name: 'Gold', customName: '' };
        if (selectedGame === 'Crystal') return { name: 'Crystal', customName: '' };
        return { name: 'Red', customName: '' };
    }

    private static pokeMerge = (pokemonListA: Pokemon[], pokemonListB: Pokemon[]) => {
        return pokemonListB.map((poke) => {
            const id = poke.id;
            const aListPoke = pokemonListA.find((p) => p.id === id);
            if (aListPoke) {
                return {
                    ...aListPoke,
                    ...poke,
                };
            } else {
                return poke;
            }
        });
    };

    private uploadFile = (replaceState, state) => (e) => {
        const t0 = performance.now();
        // @NOTE: this is a gross work-around a bug with jest and import.meta.url
        // const worker = new Worker(new URL('parsers/worker.ts', codegen`module.exports = import.meta.env.MODE === "test" ? "" : "import.meta.url"`));

        const worker = new Worker(new URL('parsers/worker.ts', import.meta.url));

        const file = this.fileInput.files[0];
        const reader = new FileReader();
        const componentState = this.state;

        reader.readAsArrayBuffer(file);

        reader.addEventListener('load', async function () {
            const save = new Uint8Array(this.result as ArrayBuffer);

            worker.postMessage({
                selectedGame: componentState.selectedGame,
                save,
                boxMappings: componentState.boxMappings,
            });

            worker.onmessage = (e: MessageEvent<{ pokemon: Pokemon[], isYellow?: boolean, trainer: Trainer }>) => {
                const result = e.data;
                const mergedPokemon = componentState.mergeDataMode
                    ? DataEditorBase.pokeMerge(state.pokemon, result.pokemon as Pokemon[])
                    : result.pokemon;
                const data = {
                    game: DataEditorBase.determineGame({
                        isYellow: result.isYellow,
                        selectedGame: componentState.selectedGame,
                    }),
                    pokemon: mergedPokemon,
                    trainer: result.trainer,
                };
                const newState = { ...state, ...data };
                replaceState(newState);
            };

            worker.onmessageerror = (err) => {
                const toaster = Toaster.create();
                toaster.show({
                    message: `Failed to parse save file. ${err}`,
                    intent: Intent.DANGER,
                });
                console.error(err);
            };

            const t1 = performance.now();
            console.info(`Call: ${t1 - t0} ms on ${componentState.selectedGame} save file type`);
        });
    };

    private clearAllData = (e) => {
        persistor.purge();
        window.location.reload();
    };

    private writeAllData = () => {
        persistor.flush();
    };

    private toggleClearingData = (e) =>
        this.setState({ isClearAllDataOpen: !this.state.isClearAllDataOpen });

    private renderSaveFileUI() {
        const allowedGames: string[] = ['RBY'];

        if (feature.gen2saves) {
            allowedGames.push('GS');
            allowedGames.push('Crystal');
        }

        return (
            <>
                <Button
                    onClick={(e) => {
                        this.setState({ showSaveFileUI: !this.state.showSaveFileUI });
                    }}
                    style={{
                        // @TODO: find a more sensible hack
                        transform: 'translateY(-5px)',
                    }}>
                    Import From Save File
                </Button>
                <div
                    className="data-editor-save-file-form"
                    style={{
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        margin: '0.25rem',
                        display: this.state.showSaveFileUI ? 'flex' : 'none',
                        borderRadius: '0.25rem',
                        padding: '0.25rem',
                    }}>
                    <div
                        className={cx(Classes.LABEL, Classes.INLINE)}
                        style={{ padding: '.25rem 0', paddingBottom: '.5rem' }}>
                        <div className={Classes.SELECT}>
                            <select
                                value={this.state.selectedGame}
                                onChange={(e) => {
                                    this.setState({
                                        selectedGame: e.target.value as GameSaveFormat,
                                        boxMappings: generateBoxMappingsDefault(e.target.value as GameSaveFormat)
                                    });
                                }}>
                                {allowedGames.map((game) => (
                                    <option key={game} value={game}>
                                        {game}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div
                        className={cx(Classes.LABEL, Classes.INLINE)}
                        style={{
                            padding: '.25rem 0',
                            paddingBottom: '.5rem',
                            marginLeft: '.25rem',
                        }}>
                        <input
                            style={{ padding: '.25rem' }}
                            className={Classes.FILE_INPUT}
                            ref={(ref) => (this.fileInput = ref)}
                            onChange={this.uploadFile(this.props.replaceState, this.props.state)}
                            type="file"
                            id="file"
                            name="file"
                            accept=".sav"
                        />
                    </div>

                    <Button
                        onClick={(e) => this.setState({ isSettingsOpen: true })}
                        minimal
                        intent={Intent.PRIMARY}
                    >
                        Options
                    </Button>

                    <Dialog
                        isOpen={this.state.isSettingsOpen}
                        onClose={(e) => this.setState({ isSettingsOpen: false })}
                        title={'Save Upload Settings'}
                        className={this.props.state.style.editorDarkMode ? Classes.DARK : ''}
                        icon="floppy-disk">
                        <SaveGameSettingsDialog
                            mergeDataMode={this.state.mergeDataMode}
                            onMergeDataChange={() => this.setState({ mergeDataMode: !this.state.mergeDataMode })}
                            boxes={this.props.state.box}
                            selectedGame={this.state.selectedGame}
                            boxMappings={this.state.boxMappings}
                            setBoxMappings={({key, status}) => {
                                console.log('setBoxMappings:', key, status);
                                this.setState(({boxMappings}) => {
                                    const newBoxMappings = boxMappings.map(({key: boxKey, status: boxStatus}) => {
                                        if (key === boxKey) {
                                            return {key, status};
                                        }
                                        return {key: boxKey, status: boxStatus};
                                    });
                                    return {
                                        boxMappings: newBoxMappings,
                                    };
                                });
                            }}
                        />
                    </Dialog>
                </div>
            </>
        );
    }

    public render() {
        return (
            <BaseEditor icon='database' name="Data">
                <DeleteAlert
                    onConfirm={this.clearAllData}
                    isOpen={this.state.isClearAllDataOpen}
                    onCancel={this.toggleClearingData}
                />
                <Dialog
                    isOpen={this.state.isOpen}
                    onClose={(e) => this.setState({ isOpen: false })}
                    title={
                        this.state.mode === 'export'
                            ? 'Exported Nuzlocke Save'
                            : 'Import Nuzlocke Save'
                    }
                    className={this.props.state.style.editorDarkMode ? Classes.DARK : ''}
                    icon="floppy-disk">
                    {this.state.mode === 'export' ? (
                        <>
                            <Callout>Copy this and paste it somewhere safe!</Callout>
                            <div
                                style={{ height: '40vh', overflow: 'auto' }}
                                className={cx(Classes.DIALOG_BODY, 'has-nice-scrollbars')}
                            >
                                <span suppressContentEditableWarning={true} contentEditable={true}>
                                    {JSON.stringify(this.props.state, null, 2)}
                                </span>
                            </div>
                            <div className={Classes.DIALOG_FOOTER}>
                                <a
                                    href={this.state.href}
                                    download={`nuzlocke_${
                                        this.props?.state?.trainer?.title
                                            ?.toLowerCase()
                                            .replace(/\s/g, '-') ||
                                        this.props?.state?.game?.name
                                            ?.toLowerCase()
                                            .replace(/\s/g, '-') ||
                                        ''
                                    }_${uuid().slice(0, 4)}.json`}>
                                    <Button icon={'download'} intent={Intent.PRIMARY}>
                                        Download
                                    </Button>
                                </a>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className={cx(Classes.DIALOG_BODY, 'has-nice-scrollbars')}>
                                <TextArea
                                    className={cx('custom-css-input', Classes.FILL)}
                                    onChange={this.uploadJSON}
                                    placeholder="Paste nuzlocke.json contents here, or use the file uploader"
                                    value={this.state.data}
                                    large={true}
                                />
                                <ErrorBoundary>{this.renderTeam(this.state.data)}</ErrorBoundary>
                            </div>
                            <div className={Classes.DIALOG_FOOTER}>
                                {/*<Checkbox
                                    checked={this.state.overrideImport}
                                    label='Overwrite current save data (will otherwise merge into nuzlocke saves)'
                                    onChange={e => this.setState({ overrideImport: e.currentTarget.checked })}
                                />*/}
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                    }}>
                                    <input
                                        style={{ padding: '.25rem' }}
                                        className={Classes.FILE_INPUT}
                                        ref={(ref) => (this.nuzlockeJsonFileInput = ref)}
                                        onChange={this.uploadNuzlockeJsonFile}
                                        type="file"
                                        id="jsonFile"
                                        name="jsonFile"
                                        accept=".json"
                                    />
                                    <Button
                                        icon="tick"
                                        intent={
                                            this.state.data === '' ? Intent.NONE : Intent.SUCCESS
                                        }
                                        onClick={this.confirmImport}
                                        disabled={this.state.data === '' ? true : false}
                                        text="Confirm"
                                        style={{
                                            marginLeft: 'auto',
                                        }}
                                    />
                                </div>
                            </div>
                        </>
                    )}
                </Dialog>

                <ButtonGroup style={{ margin: '.25rem' }}>
                    <Button
                        onClick={(e) => this.importState()}
                        icon="import"
                        intent={Intent.PRIMARY}>
                        Import Data
                    </Button>
                    <Button onClick={(e) => this.exportState(this.props.state)} icon="export">
                        Export Data
                    </Button>
                    {/* <Button icon='add' intent={Intent.SUCCESS}>
                        New Nuzlocke
                    </Button> */}
                </ButtonGroup>
                {this.renderSaveFileUI()}
                <ButtonGroup style={{ margin: '.25rem' }}>
                    <Button
                        minimal
                        intent={Intent.SUCCESS}
                        onClick={this.writeAllData}
                        icon="floppy-disk">
                        Force Save
                    </Button>
                    <Button
                        icon="trash"
                        onClick={this.toggleClearingData}
                        intent={Intent.DANGER}
                        minimal>
                        Clear All Data
                    </Button>
                </ButtonGroup>
                <Checkbox
                    checked={this.props.state.editor.editorHistoryDisabled}
                    onChange={e => this.props.setEditorHistoryDisabled(e.currentTarget.checked)}
                    labelElement={<>Disable Editor History <Popover content={
                        <div style={{width: '8rem', padding: '.25rem'}}>Can be used to achieve better editor performance on larger saves</div>
                    }
                    interactionKind={PopoverInteractionKind.HOVER}><Icon icon='info-sign' /></Popover></>}
                />
            </BaseEditor>
        );
    }
}

export const DataEditor = connect((state: State) => ({ state: state }), {
    replaceState,
    newNuzlocke,
    setEditorHistoryDisabled,
})(DataEditorBase as any);

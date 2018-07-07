import * as React from 'react';
import { connect } from 'react-redux';
import { Button, ButtonGroup, Dialog, Callout, TextArea, Intent, Alert } from '@blueprintjs/core';
import { PokemonIconBase } from 'components/PokemonIcon';
import { ErrorBoundary } from 'components/Shared';
// import { parseFile } from 'pokemon-savefile-parser';
import * as uuid from 'uuid/v4';
import { persistor } from 'store';

import { replaceState } from 'actions';

export interface DataEditorProps {
    state: any;
    replaceState: replaceState;
}

export interface DataEditorState {
    isOpen: boolean;
    isClearAllDataOpen: boolean;
    mode: 'import' | 'export';
    data: string;
    href: string;
}

const hexEncode = function(str: string) {
    let hex, i;

    let result = '';
    for (i = 0; i < str.length; i++) {
        hex = str.charCodeAt(i).toString(16);
        result += ('000' + hex).slice(-4);
    }

    return result;
};

export class DataEditorBase extends React.Component<
    DataEditorProps,
    DataEditorState
> {
    public textarea: any;
    public fileInput: any;

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            isClearAllDataOpen: false,
            mode: 'export',
            data: '',
            href: '',
        };
    }

    private confirmImport = e => {
        this.props.replaceState(JSON.parse(this.state.data));
    };

    private importState = () => {
        this.setState({ mode: 'import' });
        this.setState({ isOpen: true });
    };

    private exportState = state => {
        this.setState({
            mode: 'export',
        });
        delete state.router;
        delete state._persist;
        this.setState({ isOpen: true });
        this.setState({
            href: `data:text/plain;charset=utf-8,${encodeURIComponent(JSON.stringify(state))}`,
        });
    };

    private renderTeam(data) {
        let d;
        try {
            d = JSON.parse(data);
        } catch {
            d = { pokemon: false };
        }

        console.log(d);

        if (d.pokemon) {
            return (
                <div
                    className='team-icons'
                    style={{
                        background: 'rgba(0, 0, 0, 0.1)',
                        borderRadius: '.25rem',
                        margin: '.25rem',
                        marginTop: '.5rem',
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                    {d.pokemon.filter(p => p.status === 'Team').map(p => {
                        return <PokemonIconBase key={p.id} {...p} />;
                    })}
                </div>
            );
        } else {
            return null;
        }
    }

    private uploadFile = e => {
        const file = this.fileInput.files[0];
        const reader = new FileReader();

        reader.readAsArrayBuffer(file);

        reader.addEventListener('load', function() {
            const u = new Uint8Array(this.result);
            const a = new Array(u.length);
            let i = u.length;
            while (i--) {
                a[i] = (u[i] < 16 ? '0' : '') + u[i].toString(16);
            }
            console.log(a);
            // parseFile(a, 'nuzlocke')
            //     .then(res => {
            //         console.log(res);
            //     })
            //     .catch(err => {
            //         console.error(err);
            //     });
        });
    };

    private clearAllData = e => {
        persistor.purge();
    };

    private toggleClearingData = e =>
        this.setState({ isClearAllDataOpen: !this.state.isClearAllDataOpen });

    public render() {
        return (
            <div style={{ padding: '1rem' }}>
                <Alert
                    onConfirm={this.clearAllData}
                    isOpen={this.state.isClearAllDataOpen}
                    onCancel={this.toggleClearingData}
                    cancelButtonText='Nevermind'
                    confirmButtonText='Delete Anyway'
                    intent={Intent.DANGER}
                    icon='trash'>
                    <p>
                        This will permanently delete all your local storage data, with no way to
                        retrieve it. Are you sure you want to do this?
                    </p>
                </Alert>
                <Dialog
                    isOpen={this.state.isOpen}
                    onClose={e => this.setState({ isOpen: false })}
                    title={
                        this.state.mode === 'export'
                            ? 'Exported Nuzlocke Save'
                            : 'Import Nuzlocke Save'
                    }
                    icon='floppy-disk'>
                    {this.state.mode === 'export' ? (
                        <>
                            <Callout>Copy this and paste it somewhere safe!</Callout>
                            <div
                                style={{ height: '40vh', overflow: 'auto' }}
                                className='pt-dialog-body has-nice-scrollbars'>
                                <span suppressContentEditableWarning={true} contentEditable={true}>
                                    {JSON.stringify(this.props.state, null, 2)}
                                </span>
                            </div>
                            <div className='pt-dialog-footer'>
                                <a href={this.state.href} download={`nuzlocke_${uuid()}.json`}>
                                    <Button icon={'download'} intent={Intent.PRIMARY}>
                                        Download
                                    </Button>
                                </a>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className='pt-dialog-body has-nice-scrollbars'>
                                <TextArea
                                    className='custom-css-input pt-fill'
                                    onChange={(e: any) => this.setState({ data: e.target.value })}
                                    placeholder='Paste nuzlocke.json contents here'
                                    value={this.state.data}
                                    large={true}
                                />
                                <ErrorBoundary>{this.renderTeam(this.state.data)}</ErrorBoundary>
                            </div>
                            <div className='pt-dialog-footer'>
                                <ButtonGroup>
                                    <Button
                                        intent={Intent.PRIMARY}
                                        onClick={this.confirmImport}
                                        text='Upload'
                                        icon='upload'
                                    />
                                    <Button
                                        icon='tick'
                                        intent={
                                            this.state.data === '' ? Intent.NONE : Intent.SUCCESS
                                        }
                                        onClick={this.confirmImport}
                                        disabled={this.state.data === '' ? true : false}
                                        text='Confirm'
                                    />
                                </ButtonGroup>
                            </div>
                        </>
                    )}
                </Dialog>
                <ButtonGroup>
                    <Button
                        onClick={e => this.importState()}
                        icon='import'
                        className='pt-intent-primary'>
                        Import Data
                    </Button>
                    <Button onClick={e => this.exportState(this.props.state)} icon='export'>
                        Export Data
                    </Button>
                    {/* <Button icon='add' intent={Intent.SUCCESS}>
                        New Nuzlocke
                    </Button> */}
                </ButtonGroup>
                <br />
                <br />
                <Button
                    icon='trash'
                    onClick={this.toggleClearingData}
                    intent={Intent.DANGER}
                    className='pt-minimal'>
                    Clear All Data
                </Button>
                {/* <div className='pt-label pt-inline' style={{ padding: '1rem' }}>
                    <span>Upload Save file</span>
                    <input ref={ref => this.fileInput = ref } onChange={this.uploadFile} type='file' id='file' name='file' accept='.sav' />
                </div> */}
            </div>
        );
    }
}

export const DataEditor = connect((state: any) => ({ state: state }), {
    replaceState,
})(DataEditorBase as any);

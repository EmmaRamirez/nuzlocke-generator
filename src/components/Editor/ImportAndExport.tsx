import * as React from 'react';
import { connect } from 'react-redux';
import { Button, ButtonGroup, Dialog, Callout, TextArea, Intent } from '@blueprintjs/core';
import { PokemonIcon } from './PokemonIcon';
import { ErrorBoundary } from 'components/Shared';
import * as uuid from 'uuid/v4';

import { replaceState } from 'actions';

export interface ImportAndExportProps {
    state: any;
    replaceState: replaceState;
}

export interface ImportAndExportState {
    isOpen: boolean;
    mode: 'import' | 'export';
    data: string;
    href: string;
}

export class ImportAndExportBase extends React.Component<
    ImportAndExportProps,
    ImportAndExportState
> {
    public textarea: any;

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
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
                        return <PokemonIcon key={p.id} {...p} />;
                    })}
                </div>
            );
        } else {
            return null;
        }
    }

    public render() {
        return (
            <div style={{ padding: '1rem' }}>
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
                    <Button icon='add' intent={Intent.SUCCESS}>New Nuzlocke</Button>
                </ButtonGroup>
            </div>
        );
    }
}

export const ImportAndExport = connect((state: any) => ({ state: state }), {
    replaceState,
})(ImportAndExportBase as any);

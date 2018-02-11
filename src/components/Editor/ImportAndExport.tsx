import * as React from 'react';
import { connect } from 'react-redux';
import { Button, ButtonGroup, Dialog, Callout, TextArea } from '@blueprintjs/core';

import { replaceState } from 'actions';

export interface ImportAndExportProps {
    state: any;
    replaceState: replaceState;
}

export class ImportAndExportBase extends React.Component<
    ImportAndExportProps,
    { isOpen: boolean; mode: 'import' | 'export', data: string }
> {
    public textarea: any;

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            mode: 'export',
            data: '',
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
        delete state.router;
        delete state._persist;
        this.setState({ isOpen: true });
    };
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
                    {
                        this.state.mode === 'export' ?
                        <>
                            <Callout>Copy this and paste it somewhere safe!</Callout>
                            <div
                                style={{ height: '40vh', overflow: 'auto' }}
                                className='pt-dialog-body has-nice-scrollbars'>
                                <span suppressContentEditableWarning={true} contentEditable={true}>
                                    {JSON.stringify(this.props.state, null, 2)}
                                </span>
                            </div>
                        </>
                        :
                        <>
                            <div className='pt-dialog-body has-nice-scrollbars'>
                                <TextArea
                                    className='custom-css-input pt-fill'
                                    onChange={(e:any) => this.setState({ data: e.target.value }) }
                                    value={this.state.data}
                                    large={true}
                                />
                            </div>
                            <div className='pt-dialog-footer'>
                                <Button onClick={this.confirmImport} text='Confirm' />
                            </div>
                        </>
                    }
                </Dialog>
                <ButtonGroup>
                    <Button
                        onClick={e => this.importState()}
                        icon='import'
                        className='pt-intent-primary'
                    >
                        Import
                    </Button>
                    <Button onClick={e => this.exportState(this.props.state)} icon='export'>
                        Export
                    </Button>
                </ButtonGroup>
            </div>
        );
    }
}

export const ImportAndExport = connect((state: any) => ({ state: state }), {
    replaceState
})(ImportAndExportBase as any);

import * as React from 'react';
import { connect } from 'react-redux';
import { Button, ButtonGroup, Dialog, Callout } from '@blueprintjs/core';

import { editGame } from 'actions';

export interface ImportAndExportProps {
    state: any;
}

export class ImportAndExportBase extends React.Component<
    ImportAndExportProps,
    { isOpen: boolean; mode: 'import' | 'export' }
> {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            mode: 'export',
        };
    }

    private importState = () => {};

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
                    <Callout>Copy this and paste it somewhere safe!</Callout>
                    <div
                        style={{ height: '40vh', overflow: 'auto' }}
                        className='pt-dialog-body has-nice-scrollbars'>
                        <span suppressContentEditableWarning={true} contentEditable={true}>
                            {JSON.stringify(this.props.state, null, 2)}
                        </span>
                    </div>
                </Dialog>
                <ButtonGroup>
                    <Button
                        onClick={e => this.importState()}
                        icon='import'
                        className='pt-intent-primary'
                        disabled
                        title={`Sorry this doesn't work yet -_-`}
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
    editGame,
})(ImportAndExportBase as any);

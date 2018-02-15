import * as React from 'react';
import { Button, IDialogProps, Dialog, Intent } from '@blueprintjs/core';
import { connect } from 'react-redux';

import { editRule, addRule, deleteRule } from 'actions';

export interface RulesEditorProps {
    rules: string[];
    editRule: editRule;
    addRule: addRule;
    deleteRule: deleteRule;
}

export class RulesEditor extends React.Component<RulesEditorProps> {
    constructor(props) {
        super(props);
    }

    public renderRules() {
        return this.props.rules.map((rule, index) => (
            <li key={index}>
                <input
                    style={{
                        background: 'transparent',
                        border: 'none',
                        borderBottom: '1px dashed #222',
                        width: '80%',
                        textOverflow: 'ellipsis',
                        margin: '.25rem',
                    }}
                    type='text'
                    defaultValue={rule}
                    onChange={e => this.props.editRule(index, e.target.value)}
                />
                <span
                    role='action'
                    onClick={e => this.props.deleteRule(index)}
                    className='pt-icon pt-icon-cross'
                />
            </li>
        ));
    }

    public render() {
        return (
            <>
                <ol>{this.renderRules()}</ol>
                <Button onClick={_ => this.props.addRule()} intent={Intent.PRIMARY}>
                    Add Rule
                </Button>
            </>
        );
    }
}

export const RulesEditorDialogBase = (
    props: RulesEditorProps & { onClose: any; isOpen: boolean },
) => {
    return (
        <Dialog
            isOpen={props.isOpen}
            onClose={props.onClose}
            className='rules-editor-dialog'
            title='Rules Editor'
            icon='edit'>
            <div className='pt-dialog-body'>
                <RulesEditor
                    rules={props.rules}
                    editRule={props.editRule}
                    addRule={props.addRule}
                    deleteRule={props.deleteRule}
                />
            </div>
        </Dialog>
    );
};

export const RulesEditorDialog = connect(
    (state: any) => ({
        rules: state.rules,
    }),
    { editRule, addRule, deleteRule },
)(RulesEditorDialogBase as any);

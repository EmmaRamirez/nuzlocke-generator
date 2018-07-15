import * as React from 'react';
import { Button, IDialogProps, Dialog, Intent, TextArea, Icon } from '@blueprintjs/core';
import { connect } from 'react-redux';

import { editRule, addRule, deleteRule, resetRules } from 'actions';

import './RulesEditor.styl';

export interface RulesEditorProps {
    rules: string[];
    editRule: editRule;
    addRule: addRule;
    deleteRule: deleteRule;
    resetRules: resetRules;
}

export class RulesEditor extends React.Component<RulesEditorProps> {
    constructor(props) {
        super(props);
    }

    public renderRules() {
        return this.props.rules.map((rule, index) => (
            <li className='rules-list-item' key={index}>
                <div className='rule-no'>{ index + 1 }</div>
                <TextArea
                    value={rule}
                    className='pt-fill'
                    onChange={ (e:any) => this.props.editRule(index, e.target.value) }
                    dir='auto'
                />
                <div role='action' onClick={e => this.props.deleteRule(index)} className='rule-delete' title='Delete Rule'>
                    <Icon intent={Intent.DANGER} role='action' style={{ cursor: 'pointer' }} icon={'trash'} />
                </div>

                {/*
                //     style={{
                //         border: '1px solid #ccc',
                //         background: '#efefef',
                //         borderRadius: '.5rem',
                //         padding: '.25rem',
                //         margin: '.25rem',
                //         width: '100%'
                //     }}
                //     type='text'
                //     multiple
                //     defaultValue={rule}
                //     onChange={e => this.props.editRule(index, e.target.value )}
                // />
                // <span
                //     role='action'
                //     style={{ cursor: 'pointer' }}
                //     title='Delete Rule'
                //     onClick={e => this.props.deleteRule(index)}
                //     className='pt-icon pt-icon-cross'
                // />
                */}
            </li>
        ));
    }

    public renderButtons() {
        return (
            <>
                <Button onClick={_ => this.props.addRule()} intent={Intent.PRIMARY}>
                    Add Rule
                </Button>
                <Button
                    style={{ marginLeft: '1rem' }}
                    onClick={_ => {
                        this.props.resetRules();
                        this.forceUpdate();
                    }}
                    intent={Intent.WARNING}>
                    Reset Rules
                </Button>
            </>
        );
    }

    public render() {
        return (
            <>
                <ul style={{
                    listStyleType: 'none',
                    margin: '.5rem',
                    padding: '0'
                }}>{this.renderRules()}</ul>
                {this.renderButtons()}
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
                    resetRules={props.resetRules}
                />
            </div>
        </Dialog>
    );
};

export const RulesEditorDialog = connect(
    (state: any) => ({
        rules: state.rules,
    }),
    { editRule, addRule, deleteRule, resetRules },
)(RulesEditorDialogBase as any);

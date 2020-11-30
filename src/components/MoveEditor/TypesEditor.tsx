import * as React from 'react';
import { connect } from 'react-redux';
import { State } from 'state';
import { getListOfTypes, typeToColor, Types, getContrastColor } from 'utils';
import { customTypes } from 'reducers/customTypes';
import { createCustomType, deleteCustomType, editCustomType } from 'actions';
import { ColorEdit, rgbaOrHex } from 'components/Shared';
import { InputGroup, Classes, Button, Icon } from '@blueprintjs/core';

export interface TypesEditorProps {
    customTypes: State['customTypes'];
    createCustomType: createCustomType;
    deleteCustomType: deleteCustomType;
    editCustomType: editCustomType;
}

export interface TypesEditorState {
    type: string;
    color: string;
}

export class TypesEditor extends React.Component<TypesEditorProps, TypesEditorState> {
    public state = {
        type: '',
        color: '#ffffff',
    };

    public render() {
        const { customTypes, createCustomType, deleteCustomType, editCustomType } = this.props;
        return (
            <div className="types-editor">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input
                        onChange={(e) => this.setState({ type: e.target.value })}
                        style={{ margin: '4px' }}
                        value={this.state.type}
                        className={Classes.INPUT}
                        type="text"
                        placeholder="Type Name"
                    />
                    <ColorEdit
                        onChange={(e) => {
                            e?.target.value && this.setState({ color: e.target.value });
                        }}
                        value={this.state.color}
                        name="color"
                        onColorChange={(color) => this.setState({ color: rgbaOrHex(color) })}
                    />
                    <Button style={{ margin: '4px' }} onClick={() => createCustomType(this.state)}>
                        Add Type
                    </Button>
                </div>
                {customTypes.map((ct) => (
                    <div style={{ display: 'flex', alignItems: 'center' }} key={ct.id}>
                        <TypeBlock color={ct.color} customTypes={customTypes} type={ct.type} />
                        <Icon
                            style={{ color: 'red' }}
                            icon="trash"
                            onClick={(e) => deleteCustomType(ct.id)}
                        />
                    </div>
                ))}
                {getListOfTypes(customTypes).map((t, i) => (
                    <TypeBlock key={i} customTypes={customTypes} type={t} />
                ))}
            </div>
        );
    }
}

export function TypeBlock({
    type,
    customTypes,
    color,
}: {
    type: string;
    customTypes: State['customTypes'];
    color?: string;
}) {
    return (
        <div
            style={{
                background: color || typeToColor(type as Types, customTypes) || 'transparent',
                color: getContrastColor(color || typeToColor(type as Types, customTypes)),
                padding: '0.25rem 0.5rem',
                margin: '0.25rem',
                borderRadius: '0.25rem',
                width: '10rem',
            }}>
            {type}
        </div>
    );
}

import * as React from 'react';
import { connect } from 'react-redux';
import { State } from 'state';
import { getListOfTypes } from 'utils';
import { customTypes } from 'reducers/customTypes';
import { createCustomType, deleteCustomType, editCustomType } from 'actions';

export interface TypesEditorProps {
    customTypes: State['customTypes'];
    createCustomType: createCustomType;
    deleteCustomType: deleteCustomType;
    editCustomType: editCustomType;
}

export class TypesEditor extends React.Component<TypesEditorProps> {
    public render() {
        const {customTypes} = this.props;
        return <div className='types-editor'>
            {
                getListOfTypes(customTypes).map(t => <div>{t}</div>)
            }
        </div>
    }
}
import { Action } from 'actions';

export type CREATE_CUSTOM_TYPE = 'CREATE_CUSTOM_TYPE';
export const CREATE_CUSTOM_TYPE: CREATE_CUSTOM_TYPE = 'CREATE_CUSTOM_TYPE';

export type CustomType = {type: string, color: string};

export type createCustomType = (typeInfo: CustomType) => Action<CREATE_CUSTOM_TYPE>;
export function createCustomType(typeInfo): Action<CREATE_CUSTOM_TYPE> {
    return {
        type: CREATE_CUSTOM_TYPE,
        typeInfo,
    };
}

export type DELETE_CUSTOM_TYPE = 'DELETE_CUSTOM_TYPE';
export const DELETE_CUSTOM_TYPE: DELETE_CUSTOM_TYPE = 'DELETE_CUSTOM_TYPE';

export type deleteCustomType = (id: string) => Action<DELETE_CUSTOM_TYPE>;
export function deleteCustomType(id): Action<DELETE_CUSTOM_TYPE> {
    return {
        type: DELETE_CUSTOM_TYPE,
        id,
    };
}

export type EDIT_CUSTOM_TYPE = 'EDIT_CUSTOM_TYPE';
export const EDIT_CUSTOM_TYPE: EDIT_CUSTOM_TYPE = 'EDIT_CUSTOM_TYPE';

export type editCustomType = (id: string, typeInfo: CustomType) => Action<EDIT_CUSTOM_TYPE>;
export function editCustomType(id, typeInfo): Action<EDIT_CUSTOM_TYPE> {
    return {
        type: EDIT_CUSTOM_TYPE,
        id,
        typeInfo,
    };
}
import { Action } from 'actions';

export type CREATE_CUSTOM_TYPE = 'CREATE_CUSTOM_TYPE';
export const CREATE_CUSTOM_TYPE: CREATE_CUSTOM_TYPE = 'CREATE_CUSTOM_TYPE';

export type createCustomType = (typeInfo: object) => Action<CREATE_CUSTOM_TYPE>;
export function createCustomType(typeInfo: object): Action<CREATE_CUSTOM_TYPE> {
    return {
        type: CREATE_CUSTOM_TYPE,
        typeInfo,
    };
}

import { Action } from './action';
import { Badge } from '../models';

export type ADD_CUSTOM_CHECKPOINT = 'ADD_CUSTOM_CHECKPOINT';
export const ADD_CUSTOM_CHECKPOINT: ADD_CUSTOM_CHECKPOINT = 'ADD_CUSTOM_CHECKPOINT';

export type addCustomCheckpoint = (checkpoint: Badge) => Action<ADD_CUSTOM_CHECKPOINT, Badge>;
export const addCustomCheckpoint = (checkpoint: Badge): Action<ADD_CUSTOM_CHECKPOINT, Badge> => {
    return {
        type: ADD_CUSTOM_CHECKPOINT,
        checkpoint,
    };
};

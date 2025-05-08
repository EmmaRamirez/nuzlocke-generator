import { Action } from './action';
import { Badge } from '../models';

export type DELETE_CHECKPOINT = 'DELETE_CHECKPOINT';
export const DELETE_CHECKPOINT: DELETE_CHECKPOINT = 'DELETE_CHECKPOINT';

export type deleteCheckpoint = (name: Badge['name']) => Action<DELETE_CHECKPOINT, Badge['name']>;
export const deleteCheckpoint = (name: Badge['name']): Action<DELETE_CHECKPOINT, Badge['name']> => {
    return {
        type: DELETE_CHECKPOINT,
        name,
    };
};

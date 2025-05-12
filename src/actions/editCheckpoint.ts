import { Action } from './action';
import { Badge } from '../models';

export type EDIT_CHECKPOINT = 'EDIT_CHECKPOINT';
export const EDIT_CHECKPOINT: EDIT_CHECKPOINT = 'EDIT_CHECKPOINT';

export type editCheckpoint = (
  edits: Partial<Badge>,
  name
) => Action<EDIT_CHECKPOINT, Partial<Badge>>;
export const editCheckpoint = (
  edits: Partial<Badge>,
  name
): Action<EDIT_CHECKPOINT, Partial<Badge>> => {
  return {
    type: EDIT_CHECKPOINT,
    edits,
    name,
  };
};

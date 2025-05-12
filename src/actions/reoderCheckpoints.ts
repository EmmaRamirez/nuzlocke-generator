import { Action } from './action';
import { Badge } from '../models';

export type REORDER_CHECKPOINTS = 'REORDER_CHECKPOINTS';
export const REORDER_CHECKPOINTS: REORDER_CHECKPOINTS = 'REORDER_CHECKPOINTS';

export type reorderCheckpoints = (
  oldIndex: number,
  newIndex: number,
) => Action<REORDER_CHECKPOINTS, number>;
export const reorderCheckpoints = (
  oldIndex: number,
  newIndex: number,
): Action<REORDER_CHECKPOINTS, number> => {
  return {
    type: REORDER_CHECKPOINTS,
    oldIndex,
    newIndex,
  };
};

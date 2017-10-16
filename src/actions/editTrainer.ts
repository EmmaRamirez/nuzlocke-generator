import { Action } from './action';

export type EDIT_TRAINER = 'EDIT_TRAINER';
export const EDIT_TRAINER:EDIT_TRAINER = 'EDIT_TRAINER';

export function editTrainer(edits: object):Action<EDIT_TRAINER> {
  return {
    type: EDIT_TRAINER,
    edits
  };
}
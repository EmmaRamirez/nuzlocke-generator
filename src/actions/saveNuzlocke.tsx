import { Action } from './action';

export type SAVE_NUZLOCKE = 'SAVE_NUZLOCKE';
export const SAVE_NUZLOCKE:SAVE_NUZLOCKE = 'SAVE_NUZLOCKE';

export const saveNuzlocke = (nuzlocke):Action<SAVE_NUZLOCKE> => {
  return {
    type: SAVE_NUZLOCKE,
    nuzlocke
  };
};
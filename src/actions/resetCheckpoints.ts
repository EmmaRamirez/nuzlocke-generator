import { Action } from './action';
import { Game } from 'utils';

export type RESET_CHECKPOINTS = 'RESET_CHECKPOINTS';
export const RESET_CHECKPOINTS: RESET_CHECKPOINTS = 'RESET_CHECKPOINTS';

export type resetCheckpoints = (game: Game) => Action<RESET_CHECKPOINTS, Game>;
export const resetCheckpoints = (game: Game): Action<RESET_CHECKPOINTS, Game> => {
  return {
    type: RESET_CHECKPOINTS,
    game,
  };
};

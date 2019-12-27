import { Styles } from 'utils';
import { Boxes } from 'types';
import { Pokemon, Trainer, Game, Editor } from 'models';
import { Theme } from 'themes';
import { Checkpoints } from 'reducers/checkpoints';

export interface State {
    box: Boxes;
    confirmation: boolean;
    checkpoints: Checkpoints;
    editor: Editor;
    game: Game;
    pokemon: Pokemon[];
    rules: string[];
    sawRelease: { [v: string]: boolean };
    selectedId: string;
    style: Styles;
    theme: Theme;
    trainer: Trainer;
    customMoveMap: Map<string, string[]>;
}

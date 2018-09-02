import { Styles } from 'utils';
import { Boxes } from 'types';
import { Pokemon, Trainer, Game, Editor } from 'models';
import { Theme } from 'themes';

export interface State {
    box: Boxes;
    confirmation: boolean;
    editor: Editor;
    game: Game;
    pokemon: Pokemon[];
    rules: string[];
    sawRelease: { [v: string]: boolean };
    style: Styles;
    theme: Theme;
    trainer: Trainer;
}
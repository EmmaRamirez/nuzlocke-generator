import { Styles } from 'utils';
import { Pokemon, Trainer, Game, Editor, Boxes, View } from 'models';
import { Theme } from 'themes';
import { Checkpoints } from 'reducers/checkpoints';
import { Nuzlockes } from 'reducers/nuzlocke';
import { History } from 'reducers/editorHistory';

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
    customMoveMap: { move: string; type: string; id: string }[];
    customTypes: { type: string; color: string; id: string }[];
    stats: Record<'id' | 'value' | 'key', string | undefined>[];
    nuzlockes: Nuzlockes;
    editorHistory: History<any>;
    view: View;
}

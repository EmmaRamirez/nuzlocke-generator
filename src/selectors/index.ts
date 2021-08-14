import { State } from 'state';
import { omit } from 'ramda';
import { Pokemon } from 'models';

export const gameNameSelector = (state: State) => state.game.name;
export const minimizedSelector = (state: State) => state.editor.minimized;
export const editorModeSelector = (state: State) => state.style.editorDarkMode;
export const linkedPokemonSelector = (pokemon: Pokemon) => (state: State) =>
    state.pokemon.find((p) => p.id === pokemon?.linkedTo);

export const updaterSelector = (state: State) => ({
    present: omit(['editorHistory'], state),
    lrt: state?.editorHistory?.lastRevisionType,
});

export const appSelector = (state: State) => ({
    style: state.style,
    view: state.view,
    editor: state.editor,
});

export const resultSelector = (state: Partial<State>) => ({
    pokemon: state.pokemon,
    game: state.game,
    trainer: state.trainer,
    style: state.style,
    box: state.box,
    rules: state.rules,
    editor: state.editor,
});

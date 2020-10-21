import { State } from 'state';

export const gameNameSelector = (state: State) => state.game.name;
export const minimizedSelector = (state: State) => state.editor.minimized;
export const editorModeSelector = (state: State) => state.style.editorDarkMode;

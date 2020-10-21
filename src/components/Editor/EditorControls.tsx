import * as React from 'react';
import { Button, ButtonGroup } from '@blueprintjs/core';
import { last, omit } from 'ramda';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'state';
import { editorStyles } from './styles';
import { redoEditorHistory, replaceState, undoEditorHistory } from 'actions';

export function EditorControls({editorDarkMode, minimized}) {
    const present = useSelector<State, Omit<State, 'editorHistory'>>(state => omit(['editorHistory'], state));
    const editorHistory = useSelector<State, State['editorHistory']>(state => state.editorHistory);

    const dispatch = useDispatch();

    const dispatchPast = () => {
        dispatch(undoEditorHistory(present));
        dispatch(replaceState(last(editorHistory?.past)));
    };

    const dispatchFuture = () => {
        redoEditorHistory(present);
        replaceState(
            editorHistory?.future[0]
        );
    };

    return <div
        className={editorStyles.historyControls}
        style={{
            width: minimized ? '0%' : '33%',
            background: editorDarkMode ? '#222' : '#fff',
            borderBottomColor: editorDarkMode ? '#000' : '#ccc',
            display: minimized ? 'none' : 'block',
        }}>
        <ButtonGroup fill className={editorStyles.buttonGroup}>
            <Button
                disabled={editorHistory?.past?.length <= 0}
                onClick={dispatchPast}
                minimal
                fill
                icon='undo'
            />
            <Button
                disabled={editorHistory?.future?.length === 0}
                onClick={dispatchFuture}
                minimal
                fill
                icon='redo'
            />
        </ButtonGroup>
    </div>;
}

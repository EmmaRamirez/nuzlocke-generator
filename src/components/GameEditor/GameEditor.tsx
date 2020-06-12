import * as React from 'react';
import { connect } from 'react-redux';
import { editGame, changeEditorSize, editStyle, resetCheckpoints, toggleTemtemMode } from 'actions';
import { gameOfOriginToColor, listOfGames, feature } from 'utils';

import { Button, Intent, Popover, Position, Menu, Switch, Classes } from '@blueprintjs/core';
import { RulesEditorDialog } from 'components/RulesEditor';
import { State } from 'state';
import { BaseEditor } from 'components/BaseEditor';
import { NuzlockeSaveControls } from './NuzlockeSaveControls';
import { ErrorBoundary } from 'components';

export interface GameEditorProps {
    game: any;
    editGame: any;
    editor: any;
    style: State['style'];
    editStyle: editStyle;
    changeEditorSize: changeEditorSize;
    resetCheckpoints: resetCheckpoints;
    toggleTemtemMode: toggleTemtemMode;
}

const gameSubEditorStyle: any = {
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: '.25rem',
};

export class GameEditorBase extends React.Component<GameEditorProps, { isOpen: boolean }> {
    public constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    private onInput = (e) => {
        this.props.editGame({ name: e.target.value });
        this.props.editStyle({
            bgColor: gameOfOriginToColor(e.target.value),
        });
        this.props.resetCheckpoints(e.target.value);
    };

    private onInputName = (e) => {
        this.props.editGame({ customName: e.target.value });
    };

    private toggleDialog = (_) => this.setState({ isOpen: !this.state.isOpen });

    public render() {
        const { game } = this.props;
        // Awful hack to get rid of `isOpen` conflict warning
        const RED: any = RulesEditorDialog;
        return (
            <>
                <RED isOpen={this.state.isOpen} onClose={this.toggleDialog} />
                <BaseEditor name='Game'>
                    <div style={gameSubEditorStyle}>
                        <div>
                            <label
                                className={Classes.INLINE}
                                style={{ fontSize: '80%', marginRight: '.5rem' }}>
                                Version
                            </label>
                            <div className={Classes.SELECT}>
                                <select onChange={this.onInput} value={game.name}>
                                    {listOfGames.map((game) => (
                                        <option key={game}>{game}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <Button onClick={this.toggleDialog} icon="list" intent={Intent.PRIMARY}>
                            Modify Rules
                        </Button>
                    </div>
                    <div style={gameSubEditorStyle}>
                        <div style={{ fontSize: '80%' }}>
                            <label
                                className={Classes.INLINE}
                                style={{ marginRight: 'calc(.75rem + 2px)' }}>
                                Name
                            </label>
                            <input
                                onChange={this.onInputName}
                                value={game.customName}
                                autoComplete={'false'}
                                size={20}
                                className={Classes.INPUT}
                                type="text"
                                placeholder={game.name}
                            />
                        </div>
                        {feature.temTemMode && (
                            <Button
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                                className={Classes.MINIMAL}>
                                <Switch
                                    // style={{...darkModeStyle(this.props.style.editorDarkMode), marginBottom: 0}}
                                    label="TemTem Mode"
                                    checked={this.props.editor.temtemMode}
                                    onChange={(e) => this.props.toggleTemtemMode()}
                                />
                            </Button>
                        )}
                    </div>
                </BaseEditor>
            </>
        );
    }
}

export const GameEditor = connect(
    (state: Pick<State, keyof State>) => ({ game: state.game, editor: state.editor, style: state.style, }),
    {
        editGame,
        editStyle,
        changeEditorSize,
        resetCheckpoints,
        toggleTemtemMode,
    },
)(GameEditorBase as any);

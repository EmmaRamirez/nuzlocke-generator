import { Button, Intent } from '@blueprintjs/core';
import * as React from 'react';
import { connect } from 'react-redux';

import { Pokemon, Game } from 'models';
import { Boxes } from 'types';
import { State } from 'state';

import { generateEmptyPokemon } from 'utils';
import { CurrentPokemonEdit, MassEditor } from '.';

import { AddPokemonButton } from 'components/AddPokemonButton';
import { BaseEditor } from 'components/BaseEditor';
import { Box } from './Box';
import { newBox } from 'actions/newBox';

require('../../assets/img/team-box.png');
require('../../assets/img/dead-box.png');

export interface NewBox {
    name: string;
    background: string;
    inheritFrom?: string;
}

export interface PokemonEditorProps {
    team: Pokemon[];
    boxes: Boxes;
    game: Game;
}

export interface PokemonEditorState {
    isMassEditorOpen: boolean;
    isOpen: boolean;
    isBoxFormOpen: boolean;
    newBox: NewBox;
}

export class PokemonEditorBase extends React.Component<PokemonEditorProps, PokemonEditorState> {
    constructor(props: PokemonEditorProps) {
        super(props);
        this.state = {
            isMassEditorOpen: false,
            isOpen: true,
            isBoxFormOpen: false,
            newBox: {
                name: '',
                background: '',
                inheritFrom: 'Team',
            },
        };
    }

    public componentDidMount() {}

    private openMassEditor = e => {
        this.setState({
            isMassEditorOpen: true,
        });
    };

    private toggleEditor = e => this.setState({ isOpen: !this.state.isOpen });

    private renderBoxes(boxes, team) {
        return boxes.map(({ key, name }) => {
            return <Box key={key} pokemon={team} name={name} boxId={key} filterString={name} />;
        });
    }

    private addNewStatusType = e => {
        this.setState({isBoxFormOpen: true})
    }

    private confirmNewBox = e => {

    }

    private editFormInput = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            newBox: {
                ...this.state.newBox,
                [name]: value,
            }
        });
    }

    public render() {
        const { team, boxes } = this.props;
        const { isOpen, isBoxFormOpen } = this.state;

        return (
            <>
                <BaseEditor name='Pokemon'>
                    <div className='button-row' style={{ display: 'flex' }}>
                        <AddPokemonButton
                            defaultPokemon={{
                                ...generateEmptyPokemon(team),
                                gameOfOrigin: this.props.game.name || 'None',
                            }}
                        />
                        <Button
                            icon={'heat-grid'}
                            onClick={this.openMassEditor}
                            style={{ marginLeft: 'auto' }}
                            className='pt-intent-primary pt-minimal'>
                            Open Mass Editor
                        </Button>
                    </div>
                    <br />
                    {this.renderBoxes(boxes, team)}
                    <Button
                        onClick={this.addNewStatusType}
                        icon={'box'}
                        className='pt-small'
                        style={{
                            margin: '.25rem'
                        }}
                        intent={Intent.SUCCESS}
                    >
                        + New Box
                    </Button>
                    {isBoxFormOpen &&
                        <div style={{
                            border: '1px solid #111',
                            boxShadow: 'rgba(0, 0, 0, 0.33)',
                            padding: '0.5rem',
                        }}>
                            <label className='pt-label'>Name</label>
                            <input className='pt-input' autoComplete='false' onInput={this.editFormInput} value={this.state.newBox.name} name='name' placeholder='Box Name' />
                            <br/>
                            <label className='pt-label'>Background</label>
                            <input className='pt-input' onInput={this.editFormInput} value={this.state.newBox.background} name='background' placeholder='Box Background' />
                            <div style={{
                                marginTop: '0.25rem',
                                display: 'flex',
                                alignItems: 'baseline',
                            }}>
                                <label style={{marginLeft: '1rem', marginRight: '.5rem'}} className='pt-label'>Inherit Box</label>
                                <div className='pt-select'>
                                    <select onChange={this.editFormInput} value={this.state.newBox.inheritFrom} name='inheritFrom'>
                                        {boxes.map(box => <option value={box.name}>{box.name}</option>)}
                                    </select>
                                </div>
                            </div>
                            <Button
                                onClick={this.confirmNewBox}
                                intent={Intent.SUCCESS}
                            >
                                Confirm
                            </Button>
                        </div>
                    }
                    <br />
                    <CurrentPokemonEdit />
                </BaseEditor>
                <MassEditor
                    isOpen={this.state.isMassEditorOpen}
                    toggleDialog={e =>
                        this.setState({ isMassEditorOpen: !this.state.isMassEditorOpen })
                    }
                />
            </>
        );
    }
}

export const PokemonEditor = connect(
    (state: Pick<State, keyof State>) => ({
        team: state.pokemon,
        boxes: state.box,
        game: state.game,
    }),
    null,
)(PokemonEditorBase as any);

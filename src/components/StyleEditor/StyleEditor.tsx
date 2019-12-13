import * as React from 'react';
import { connect } from 'react-redux';

import { editStyle } from 'actions';
import { gameOfOriginToColor, listOfThemes, FEATURES, Game, OrientationType, Styles as StylesType } from 'utils';
import {
    RadioGroup,
    Radio,
    TextArea,
    Checkbox,
    Button,
    Intent,
    Dialog,
    Classes,
} from '@blueprintjs/core';
import { State } from 'state';
import { BaseEditor } from 'components/BaseEditor';
import { ColorEdit } from 'components/Shared';
import { cx } from 'emotion';

import * as Styles from './styles';
import { ThemeEditor } from 'components/ThemeEditor';

const editEvent = (e: any, props: StyleEditorProps, name?: keyof State['style'], game?: Game) => {
    const propName = name || e.target.name;
    props.editStyle({ [propName]: e.target.value });
    if (propName === 'template' && e.target.value === 'Default Light') {
        props.editStyle({ bgColor: '#eeeeee' });
        props.editStyle({ topHeaderColor: '#dedede' });
    }
    if (propName === 'template' && e.target.value === 'Default Dark') {
        props.editStyle({ bgColor: '#383840' });
        props.editStyle({ topHeaderColor: '#333333' });
    }
    if (propName === 'template' && e.target.value === 'Cards') {
        props.editStyle({ imageStyle: 'square' });
        props.editStyle({ movesPosition: 'horizontal' as OrientationType });
    }
    if (propName === 'template' && e.target.value === 'Hexagons') {
        props.editStyle({ resultWidth: 1320 });
        props.editStyle({ accentColor: 'transparent' });
        props.editStyle({ movesPosition: 'horizontal' as OrientationType });
    }
    if (propName === 'template' && e.target.value === 'Generations') {
        props.editStyle({
            bgColor: game ? gameOfOriginToColor(game) : '',
        });
        props.editStyle({
            minimalBoxedLayout: true,
        });
        props.editStyle({
            resultHeight: 870,
        });
        props.editStyle({
            resultWidth: 1460,
        });
        props.editStyle({ movesPosition: 'vertical' });
    }
};

export interface StyleEditorProps {
    style: StylesType;
    editStyle: editStyle;
    game: any;
}

export interface StyleEditorState {
    isThemeEditorOpen: boolean;
}

export const IconsNextToTeamPokemon = props => (
    <div className='style-edit'>
        <Checkbox
            checked={props.style.iconsNextToTeamPokemon}
            name='iconsNextToTeamPokemon'
            label='Icons Next to Team Pokémon'
            onChange={(e: any) =>
                editEvent(
                    { ...e, target: { value: e.target.checked } },
                    props,
                    'iconsNextToTeamPokemon',
                )
            }
        />
    </div>
);

export class StyleEditorBase extends React.Component<StyleEditorProps, StyleEditorState> {
    public state = { isThemeEditorOpen: false };
    private toggleThemeEditor = e =>
        this.setState({ isThemeEditorOpen: !this.state.isThemeEditorOpen });
    public render() {
        const props = this.props;
        const styleEdit = cx(Styles.styleEdit, {
            [Styles.styleEdit_dark]: props.style.editorDarkMode,
        });
        return (
            <BaseEditor name='Style'>
                <Dialog
                    isOpen={this.state.isThemeEditorOpen}
                    onClose={this.toggleThemeEditor}
                    title='Theme Editor'
                    icon='style'
                    className={cx(Styles.dialog, { [Classes.DARK]: props.style.editorDarkMode })}>
                    <ThemeEditor />
                </Dialog>
                <div className={styleEdit}>
                    <label className='pt-label pt-inline'>Template</label>
                    <div className='pt-select'>
                        <select
                            name='template'
                            onChange={e => editEvent(e, props, undefined, props.game.name)}
                            value={props.style.template}>
                            {listOfThemes.map(o => <option key={o}>{o}</option>)}
                        </select>
                    </div>
                    {FEATURES.themeEditing ? (
                        <Button
                            onClick={this.toggleThemeEditor}
                            style={{ marginLeft: '.25rem' }}
                            intent={Intent.PRIMARY}
                            className='pt-minimal'>
                            Edit Theme
                        </Button>
                    ) : null}
                </div>

                {/* {
                    props.style.template === 'Hexagons' ?
                    <div className={styleEdit}>
                        <h6>Hexagons Template Options</h6>
                    </div>
                    : null
                } */}

                <div className={styleEdit}>
                    <RadioGroup
                        className={cx(Styles.radioGroup)}
                        label='Image Style'
                        onChange={e => editEvent(e, props, 'imageStyle')}
                        selectedValue={props.style.imageStyle}>
                        <Radio label='Round' value='round' />
                        <Radio label='Square' value='square' />
                    </RadioGroup>
                </div>

                <div className={styleEdit}>
                    <RadioGroup
                        className={cx(Styles.radioGroup)}
                        label='Item Style'
                        onChange={e => editEvent(e, props, 'itemStyle')}
                        selectedValue={props.style.itemStyle}>
                        <Radio label='Round' value='round' />
                        <Radio label='Square' value='square' />
                    </RadioGroup>
                    <Checkbox
                        style={{
                            margin: '4px'
                        }}
                        checked={props.style.displayItemAsText}
                        name='displayItemAsText'
                        label='Display Items as Text'
                        onChange={(e: any) =>
                            editEvent(
                                { ...e, target: { value: e.target.checked } },
                                props,
                                'displayItemAsText',
                            )
                        }
                    />
                </div>

                <div className={styleEdit}>
                    <label className='pt-label pt-inline'>Result Dimensions</label>
                    <input
                        name='resultWidth'
                        className='pt-input small-input'
                        onChange={e => editEvent(e, props)}
                        value={props.style.resultWidth}
                        type='number'
                        min='0'
                        step='10'
                    />
                    <span style={{ marginRight: '0' }} className='pt-icon pt-icon-cross' />
                    <input
                        name='resultHeight'
                        className='pt-input small-input'
                        style={{
                            opacity: props.style.useAutoHeight ? 0.3 : 1
                        }}
                        onChange={e => editEvent(e, props)}
                        value={props.style.resultHeight}
                        type='number'
                        min='0'
                        step='10'
                    />
                    <span> </span>
                    <Checkbox
                        style={{
                            marginBottom: '0',
                            marginLeft: '10px',
                        }}
                        checked={props.style.useAutoHeight}
                        name='useAutoHeight'
                        label='Auto Height'
                        onChange={(e: any) =>
                            editEvent(
                                { ...e, target: { value: e.target.checked } },
                                props,
                                'useAutoHeight',
                            )
                        }
                    />
                </div>
                <div className={styleEdit}>
                    <label className='pt-label pt-inline'>Background color</label>
                    <ColorEdit
                        onChange={e => editEvent(e, props)}
                        name={'bgColor'}
                        value={props.style.bgColor}
                    />
                </div>

                <div className={styleEdit}>
                    <label className='pt-label pt-inline'>Accent color</label>
                    <ColorEdit
                        onChange={e => editEvent(e, props)}
                        name={'accentColor'}
                        value={props.style.accentColor}
                    />
                </div>

                <div className={styleEdit}>
                    <label className='pt-label pt-inline'>Header color</label>
                    <ColorEdit
                        name='topHeaderColor'
                        onChange={e => editEvent(e, props)}
                        value={props.style.topHeaderColor}
                    />
                </div>

                <div className={styleEdit}>
                    <label className='pt-label pt-inline'>Background Image</label>
                    <input
                        value={props.style.backgroundImage}
                        name='backgroundImage'
                        onChange={e => editEvent(e, props)}
                        className='pt-input'
                    />
                    <span> </span>
                    <Checkbox
                        style={{
                            marginBottom: '0',
                            marginLeft: '10px',
                        }}
                        checked={props.style.tileBackground}
                        name='tileBackground'
                        label='Tile'
                        onChange={(e: any) =>
                            editEvent(
                                { ...e, target: { value: e.target.checked } },
                                props,
                                'tileBackground',
                            )
                        }
                    />
                </div>

                <div className={styleEdit}>
                    <RadioGroup
                        className={cx(Styles.radioGroup)}
                        label='Moves Position'
                        onChange={e => editEvent(e, props, 'movesPosition')}
                        selectedValue={props.style.movesPosition}>
                        <Radio label='Horizontal' value='horizontal' />
                        <Radio label='Vertical' value='vertical' />
                    </RadioGroup>
                </div>

                <div className={styleEdit}>
                    <RadioGroup
                        className={cx(Styles.radioGroup)}
                        label='Trainer Section Position'
                        onChange={e => editEvent(e, props, 'trainerSectionOrientation')}
                        selectedValue={props.style.trainerSectionOrientation}>
                        <Radio label='Horizontal' value='horizontal' />
                        <Radio label='Vertical' value='vertical' />
                    </RadioGroup>
                </div>

                <div className={styleEdit}>
                    <RadioGroup
                        className={cx(Styles.radioGroup)}
                        label='Team Images'
                        onChange={e => editEvent(e, props, 'teamImages')}
                        selectedValue={props.style.teamImages}>
                        <Radio label='Standard' value='standard' />
                        <Radio label='Sugimori' value='sugimori' />
                    </RadioGroup>
                </div>

                <div className={styleEdit}>
                    <label className='pt-label pt-inline'>Pokemon Per Line (Boxed)</label>
                    <input
                        name='boxedPokemonPerLine'
                        className='pt-input small-input'
                        onChange={e => editEvent(e, props)}
                        value={props.style.boxedPokemonPerLine}
                        type='number'
                        min='01'
                        step='1'
                        max='20'
                    />
                </div>

                <div className={styleEdit}>
                    <Checkbox
                        checked={props.style.teamPokemonBorder}
                        name='teamPokemonBorder'
                        label='Team Pokémon Gradient Backgrounds'
                        onChange={(e: any) =>
                            editEvent(
                                { ...e, target: { value: e.target.checked } },
                                props,
                                'teamPokemonBorder',
                            )
                        }
                    />
                </div>

                <div className={styleEdit}>
                    <Checkbox
                        checked={props.style.showPokemonMoves}
                        name='showPokemonMoves'
                        label='Show Pokémon Moves'
                        onChange={(e: any) =>
                            editEvent(
                                { ...e, target: { value: e.target.checked } },
                                props,
                                'showPokemonMoves',
                            )
                        }
                    />
                </div>

                <div className={styleEdit}>
                    <Checkbox
                        checked={props.style.minimalTeamLayout}
                        name='minimalTeamLayout'
                        label='Minimal Team Layout'
                        onChange={(e: any) =>
                            editEvent(
                                { ...e, target: { value: e.target.checked } },
                                props,
                                'minimalTeamLayout',
                            )
                        }
                    />
                </div>

                <div className={styleEdit}>
                    <Checkbox
                        checked={props.style.minimalBoxedLayout}
                        name='minimalBoxedLayout'
                        label='Minimal Boxed Layout'
                        onChange={(e: any) =>
                            editEvent(
                                { ...e, target: { value: e.target.checked } },
                                props,
                                'minimalBoxedLayout',
                            )
                        }
                    />
                </div>

                <div className={styleEdit}>
                    <Checkbox
                        checked={props.style.minimalDeadLayout}
                        name='minimalDeadLayout'
                        label='Minimal Dead Layout'
                        onChange={(e: any) =>
                            editEvent(
                                { ...e, target: { value: e.target.checked } },
                                props,
                                'minimalDeadLayout',
                            )
                        }
                    />
                </div>

                <div className={styleEdit}>
                    <Checkbox
                        checked={props.style.displayBadges}
                        name='displayBadges'
                        label='Display Badges'
                        onChange={(e: any) =>
                            editEvent(
                                { ...e, target: { value: e.target.checked } },
                                props,
                                'displayBadges',
                            )
                        }
                    />
                </div>

                <div className={styleEdit}>
                    <Checkbox
                        checked={props.style.displayRules}
                        name='displayRules'
                        label='Display Nuzlocke Rules'
                        onChange={(e: any) =>
                            editEvent(
                                { ...e, target: { value: e.target.checked } },
                                props,
                                'displayRules',
                            )
                        }
                    />
                </div>

                <div className={styleEdit}>
                    <Checkbox
                        checked={props.style.displayExtraData}
                        name='displayExtraData'
                        label='Display Extra Data from Save Files'
                        onChange={(e: any) =>
                            editEvent(
                                { ...e, target: { value: e.target.checked } },
                                props,
                                'displayExtraData',
                            )
                        }
                    />
                </div>

                <div className={styleEdit}>
                    <Checkbox
                        checked={props.style.usePokemonGBAFont}
                        name='usePokemonGBAFont'
                        label='Use Pokémon GBA Font'
                        onChange={(e: any) =>
                            editEvent(
                                { ...e, target: { value: e.target.checked } },
                                props,
                                'usePokemonGBAFont',
                            )
                        }
                    />
                </div>

                <div className={styleEdit}>
                    <Checkbox
                        checked={props.style.oldMetLocationFormat}
                        name='oldMetLocationFormat'
                        label='Old Met Location Format'
                        onChange={(e: any) =>
                            editEvent(
                                { ...e, target: { value: e.target.checked } },
                                props,
                                'oldMetLocationFormat',
                            )
                        }
                    />
                </div>

                <div className={styleEdit}>
                    <Checkbox
                        checked={props.style.grayScaleDeadPokemon}
                        name='grayScaleDeadPokemon'
                        label='Gray Scale Filter Dead Pokémon Images'
                        onChange={(e: any) =>
                            editEvent(
                                { ...e, target: { value: e.target.checked } },
                                props,
                                'grayScaleDeadPokemon',
                            )
                        }
                    />
                </div>

                <div className={styleEdit}>
                    <Checkbox
                        checked={props.style.spritesMode}
                        name='spritesMode'
                        label='Sprites Mode'
                        onChange={(e: any) =>
                            editEvent(
                                { ...e, target: { value: e.target.checked } },
                                props,
                                'spritesMode',
                            )
                        }
                    />
                </div>

                <div className={styleEdit}>
                    <Checkbox
                        checked={props.style.scaleSprites}
                        name='scaleSprites'
                        label='Scale Sprites'
                        onChange={(e: any) =>
                            editEvent(
                                { ...e, target: { value: e.target.checked } },
                                props,
                                'scaleSprites',
                            )
                        }
                    />
                </div>

                <div className={styleEdit}>
                    <Checkbox
                        checked={props.style.useSpritesForChampsPokemon}
                        name='useSpritesForChampsPokemon'
                        label='Use Sprites for Champs Pokémon'
                        onChange={(e: any) =>
                            editEvent(
                                { ...e, target: { value: e.target.checked } },
                                props,
                                'useSpritesForChampsPokemon',
                            )
                        }
                    />
                </div>

                <div className={styleEdit}>
                    <Checkbox
                        checked={props.style.displayGameOriginForBoxedAndDead}
                        name='displayGameOriginForBoxedAndDead'
                        label='Display Game Origin for Boxed and Dead'
                        onChange={(e: any) =>
                            editEvent(
                                { ...e, target: { value: e.target.checked } },
                                props,
                                'displayGameOriginForBoxedAndDead',
                            )
                        }
                    />
                </div>

                <div className={styleEdit} style={{
                    marginLeft: '1rem',
                    opacity: props.style.displayGameOriginForBoxedAndDead ? '1' : '0.3',
                    pointerEvents: props.style.displayGameOriginForBoxedAndDead ? undefined : 'none'
                } as any}>
                    <Checkbox
                        checked={props.style.displayBackgroundInsteadOfBadge}
                        name='displayBackgroundInsteadOfBadge'
                        label='Display Background Color Instead of Badge'
                        onChange={(e: any) =>
                            editEvent(
                                { ...e, target: { value: e.target.checked } },
                                props,
                                'displayBackgroundInsteadOfBadge',
                            )
                        }
                    />
                </div>

                <div className='custom-css-input-wrapper'>
                    <label style={{ padding: '.5rem' }} className='pt-label'>
                        Custom CSS {/*<a href=''>Check out Layout Guide</a>*/}
                    </label>
                    <TextArea
                        large={true}
                        onChange={e => editEvent(e, props, 'customCSS')}
                        className='custom-css-input pt-fill'
                        value={props.style.customCSS}
                    />
                    <style>{props.style.customCSS}</style>
                </div>
            </BaseEditor>
        );
    }
}

export const StyleEditor = connect(
    (state: Pick<State, keyof State>) => ({ style: state.style, game: state.game }),
    {
        editStyle,
    },
)(StyleEditorBase);

import * as React from 'react';
import { connect } from 'react-redux';

import { editStyle } from 'actions';
import { styleDefaults } from 'utils';

import { RadioGroup, Radio, TextArea, Checkbox } from '@blueprintjs/core';

const styleOptions = [
    // 'Default Light',
    'Default Dark',
];

const value = `body {
    color: red;
}`;

const editEvent = (e, props, name?) => props.editStyle({ [name || e.target.name]: e.target.value });

// tslint:disable-next-line:no-empty-interfaces
export interface StyleEditorProps {
    style: any;
    editStyle: editStyle;
}

export const ColorEdit = ({ value, onChange, name }) => {
    return (
        <div className='color-edit-wrapper'>
            <input
                name={name}
                onChange={onChange}
                className='color-input'
                type='color'
                value={value}
            />
            <input
                style={{ border: 'none' }}
                onChange={onChange}
                type='text'
                name={name}
                value={value}
            />
        </div>
    );
};

export const StyleEditorBase = (props: StyleEditorProps) => {
    const getStyleProp = (prop: string) => {
        if (props && props.style && props.style[prop]) props.style[prop];
        else return styleDefaults[prop];
    };
    return (
        <div className='style-editor'>
            <h4>Style</h4>
            <div className='style-edit'>
                <label className='pt-label pt-inline'>Template</label>
                <div className='pt-select'>
                    <select
                        name='template'
                        onChange={e => editEvent(e, props)}
                        value={props.style.template}>
                        {styleOptions.map(o => <option key={o}>{o}</option>)}
                    </select>
                </div>
            </div>

            <div className='style-edit'>
                <label className='pt-label pt-inline'>Image Style </label>
                <div className='pt-select'>
                    <select
                        name='imageStyle'
                        onChange={e => editEvent(e, props)}
                        value={props.style.imageStyle}>
                        <option value='round'>Round</option>
                        <option value='square'>Square</option>
                    </select>
                </div>
            </div>

            <div className='style-edit'>
                <label className='pt-label pt-inline'>Result Dimensions</label>
                <input
                    name='resultWidth'
                    className='pt-input small-input'
                    onChange={e => editEvent(e, props)}
                    value={props.style.resultWidth}
                />
                <span style={{ marginRight: '0' }} className='pt-icon pt-icon-cross' />
                <input
                    name='resultHeight'
                    className='pt-input small-input'
                    onChange={e => editEvent(e, props)}
                    value={props.style.resultHeight}
                />
            </div>

            <div className='style-edit'>
                <label className='pt-label pt-inline'>Background color</label>
                <ColorEdit
                    onChange={e => editEvent(e, props)}
                    name={'bgColor'}
                    value={props.style.bgColor}
                />
            </div>

            <div className='style-edit'>
                <label className='pt-label pt-inline'>Header color</label>
                <ColorEdit
                    name='topHeaderColor'
                    onChange={e => editEvent(e, props)}
                    value={props.style.topHeaderColor}
                />
            </div>

            <div className='style-edit'>
                <label className='pt-label pt-inline'>Background Image</label>
                <input
                    value={props.style.backgroundImage}
                    name='backgroundImage'
                    onChange={e => editEvent(e, props)}
                    className='pt-input'
                />
            </div>

            <div className='style-edit'>
                <RadioGroup
                    className='radio-group'
                    label='Moves Position'
                    onChange={e => editEvent(e, props, 'movesPosition')}
                    selectedValue={props.style.movesPosition}>
                    <Radio label='Horizontal' value='horizontal' />
                    <Radio label='Vertical' value='vertical' />
                </RadioGroup>
            </div>

            <div className='style-edit'>
                <RadioGroup
                    className='radio-group'
                    label='Team Images'
                    onChange={e => editEvent(e, props, 'teamImages')}
                    selectedValue={props.style.teamImages}>
                    <Radio label='Standard' value='standard' />
                    <Radio label='Sugimori' value='sugimori' />
                    <Radio disabled label='Dream World' value='dreamworld' />
                </RadioGroup>
            </div>

            {/* <div className='style-edit'>
                <Checkbox
                    checked={props.style.iconsNextToTeamPokemon}
                    name='iconsNextToTeamPokemon'
                    label='Icons Next to Team Pokemon'
                    onChange={(e:any) => editEvent({ ...e, target: { value: e.target.checked }}, props, 'iconsNextToTeamPokemon')}
                />
            </div> */}

            <div className='style-edit'>
                <Checkbox
                    checked={props.style.teamPokemonBorder}
                    name='teamPokemonBorder'
                    label='Team Pokemon Gradient Backgrounds'
                    onChange={(e:any) => editEvent({ ...e, target: { value: e.target.checked }}, props, 'teamPokemonBorder')}
                />
            </div>

            <div className='style-edit'>
                <Checkbox
                    checked={props.style.minimalTeamLayout}
                    name='minimalTeamLayout'
                    label='Minimal Team Layout'
                    onChange={(e:any) => editEvent({ ...e, target: { value: e.target.checked }}, props, 'minimalTeamLayout')}
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
        </div>
    );
};

export const StyleEditor = connect((state: any) => ({ style: state.style }), { editStyle })(
    StyleEditorBase,
);

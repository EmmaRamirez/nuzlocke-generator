import * as React from 'react';
import { connect } from 'react-redux';

import { editStyle } from 'actions';
import { styleDefaults } from 'utils';

import { RadioGroup, Radio, TextArea, Checkbox } from '@blueprintjs/core';

const styleOptions = ['Default Light', 'Default Dark'];

const value = `body {
    color: red;
}`;

const editEvent = (e, props) => props.editStyle({ [e.target.name]: e.target.value });

// tslint:disable-next-line:no-empty-interfaces
export interface StyleEditorProps {
    style: any;
    editStyle: editStyle;
}

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
                    <select>{styleOptions.map(o => <option key={o}>{o}</option>)}</select>
                </div>
            </div>

            <div className='style-edit'>
                <label className='pt-label pt-inline'>Image Style </label>
                <div className='pt-select'>
                    <select onChange={e => editEvent(e, props)} value={props.style.imageStyle}>
                        <option value='round'>Round</option>
                        <option value='square'>Square</option>
                    </select>
                </div>
            </div>

            <div className='style-edit'>
                <label className='pt-label pt-inline'>Background color</label>
                <input
                    name='bgColor'
                    onChange={e => editEvent(e, props)}
                    className='color-input'
                    type='color'
                    value={props.style.bgColor}
                />
            </div>

            <div className='style-edit'>
                <label className='pt-label pt-inline'>Header color</label>
                <input
                    name='topHeaderColor'
                    onChange={e => editEvent(e, props)}
                    className='color-input'
                    type='color'
                    value={props.style.topHeaderColor}
                />
            </div>

            <div className='style-edit'>
                <label className='pt-label pt-inline'>Background Image</label>
                <input
                    value={props.style.backgroundImage}
                    onChange={e => editEvent(e, props)}
                    className='pt-input'
                />
            </div>

            <div className='style-edit'>
                <RadioGroup
                    className='radio-group'
                    label='Moves Position'
                    onChange={e => {}}
                    selectedValue={'horizontal'}>
                    <Radio label='Horizontal' value='horizontal' />
                    <Radio label='Vertical' value='vertical' />
                </RadioGroup>
            </div>

            <div className='style-edit'>
                <RadioGroup
                    className='radio-group'
                    label='Team Images'
                    onChange={e => {}}
                    selectedValue={'horizontal'}>
                    <Radio label='Standard' value='standard' />
                    <Radio label='Dream World' value='dreamworld' />
                    <Radio label='Sugimori' value='sugimori' />
                </RadioGroup>
            </div>

            <div className='style-edit'>
                <Checkbox checked={false} label='Icons Next to Team Pokemon' onChange={e => {}} />
            </div>

            <div className='custom-css-input-wrapper'>
                <label className='pt-label'>Custom CSS</label>
                <TextArea
                    large={true}
                    onChange={e => {}}
                    className='custom-css-input pt-fill'
                    value={value}
                />
            </div>
        </div>
    );
};

export const StyleEditor = connect((state: any) => ({ style: state.style }), { editStyle })(
    StyleEditorBase,
);

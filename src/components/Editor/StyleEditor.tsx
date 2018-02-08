import * as React from 'react';
import { connect } from 'react-redux';

import { RadioGroup, Radio, TextArea } from '@blueprintjs/core';

const styleOptions = [
    'Default Light',
    'Default Dark',
];

const value = `body {
    color: red;
}`;

// tslint:disable-next-line:no-empty-interfaces
export interface StyleEditorProps {

}

export const StyleEditorBase = ({ }: StyleEditorProps) => {
    return (
        <div className='style-editor'>
            <h4>Style</h4>
            <div className='style-edit'>
                <span>Template </span>
                <div className='pt-select'>
                    <select>
                        {
                            styleOptions.map(o => <option key={o}>{o}</option>)
                        }
                    </select>
                </div>
            </div>

            <div className='style-edit'>
                <span>Icon Style </span>
                <div className='pt-select'>
                    <select>
                        <option>Round</option>
                        <option>Square</option>
                    </select>
                </div>
            </div>

            <div className='style-edit'>
                <span>Icon Style </span>
                <div className='pt-select'>
                    <select>
                        <option>Round</option>
                        <option>Square</option>
                    </select>
                </div>
            </div>

            <div className='style-edit'>
                <RadioGroup
                    className='radio-group'
                    label='Moves Position'
                    onChange={ e => {} }
                    selectedValue={'horizontal'}
                >
                    <Radio label='Horizontal' value='horizontal' />
                    <Radio label='Vertical' value='vertical' />
                </RadioGroup>
            </div>

            <div className='custom-css-input-wrapper'>
                <div>Custom CSS</div>
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

export const StyleEditor = connect(
    null,
    null
)(StyleEditorBase);
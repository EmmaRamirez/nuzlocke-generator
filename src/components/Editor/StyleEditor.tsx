import * as React from 'react';
import { connect } from 'react-redux';

const styleOptions = [
    'Default Light',
    'Default Dark',
];

// tslint:disable-next-line:no-empty-interfaces
export interface StyleEditorProps {

}

export const StyleEditorBase = ({ }: StyleEditorProps) => {
    return (
        <div className='style-editor'>
            <h4>Style</h4>
            <div>
                <span>Template </span>
                <div className='pt-select'>
                    <select>
                        {
                            styleOptions.map(o => <option key={o}>{o}</option>)
                        }
                    </select>
                </div>
            </div>
        </div>
    );
};

export const StyleEditor = connect(
    null,
    null
)(StyleEditorBase);
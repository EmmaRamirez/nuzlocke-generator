import * as React from 'react';
import { connect } from 'react-redux';
import { BaseEditor } from '../BaseEditor';

const accentedE = '\xE9';

export const hotkeyList = [
    {
        key: 'j',
        comment: `Prevous Pok${accentedE}mon`
    },
    {
        key: 'k',
        comment: `Next Pok${accentedE}mon`
    }
];

// tslint:disable-next-line:no-empty-interfaces
export interface HotkeysEditorState {

}

export class HotkeysEditor extends React.Component<{}> {
    constructor(props) {
        super(props);
    }

    public render() {
        return (
            <BaseEditor name='Hotkeys'>
                <ul style={{ listStyleType: 'none', paddingLeft: '1rem' }} className='hotkey-list'>
                    {
                        hotkeyList.map(item => (
                            <li style={{ display: 'flex' }}>
                                <code style={{ margin: '4px' }} className='pt-code'>{ item.key }</code>
                                <div style={{ margin: '4px' }}>{ item.comment }</div>
                            </li>
                        ))
                    }
                </ul>
            </BaseEditor>
        );
    }
}
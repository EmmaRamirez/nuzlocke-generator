import * as React from 'react';
import { BaseEditor } from 'components/BaseEditor';
import { listOfHotkeys } from 'utils';
import { Classes } from '@blueprintjs/core';

// tslint:disable-next-line:no-empty-interfaces
export interface HotkeysEditorState {}

export class HotkeysEditor extends React.Component<{}> {
    public constructor(props) {
        super(props);
    }

    public render() {
        return (
            <BaseEditor icon='key-command' name="Hotkeys">
                <ul style={{ listStyleType: 'none', paddingLeft: '1rem', columnCount: 2, breakInside: 'avoid' }} className="hotkey-list">
                    {listOfHotkeys.map((item) => (
                        <li key={item.key} style={{ display: 'flex' }}>
                            <kbd style={{ margin: '4px' }} className={Classes.CODE}>
                                {item?.label ?? item.key}
                            </kbd>
                            <div style={{ margin: '4px' }}>{item.comment}</div>
                        </li>
                    ))}
                </ul>
            </BaseEditor>
        );
    }
}

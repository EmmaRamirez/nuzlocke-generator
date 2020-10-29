import * as React from 'react';
import { BaseEditor } from 'components/BaseEditor';
import { listOfHotkeys } from 'utils';

// tslint:disable-next-line:no-empty-interfaces
export interface HotkeysEditorState {}

export class HotkeysEditor extends React.Component<{}> {
    public constructor(props) {
        super(props);
    }

    public render() {
        return (
            <BaseEditor name="Hotkeys">
                <ul style={{ listStyleType: 'none', paddingLeft: '1rem', columnCount: 2, }} className="hotkey-list">
                    {listOfHotkeys.map((item) => (
                        <li key={item.key} style={{ display: 'flex' }}>
                            <kbd style={{ margin: '4px' }} className="bp3-code">
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

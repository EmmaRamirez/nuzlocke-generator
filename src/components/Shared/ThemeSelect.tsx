import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Classes } from '@blueprintjs/core';

import { listOfThemes } from 'utils';
import { reducers } from 'reducers';
import { editStyle } from 'actions';

export interface ThemeSelectProps {
    theme: string;
    onChange?: Function;
}

export const ThemeSelectBase = ({ theme, onChange }) => (
    <div className={Classes.SELECT}>
        <select value={theme} onChange={e => onChange({ template: e.target.value })}>
            {listOfThemes.map(o => <option value={o}>{o}</option>)}
        </select>
    </div>
);

export const ThemeSelect = connect(null, { onChange: editStyle })(ThemeSelectBase);

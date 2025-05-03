import * as React from 'react';
import { connect } from 'react-redux';
import { Classes, HTMLSelect } from '@blueprintjs/core';

import { listOfThemes } from 'utils';
import { editStyle } from 'actions';

export interface ThemeSelectProps {
    theme: string;
    onChange?: Function;
}

export const ThemeSelectBase = ({ theme, onChange }) => (
    <HTMLSelect value={theme} onChange={(e) => onChange({ template: e.target.value })}>
        {listOfThemes.map((o) => (
            <option value={o}>{o}</option>
        ))}
    </HTMLSelect>
);

export const ThemeSelect = connect(null, { onChange: editStyle })(ThemeSelectBase);

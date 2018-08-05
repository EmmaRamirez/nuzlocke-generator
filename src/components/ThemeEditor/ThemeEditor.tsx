import * as React from 'react';
import { connect } from 'react-redux';
import { cx } from 'emotion';

import * as Styles from './styles';

// tslint:disable-next-line:no-empty-interfaces
export interface ThemeEditorProps {

}

export class ThemeEditorBase extends React.Component<ThemeEditorProps> {
    public render() {
        return (
            <>
                <div className={cx(Styles.sidebar)}>

                </div>
                <div className={''}>

                </div>
            </>
        );
    }
}

export const ThemeEditor = connect(
    null,
    null,
)(ThemeEditorBase);
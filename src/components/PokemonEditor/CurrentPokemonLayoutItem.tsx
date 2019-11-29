import * as React from 'react';
import { cx, css } from 'emotion';

const style = {
    Layout: css`
        align-items: center;
        display: flex;
        width: 100%;
    `,
    disabled: css`
        pointer-events: none;
        opacity: 0.85;
    `,
};

export class CurrentPokemonLayoutItem extends React.PureComponent<{disabled?: boolean}> {
    public render() {
        return <div className={cx(style.Layout, this.props.disabled && style.disabled)}>{this.props.children}</div>;
    }
}

import * as React from 'react';
import { cx, css } from 'emotion';

const style = {
    Layout: css`
        align-items: center;
        display: flex;
        width: 100%;
        flex-wrap: wrap;
    `,
    disabled: css`
        pointer-events: none;
        opacity: 0.85;
    `,
    checkboxes: css`
        margin-top: -1rem;
        padding: 0.5rem;
    `,
};

export class CurrentPokemonLayoutItem extends React.PureComponent<{
    disabled?: boolean;
    checkboxes?: boolean;
}> {
    public render() {
        return (
            <div
                className={cx(
                    style.Layout,
                    this.props.disabled && style.disabled,
                    this.props.checkboxes && style.checkboxes,
                )}>
                {this.props.children}
            </div>
        );
    }
}

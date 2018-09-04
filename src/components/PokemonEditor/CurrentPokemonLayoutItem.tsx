import * as React from 'react';
import { cx, css } from 'emotion';


const style = {
    Layout: css`
        align-items: center;
        display: flex;
        width: 100%;
    `
};

export class CurrentPokemonLayoutItem extends React.PureComponent {
    public render() {
        return (
            <div className={cx(style.Layout)}>
                { this.props.children }
            </div>
        );
    }
}
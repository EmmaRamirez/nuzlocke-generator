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

export function CurrentPokemonLayoutItem({
    disabled, checkboxes, className, children
}: {disabled?: boolean;
    checkboxes?: boolean;
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <div
            className={cx(
                className ?? '',
                style.Layout,
                disabled && style.disabled,
                checkboxes && style.checkboxes,
            )}>
            {children}
        </div>
    );
}

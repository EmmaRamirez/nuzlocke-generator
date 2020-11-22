import { css } from 'emotion';

export const editorStyles = {
    base: css`
        min-width: 30rem;
        max-width: 40rem;
        min-height: 100vh;
        padding: 0.25rem;
        position: relative;
    `,
    historyControls: css`
        left: 0;
        position: sticky;
        top: -.25rem;
        z-index: 12;
        border-bottom: 1px solid;
        min-width: 100%;
        max-width: 100%;
    `,
    buttonGroup: css`
        width: 100%;
        padding: 0.25rem;
    `,
    edit: css`
        display: flex;
        padding: 0.25rem;
        border-radius: 0.25rem;
        border: 1px solid #eee;
        margin: 2px;
        align-items: center;
    `,
    path: css`
        color: #666;
        margin: 0 0.5rem;
    `,
    change: css``,
};

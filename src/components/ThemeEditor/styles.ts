import { css } from 'emotion';

export const main = css`
    display: flex;
`;

export const header = css`
    background: #fff;
    border: 1px solid #eee;
    padding: .5rem;
`;

export const sidebar = css`
    width: 30%;
`;

export const componentList = css`
    background: white;
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

export const listItem = css`
    border-bottom: 1px solid #ccc;
    list-style-type: none;
    padding: .25rem;
`;

export const componentView = css`
    display: flex;
    width: 100%;
`;

export const componentResult = css`
    background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
    border: 1px solid #eee;
    padding: 1rem;
    & *:hover {
        outline: 1px dotted red;
    }
`;

export const componentOptions = css`
    padding: .5rem;
`;

export const componentOption = css`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: .5rem;
    .pt-label {
        margin: 0 !important;
        width: 60%;
    }
`;
/* eslint-disable camelcase */
import { css } from 'emotion';

export const main = css`
    display: flex;
`;

export const header = css`
    background: #fff;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    padding: .5rem;
`;

export const header_dark = css`
    background: #394b59;
    border-top: 1px solid #111;
    border-bottom: 1px solid #111;
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
    padding: 1rem;
    & *:hover {
        outline: 1px dotted red;
    }
`;

export const componentResult_dark = css`
    background-image: linear-gradient(to top, rgb(32, 40, 45) 0%, rgb(37, 50, 57) 100%);
    min-width: 33%;
    padding: 1rem;
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

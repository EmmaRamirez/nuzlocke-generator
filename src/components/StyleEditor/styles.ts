/* eslint-disable camelcase */
import { cx, css } from 'emotion';

export const colorTextInput_dark = css`
    background: rgba(16, 22, 26, 0.3);
    color: #eee;
`;

export const colorInput = css`
    background: #fff;
    border-radius: 50%;
    border: none;
    height: 1rem;
    margin-left: 0.25rem;
    padding: 0;
    width: 1rem;
    -webkit-apperance: none;
    user-select: none;
    -moz-user-select: none;
    &::-webkit-color-swatch {
        border: none;
        border-radius: 50%;
        padding: 0;
    }
    &::-webkit-color-swatch-wrapper {
        border: none;
        border-radius: 50%;
        padding: 0;
    }
`;

export const colorEditWrapper = css`
    align-items: center;
    display: flex;
    input[type='text'] {
        padding-left: 0.5rem;
    }
`;

export const styleEdit = css`
    align-items: center;
    align-content: center;
    border-bottom: 1px solid #ddd;
    display: flex;
    padding: 0.5rem;
    width: 100%;
    .bp3-label {
        margin: 0;
        min-width: 10rem;
    }
    .span {
        display: inline-block;
        margin-right: 0.25rem;
    }
    @media (max-width: 760px) {
        .bp3-label {
            margin: 2px;
            font-size: 80%;
            min-width: 6rem;
        }
        .bp3-input {
            max-width: 9rem;
        }
    }
`;

export const widthHeightInputs = css`
    align-items: flex-end;
    @media (max-width: 760px) {
        flex-direction: column;

        .bp3-label {
            display: inline-block;
        }
    }
`;

export const autoHeightCheckbox = css`
    @media (max-width: 760px) {
        margin-top: 0.25rem;
    }
`;

export const styleEdit_dark = css`
    border-bottom: 1px solid #111;
`;

export const styleEditLabel = css``;

export const styleEditSpan = css``;

export const styleEditPtControl = css`
    margin-bottom: 0;
`;

export const radioGroup = css`
    align-content: center;
    align-items: center;
    display: flex;
    .bp3-control {
        border-radius: 0.25rem;
        margin: 0.25rem;
    }
    label.bp3-label {
        margin: 0;
    }
`;

export const dialog = css`
    padding-bottom: 0 !important;
    width: 60% !important;
`;

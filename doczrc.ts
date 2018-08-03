import { css } from 'docz-plugin-css';

// tslint:disable-next-line:no-default-export
export default {
    typescript: true,
    plugins: [
        css({
            preprocessor: 'stylus',
            cssmodules: true,
        })
    ],
    themeConfig: {
        colors: {
            primary: 'tomato'
        }
    },
    indexHtml: './docs.html',
};

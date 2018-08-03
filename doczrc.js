import { css } from 'docz-plugin-css';

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
}
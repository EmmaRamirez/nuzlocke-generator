import { css } from 'docz-plugin-css';

// tslint:disable-next-line:no-default-export
export default {
    typescript: true,
    title: 'Nuzlocke Design System',
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
    protocol: 'http',
    modifyBabelRc: (babelrc) => {
        babelrc.babelrc = true;
        babelrc.presets = [];

        return babelrc;
    }
};

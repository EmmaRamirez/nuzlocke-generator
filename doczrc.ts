import { BabelRC } from 'docz-core/dist/utils/babelrc';

// tslint:disable-next-line:no-default-export
export default {
    typescript: true,
    title: 'Nuzlocke Design System',
    plugins: [
    ],
    themeConfig: {
        colors: {
            primary: 'tomato'
        }
    },
    protocol: 'http',
    modifyBabelRc: (babelrc: BabelRC) => {
        babelrc.babelrc = true;
        babelrc.presets = [];

        return babelrc;
    }
};

const path = require('path');
const glob = require('glob');

const docgenTypeScript = require('react-docgen-typescript');
const docgen = require('react-docgen');

module.exports = {
  title: 'WebCeph Style Guide',

  components() {
    return glob
      .sync(path.resolve(__dirname, 'src/components/**/*.tsx'))
      .filter(module => {
        return /\/[A-Z]\w*\.tsx$/.test(module);
      });
  },

  resolver: docgen.resolver.findAllComponentDefinitions,

  propsParser: docgenTypeScript.parse,
};
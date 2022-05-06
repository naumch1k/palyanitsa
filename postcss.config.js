const path = require('path');

const breakpoints = require('./shared/breakpoints');

module.exports = {
  plugins: [
    [
      'postcss-mixins',
      {
        mixinsDir: path.join(__dirname, 'shared/styles/mixins'),
      }
    ],
    [
      'postcss-simple-vars',
      {
        variables: breakpoints,
      }
    ],
    'postcss-nested',
  ],
};

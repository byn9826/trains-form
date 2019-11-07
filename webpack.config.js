const path = require('path');

module.exports = {
  entry: path.join(__dirname, './example/app.jsx'),
  output: {
    path: path.join(__dirname, 'example/dist'),
    filename: 'bundle.js',
  },
  mode: 'development',
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: 'babel-loader',
      exclude: '/node_modules/',
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

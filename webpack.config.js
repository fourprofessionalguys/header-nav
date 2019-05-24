const Path = require('path');
const CLIENT = Path.join(__dirname, 'client');
const PUBLIC = Path.join(__dirname, 'public');

module.exports = {
  entry: `${CLIENT}/index.jsx`,
  output: {
    path: PUBLIC,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /.\.jsx?$/
      }
    ]
  }
};
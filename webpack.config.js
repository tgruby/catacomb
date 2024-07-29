const path = require('path');

module.exports = {
  entry: './src/index.js', // Your main JS file
  output: {
    filename: 'bundle.js', // The name of the bundled file
    path: path.resolve(__dirname, 'dist') // The output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply this rule to .js files
        exclude: /node_modules/, // Exclude dependencies in node_modules
        use: {
          loader: 'babel-loader', // Use Babel loader for ES6+ support
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  mode: 'development', // Set the mode to 'development' or 'production'
};

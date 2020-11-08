module.exports = {
  module: {
    rules: require('./webpack.rules'),
  },
  plugins: [],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
  },
};

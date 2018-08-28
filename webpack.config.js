const path = require('path');

module.exports = {
  context: __dirname,
  entry: './frontend/couch_potato.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['env', 'react']
          }
        },
      }
    ]
  },
  devtool: 'source-map'
};


// // To change the commit authors:
// git filter-branch --commit-filter 'if ! [ "$GIT_AUTHOR_NAME" = "andrewswe" ];
//   then
//   export GIT_AUTHOR_NAME="andrewswe";
//   export GIT_AUTHOR_EMAIL=answe@mix.wvu.edu;
//   export GIT_COMMITTER_NAME="andrewswe";
//   export GIT_COMMITTER_EMAIL=answe@mix.wvu.edu;
//   fi; git commit-tree "$@"'
//
// git push -f origin master:master

module.exports = {
    entry: './client/app.js', 
    output: {
      path: __dirname + '/public',
      filename: './bundle.js' 
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.json', '*']
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          options: {
            presets: ['react', 'env'] 
          }
        },
        {
            test: /\.css$/,
            use:  [
                'style-loader',
                'css-loader'
            ]
        }
      ]
    }
  };
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          preset: ['@babel/preset-env']
        }
      }
    ]
  }
}
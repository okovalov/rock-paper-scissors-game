const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = env => {
  const isProduction = env === 'production'
  const port = process.env.PORT ? process.env.PORT : 3000

  return {
    mode: isProduction ? 'production' : 'development',

    entry: ['babel-polyfill', './src/app'],

    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/dist/'
    },

    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/,
          include: __dirname
        },
        {
          test: /\.s?css$/,
          use: [
            !isProduction
              ? MiniCssExtractPlugin.loader
              : MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.(jpe?g|png|gif|svg|eot|ttf|woff)/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name(file) {
                  if (isProduction) {
                    return '[hash].[ext]'
                  }

                  return '[path][name].[ext]'
                }
              }
            }
          ]
        }
      ]
    },

    plugins: [
      new MiniCssExtractPlugin({
        filename: !isProduction ? '[name].css' : '[name].css',
        chunkFilename: !isProduction ? '[id].css' : '[id].css' // could be changed to [id][hash].css for prod
      }),
      new CopyWebpackPlugin([{ from: 'src/images', to: 'images' }])
    ],

    devServer: {
      port,
      historyApiFallback: true
    },

    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map'
  }
}

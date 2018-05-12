const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/app.js', // 入口文件
  output: {
    filename: 'bundle.js', // 输出的文件名
    path: path.resolve(__dirname, 'dist') // 输出的文件路径
  },
  devtool: 'cheap-eval-source-map',
  resolve: {
    extensions: ['.js', '.json'],
    alias: { // 路径别名
      '@': path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [{
      // sass loader
      test: /\.(scss|sass)$/,
      use: [{
        loader: 'style-loader'
      },
      {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 2
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          plugins: (loader) => [
            require('autoprefixer')({
              browserslist: 'last 2 versions or > 5%'
            })
          ]
        }
      },
      {
        loader: 'sass-loader',
        options: {
          outputStyle: 'compressed'
        }
      }
      ]
    },
    {
      // bable loader
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
}

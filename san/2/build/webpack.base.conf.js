const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/app.js' // 入口文件
  },
  output: {
    filename: 'bundle.js', // 输出的文件名
    path: resolve('dist') // 输出的文件路径
  },
  devtool: '#source-map',
  resolve: {
    extensions: ['.js', '.json'],
    alias: { // 路径别名
      '@': resolve('src'),
      'san': process.env.NODE_ENV === 'production'
        ? 'san/dist/san.js'
        : 'san/dist/san.dev.js'
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
    },
    {
      test: /\.san$/,
      exclude: /node_modules/,
      use: 'san-loader'
    }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
      // chunks: 'initial', // 只对入口文件处理
      // cacheGroups: {
      //   vendor: { // split `node_modules`目录下被打包的代码到 `page/vendor.js && .css` 没找到可打包文件的话，则没有。css需要依赖 `ExtractTextPlugin`
      //     test: /node_modules\//,
      //     name: 'page/vendor',
      //     priority: 10,
      //     enforce: true
      //   },
      //   commons: { // split `common`和`components`目录下被打包的代码到`page/commons.js && .css`
      //     test: /common\/|components\//,
      //     name: 'page/commons',
      //     priority: 10,
      //     enforce: true
      //   }
      // }
    }
    // runtimeChunk: {
    //   name: 'page/manifest'
    // }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: true
    })
  ]
}

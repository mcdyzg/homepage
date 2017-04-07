var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: {
        // 如果.babelrc里没有配置babel-plugin-transform-runtime(for async,generator)的话，这里需要用babel-polyfill,如果用到了，那么省略polyfill就好
        // app:['babel-polyfill','./src/main.js'],
        app:['./src/main.js'],
        common:['vue','vue-router']
    },
    
    output: {
        path: path.resolve(__dirname, 'dist'),
        // “path”仅仅告诉Webpack结果存储在哪里，然而“publicPath”项则被许多Webpack的插件用于在生产模式下更新内嵌到css、html文件里的url值。
        //引入的图片地址公共路径：本地环境为根目录‘/’，正式环境为cdn地址
        publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.scss$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                {
                    loader:'url-loader',
                    options: {
                        limit: 8192,
                        name: 'img/[name].[hash:7].[ext]'
                    }
                }
                ],
                
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                use: ['url-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, 'src'),
        }
    },
    devServer: {
        host:'0.0.0.0',
        port: 8081,                 //设置默认监听端口，如果省略，默认为8080
        historyApiFallback: true,   //在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        // hot: true,                  //是否热部署
        quiet: false,               //让dev server处于静默的状态启动
        stats: {
            colors: true, // color is life
            chunks: false, // this reduces the amount of stuff I see in my terminal; configure to your needs
            'errors-only': true
        }
    },
    performance: {
        hints: false
    },
    devtool: process.env.NODE_ENV === 'production' ? '' : '#eval-source-map',
    plugins:[
        new webpack.optimize.CommonsChunkPlugin({names: ['common'], minChunks: Infinity}),
    ]
}

if (process.env.NODE_ENV === 'production') {
    // module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}

const path = require("path")
const webpack = require("webpack")
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack_rules = []
const weabck_plugins = []
const webpackOption = {
    mode:'development',
    entry: {
        main: "./src/js/main.js", 
        slider: ["./src/js/slider.js", "./src/css/awesomeSlider.scss", "./index.html"],
    },
    output: {
        filename: "js/[name].min.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: webpack_rules
    },
    plugins: weabck_plugins,
    // devServer:{
    //     contentBase: './',
    //     publicPath: './dist',
    //     inline: true,
    //     hot: true,
    // },
};
let babelLoader = {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
        loader: "babel-loader",
        options: {
            presets: ["@babel/preset-env"]
        }
    }
};
let sassCompiler = {
    test: /\.scss$/,
    use: [
        {
            loader: 'file-loader',
            options: {
                name: 'css/[name].css'
            }
        }, 
        {
            loader: 'extract-loader'
        }, 
        {
            loader: 'css-loader?-url'
        }, 
        {
            loader: 'postcss-loader'
        }, 
        {
            loader: 'sass-loader'
        }
    ]
}
let htmlWatch = {
    test: /\.html$/,
    loader: "raw-loader"
}
let copyPlugin = new CopyWebpackPlugin([
    { from: 'src/images', to: 'images' }
])
webpack_rules.push(babelLoader)
webpack_rules.push(sassCompiler)
webpack_rules.push(htmlWatch)
weabck_plugins.push(copyPlugin)
module.exports = webpackOption
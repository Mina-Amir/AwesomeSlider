const path = require("path")
const webpack = require("webpack")
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackHotPlugin = require('html-webpack-hot-plugin')
const htmlHotPlugin = new HtmlWebpackHotPlugin()
const webpack_rules = []
const weabck_plugins = []
const webpackOption = {
    mode:'development',
    entry: {
        main: "./src/js/main.js", 
        slider: ["./src/js/slider.js", "./src/css/awesomeSlider.scss"],
    },
    output: {
        filename: "js/[name].min.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: webpack_rules
    },
    plugins: weabck_plugins,
    devServer: {
        before(app, server) {
          // This step is curcial. DevServer is needed to send reload message to opened page.
          // Without this step, the update of HtmlWebpackHotPlugin will be omitted and you will need to refresh the page manually.
          htmlHotPlugin.setDevServer(server)
        }
    }
}
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
let htmlWatch = new HtmlWebpackPlugin({
    filename: './index.html',
    template: './index.html',
})
  // the instance of this plugin must be placed after instances of HtmlWebpackPlugin
let htmlHotReload = htmlHotPlugin
let copyPlugin = new CopyWebpackPlugin([
    { from: 'src/images', to: 'images' }
])
webpack_rules.push(babelLoader)
webpack_rules.push(sassCompiler)
weabck_plugins.push(htmlWatch)
weabck_plugins.push(htmlHotReload)
weabck_plugins.push(copyPlugin)
module.exports = webpackOption
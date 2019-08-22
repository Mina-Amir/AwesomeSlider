const path = require("path");
const webpack = require("webpack");
const webpack_rules = [];
const webpackOption = {
    mode:'development',
    entry: ["./src/js/main.js", "./src/css/main.scss"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/main.js"
    },
    module: {
        rules: webpack_rules
    }
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
webpack_rules.push(babelLoader);
webpack_rules.push(sassCompiler)
module.exports = webpackOption;
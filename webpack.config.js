const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: ["./src/index.js"],// 重要
    output: {//重要
        filename: "index.js",
        path: path.join(__dirname, "./build/")
    },
    module: {
        // 加载器配置
        rules: [
            { test: /\.(js|jsx)$/,
                use: [
                    {loader:'babel-loader'}
                    ] ,
                include: path.resolve("./src/")
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    //其它解决方案配置
    resolve: {
        extensions: ['.js', '.json', '.scss']
    },
    //插件项
    plugins: [
        new HtmlWebPackPlugin({
            template: 'index.tpl.html',
            inject: 'body',
            filename: 'index.html'
        })
    ]
};

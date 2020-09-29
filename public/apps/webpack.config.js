var HtmlWebpackPlugin = require("html-webpack-plugin"); //打包html的插件

module.exports = {
  mode: 'development',
  //多页面项目
  entry: { 
    splitPic: "./src/splitPic/index.js", //入口文件
  },
  output: {
    filename: "./[name]/index.js", //打包后index.js的名字，
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
        exclude: /node_modules/, //处理除了nodde_modules里的js文件
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      }
    ],
  },
  //插件
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ["splitPic"], // 多页面
      filename: "./splitPic/index.html",
      template: "./src/splitPic/index.html",
    })
  ],
};

const path  =require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // 分离css代码插件

module.exports = {
	entry: './app/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [{
			test: /\.css$/,
			// 转化为style标签，并且在js加载后注入页面
			// use: ['style-loader', 'css-loader']
			use: ExtractTextPlugin.extract({ // 打包时分离css代码
				use: 'css-loader'
			})
		}]
	},
	plugins: [
		new ExtractTextPlugin('style.css'),
	]
};
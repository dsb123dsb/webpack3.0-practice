const path  =require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // 分离css代码插件
const webpack = require('webpack');

module.exports = function(env){
	return {
			entry: {// 多入口，分离第三方库js文件
				main: './app/index.js'
				// 隐式公共 vendor chunk
				// vendor: 'moment'
			},
			output: {
				filename: '[name].[chunkhash].js', // 对应多个入口文件
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
				new webpack.optimize.CommonsChunkPlugin({ // 不使用此插件，虽然分离出两个js文件，但是两份js文件都存在公共库，
					name: 'vendor', // 指定公共bundle的名字
					// 隐式公共 vendor chunk
				 	minChunks: function (module) {
                   		// 该配置假定你引入的 vendor 存在于 node_modules 目录中
                   		return module.context && module.context.indexOf('node_modules') !== -1;
                	}
				}),
				//CommonChunksPlugin will now extract all the common modules from vendor and main bundles
	            new webpack.optimize.CommonsChunkPlugin({ // 不使用manifest.js，若应用代码改变，vender.js的hsah置也会改变
	                name: 'manifest' //But since there are no more common modules between them we end up with just the runtime code included in the manifest file
	            })
			]
		};
};
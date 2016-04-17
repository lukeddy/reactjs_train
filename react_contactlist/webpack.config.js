module.exports = {
	entry:[
       './src/App.js' //源文件
	],
	output:{
		path:__dirname, //当前目录名称
		filename:'app.js' //打包后的文件
	},
	/**
	 * 在webpack中JavaScript，CSS，LESS，TypeScript，JSX，CoffeeScript，图片等静态文件都是模块，
	 * 不同模块的加载是通过模块加载器（webpack-loader）来统一管理的。loaders之间是可以串联的，
	 * 一个加载器的输出可以作为下一个加载器的输入，最终返回到JavaScript上,参考:
	 * https://hulufei.gitbooks.io/react-tutorial/content/webpack.html
	 */
	module:{
		loaders:[{
			test:/\.jsx?$/,
			loader:'babel' //使用babel库将es6风格转义成es5
		}]
	}
};
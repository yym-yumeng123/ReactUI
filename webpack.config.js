module.export = {
	// 入口是 tsx, 但程序不认识 jsx, 配置 rules
  entry: {
		idnex: './lib/index.tsx'
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'awesome-typescript-loader'
			}
		]
	}
};

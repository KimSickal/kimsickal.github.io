const path = require('path');

module.exports = {
	entry: './src/index.tsx',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, './docs'),
		publicPath: 'http://localhost:8080/public/',
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['.js', '.json', '.ts', '.tsx'],
		alias: {
			'src': path.resolve(__dirname, './src'),
		},
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				loader: 'awesome-typescript-loader',
			},
			{
				test: /\.(png|jpe?g|gif|svg|ico|wav|mp3|mp4|eot|ttf|ttc|woff2?)$/,
				loader: 'file-loader',
				options: {
					name: `assets/[name].[ext]?[hash]`,
				},
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
				],
			},
			{
				test: /\.txt$/,
				use: 'raw-loader',
			},
			{
				test: /\.md$/,
				use: 'raw-loader',
			},
		]
	},
};

const ExtractText = require('extract-text-webpack-plugin');
const extractTextMain = new ExtractText({
	filename: './styles/main.css',
	allChunks: true
});
const { join } = require('path');
const dist = join(__dirname, './dist');
const plugins = require('./config/plugins');
const exclude = /node_modules/;

module.exports = env => {
	const isProd = env && env.production;
	return {
		entry: {
			main: './app/scripts/index.js',
		},
		output: {
			path: dist,
			filename: 'scripts/[name].js',
			publicPath: '/'
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: exclude,
					use: 'babel-loader'
				},

        {
          test: /\.svg$/,
					include: join(srcPath, 'img/icons/svg'),
          loaders: [
                  'svg-sprite-loader?' + JSON.stringify({
                    name: '[name].[hash]',
                    prefixize: true
                  }),
                  'svgo-loader?' + JSON.stringify({
                    plugins: [
                      { removeTitle: true },
                      { convertPathData: false },
                      { removeUselessStrokeAndFill: true }
                    ]
                  })
						]
        },
        {
          test: /\.css$/,
					loader: isProd ?  extractTextMain.extract({
						fallback: 'style-loader',
						use: 'css-loader'
					}) : 'style-loader!css-loader'
        }
			]
		},
		plugins: plugins(isProd, {
			extractTextPlugin: {
				main: extractTextMain
				//vendors: extractTextVendors
			}
		}),
		devtool: isProd ? 'eval' : 'source-map',
		devServer: {
			contentBase: dist,
			port: process.env.PORT || 3000,
			historyApiFallback: true,
			compress: isProd,
			inline: !isProd,
			hot: !isProd,
			stats: {
				// Hide all chunks logs
				chunks: false
			}
		}
	};
};

const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/components/index.js',
    output: {
        path: path.join(__dirname, '/src/public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'images',
                    }
                }]
            },
            {
                test: /\.svg$/,
                use: [{
                    loader: 'svg-url-loader',
                    options: {
                        limit: 10000,
                        outputPath: 'images',
                    },
                }, ],
            },
            {
                test: /\.html$/i,
                loader: "html-loader"
            }

        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [{
                    from: 'src/filesToCopy/*.json',
                    to({ context, absoluteFilename }) {
                        return "[name][ext]";
                    }
                },
                {
                    from: 'src/filesToCopy/*.html',
                    to({ context, absoluteFilename }) {
                        return "[name][ext]";
                    }
                },
                {
                    from: 'src/filesToCopy/*.bin',
                    to({ context, absoluteFilename }) {
                        return "[name][ext]";
                    }
                },
                {
                    from: 'src/filesToCopy/*.js',
                    to({ context, absoluteFilename }) {
                        return "[name][ext]";
                    }
                },
                {
                    from: 'src/filesToCopy/*.ico',
                    to({ context, absoluteFilename }) {
                        return "[name][ext]";
                    }
                }
            ]
        })
    ]
};
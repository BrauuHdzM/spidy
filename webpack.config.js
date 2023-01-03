const path = require('path');
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
                    loader: 'file-loader'
                }]
            },
            {
                test: /\.svg$/,
                use: [{
                    loader: 'svg-url-loader',
                    options: {
                        limit: 10000,
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
    }
};
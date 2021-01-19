const path = require('path');
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.s(a|c)ss$/,
                use: [
                    {
                        loader: 'css-loader',
                        options: { modules: true },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: process.env.NODE_ENV !== 'production',
                        },
                    },
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: require('./src/styles/index.js'),
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        alias: {
            Pages: path.resolve(__dirname, 'src/view/pages/index.js'),
            Components: path.resolve(__dirname, 'src/view/components/index.js'),
            Stores: path.resolve(__dirname, 'src/store/index.js'),
            Navigations: path.resolve(__dirname, 'src/view/navigation/index.js'),
            Services: path.resolve(__dirname, 'src/services/index.js'),
            Utils: path.resolve(__dirname, 'src/utils/index.js'),
            Hooks: path.resolve(__dirname, 'src/hooks/index.js'),
        },
        extensions: ['.jsx', '.js'],
    },
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        compress: false,
        historyApiFallback: true,
        open: true,
        hot: true,
        overlay: true,
    },
};

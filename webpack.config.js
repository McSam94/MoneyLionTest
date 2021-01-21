const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');

module.exports = () => {
    const env = dotenv.config().parsed;

    const envKeys = Object.keys(env).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(env[next]);
        return prev;
    }, {});

    return {
        mode: env.NODE_ENV,
        entry: './src/main.js',
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'bundle.js',
        },
        devtool: env.NODE_ENV === 'production' ? 'source-map' : 'eval-cheap-module-source-map',
        module: {
            rules: [
                {
                    test: /\.(js)x?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        { loader: 'style-loader' },
                        { loader: 'css-loader' },
                        { loader: 'resolve-url-loader' },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: env.NODE_ENV !== 'production',
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
                {
                    test: /\.svg$/,
                    use: [
                        {
                            loader: 'react-svg-loader',
                            options: {
                                svgo: {
                                    plugins: [{ removeUselessStrokeAndFill: false }],
                                    floatPrecision: 2,
                                },
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
                Services: path.resolve(__dirname, 'src/service/index.js'),
                Utils: path.resolve(__dirname, 'src/utils/index.js'),
                Hooks: path.resolve(__dirname, 'src/hooks/index.js'),
                Icons: path.resolve(__dirname, 'src/assets/icons'),
            },
            extensions: ['.jsx', '.js'],
        },
        plugins: [new webpack.DefinePlugin(envKeys)],
        devServer: {
            contentBase: path.resolve(__dirname, './dist'),
            compress: false,
            historyApiFallback: true,
            open: true,
            hot: true,
            overlay: true,
        },
    };
};

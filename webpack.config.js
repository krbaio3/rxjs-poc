const {resolve} = require('path');

module.exports = {
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist')
    },
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    stats: 'errors-only',
};

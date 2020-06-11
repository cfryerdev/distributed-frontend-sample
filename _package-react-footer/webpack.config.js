var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/Footer.jsx',
    output: {
        path: path.resolve('lib'),
        filename: 'FooterComponent.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}
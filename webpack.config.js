const { join } = require('path');

module.exports = {
    context: __dirname,
    entry: './src/index.js',
    output: {
        path: join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            '': join(__dirname, 'src')
        }
    }
};

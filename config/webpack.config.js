const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;

module.exports = {
    module: {
        rules: [
            test: /\.less$/,
            loader: 'less-loader'
        ]
    }
}
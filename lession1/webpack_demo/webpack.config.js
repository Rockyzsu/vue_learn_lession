module.exports = {
    entry: "./a1.js",
    mode: 'development',
    output: {
        path: __dirname,
        filename: "bundle1.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            }
        ]
    }
};

module.exports = {
    entry: {
       main: "./src/index.js",
       vendor: "./src/vendor.js"
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: 'imgs'
                    }
                }
            }
            {
                test: /\.svelte/,
                use: {
                    loader: 'svelte-loader',
                    exclude: '/node_modules/',
                }
            }
        ]
    },
}
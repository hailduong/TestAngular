const path = require('path');

module.exports = {

    entry: "./src/app.js",
    mode: 'development',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        libraryTarget: "umd",
    },

    watch: true,
    module: {
        // configuration regarding modules

        rules: [
            // rules for modules (configure loaders, parser options, etc.)

            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, "src")
                ],
                loader: "babel-loader",
                options: {
                    presets: ["env"]
                },
            },
            {
                test: /\.tpl.html$/,
                loader: "ng-cache-loader?prefix=[dir]/[dir]"
            },
        ],

    },

    devtool: "source-map", // enum

};
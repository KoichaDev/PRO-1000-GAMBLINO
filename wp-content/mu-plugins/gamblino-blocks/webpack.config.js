const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const glob = require("glob");
const path = require("path");

module.exports = {
    ...defaultConfig,

    entry: glob.sync("./blocks/*/index.js").reduce((acc, path) => {
        const entry = path.replace("/index.js", "");
        acc[entry] = path;
        return acc;
    }, {}),

    output: {
        filename: "./[name].js",
        path: path.resolve(__dirname, "build"),
    },
};

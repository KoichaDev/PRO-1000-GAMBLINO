const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const glob = require("glob");
const path = require("path");

module.exports = {
    ...defaultConfig,
    entry: {
        'block-info-bonus-review': './includes/blocks/block-info-bonus-review',
        'block-general-information': './includes/blocks/block-general-information'
    }
};

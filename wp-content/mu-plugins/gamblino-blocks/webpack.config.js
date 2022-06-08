const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const glob = require("glob");
const path = require("path");

module.exports = {
    ...defaultConfig,
    entry: {
        'block-info-bonus-review': './src/blocks/block-info-bonus-review',
        'block-general-information': './src/blocks/block-general-information',
        'block-insert-review': './src/blocks/block-insert-review',
        'block-ranking-cards': './src/blocks/BlockRankingCard',
        'block-button': './src/blocks/common/BlockButton',
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src/')
        }
    }
};

const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const glob = require("glob");
const path = require("path");

module.exports = {
    ...defaultConfig,
    entry: {
        'block-general-information': './src/blocks/block-general-information',
        'block-insert-review': './src/blocks/BlockInsertReview',
        'block-ranking-cards': './src/blocks/BlockRankingCard',
        'block-button': './src/blocks/common/BlockButton',
        'block-image': './src/blocks/common/BlockImage',
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src/')
        }
    }
};

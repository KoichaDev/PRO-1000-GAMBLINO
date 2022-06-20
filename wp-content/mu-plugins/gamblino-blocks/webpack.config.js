const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const glob = require("glob");
const path = require("path");

module.exports = {
    ...defaultConfig,
    entry: {
        'block-general-information': './src/blocks/block-general-information',
        'block-image-adverstiment': './src/blocks/BlockImageAdverstiment',
        'block-insert-review': './src/blocks/BlockInsertReview',
        'block-ranking-cards': './src/blocks/BlockRankingCard',
        'block-button': './src/blocks/BlockButton',
        'block-image': './src/blocks/BlockImage',
        'block-faqs': './src/blocks/BlockFaq'
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src/')
        }
    }
};

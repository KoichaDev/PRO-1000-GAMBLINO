const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const glob = require("glob");
const path = require("path");

module.exports = {
    ...defaultConfig,
    entry: {
        'block-info-bonus-review': './src/blocks/block-info-bonus-review',
        'block-general-information': './src/blocks/block-general-information',
        'block-insert-review': './src/blocks/block-insert-review',
        'block-ranking-card': './src/blocks/BlockRankingCard'
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src/')
        }
    }
};

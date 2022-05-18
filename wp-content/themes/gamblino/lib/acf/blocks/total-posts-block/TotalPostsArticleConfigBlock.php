<?php

class TotalPostsConfigBlock {
        public static function registerBlock() {

            add_action('acf/init', function() {

            if( !function_exists('acf_register_block_type') ) { 
                    return;
            }

            // register a testimonial block.
            acf_register_block_type(array(
                'name'              => 'block-total-post-articles',
                'title'             => __('Total Posts Article block'),
                'description'       => __('Display the block of total posts articles.'),
                'render_template'   =>  'lib/acf/blocks/carousel-block/TotalPostsTemplateBlock.php',
                'category'          => 'formatting',
                'icon'              => 'admin-comments',
                'keywords'          => array( 'casino', 'block', 'posts', 'total', 'latest', 'articles' ),
            ));
        });    
    }
}
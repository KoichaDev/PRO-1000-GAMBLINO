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
                'title'             => __( 'BlockTotal Posts Article block', 'gamblino' ),
                'description'       => __('Display the block of total posts articles.'),
                'render_template'   =>  'lib/acf/blocks/carousel-block/TotalPostsTemplateBlock.php',
                'category'          => 'gamblino',
                'icon'              => file_get_contents(get_template_directory() . '/lib/acf/blocks/icons/total-posts.icon.svg'),
                'keywords'          => array( 'casino', 'block', 'posts', 'total', 'latest', 'articles' ),
            ));
        });    
    }
}
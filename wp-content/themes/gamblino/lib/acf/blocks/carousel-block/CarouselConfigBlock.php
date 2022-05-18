<?php

class CarouselConfigBlock {
        public static function registerBlock() {
            add_action('acf/init', function() {

            if( !function_exists('acf_register_block_type') ) { 
                    return;
            }

            // register a testimonial block.
            acf_register_block_type(array(
                'name'              => 'block-carousel',
                'title'             => __('Carousel block'),
                'description'       => __('A Carousel Block to display images.'),
                'render_template'   =>  'lib/acf/blocks/carousel-block/CarouselTemplateBlock.php',
                'category'          => 'formatting',
                'icon'              => 'admin-comments',
                'keywords'          => array( 'casino', 'block', 'carousel', 'image', 'caption' ),
            ));
        });    
    }
}
<?php

class CarouselConfigBlock {

        public function __construct() {

            $this -> registerBlock();
            require_once 'CarouselTemplateBlock.php';
        }
        
        public function registerBlock() {

            add_action('acf/init', function() {
                // require_once 'CarouselTemplateBlock.php';
                  // Check function exists.
            if( !function_exists('acf_register_block_type') ) { 
                    return;
            }

            // register a testimonial block.
            acf_register_block_type(array(
                'name'              => 'block-carousel',
                'title'             => __('Carousel block'),
                'description'       => __('A Carousel Block to display images.'),
                'render_template'   => 'CarouselTemplateBlock.php',
                'category'          => 'formatting',
                'icon'              => 'admin-comments',
                'keywords'          => array( 'casino', 'block', 'carousel', 'image', 'caption' ),
            ));
        });    
    }
}
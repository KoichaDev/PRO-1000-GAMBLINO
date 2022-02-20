<?php

function gamblino_block_caroursel() {
    // Check function exists.
    if( function_exists('acf_register_block_type') ) {

        // register a testimonial block.
        acf_register_block_type(array(
            'name'              => 'block-carousel',
            'title'             => __('Carousel block'),
            'description'     => __('A Carousel Block to display images.'),
            'render_template'   =>   get_stylesheet_directory() . '/template-parts/blocks/BlockCarousel.php',
            'category'          => 'formatting',
            'icon'              => 'admin-comments',
            'keywords'          => array( 'casino', 'block', 'carousel', 'image', 'caption' ),
        ));
    }
}

add_action('acf/init', 'gamblino_block_caroursel');

<?php

function gamblino_casino_review_block() {
    // Check function exists.
    if( function_exists('acf_register_block_type') ) {

        // register a testimonial block.
        acf_register_block_type(array(
            'name'              => 'card-block-1',
            'title'             => __('Card Block #1'),
            'description'       => __('Card Block #1'),
            'render_template'   =>   get_stylesheet_directory() . '/template-parts/blocks/CasinoReview.php',
            'category'          => 'formatting',
            'icon'              => 'admin-comments',
            'keywords'          => array( 'casino', 'block', 'card' ),
        ));
    }
}

add_action('acf/init', 'gamblino_casino_review_block');

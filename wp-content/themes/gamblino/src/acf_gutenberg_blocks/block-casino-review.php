<?php

function gamblino_casino_review_block() {
    // Check function exists.
    if( function_exists('acf_register_block_type') ) {

        // register a testimonial block.
        acf_register_block_type(array(
            'name'              => 'casino-review',
            'title'             => __('Casino Review Block'),
            'description'       => __('Casino Review Card Block'),
            'render_template'   =>   get_stylesheet_directory() . '/template-parts/blocks/CasinoReview.php',
            'category'          => 'formatting',
            'icon'              => 'admin-comments',
            'keywords'          => array( 'casino', 'review' ),
        ));
    }
}

add_action('acf/init', 'gamblino_casino_review_block');

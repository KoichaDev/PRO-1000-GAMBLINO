<?php

if ( ! function_exists( 'gamblino_allowed_block_types' ) ) {
 
function gamblino_allowed_block_types( $allowed_blocks ) {
 
        return array(
            'core/image',
            'core/paragraph',
            'core/heading',
            'core/list',
            'core/freeform',
            'core/separator',
            'core/gallery',
            'core/columns',
            'acf/casino-review'
        );
 
    }
    add_filter( 'allowed_block_types', 'gamblino_allowed_block_types' );
}


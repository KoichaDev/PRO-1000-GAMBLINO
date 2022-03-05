<?php

if ( !function_exists( 'gamblino_allowed_block_types' ) ) {
 
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
            'acf/card-block-1',
            'acf/block-carousel',
            'gamblino-block/info-bonus-review',
            'gamblino-block/features-info',
        );
 
    }
    add_filter( 'allowed_block_types_all', 'gamblino_allowed_block_types' );
}


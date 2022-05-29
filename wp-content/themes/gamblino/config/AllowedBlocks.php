<?php

class AllowedBlocks {
    public static function init(){
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
                    'acf/block-total-post-articles',
                    'gamblino-block/info-bonus-review',
                    'gamblino-block/general-information',
                    'gamblino-block/insert-review',
                    'gamblino-block/table',
                    "gamblino-block/ranking-cards",
                    "gamblino-block/ranking-card"
                );
        
            }
            add_filter( 'allowed_block_types_all', 'gamblino_allowed_block_types' );
        }

    }
}


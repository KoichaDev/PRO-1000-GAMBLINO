<?php
function gamblino_filter_block_categories_when_post_provided( $block_categories, $editor_context ) {

	if ( ! empty( $editor_context->post ) ) {
		array_push(
			$block_categories,
			array(
				'slug'  => 'gamblino',
				'title' => __( 'Gamblino', 'gamblino' ),
				'icon'  => null,
			)
		);
	}
	return $block_categories;
}

add_filter( 'block_categories_all', 'gamblino_filter_block_categories_when_post_provided', 10, 2 );
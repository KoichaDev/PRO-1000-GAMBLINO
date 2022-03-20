<?php 

function gutenberg_examples_dynamic() {
    // automatically load dependencies and version
    $asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');
 
    wp_register_script(
        'gamblino-block/general-information',
        plugins_url( 'build/block.js', __FILE__ ),
        $asset_file['dependencies'],
        $asset_file['version']
    );
 
    register_block_type( 'gamblino-block/general-information', array(
        'api_version' => 2,
        'editor_script' => 'gutenberg-examples-dynamic',
        'render_callback' => 'gutenberg_examples_dynamic_render_callback'
    ) );
 
}
add_action( 'init', 'gutenberg_examples_dynamic' );
<?php

/**
 * Template Name: Full width / Contained
 * Template Post Type: post, page, casino-games, reviews, slots
 */

get_header();

global $post;
if (have_posts()) { ?>
    <main class="archive-full-width-contained">
        <?php
        
            $archive_files = get_theme_file_path("../gamblino/template-parts/archive/*.php");
    
            // Autoload every files inside custom post type archive template hierachy
            auto_load_files_from_folder( $archive_files );
        ?>

    </main>
<?php
} else {
    _e('Sorry, no page were found.', 'gamblino');
}
get_footer();

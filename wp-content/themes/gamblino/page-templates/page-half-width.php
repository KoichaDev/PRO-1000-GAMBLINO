<?php

/**
 * Template Name: Half width / Boxed
 * Template Post Type: post, page, casino-games, reviews, slots
 * 
 */

get_header();

global $post;
if (have_posts()) { ?>
    <main class="half-page-width">
        <?php
        while (have_posts()) {
            the_post();
            $slug_name = $post->post_name;
            get_template_part('template-parts/page/page', $slug_name ? $slug_name : 'page');
        }; ?>
    </main>
<?php
} else {
    _e('Sorry, no page were found.', 'gamblino');
}
get_footer();

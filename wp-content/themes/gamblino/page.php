<?php 
    get_header(); 
    
    global $post;
    if ( have_posts() )  {
        echo '<main>'; 
        while ( have_posts() ) {
            the_post();
        };
        echo '</main>';
    } else {
        _e( 'Sorry, no page were found.', 'gamblino' );
    }
    get_footer(); 
?>
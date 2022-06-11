<?php 
    get_header(); 
    
    global $post;
    if ( have_posts() )  {
        while ( have_posts() ) {
            the_post();
        };
    } else {
        _e( 'Sorry, no page were found.', 'gamblino' );
    }
    get_footer(); 
?>
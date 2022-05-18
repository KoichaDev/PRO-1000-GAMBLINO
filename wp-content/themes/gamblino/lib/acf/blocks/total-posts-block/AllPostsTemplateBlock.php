<?php 
    foreach ($postsObject as $post) : 
    $postId = $post -> ID;
    $postTitle = $post -> post_title;
    $postExcerpt = $post -> post_excerpt;
    $postUrl = get_permalink($postId);
    $postImage = get_the_post_thumbnail($postId, 'full');

    
?>

    <article class="[ card ]">
        <?php echo $postImage; ?>
         <time datetime="<?php echo get_the_date( 'jS F, y', $postId ) ?>" itemprop="datePublished"><?php echo get_the_date('jS F, y', $postId) ?><time>
    </article>

<?php endforeach; ?>
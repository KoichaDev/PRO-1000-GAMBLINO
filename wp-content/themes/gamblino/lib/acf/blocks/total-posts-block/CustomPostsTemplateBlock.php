<?php
$postsRelationFieldObjects = $blockTotalPostsArticle -> getRelationshipPosts();

foreach ($postsRelationFieldObjects as $postsRelationFieldObject) {
    setup_postdata($postsRelationFieldObject); 

        $postId = $postsRelationFieldObject -> ID;
        $postTitle = $postsRelationFieldObject -> post_title;
        $postExcerpt = $postsRelationFieldObject -> post_excerpt;
        $postUrl = get_permalink($postId);
        $postImage = get_the_post_thumbnail($postId, 'thumbnail');
     ?>

     <article>
        <?php echo $postImage; ?>
        <div class="p-7 bg-neutral-100">
            <time 
                datetime="<?php echo get_the_date( 'jS F, Y', $postId ) ?>" 
                itemprop="datePublished"
                style="color: #7B8C98; "
            >
                <?php echo get_the_date('jS F, Y', $postId) ?>
            </time>
            <a href="<?php echo $postUrl; ?>" class="text-no-underline" aria-description="Click here to read more about <?php echo $postTitle; ?>">
                <h2 class="py-3 fw-normal" style="color: #1D2730; "><?php echo $postTitle; ?></h2>
                <p style="color: #7B8C98; "><?php echo $postExcerpt; ?></p>
            </a>
        </div>
    </article>
     



<?php 
wp_reset_postdata();
}
?>
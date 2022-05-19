<?php 

    $countPosts = $blockTotalPostsArticle -> getCountPosts();
    $postsDate = $blockTotalPostsArticle -> getPostsDateOrderType();
    $postsObject = $blockTotalPostsArticle -> getAllPostsObject($countPosts, $postsDate);

    foreach ($postsObject as $post) : 
        $postId = $post -> ID;
        $postTitle = $post -> post_title;
        $postExcerpt = $post -> post_excerpt;
        $postUrl = get_permalink($postId);
        $postImage = get_the_post_thumbnail($postId, 'thumbnail', [
        ]);
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

<?php endforeach; ?>
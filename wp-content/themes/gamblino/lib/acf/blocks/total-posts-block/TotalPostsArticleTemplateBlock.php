<?php
include get_template_directory() . '/lib/acf/blocks/Loader.php';

$title = $blockTotalPostsArticle -> getTitle();
$countPosts = $blockTotalPostsArticle -> getCountPosts();
$postsObject = $blockTotalPostsArticle -> getPostsObject($countPosts);

?>

<section>
    <h2><?php echo $title; ?></h2>

    <?php 
        if($countPosts === '-1') {
            include get_template_directory() . '/lib/acf/blocks/total-posts-block/AllPostsTemplateBlock.php';
        } else {

        }
    ?>
 
</section>

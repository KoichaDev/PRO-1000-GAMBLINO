<?php
include get_template_directory() . '/lib/acf/blocks/Loader.php';

$title = $blockTotalPostsArticle -> getTitle();
$countPosts = $blockTotalPostsArticle -> getCountPosts();
$postsObject = $blockTotalPostsArticle -> getPostsObject($countPosts);
$blockBackgroundColor = $blockTotalPostsArticle -> getBlockBackgroundColor();

$blockWidth = $block['align'];
?>

<section style="background-color: <?php echo $blockBackgroundColor; ?>">
    <h2 class="text-3xl text-center pt-12"><?php echo $title; ?></h2>
    <div class="[ all-posts-container ] [ p-15 ] [ <?php echo $blockWidth;?> ]">
        <?php 
            if($countPosts) {
                include get_template_directory() . '/lib/acf/blocks/total-posts-block/AllPostsTemplateBlock.php';
            } else {
    
            }
        ?>
     
    </div>

</section>

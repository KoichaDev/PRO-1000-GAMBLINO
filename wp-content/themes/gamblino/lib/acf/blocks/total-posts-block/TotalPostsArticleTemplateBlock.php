<?php
include get_template_directory() . '/lib/acf/blocks/Loader.php';

$blockTitle = $blockTotalPostsArticle -> getTitle();
$blockBackgroundColor = $blockTotalPostsArticle -> getBlockBackgroundColor();

$isVisibleCustomPosts = $blockTotalPostsArticle -> isVisibleCustomPosts();
$blockWidth = $block['align'];

?>

<section class="<?php echo $blockWidth;?>" style="background-color: <?php echo $blockBackgroundColor; ?>">
    <h2 class="text-3xl text-center pt-12"><?php echo $blockTitle; ?></h2>
    <div class="[ all-posts-container ] [ p-15 ]">
        <?php 
            if($isVisibleCustomPosts === null || $isVisibleCustomPosts === false) {
                include get_template_directory() . '/lib/acf/blocks/total-posts-block/RegularPostsTemplateBlock.php';
            } else {
                include get_template_directory() . '/lib/acf/blocks/total-posts-block/CustomPostsTemplateBlock.php';
            }
        ?>
     
    </div>

</section>

<?php

class TotalPostsConfigBlock {

        public $title = '';
        public $countPosts = -1;
        public $blockBackgroundColor = '';
        public $postsDateType = '';
        public $isVisibleCustomPosts = false;

        public function __construct() {
            $this -> registerBlock();
        }

        public function registerBlock() {

            add_action('acf/init', function() {

            if( !function_exists('acf_register_block_type') ) { 
                    return;
            }

            // register a testimonial block.
            acf_register_block_type(array(
                'name'              => 'block-total-post-articles',
                'title'             => __( 'BlockTotal Posts Article block', 'gamblino' ),
                'description'       => __('Display the block of total posts articles.'),
                'render_template'   =>  get_template_directory() . '/lib/acf/blocks/total-posts-block/TotalPostsArticleTemplateBlock.php',
                'align'             => [ 'align-wide', 'full' ],
                'category'          => 'gamblino',
                'icon'              => file_get_contents(get_template_directory() . '/lib/acf/blocks/icons/total-posts.icon.svg'),
                'keywords'          => [ 'casino', 'block', 'posts', 'total', 'latest', 'articles' ],
                'enqueue_assets'    => (new EnqueueStyles()) -> enqueueStyles(),
            ));
        });    
    }

    public function getTitle() {
        return $this -> title = get_field('gamblino_all_posts_main_title');
    }

    public function getCountPosts() {
       return $this -> countPosts = get_field('gamblino_range_total_posts');
    }

    public function getAllPostsObject($countPosts = -1, $postsDate = 'null') {
        $postDateOrder = '';

        if($postsDate === null | $postsDate === 'sort-none') {
            $postDateOrder = '';
        } 
        if($postsDate === 'sort-ascending') {
            $postDateOrder = 'ASC';
        } 
        
        if($postsDate === 'sort-descending') {
            $postDateOrder = 'DESC';
        }

        $posts = get_posts([
            'numberposts' => $countPosts,
            'post_status' => 'publish',
            'orderby'          => 'date',
            'order'            => $postDateOrder,
            'post_type' => get_post_types('casino-games', 'casino-reviews', 'slots'),
        ]);

        return $posts;
    }

    public function getRelationshipPosts() {
        $postsRelationField = get_field('gamblino_all_posts_types');
        if(!$postsRelationField) return;
        return $postsRelationField;
    }

    public function getBlockBackgroundColor() {
        return $this -> blockBackgroundColor = get_field('gamblino_all_posts_background_color');
    }

    public function isVisibleCustomPosts() {
        return $this -> isVisibleCustomPosts = get_field('gamblino_all_is_customized_posts_visible');
    }

    public function getPostsDateOrderType() {
        return $this -> postsDateType = get_field('gamblino_all_posts_sort_date_articles');
    }
}
<?php

class TotalPostsConfigBlock {

        public $title = '';
        public $countPosts = -1;

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
                'category'          => 'gamblino',
                'icon'              => file_get_contents(get_template_directory() . '/lib/acf/blocks/icons/total-posts.icon.svg'),
                'keywords'          => array( 'casino', 'block', 'posts', 'total', 'latest', 'articles' ),
            ));
        });    
    }

    public function getTitle() {
        return $this -> title = get_field('gamblino_all_posts_main_title');
    }

    public function getCountPosts() {
       return $this -> countPosts = get_field('gamblino_range_total_posts');
    }

    public function getPostsObject($countPosts = -1) {
        $posts = get_posts([
            'numberposts' => $countPosts,
            'post_status' => 'publish',
            'post_type' => get_post_types('casino-games', 'casino-reviews', 'slots'),
        ]);

        return $posts;
    }
}
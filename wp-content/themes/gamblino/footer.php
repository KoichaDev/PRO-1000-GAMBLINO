<?php
    include_once 'inc/functions/advanced_custom_fields/Footer/ACF_Footer_Flexible_Content.php';
    include_once 'inc/functions/advanced_custom_fields/Footer/ACF_Footer_Social_Media_Content.php';

    $site_info = get_theme_mod( 'gamblino_footer_site_info' );
    $footer_bg_color = get_theme_mod( 'gamblino_background_color_footer' );
    wp_footer();

      if(!$site_info) return;

        $allowed = [
                'a' => [
                    'href' => [],
                    'title' => [],
                    'target' => [],
                ],
            ];

    $footer_flexible_content = new ACF_Footer_Flexible_Content( 'global_footer_flexible_content', 'global_footer_menu' );
    $global_footer_social_media_icons = new ACF_Footer_Social_Media_Content();            
    
    $footer_menu_content = $footer_flexible_content -> menu_content;
?>

    <footer class="[ footer-main ]" style="background-color: <?= $footer_bg_color; ?>">
        <?php if( !isset($footer_menu_content) ) return; ?>
        <?php foreach ($footer_menu_content as $footer_menus) : ?>
            <nav 
                aria-label="<?= esc_attr_e('This is footer menu for '. $footer_menus['title'], 'gamblino') ?>"
            >
            <ul class="[ footer-nav-list ] [ flex-column ]">
                <li class="footer-nav-list__title | text-2xl " aria-label="<?= $footer_menus['title']; ?>" >
                    <?= $footer_menus['title']; ?>    
                </li>
                    <?php foreach ($footer_menus['menus'] as $footer_menu) : 
                        $permalink = get_permalink($footer_menu['post_object'] -> ID);
                        $post_title = $footer_menu['post_object'] -> post_title;
                        ?>
                        <li class="flex-row items-center">
                            <?php 
                                if( $footer_menu['image'] ) {
                                    $image_id = $footer_menu['image']['ID'];
                                    echo wp_get_attachment_image($image_id, 'full');  
                                } 
                            ?>
                            <a
                                class="text-no-underline text-lg"
                                href="<?= $permalink; ?>"
                                aria-label="<?= esc_attr_e( 'Go to ' . $post_title . ' permalink', 'gamblino' ); ?>"
                                title="<?= esc_attr_e('Go to ' . $post_title . ' permalink', 'gamblino'); ?>"
                             >
                             <?= $post_title; ?>
                            </a> 
                        </li>
                    <?php endforeach; ?>
                </ul>
            </nav>
        <?php endforeach;  ?>
    </footer>
</body>
</html>
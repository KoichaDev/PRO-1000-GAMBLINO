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
                aria-label="This is footer menu for <?= $footer_menus['title']; ?>" 
                class="[ footer-nav-container ]"
            >
                <p class="footer-nav-container__title" aria-label="<?= $footer_menus['title']; ?>"><?= $footer_menus['title']; ?></p>
                <ul>
                    
                    <?php foreach ($footer_menus['menus'] as $footer_menu) : 
                        $permalink = get_permalink($footer_menu['post_object'] -> ID);
                        $post_title = $footer_menu['post_object'] -> post_title;
                        ?>
                        <li class="[ footer-nav-container__permalink ]">
                            <a href="<?= $permalink; ?>"><?= $post_title; ?></a> 
                        </li>
                    <?php endforeach; ?>
                </ul>
            </nav>
        <?php endforeach;  ?>
    </footer>
</body>
</html>
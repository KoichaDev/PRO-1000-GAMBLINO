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

    $global_footer_menu = new ACF_Footer_Flexible_Content( 'global_footer_flexible_content', 'global_footer_menu' );
    $global_footer_social_media_icons = new ACF_Footer_Social_Media_Content();

    var_dump($global_footer_social_media_icons -> get_social_media_groups());


?>

<footer class="[ footer-main ]" style="background-color: <?= $footer_bg_color; ?>">
    <div id="text-content" class="text-content">
        &nbsp; 
        <p>
            <?php echo wp_kses( $site_info, $allowed ); ?>
        </p>
    </div>

</footer>
</body>
</html>
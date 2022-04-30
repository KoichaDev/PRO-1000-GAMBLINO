<?php 
    $site_info = get_theme_mod( 'gamblino_footer_site_info' );
    $footer_bg_color = get_theme_mod( 'gamblino_background_color_footer' );
    wp_footer();

?>

<footer class="[ footer-main ]" style="background-color: <?= $footer_bg_color; ?>">
    <?php  
        if(!$site_info) return;

        $allowed = [
                'a' => [
                    'href' => [],
                    'title' => [],
                    'target' => [],
                ],
            ];
    ?>

    <div id="text-content" class="text-content">
        <p>
            <?php echo wp_kses( $site_info, $allowed ); ?>
        </p>
    </div>

</footer>
</body>
</html>
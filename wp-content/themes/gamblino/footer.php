<?php 
    $site_info = get_theme_mod( 'gamblino_footer_site_info' );
    wp_footer();

?>

<footer class="[ footer-main ]">
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
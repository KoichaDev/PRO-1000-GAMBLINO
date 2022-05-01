<?php
    include_once 'inc/functions/advanced_custom_fields/ACF_Footer_Flexible_Content.php';
    $site_info = get_theme_mod( 'gamblino_footer_site_info' );
    $footer_bg_color = get_theme_mod( 'gamblino_background_color_footer' );
    wp_footer();

    $global_footer = new ACF_Footer_Flexible_Content( 'global_footer_flexible_content', 'global_footer_menu' );
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

    <?php
        

    // if( !get_field('global_footer_menu', 'options')) return;
    //     var_dump(get_field('global_footer_menu', 'options'));
   
    
    
    ?>

    <div id="text-content" class="text-content">
        &nbsp; 
        <p>
            <?php echo wp_kses( $site_info, $allowed ); ?>
        </p>
    </div>

</footer>
</body>
</html>
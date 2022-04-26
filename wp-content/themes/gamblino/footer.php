<?php 
    $site_info = get_theme_mod( 'gamblino_footer_site_info' );
    wp_footer();

?>

<footer>
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
    <?php echo wp_kses( $site_info, $allowed ); ?>
</div>

</footer>
</body>
</html>
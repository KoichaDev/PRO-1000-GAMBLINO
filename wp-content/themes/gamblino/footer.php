<?php 
    $site_info = get_theme_mod( 'gamblino_site_info', );

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

    echo wp_kses( $site_info, $allowed );
    
?>

</footer>
</body>
</html>
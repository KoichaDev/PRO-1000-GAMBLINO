<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/b3ce871dc0.js" crossorigin="anonymous"></script>
    <?php wp_head(); ?>
    <title><?php bloginfo( 'name' ); ?></title>
</head>
<body <?php body_class(); ?>>

<?php 
  $navbar_header_object = new ACF_Navbar_Header(); 
  $x = new ACF_Navbar_Image();

  var_dump($x);
  $header_bg_color = $navbar_header_object -> get_header_bg_color(); 

  var_dump($header_bg_color);
?>


<header 
  class='[ header-main ]' 
  id="header-main"  
  style="background-color: <?php echo $header_bg_color; ?>"
>
    <nav class='[ mobile-navbar ]'>
      <?php  include get_stylesheet_directory() . '/src/icons/hamburger-menu.svg'; ?>
    </nav>
</header>
    
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
  $header_bg_color = (new NavbarMenuColorOptions()) -> get_header_bg_color();
  $navbarMenuImageGroupOptions = new NavbarMenuImageGroupOptions();

  $imageId = $navbarMenuImageGroupOptions -> getLogoImageId();
  $imagAltText = $navbarMenuImageGroupOptions -> getLogoImageAltText();
  $imageAriaLabel = $navbarMenuImageGroupOptions -> getLogoImageAriaLabel();
  $imageTitle = $navbarMenuImageGroupOptions -> getLogoImagetitle();

?>


<header 
  class='[ header-main ]' 
  id="header-main"  
  style="background-color: <?php echo $header_bg_color ?>"
>
    <nav class='[ mobile-navbar ]'>
      <?php  include get_stylesheet_directory() . '/src/icons/hamburger-menu.svg'; ?>
    </nav>
</header>
    
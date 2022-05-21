<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/b3ce871dc0.js" crossorigin="anonymous"></script>
    <?php wp_head(); ?>
    <title><?php bloginfo( 'name' ); ?></title>
</head>
<body id="body" <?php body_class(); ?>>

<?php $header_bg_color = (new NavbarMenuColorOptions()) -> getBackgroundColor(); ?>

<header class="header-container">
    <?php include(get_template_directory() . '/views/navbar/mobile-categories.view.php'); ?>

    <nav class="p-7" id="header-main" style="background-color: <?php echo $header_bg_color ?>">
        <?php include(get_template_directory() . '/views/navbar/mobile.view.php'); ?>
    </nav>

</header>

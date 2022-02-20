<?php 
$inline_style_width =  get_field('block_carousel_adjust_width_inline_style') . "%;";
$inline_style_height =  get_field('block_carousel_adjust_height_inline_style') . "px;";
?>

<div class="carousel" style="
  height: <?php echo $inline_style_height; ?>
  width: <?php echo $inline_style_width; ?>"
>
  <button class="carousel__button carousel__button--left" id="button-left" aria-label="left Button to see more image">
    <i class="fas fa-chevron-left fa-3x"></i>
  </button>
  <div class="carousel__track-container">
    <ul class="carousel__track">        
    <?php if (have_rows('block_carousel_row')) : ?>
        <?php while( have_rows('block_carousel_row') ): the_row(); ?>
          <?php 
            $img_attachment_id = get_sub_field('block_carousel_add_image')['id'];
            $is_text_caption_on = get_sub_field('block_carousel_add_caption');
            $img_text_caption = get_sub_field('block_carousel_set_caption');
            $caption_text_alignment = get_sub_field('block_carousel_text_caption_alignment');
          ?>
        <li class="carousel__slide current-slide">
            <?php echo wp_get_attachment_image( $img_attachment_id, 'full', "", ["class" => "carousel__image", "alt" => $img_text_caption]); ?>

            <?php if(!empty($is_text_caption_on)) : ?>
            <figcaption class="carousel__slide-figcaption <?php echo $caption_text_alignment; ?>">
                <p><?php echo $img_text_caption; ?></p>
            </figcaption>
            <?php endif; ?>
        </li>
        <?php endwhile; ?>
    <?php endif; ?>
    </ul>
    </div>
    
    <button class="carousel__button carousel__button--right" id="button-right" aria-label="Right Button to see more image">
      <i class="fas fa-chevron-right fa-3x"></i>
    </button>

  <?php if(!empty(get_field('block_carousel_display_indicator_dots'))) :?>
    <nav class="carousel__nav" id="carousel-nav"></nav>
  <?php endif; ?>
</div>
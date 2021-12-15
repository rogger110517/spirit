<?php get_header(); ?>
        <!-- <div class="slider_content">&nbsp;</div> -->

        <div class="banner_slider">     
                <div class="banner_content">
                        <img src="<?=get_template_directory_uri();?>/assets/img/banner/pack-case-1.jpg" alt="">
                        <img src="<?=get_template_directory_uri();?>/assets/img/banner/pack-case-2.jpg" alt="">
                        <img src="<?=get_template_directory_uri();?>/assets/img/banner/pack-case-3.jpg" alt="">
                </div>
                <div class="banner_content">
                        <img src="<?=get_template_directory_uri();?>/assets/img/banner/pack-case-4.jpg" alt="">
                        <img src="<?=get_template_directory_uri();?>/assets/img/banner/pack-case-5.jpg" alt="">
                        <img src="<?=get_template_directory_uri();?>/assets/img/banner/pack-case-6.jpg" alt="">
                </div>
                <div class="banner_content">
                        <img src="<?=get_template_directory_uri();?>/assets/img/banner/pack-case-7.jpg" alt="">
                        <img src="<?=get_template_directory_uri();?>/assets/img/banner/pack-case-8.jpg" alt="">
                        <img src="<?=get_template_directory_uri();?>/assets/img/banner/pack-case-9.jpg" alt="">
                </div>
        </div>
        <div class="content_full">
                <div class="content_spirt">
                        <h1 class="content_spirt_title">Bienvenidos a SPIRT TECH SMART</h1>
                </div>
        <div class="product_dest">
                 <p class="product_dest_title">Nuestras novedades</p>
        </div>
        <div class="content_fluid">
                <div class="content">
                        <div class="row">
                                <div class="content_noved">
                                        <div class="">
                                                <img src="<?=get_template_directory_uri();?>/assets/img/novedades/novedades-1-spirt.jpg" alt="">
                                        </div>
                                </div>
                                <div class="content_noved">
                                        <div  class="">
                                                <img src="<?=get_template_directory_uri();?>/assets/img/novedades/novedades-2-spirt.jpg" alt="">
                                        </div>
                                </div>
                                <div class="content_noved">
                                        <div class="">
                                                <img src="<?=get_template_directory_uri();?>/assets/img/novedades/novedades-3-spirt.jpg" alt="">
                                        </div>
                                </div>
                        </div>
                </div>
        </div>
        <div class="product_dest">
        <p class="product_dest_title">Nuestros productos</p>
        </div>
        <p><?php echo do_shortcode('[product_categories]');?></p>
        <div class="product_dest">
        <p class="product_dest_title">Te puede interesar</p>
        </div>
        <p><?php echo do_shortcode('[products columns="4" orderby="title"]'); ?></p>
</div>
<?php get_footer(); ?>

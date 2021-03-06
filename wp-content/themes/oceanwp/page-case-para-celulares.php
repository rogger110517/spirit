<?php get_header(); ?>
    <section>
        <div class="container-fluid">
            <div class="container">
                <div class="row-center">
                    <div class="col-12">
                        <div class="product_category">
                                <h1 class="">Case para celulares</h1>
                        </div>
                    </div>
                    
                </div>
                <?php
                        $arg_productos = array(
                            "post_type" => "productos",
                            "posts_per_page" => -1,
                            "order" => "ASC",
                            "orderby" => "date",
                            'tax_query' => array(
                                array(
                                  'taxonomy' => 'categoria',
                                  'field' => 'slug',
                                  'terms' => 'case',
                                )
                              )
                        );
                        $productos = new WP_Query($arg_productos);
                ?>
                <?php if ($productos->have_posts()) { ?>
                <div class="row">
                <?php while($productos->have_posts()){$productos->the_post();
                    $img_destacada = get_the_post_thumbnail_url($post->ID);
                    var_dump($img_destacada);
                    ?>
                        <div class="content_noved">
                                <div class="content_noved_card">
                                        <img src="<?= $img_destacada ?>" alt="">
                                </div>
                                <div><p class="content_noved_paragraph"><?php echo the_title(); ?></p></div>
                        </div>
                        
                       <?php } ?>
                </div>
                <?php } ?>
            </div>
        </div>
    </section>
<?php get_footer(); ?>
<?php class WebnusPostSliderWidget extends WP_Widget{
	function __construct(){
		$params = array('description'=> 'Displays 3 recent post in slider','name'=> 'Webnus-Post Slider');
		parent::__construct('WebnusPostSliderWidget', '', $params);
	}
	public function form($instance){
		extract($instance);	?>
		<p><label for="<?php echo esc_attr( $this->get_field_id('title') ) ?>"><?php esc_html_e('Title:','deep') ?></label><input	type="text"	class="widefat"	id="<?php echo esc_attr( $this->get_field_id('title') ) ?>"	name="<?php echo esc_attr( $this->get_field_name('title') ) ?>"	value="<?php if( isset($title) )  echo esc_attr($title); ?>" /></p>
		<p><label for="<?php echo esc_attr( $this->get_field_id('count') ) ?>"><?php esc_html_e('Posts Count: ','deep') ?></label><input type="text"	class="widefat"	id="<?php echo esc_attr( $this->get_field_id('count') ) ?>"	name="<?php echo esc_attr( $this->get_field_name('count') ) ?>"	value="<?php if( isset($count) )  echo esc_attr($count); ?>"/></p>
		<?php 
	}
	public function widget($args, $instance){
		extract($args);
		extract($instance);
		echo '' . $before_widget;
		if(!empty($title))
			echo '' . $before_title.esc_html($title).$after_title;	?>
			<div class="postslider">
			<?php
			$query = new WP_Query( 'posts_per_page=3' );
			$output = '';
			$output .= '<div class="flexslider"><ul class="slides">';
			if($query->have_posts()){
				while($query->have_posts()) 
				{
					$query->the_post();
					$thumbnail_url = get_the_post_thumbnail_url();
					$thumbnail_id  = get_post_thumbnail_id();
					$output .= '<li><a href="'.get_permalink().'">';
					$output .= '<img src="'.$thumbnail_url.'" alt="'.get_the_title().'" >';
					$output .= '<p>'.get_the_title() . '</p>';
					$output .= '</a></li>';
					
				}
			}
			wp_reset_postdata();
			$output .= '</ul></div>';
			echo '' . $output; ?>
			<div class="clear"></div>
			</div>	 
		  <?php echo '' . $after_widget;
	} 
}
add_action('widgets_init','register_deep_postslider_widget'); 
function register_deep_postslider_widget(){
	register_widget('WebnusPostSliderWidget');
}
<?php
/**
 * Plugin Name: Advanced Team Block
 * Description: <strong>Advanced Team Block</strong> is a custom <strong>Gutenberg Block</strong> built with Gutenberg Native Components. No Block Builder. Simply to install and super-easy to use.
 * Author: Zakaria Binsaifullah
 * Author URI: https://makegutenblock.com/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package ATGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
require_once plugin_dir_path( __FILE__ ) . 'admin/admin.php';

// Plugin Action Link 
function atgb_admin_settings_link( $links ) {
	$new_link = array(
		'<a href="'. esc_url( 'https://makegutenblock.com/contact/' ) .'" target="_blank" style="color: #A11637; font-weight: 600">Contact</a>'
	);
	return array_merge( $new_link, $links );
}
add_filter( 'plugin_action_links_' . plugin_basename(__FILE__), 'atgb_admin_settings_link' );

// Redirecting
function atgb_user_redirecting( $plugin ) {
	if( plugin_basename(__FILE__) == $plugin ){
		wp_redirect( admin_url( 'tools.php?page=agt-teamblock' ) );
		die();
	}
}
add_action( 'activated_plugin', 'atgb_user_redirecting' );
<?php

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Blocks Class
*/

final class ATGB_Team_Blocks {

	private function __construct(){
		$this->atgb_define_constants();
		add_action( 'init', [ $this, 'atgb_blocks_assets' ] );
		add_filter( 'block_categories', [ $this, 'atgb_custom_category' ] );
		add_action( 'enqueue_block_assets', [ $this, 'atgb_external_assets_load' ] );
	}

	/**
	 * Singleton Instance
	*/

	public static function atgb_init(){
		static $instance = false; 
		if( ! $instance ) {
			$instance = new self();
		}
		return $instance;
	}

	/**
	 * Constants Define 
	*/
	public function atgb_define_constants(){
		define( 'ATGB_FILE', __FILE__ );
		define( 'ATGB_BLOCK', plugins_url( '', dirname( ATGB_FILE ) ) );
		define( 'ATGB_BLOCK_ASSETS', ATGB_BLOCK . '/dist' );
		define( 'ATGB_EXTERNAL_ASSETS', ATGB_BLOCK . '/assets' );
	}

	/**
	 * Blocks Registration 
	*/
	private function atgb_single_block_register( $block, $options=array() ){
		return register_block_type(
			'bcb/'. $block, 
			array_merge(
				array(
					'editor_script' => 'atgb-editor-script',
					'editor_style'  => 'atgb-editor-style',
					'style'         => 'atgb-style',
				),
				$options
			)
		);
	}

	/**
	 * Blocks Assets + Registration 
	*/
	public function atgb_blocks_assets(){

		// Frontend + Backend Style 
		wp_register_style(
			'atgb-style',
			ATGB_BLOCK_ASSETS . '/blocks.style.build.css',
			is_admin() ? array( 'wp-editor' ) : null,
			null
		);

		// Backend Style 
		wp_register_style(
			'atgb-editor-style',
			ATGB_BLOCK_ASSETS . '/blocks.editor.build.css',
			array( 'wp-edit-blocks' ),
			null
		);

		// Editor Scripts
		wp_register_script(
			'atgb-editor-script',
			ATGB_BLOCK_ASSETS . '/blocks.build.js',
			array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
			null,
			true
		);

		// Register Single Block 
		$this->atgb_single_block_register('team-member');
		$this->atgb_single_block_register('team-grid');
	
	}

	/**
	 * Block Custom Category 
	*/
	public function atgb_custom_category( $categories ){
		return array_merge(
            array(
                array(
                    'title' => 'Team Blocks',
                    'slug'  => 'team-blocks'
                )
            ),
			$categories
		);
	}

	/**
	 * External Assets Enqueue 
	*/
	public function atgb_external_assets_load(){
		// load dashicons
		wp_enqueue_style( 'dashicons' );

		// Plugin JS
		wp_enqueue_script( 'google-fonts', '//ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js', array(), '1.0.0', true );
		wp_enqueue_script( 'plugin-js', ATGB_EXTERNAL_ASSETS . '/js/plugin.js', array('jquery'), time(), true );
	}
	
}
/**
 * Initialization 
*/
function atgb_gutenberg_team_blocks(){
	return ATGB_Team_Blocks::atgb_init();
}

// kick-off the plugin 
atgb_gutenberg_team_blocks();
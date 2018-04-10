<?php

namespace HM\Platform\Admin;

// Load react scripts loader.
require_once __DIR__ . '/react-loader.php';

use HM\Platform;
use WP_Admin_Bar;

/**
 * Bootstrap the admin.
 */
add_action( 'admin_menu', __NAMESPACE__ . '\\add_menu_item' );
add_action( 'admin_bar_menu', __NAMESPACE__ . '\\add_menu_bar_item' );
add_filter( 'custom_menu_order', '__return_true' );
add_filter( 'menu_order', __NAMESPACE__ . '\\platform_menu_order', 20 );
add_action( 'admin_enqueue_scripts', __NAMESPACE__ . '\\enqueue_assets' );
add_action( 'wp_footer', __NAMESPACE__ . '\\enqueue_assets', 2001 );
add_action( 'admin_footer', __NAMESPACE__ . '\\app_root' );
add_action( 'wp_footer', __NAMESPACE__ . '\\app_root', 2000 );
add_action( 'rest_api_init', __NAMESPACE__ . '\\api_init' );
add_filter( 'pre_update_option_hm_analytics_optout', __NAMESPACE__ . '\\sync_network_optout' );
add_filter( 'option_hm_analytics_optout', __NAMESPACE__ . '\\get_network_optout' );
add_action( 'admin_init', __NAMESPACE__ . '\\color_scheme' );
add_filter( 'get_user_option_admin_color', __NAMESPACE__ . '\\default_admin_theme' );
add_filter( 'insert_user_meta', __NAMESPACE__ . '\\insert_user_meta', 10, 3 );

/**
 * Get the platform UI plugin base URL.
 *
 * @return string
 */
function get_base_url() {
	return defined( 'HM_PLATFORM_UI_URL' ) ? HM_PLATFORM_UI_URL : WP_CONTENT_URL . '/hm-platform/plugins/hm-platform-ui';
}

function get_environment() {
	if ( defined( 'HM_DEV' ) && HM_DEV ) {
		return 'local';
	}

	if ( defined( 'HM_ENV_TYPE' ) && HM_ENV_TYPE ) {
		return HM_ENV_TYPE;
	}

	if ( defined( 'HM_ENV' ) && HM_ENV ) {
		return HM_ENV;
	}

	return $_SERVER['SERVER_NAME'];
}

/**
 * Gets a unique user ID containing no identifiable info for use with
 * analytics packages.
 *
 * Uniqueness based on
 *  - installation URL
 *  - environment
 *  - user ID
 */
function get_anonymous_user() {
	return md5( serialize( [
		WP_HOME,
		get_environment(),
		get_current_user_id(),
	] ) );
}

/**
 * Get the plugin data along with the config for each.
 *
 * @return array
 */
function get_plugin_manifest() {
	$config   = Platform\Config\get_config()['plugins'];
	$manifest = Platform\get_plugin_manifest();

	return array_values( array_map( function ( $plugin, $name ) use ( $config ) {
		return [
			'name'     => $name,
			'title'    => $plugin['title'] ?? false,
			'settings' => $config[ $name ]['settings'],
			'enabled'  => $config[ $name ]['enabled'],
		];
	}, $manifest, array_keys( $manifest ) ) );
}

/**
 * @param array $menu_order
 *
 * @return array
 */
function platform_menu_order( $menu_order ) {
	$hm_menu_order = [];

	foreach ( $menu_order as $index => $item ) {
		if ( $item !== 'hm-platform' ) {
			$hm_menu_order[] = $item;
		}

		if ( $index === 0 ) {
			$hm_menu_order[] = 'hm-platform';
		}
	}

	return $hm_menu_order;
}

/**
 * Get an array of the sub menu items for platform.
 */
function get_submenu_pages() {
	return [
		[ 'title' => esc_html__( 'Dashboard', 'hm-platform' ), 'path' => '/', 'exact' => true ],
		[ 'title' => esc_html__( 'Enterprise Kit', 'hm-platform' ), 'path' => '/ek' ],
		[ 'title' => esc_html__( 'Cloud', 'hm-platform' ), 'path' => '/cloud' ],
		[ 'title' => esc_html__( 'Documentation', 'hm-platform' ), 'path' => '/documentation' ],
	];
}

/**
 * Adds the parent menu bar item.
 */
function add_menu_item() {
	global $submenu;

	$ek_page_callback = function () {
		printf( '<div id="hm-platform"><span class="loading--red"></span> %s</div>', 'Loading HM Platform' );
	};

	add_menu_page(
		'Human Made Platform',
		'Platform',
		'manage_options',
		'hm-platform',
		$ek_page_callback,
		'data:image/svg+xml;base64,' . base64_encode( file_get_contents( WP_CONTENT_DIR . '/hm-platform/plugins/hm-platform-ui/src/assets/logo-small-white.svg' ) ),
		2
	);

	foreach ( get_submenu_pages() as $page ) {
		add_submenu_page(
			'hm-platform',
			$page['title'],
			$page['title'],
			'manage_options',
			'hm-platform#' . $page['path'],
			$ek_page_callback
		);
	}

	// Remove default parent link.
	unset( $submenu['hm-platform'][0] );
}

/**
 * Add the menu bar item.
 *
 * @param \WP_Admin_Bar $wp_admin_bar
 */
function add_menu_bar_item( WP_Admin_Bar $wp_admin_bar ) {
	$wp_admin_bar->add_group( [
		'id' => 'hm-platform-toolbar',
	] );
	$wp_admin_bar->add_node( [
		'id'     => 'hm-platform-toolbar-ui',
		'title'  => '',
		'parent' => 'hm-platform-toolbar',
		'meta'   => [
			'class' => 'menupop',
		],
	] );
}

function should_load() {
	if ( ! is_user_logged_in() ) {
		return false;
	}

	if ( ! is_admin() && ! is_admin_bar_showing() ) {
		return false;
	}

	return true;
}

/**
 * Only provide target
 */
function app_root() {
	if ( ! should_load() ) {
		return;
	}

	echo '<div id="hm-platform-root"></div>';
	echo '<div id="hm-platform-iframe-modal"></div>';
}

/**
 * Load the UI scripts.
 */
function enqueue_assets() {
	if ( ! should_load() ) {
		return;
	}

	// React app.
	ReactWPScripts\enqueue_assets( __DIR__, [
		'base_url' => get_base_url(),
		'handle'   => 'hm-platform-ui',
		'scripts'  => [ 'jquery' ],
	] );

	$ui_data = [
		'Locale'         => str_replace( '_', '-', get_user_locale() ),
		'CurrentSiteURL' => home_url(),
		'BuildURL'       => ReactWPScripts\infer_base_url( __DIR__ . '/build' ),
		'AdminURL'       => admin_url( '/admin.php?page=hm-platform' ),
		'REST'           => [
			'URL'   => get_rest_url(),
			'Nonce' => wp_create_nonce( 'wp_rest' ),
		],
		'Pages'          => get_submenu_pages(),
		'Config'         => \HM\Platform\Config\get_config(),
		'EnterpriseKit'  => [
			'Version'     => \HM\Platform\version(),
			'DocsVersion' => \HM\Platform\docs_version(),
			'DocsURL'     => \HM\Platform\docs_url(),
			'Config'      => get_plugin_manifest(),
		],
		'Environment'    => get_environment(),
		'User'           => get_anonymous_user(),
		'Analytics'      => [
			'OptoutBy' => defined( 'HM_ANALYTICS_OPTOUT' ) ? 'code' : 'setting',
			'Optout'   => defined( 'HM_ANALYTICS_OPTOUT' ) ? HM_ANALYTICS_OPTOUT : get_site_option( 'hm_analytics_optout', false ),
		],
	];

	wp_add_inline_script( 'hm-platform-ui', sprintf( 'var HM = HM || {}; HM.UI = %s;', wp_json_encode( $ui_data ) ), 'before' );

	// Tag manager.
	if ( ! get_site_option( 'hm_analytics_optout', false ) && ( ! defined( 'HM_ANALYTICS_OPTOUT' ) || ! HM_ANALYTICS_OPTOUT ) ) {
		wp_add_inline_script(
			'hm-platform-ui',
			sprintf( 'var HMDataLayer = [ %s ];', wp_json_encode( [
				'user'        => get_anonymous_user(),
				'docsVersion' => \HM\Platform\docs_version(),
			] ) ),
			'before'
		);
		wp_add_inline_script(
			'hm-platform-ui',
			'(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({\'gtm.start\':
			new Date().getTime(),event:\'gtm.js\'});var f=d.getElementsByTagName(s)[0],
			j=d.createElement(s),dl=l!=\'dataLayer\'?\'&l=\'+l:\'\';j.async=true;j.src=
			\'https://www.googletagmanager.com/gtm.js?id=\'+i+dl;f.parentNode.insertBefore(j,f);
			})(window,document,\'script\',\'HMDataLayer\',\'GTM-NV5TSKX\');',
			'after'
		);
	}

	// We need to load really late on the front end after the admin bar.
	if ( current_action() === 'wp_footer' ) {
		wp_print_footer_scripts();
	}
}

/**
 * Register API settings and endpoints for the platform UI.
 */
function api_init() {
	// Allow optout to be set via the API.
	register_setting( 'hm-platform', 'hm_analytics_optout', [
		'type'              => 'boolean',
		'description'       => esc_html__( 'Whether to opt out of analytics tracking for HM Platform', 'hm-platform' ),
		'sanitize_callback' => function ( $value ) {
			return ! empty( $value );
		},
		'show_in_rest'      => true,
		'default'           => defined( 'HM_ANALYTICS_OPTOUT' ) ? HM_ANALYTICS_OPTOUT : false,
	] );

	$post_types = get_post_types( [ 'public' => true ] );

	foreach ( $post_types as $post_type ) {
		if ( post_type_supports( $post_type, 'comments' ) ) {
			register_rest_field( $post_type, 'comment_count', [
				'get_callback' => function( $post_arr ) {
					return get_comment_count( $post_arr['id'] );
				},
				'schema'       => [
					'description' => __( 'Comment counts.', 'hm-platform' ),
					'type'        => 'array',
					'items'       => [
						'type' => 'integer',
					],
				],
			] );
		}
	}

}

/**
 * When updating the optout setting for the site, update
 * the site option.
 *
 * @param $value
 * @return bool
 */
function sync_network_optout( $value ) {
	update_site_option( 'hm_analytics_optout', ! empty( $value ) );

	return $value;
}

/**
 * Return the network option when retrieving the optout value.
 *
 * @return bool
 */
function get_network_optout() {
	return (bool) get_site_option( 'hm_analytics_optout', false );
}

/**
 * Add our HM custom colour scheme.
 */
function color_scheme() {
	// Add our colour scheme.
	wp_admin_css_color( 'hm', 'Human Made', get_base_url() . '/src/admin.css', [
		'base'         => '#353535', // base color
		'icon'         => '#F4EFE6', // icon color
		'highlight'    => '#D94E3A', // highlight color
		'notification' => '#7DC9DA', // notification color
	], [
		// SVG icon colours.
		'base'    => '#eff1ef',
		'focus'   => '#F4EFE6',
		'current' => '#eff1ef',
	] );
}

/**
 * Default to HM Platform admin theme.
 *
 * @param mixed $value
 * @return string
 */
function default_admin_theme( $value ) {
	if ( empty( $value ) ) {
		return 'hm';
	}

	return $value;
}

/**
 * Filter meta for new users to set admin_color to HM theme.
 *
 * @param array    $meta
 * @param \WP_User $user
 * @param bool     $update
 * @return array
 */
function insert_user_meta( $meta, $user, $update ) {
	if ( $update ) {
		return $meta;
	}

	$meta['admin_color'] = 'hm';

	return $meta;
}

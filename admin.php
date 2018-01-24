<?php

namespace HM\Platform\Admin;

// Load react scripts loader.
if ( ! function_exists( '\\ReactWPScripts\\enqueue_assets' ) ) {
	require_once 'react-loader.php';
}

use HM\Platform;
use WP_Admin_Bar;
use ReactWPScripts;

/**
 * Bootstrap the admin.
 */
function bootstrap() {
	add_filter( 'manage_plugins_columns', __NAMESPACE__ . '\\alter_columns' );
	add_filter( 'views_plugins', __NAMESPACE__ . '\\add_platform_link' );
	add_action( 'pre_current_active_plugins', __NAMESPACE__ . '\\show_in_admin' );
	add_action( 'network_admin_plugin_action_links', __NAMESPACE__ . '\\get_platform_actions', 10, 4 );
	add_action( 'plugin_action_links', __NAMESPACE__ . '\\get_platform_actions', 10, 4 );
	add_action( 'admin_menu', __NAMESPACE__ . '\\add_menu_item' );
	add_action( 'admin_bar_menu', __NAMESPACE__ . '\\add_menu_bar_item' );
	add_filter( 'custom_menu_order', '__return_true' );
	add_filter( 'menu_order', __NAMESPACE__ . '\\platform_menu_order', 20 );
	add_action( 'admin_enqueue_scripts', __NAMESPACE__ . '\\enqueue_assets' );
	add_action( 'admin_footer', __NAMESPACE__ . '\\app_root' );
	add_action( 'rest_api_init', __NAMESPACE__ . '\\api_init' );

	// Filter the optout setting so it's network wide.
	if ( is_multisite() ) {
		add_filter( 'pre_update_option_hm_analytics_optout', __NAMESPACE__ . '\\sync_network_optout' );
		add_filter( 'option_hm_analytics_optout', __NAMESPACE__ . '\\get_network_optout' );
	}
}

/**
 * Alter list table columns for the platform page.
 *
 * @param array $columns Map of column ID => description.
 * @return array Altered columns.
 */
function alter_columns( $columns ) {
	if ( $_REQUEST['plugin_status'] !== 'platform' ) {
		return $columns;
	}

	// Remove the checkbox.
	unset( $columns['cb'] );

	return $columns;
}

/**
 * Add platform link to the views.
 *
 * @param array $views Views for the list table.
 * @return array Views with platform added.
 */
function add_platform_link( $views ) {
	global $status;

	$logo = '<img src="https://humanmade.github.io/hm-pattern-library/assets/images/logos/logo-small-red.svg" style="height: 12px; vertical-align: middle" />';

	$views['platform'] = sprintf(
		"<a href='%s' %s>%s %s</a>",
		add_query_arg( 'plugin_status', 'platform', 'plugins.php' ),
		( 'platform' === $status ) ? ' class="current"' : '',
		$logo,
		__( 'Platform', 'hm-platform' )
	);

	return $views;
}

/**
 * Get drop-in files.
 *
 * @return array Map of drop-in ID => drop-in file.
 */
function get_dropins() {
	return [
		'batcache'    => 'batcache/batcache.php',
		'memcached'   => 'wordpress-pecl-memcached-object-cache/object-cache.php',
		'ludicrousdb' => 'ludicrousdb/ludicrousdb.php',
	];
}

/**
 * Add plugin data to the plugin list table.
 */
function show_in_admin() {
	global $plugins, $wp_list_table;

	$plugins['platform'] = [];

	// Add drop-ins first.
	foreach ( get_dropins() as $name => $plugin_file ) {
		$plugin_data = get_plugin_data( dirname( dirname( __DIR__ ) ) . '/dropins/' . $plugin_file, false, false );

		if ( empty ( $plugin_data['Name'] ) ) {
			$plugin_data['Name'] = $name;
		}

		$plugins['platform'][ $plugin_file ] = $plugin_data;
	}

	// Add our own mu-plugins to the page
	foreach ( Platform\get_available_plugins() as $name => $plugin_file ) {
		$plugin_data = get_plugin_data( dirname( dirname( __DIR__ ) ) . '/plugins/' . $plugin_file, false, false );

		if ( empty ( $plugin_data['Name'] ) ) {
			$plugin_data['Name'] = $name;
		}

		$plugins['platform'][ $plugin_file ] = $plugin_data;
	}

	// Recount totals
	$GLOBALS['totals']['platform'] = count( $plugins['platform'] );

	// Only apply the rest if we're actually looking at the page
	if ( ! isset( $_REQUEST['plugin_status'] ) || $_REQUEST['plugin_status'] !== 'platform' ) {
		return;
	}

	// Reset the global.
	$GLOBALS['status'] = 'platform';

	// Reset the list table's data
	$wp_list_table->items = $plugins['platform'];
	foreach ( $wp_list_table->items as $plugin_file => $plugin_data ) {
		$wp_list_table->items[ $plugin_file ] = _get_plugin_data_markup_translate( $plugin_file, $plugin_data, false, true );
	}

	$total_this_page = $GLOBALS['totals']['platform'];

	if ( $GLOBALS['orderby'] ) {
		uasort( $wp_list_table->items, [ $wp_list_table, '_order_callback' ] );
	}

	// Force showing all plugins
	// See https://core.trac.wordpress.org/ticket/27110
	$plugins_per_page = $total_this_page;

	$wp_list_table->set_pagination_args( [
		'total_items' => $total_this_page,
		'per_page'    => $plugins_per_page,
	] );
}

/**
 * Get platform plugin actions.
 *
 * @param array  $actions     Existing actions for the row.
 * @param string $plugin_file Filename for the plugin.
 * @param array  $plugin_data Headers from the plugin file.
 * @param string $context     Current subpage of the plugin page.
 * @return array Altered actions.
 */
function get_platform_actions( $actions, $plugin_file, $plugin_data, $context ) {
	$mu_plugins = Platform\get_available_plugins();
	$config     = Platform\get_config();

	if ( $context !== 'platform' ) {
		return $actions;
	}

	$actions = [];
	$key     = array_search( $plugin_file, $mu_plugins );
	if ( $key ) {
		if ( ! empty( $config[ $key ] ) ) {
			$actions[] = '<span style="color:#333">Plugin (Active)</span>';
		} else {
			$actions[] = 'Plugin (Inactive)';
		}
	} else {
		$dropins = get_dropins();
		$key     = array_search( $plugin_file, $dropins );
		if ( ! empty( $config[ $key ] ) ) {
			$actions[] = '<span style="color:#333">Drop-In (Active)</span>';
		} else {
			$actions[] = 'Drop-In (Inactive)';
		}
	}

	return $actions;
}

function get_environment() {
	if ( defined( 'HM_DEV' ) && HM_DEV ) {
		return 'local';
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
function get_user() {
	return md5( serialize( [
		WP_HOME,
		get_environment(),
		get_current_user_id(),
	] ) );
}

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
 * Adds the parent menu bar item.
 */
function add_menu_item() {
	global $submenu;

	$ek_page_callback = function () {
		printf( '<div id="hm-platform"><span class="loading--red"></span> %s</div>', 'Loading HM Platform' );
	};

	add_menu_page(
		'Human Made Platform',
		'HM Platform',
		'manage_options',
		'hm-platform',
		$ek_page_callback,
		WP_CONTENT_URL . '/hm-platform/plugins/hm-platform-ui/src/assets/logo-small-red.svg',
		2
	);

	$sub_pages = [
		'/'              => esc_html__( 'Dashboard', 'hm-platform' ),
		'/ek'            => esc_html__( 'Enterprise Kit', 'hm-platform' ),
		'/cloud'         => esc_html__( 'Cloud', 'hm-platform' ),
		'/documentation' => esc_html__( 'Documentation', 'hm-platform' ),
		'/privacy'       => esc_html__( 'Privacy', 'hm-platform' ),
	];

	foreach ( $sub_pages as $url => $title ) {
		add_submenu_page(
			'hm-platform',
			$title,
			$title,
			'manage_options',
			'hm-platform#' . $url,
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
		'title'  => 'HM Platform',
		'parent' => 'hm-platform-toolbar',
		'meta'   => [
			'class' => 'menupop',
		],
	] );
}

function app_root() {
	echo '<div id="hm-platform-root"></div>';
	echo '<div id="hm-platform-iframe-modal"></div>';
}

/**
 * Load the UI scripts.
 */
function enqueue_assets() {
	// React app.
	ReactWPScripts\enqueue_assets( __DIR__, [
		'base_url' => WP_CONTENT_URL . '/hm-platform',
		'handle'   => 'hm-platform',
	] );
	wp_localize_script( 'hm-platform', 'HM', [
		'AdminURL'      => admin_url( '/admin.php?page=hm-platform' ),
		'REST'          => [
			'URL'   => get_rest_url(),
			'Nonce' => wp_create_nonce( 'wp_rest' ),
		],
		'EnterpriseKit' => [
			'Version'     => \HM\Platform\version(),
			'DocsVersion' => \HM\Platform\docs_version(),
			'DocsURL'     => \HM\Platform\docs_url(),
			'Features'    => [],
		],
		'Environment'   => get_environment(),
		'User'          => get_user(),
		'Analytics'     => [
			'OptoutBy' => defined( 'HM_ANALYTICS_OPTOUT' ) ? 'code' : 'setting',
			'Optout'   => defined( 'HM_ANALYTICS_OPTOUT' ) ? HM_ANALYTICS_OPTOUT : get_site_option( 'hm_analytics_optout', false ),
		],
	] );

	// Tag manager.
	if ( ! get_site_option( 'hm_analytics_optout', false ) && ( ! defined( 'HM_ANALYTICS_OPTOUT' ) || ! HM_ANALYTICS_OPTOUT ) ) {
		wp_add_inline_script(
			'hm-platform',
			sprintf( 'var HMDataLayer = [ %s ];', wp_json_encode( [
				'user'        => get_user(),
				'docsVersion' => \HM\Platform\docs_version(),
			] ) ),
			'before'
		);
		wp_add_inline_script(
			'hm-platform',
			'(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({\'gtm.start\':
			new Date().getTime(),event:\'gtm.js\'});var f=d.getElementsByTagName(s)[0],
			j=d.createElement(s),dl=l!=\'dataLayer\'?\'&l=\'+l:\'\';j.async=true;j.src=
			\'https://www.googletagmanager.com/gtm.js?id=\'+i+dl;f.parentNode.insertBefore(j,f);
			})(window,document,\'script\',\'HMDataLayer\',\'GTM-NV5TSKX\');',
			'after'
		);
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

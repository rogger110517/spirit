<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'ecommerce' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ']NDiBt&tt}#{>(D)4UeZES*/kH@fOU7a`N1$+<*a_y-;}nD=Z{a8>oy=tHp{F}X|' );
define( 'SECURE_AUTH_KEY',  'iwDNWf+l*J[k@4Njc8H5BryN)?&%)J5%fJ_w_)[PO)j#BHy@DKibD)GrD^^WRHOE' );
define( 'LOGGED_IN_KEY',    'laoq?B#>7^d+W6gy,<d|r4:v$Tb:#_4_8x:4N8,a8{jCMlsk(W,#lA^KT*&Bld{C' );
define( 'NONCE_KEY',        '61rP$#B0|_}I> a/9DHkJo`b)c7JX+amM1|Vqp7@ym*g0FWrw78B`].zBr,m!9!8' );
define( 'AUTH_SALT',        '*jo(D*0n#qD[(oEUO=Gm[aT_SAy+9d5FB#%uxST?gj/r-$$WdD#4u<pQch4sf]C}' );
define( 'SECURE_AUTH_SALT', ' %LF?1zYi3~lJ/cb>#Z;@4}4,,*YVU #2ypu2x6bSd}x8h%qM&kFZhtk{vYWY$xz' );
define( 'LOGGED_IN_SALT',   'ui}@H,^+F6hwIEAvXu4Z;3];~i(LPWOE`,clw$m3=lNVB2;&*>t/,3{ua<-H:wFE' );
define( 'NONCE_SALT',       '>DexkM~bq!z^_9B>,=~KgURz#7uru s_5*2(xP+3/LrWK(72Xf#M`@Je=b`Rxr/C' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

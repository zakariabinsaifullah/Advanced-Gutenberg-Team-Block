/**
 * Block Name: Team Member Block
*/

//  Import CSS.
import attributes from './attributes';
import edit from './edit';
import './editor.scss';
import save from './save';
import './style.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;


/**
 * Register: Test Block.
 */
registerBlockType( 'bcb/team-grid', {
	title: __( 'Team Grid' ),
	description: __( 'Display Team Members in a Grid View' ),
	icon: {
		src: 'screenoptions',
		foreground: '#a32a46'
	},
	category: 'team-blocks',
	keywords: [
		__( 'Team Grid' ),
	],
	attributes, 
	edit,
	save,
} );

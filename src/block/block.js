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
registerBlockType( 'bcb/team-member', {
	title: __( 'Team Member' ),
	description: __( 'Display single team member information. It acts as child block.' ),
	icon: {
		src: 'businessperson',
		foreground: '#a32a46'
	},
	category: 'team-blocks',
	keywords: [
		__( 'Team Member' ),
	],
	attributes, 
	edit,
	save,
} );

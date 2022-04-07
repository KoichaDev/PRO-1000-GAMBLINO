// Wordpress Dependencies
import { __ } from '@wordpress/i18n'
import { registerBlockType } from '@wordpress/blocks'

// Meta Data for the Block
import attributesButtonStates from './meta-data-attributes/attributes-table-states'
import attributesTableCells from './meta-data-attributes/attributes-table-cells'
import attributesTableCaption from './meta-data-attributes/attributes-table-caption'
import attributesTableHeadings from './meta-data-attributes/attributes-table-toggle-cells'
import attributesTableData from './meta-data-attributes/attributes-table-data'
import attributesTableSupports from './meta-data-attributes/attributes-table-supports'

import TableEditor from './TableEditor'
import TableSave from './TableSave';

import './editor.scss';

// Table styling
import './style.scss';
import './editor.scss';

registerBlockType("gamblino-block/table", {
	apiVersion: 2,
	title: __('Gamblino Table', 'block-gamblino'),
	icon: 'screenoptions',
	category: 'gamblino',
	
	supports: {
		className: false,
		html: false,
		align: ["wide", "full"],
	},
	keywords: [__('table'), __('gamblino'), __('block')],
	attributes: {
		...attributesTableSupports,
		...attributesTableCaption,
		...attributesTableHeadings,
		...attributesTableData,
		...attributesTableCells,
		...attributesButtonStates,
	},
	edit: TableEditor,
	save: TableSave
});
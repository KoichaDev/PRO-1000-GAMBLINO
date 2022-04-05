// Wordpress Dependencies
import { __ } from '@wordpress/i18n'
import { registerBlockType } from '@wordpress/blocks'
import { Dashicon, FormToggle, PanelBody, PanelRow, Toolbar, Button, Tooltip } from '@wordpress/components';
import { BlockControls } from '@wordpress/block-editor'
import { createElement } from '@wordpress/element'

// Meta Data for the Block
import attributesButtonStates from './meta-data-attributes/attributes-table-states'
import attributesTableCells from './meta-data-attributes/attributes-table-cells'
import attributesTableCaption from './meta-data-attributes/attributes-table-caption'
import attributesTableHeadings from './meta-data-attributes/attributes-table-toggle-cells'
import attributesTableData from './meta-data-attributes/attributes-table-data'

import TableEditor from './TableEditor'

// Table Components 
import ToggleTableCells from './components/BlockEditor/ToggleTableCells'
import TableToolbarCell from './components/BlockEditor/TableToolbarCell'
import TableForm from './components/TableForm';

// Table styling
import './style.scss';
import './editor.scss';

registerBlockType("gamblino-block/table", {
	title: __('Gamblino Table', 'block-gamblino'),
	icon: 'screenoptions',
	category: 'gamblino',
	attributes: {
		...attributesButtonStates,
		...attributesTableCells,
		...attributesTableData,
		...attributesTableCaption,
		...attributesTableHeadings,

	},
	//////////////////// EDIT ////////////////////
	edit: TableEditor,
	
	//////////////////// SAVE ////////////////////
	save: props => {
		const { attributes: { dataBody, dataCaption, dataFooter, dataHead, useCaption, useColHeadings, useFooter, useRowHeadings }, className } = props;
		let numCols = parseInt(props.attributes.numCols, 10);
		let numRows = parseInt(props.attributes.numRows, 10);
		// Caption
		let tableCaption;
		if (useCaption === true) {
			tableCaption = <caption>{dataCaption}</caption>
		}
		// Table Head
		let tableHead;
		if (useColHeadings == true) {
			const tableHeadData = dataHead.map(function (cell, colIndex) {
				return (
					<th scope='col'>{cell.content.trim(' ')}</th>
				);
			});
			if (tableHeadData.length) {
				tableHead = <thead><tr>{tableHeadData}</tr></thead>;
			}
		}
		// Table Body
		let tableBody, tableBodyData = dataBody.map(function (rows) {
			let eachRowCells = rows.bodyCells.map(function (cell, colIndex) {
				if (useRowHeadings == true && colIndex == 0) {
					return <th scope='row'>{cell.content.trim(' ')}</th>
				} else {
					return <td>{cell.content.trim(' ')}</td>
				}
			});
			return <tr>{eachRowCells}</tr>;
		});
		if (tableBodyData.length) {
			tableBody = <tbody>{tableBodyData}</tbody>;
		}
		// Table Footer
		let tableFooter;
		// Calculate colspan: if useRowHeadings is true, there should be 1 extra column
		let totalCols = numCols;
		if (useRowHeadings == true) {
			totalCols++;
		}
		if (useFooter == true) {
			tableFooter = <tfoot><tr><td colspan={totalCols}>{dataFooter}</td></tr></tfoot>
		}
		// Final Return
		return (
			<table className={className}>
				{tableCaption}
				{tableHead}
				{tableBody}
				{tableFooter}
			</table>
		);
	}
});
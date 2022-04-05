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
	edit: props => {
		const { attributes: { buttonStates, currentCell, dataBody, dataCaption, dataFooter, dataHead, showTable, useCaption, useColHeadings, useFooter, useRowHeadings }, className, setAttributes } = props;
		let numCols = parseInt(props.attributes.numCols, 10);
		let numRows = parseInt(props.attributes.numRows, 10);
		var buttonsToEnable;
		// Caption
		let tableCaption, captionClass = 'is-hidden';
		if (showTable) {
			captionClass = '';
		}
		if (useCaption) {
			tableCaption = <caption
				className={captionClass}
				contenteditable='true'
				onFocus={evt => {
					exitCellState(evt);
				}}
			>
				{dataCaption}
			</caption>;
			tableCaption.props.onInput = function (evt) {
				props.setAttributes({ dataCaption: evt.target.textContent });
				// Move the cursor back where it was
				setCursor(evt);
			};
		}
		// Row Counter for aria labels - start at 1
		let ariaLabel, rowCounter = 1;
		// Table Head
		let tableHead, headClass = 'is-hidden';
		if (showTable) {
			headClass = '';
		}
		const tableHeadData = dataHead
			.map(function (cell, colIndex) {
				ariaLabel = 'Row ' + rowCounter + ' Column ' + (colIndex + 1);
				let currentThButtons = '1,2,4,5';
				// If row headings are enabled, and this is the very first col TH, don't allow insert col before or delete col
				if (colIndex == 0 && useRowHeadings == true) {
					currentThButtons = '2,4';
				}
				let currentTh = <th
					aria-label={ariaLabel}
					scope='col'
					contenteditable='true'
					data-buttons={currentThButtons}
					onFocus={evt => {
						enterCellState(evt);
					}}
				>
					{cell.content}
				</th>;
				currentTh.props.onInput = function (evt) {
					// Copy the dataHead
					let newHead = JSON.parse(JSON.stringify(dataHead));
					// Create a new cell
					let newTh = { content: evt.target.textContent };
					// Replace the old cell with the new cell
					newHead.splice(colIndex, 1, newTh);
					// Save the dataHead attribute
					props.setAttributes({ dataHead: newHead });
					// Move the cursor back where it was
					setCursor(evt);
				};
				return currentTh;
			});
		if (tableHeadData.length) {
			tableHead = <thead className={headClass}><tr>{tableHeadData}</tr></thead>;
		} else {
			// If there is no table head, take rowCounter back down to 0, because Table Body has to increment it before output
			rowCounter--;
		}
		// Table Body
		let tableBody, formClass = '', tableBodyData = dataBody
			.map(function (rows, rowIndex) {
				rowCounter++;
				let rowCells = rows.bodyCells.map(function (cell, colIndex) {
					// Set up options
					ariaLabel = 'Row ' + rowCounter + ' Column ' + (colIndex + 1);
					let cellType = 'd';
					let cellOptions = {
						'aria-label': ariaLabel,
						contenteditable: 'true',
						'data-buttons': '1,2,3,4,5,6',
						onFocus: (evt) => { enterCellState(evt); },
						onInput: (evt) => {
							// Copy the dataBody
							let newBody = JSON.parse(JSON.stringify(dataBody));
							// Create a new cell
							let newCell = { content: evt.target.textContent };
							// Replace the old cell
							newBody[rowIndex].bodyCells[colIndex] = newCell;
							// Set the attribute
							props.setAttributes({
								dataBody: newBody
							});
							// Move the cursor back where it was
							setCursor(evt);
						}
					};
					if (useRowHeadings == true && colIndex == 0) { cellType = 'h'; cellOptions['data-buttons'] = '2,3,4,6'; cellOptions.scope = 'row'; }
					// Create the element - either a TD or a TH
					let currentBodyCell = createElement(
						`t${cellType}`,
						cellOptions,
						cell.content
					)
					return currentBodyCell;
				});
				return (<tr>{rowCells}</tr>);
			});
		if (tableBodyData.length) {
			tableBody = <tbody>{tableBodyData}</tbody>;
			formClass = 'is-hidden';
		}
		// Table Footer
		var tableFooter, footerClass = 'is-hidden';
		if (showTable) {
			footerClass = '';
		}
		// Calculate colspan: if useRowHeadings is true, there should be 1 extra column
		let totalCols = numCols;
		if (useRowHeadings == true) {
			totalCols++;
		}
		if (useFooter == true) {
			let tableFooterTd = <td
				colspan={totalCols}
				className={footerClass}
				contenteditable='true'
				onFocus={evt => {
					exitCellState(evt);
				}}
			>
				{dataFooter}
			</td>;
			tableFooterTd.props.onInput = function (evt) {
				props.setAttributes({ dataFooter: evt.target.textContent });
				// Move the cursor back where it was
				setCursor(evt);
			};
			tableFooter = <tfoot><tr>{tableFooterTd}</tr></tfoot>;
		}
		// Final Return
		return (
			<div>

				<TableToolbarCell

					buttonStates={buttonStates}
					onClickInsertColumnBefore={() => () => doInsert('col', 'before')}
					onClickInsertColumnAfter={() => doInsert('col', 'after')}
					onClickInsertRowBefore={() => doInsert('row', 'before')}
					onClickInsertRowAfter={() => doInsert('row', 'after')}
					onClickDeleteColumn={() => doDelete('col')}
					onClickDeleteRow={() => doDelete('row')}
				/>
				<ToggleTableCells
					useCaption={useCaption}
					toggleCaption={toggleCaption}
					useColHeadings={useColHeadings}
					toggleColHeadings={toggleColHeadings}
					useRowHeadings={useRowHeadings}
					toggleRowHeadings={toggleRowHeadings}
					useFooter={useFooter}
					toggleFooter={toggleFooter}
				/>


				<table className={className}>
					{tableCaption}
					{tableHead}
					{tableBody}
					{tableFooter}
				</table>

				<TableForm
					formClassName={formClass}
					useCaption={useCaption}
					useColHeadings={useColHeadings}
					useRowHeadings={useRowHeadings}
					useFooter={useFooter}
					numCols={numCols}
					numRows={numRows}
					onAddCreateTable={e => buildTableHandler(e)}
					setAttributes={setAttributes}

				/>

			</div>
		);
		// Function that builds the table when the form is submitted
		function buildTableHandler(evt) {
			evt.preventDefault();
			// Only build the table and hide the form if there are rows and columns
			if (numCols > 0 && numRows > 0) {
				// Number of rows will always be numRows, because if useColHeadings is true, that extra row will be in the <thead>, not the <tbody>
				// But, number of columns will vary: if useRowHeadings is true, there should be 1 extra column
				// totalCols is used to build both the thead attribute array and the tbody attribute array
				let totalCols = numCols;
				if (useRowHeadings == true) {
					totalCols++;
				}
				// Build the thead attribute array
				let newHead = [];
				// If useColHeadings is true, add placeholders for the THs. If not, add nothing, because there should not be a thead at all.
				if (useColHeadings == true) {
					for (var i = 0; i < totalCols; i++) {
						newHead[i] = { content: '' };
					}
				}
				// Build the tbody attribute array
				let newBody = [];
				for (var row = 0; row < numRows; row++) {
					let thisRow = { bodyCells: [] };
					for (var col = 0; col < totalCols; col++) {
						thisRow.bodyCells[col] = { content: '' };
					}
					newBody[row] = thisRow;
				}
				// Save atts
				props.setAttributes({
					dataHead: newHead,
					dataBody: newBody,
					showTable: true
				});
			}
		}
		// Function that returns the cursor where it was, instead of the beginning of an input
		function setCursor(evt) {
			var node = evt.target;
			var caret = window.getSelection().anchorOffset;
			if (node.firstChild) {
				setTimeout(function () {
					let textNode = node.firstChild;
					var range = document.createRange();
					range.setStart(textNode, caret);
					range.setEnd(textNode, caret);
					var sel = window.getSelection();
					sel.removeAllRanges();
					sel.addRange(range);
				}, 1, node, caret);
			}
		}
		// Button Function: insert
		function doInsert(type, location) {
			let selectedRow = currentCell.row;
			// If there is a table head
			if (useColHeadings == true) {
				selectedRow--;
			}
			let selectedCol = currentCell.col;
			// If we are inserting after, add 1 to insert in the right place
			if (location == 'after') {
				selectedRow++;
				selectedCol++;
			}
			let endingRows = numRows;
			// 2 vars to track columns: allCols includes any potential THs; endingCols will be saved as numCols, and cannot contain THs
			let allCols = numCols, endingCols = numCols;
			// If row headings are enabled, add 1 extra cell to the row
			if (useRowHeadings == true) {
				allCols++;
			}
			let newBody = JSON.parse(JSON.stringify(dataBody));
			let newHead = JSON.parse(JSON.stringify(dataHead));
			if (type == 'row') {
				// First create a row
				let newRow = {
					bodyCells: []
				};
				for (var c = 0; c < allCols; c++) {
					newRow.bodyCells.push({ content: '' });
				}
				// Now insert the row (in this case splice isn't deleting anything because of the 0)
				newBody.splice(selectedRow, 0, newRow);
				// Increase the total number of rows
				endingRows++;
			} else if (type == 'col') {
				// Update the body
				for (var r = 0; r < endingRows; r++) {
					// Create a new cell
					let newCell = { content: '' };
					// Add the cell
					newBody[r].bodyCells.splice(selectedCol, 0, newCell);
				}
				// If there is a thead, update that too
				if (useColHeadings == true) {
					// Create a new cell
					let newTh = { content: '' };
					// Add the cell object
					newHead.splice(selectedCol, 0, newTh);
				}
				// Increase the total number of cols
				endingCols++;
			}
			props.setAttributes({
				dataBody: newBody,
				dataHead: newHead,
				numRows: endingRows.toString(),
				numCols: endingCols.toString()
			});
		}
		// Button Function: delete
		function doDelete(type) {
			let selectedRow = currentCell.row, selectedCol = currentCell.col,
				shouldShowTable = showTable, endingRows = numRows, endingCols = numCols,
				newBody = JSON.parse(JSON.stringify(dataBody)), newHead = JSON.parse(JSON.stringify(dataHead));
			if (type == 'row') {
				// If deleting the only row, set "showTable" to false, so only the form appears
				if (newBody.length == 1) {
					shouldShowTable = false;
				}
				// If there is a table head
				if (useColHeadings == true) {
					selectedRow--;
				}
				newBody.splice(selectedRow, 1);
				endingRows--;
			} else if (type == 'col') {
				endingCols--;
				// If deleting the only col, set "showTable" to false, so only the form appears
				if (newBody[selectedRow].bodyCells.length == 1) {
					shouldShowTable = false;
				}
				// Update the body
				for (var r = 0; r < endingRows; r++) {
					// Delete the cell
					newBody[r].bodyCells.splice(selectedCol, 1);
				}
				// If there is a thead, update that too
				if (useColHeadings == true) {
					// Delete the cell
					newHead.splice(selectedCol, 1);
				}
			}
			// Save the atts
			props.setAttributes({
				dataBody: newBody,
				dataHead: newHead,
				showTable: shouldShowTable,
				numRows: endingRows.toString(),
				numCols: endingCols.toString()
			});
		}
		// Enter Cell State to enable button functions
		function enterCellState(evt) {
			// Set enabled buttons
			buttonsToEnable = evt.target.dataset.buttons.split(',');
			let newButtonStates = {};
			for (let prop in buttonStates) {
				newButtonStates[prop] = true;
			}
			for (var b = 0; b < buttonsToEnable.length; b++) {
				let enableVar = 'disabled' + buttonsToEnable[b];
				newButtonStates[enableVar] = false;
			}
			// Set currently selected cell (convert row and column numbers to array keys - one less than the human-readable value in aria)
			let cellLabel = evt.target.getAttribute('aria-label');
			let cellCoords = cellLabel.split(' ');
			let cellRow = parseInt(cellCoords[1], 10) - 1;
			let cellCol = parseInt(cellCoords[3], 10) - 1;
			props.setAttributes({
				buttonStates: newButtonStates,
				currentCell: { row: cellRow, col: cellCol }
			});
		}
		// Exit Cell State to disable button functions
		function exitCellState() {
			// Disable all buttons by building a new object with every property set to true (disabled)
			let newButtonStates = {};
			for (let prop in buttonStates) {
				newButtonStates[prop] = true;
			}
			props.setAttributes({
				buttonStates: newButtonStates
			});
		}
		// Inspector - toggle caption
		function toggleCaption() {
			if (useCaption == false) {
				props.setAttributes({ useCaption: true });
			} else {
				props.setAttributes({ useCaption: false, dataCaption: '' });
			}
		}
		// Inspector - toggle col headings
		function toggleColHeadings() {
			if (useColHeadings == false) {
				// If the table has been built already, build the thead array and set attributes with it
				if (showTable == true) {
					// Just like in our Build Table function, if row headings is true, we need 1 extra column beyond the data-columns
					let totalCols = numCols;
					if (useRowHeadings == true) {
						totalCols++;
					}
					// Build the thead attribute array
					let newHead = [];
					for (var i = 0; i < totalCols; i++) {
						newHead[i] = { content: '' };
					}
					props.setAttributes({
						useColHeadings: true,
						dataHead: newHead
					});
				}
				// Else, the table has not been built yet and the form is showing, so only update useColHeadings
				else {
					props.setAttributes({ useColHeadings: true });
				}
			} else {
				props.setAttributes({
					useColHeadings: false,
					dataHead: []
				});
			}
		}
		// Inspector - toggle row headings
		function toggleRowHeadings() {
			if (useRowHeadings == false) {
				// If the table has been built already
				if (showTable == true) {
					// Similar to our Do Insert function for a column
					let endingRows = numRows;
					let newBody = JSON.parse(JSON.stringify(dataBody));
					let newHead = JSON.parse(JSON.stringify(dataHead));
					// Update the body
					for (var r = 0; r < endingRows; r++) {
						// Create a new cell
						let newCell = { content: '' };
						// Add the cell
						newBody[r].bodyCells.splice(0, 0, newCell);
					}
					// If there is a thead, update that too
					if (useColHeadings == true) {
						// Create a new cell
						let newTh = { content: '' };
						// Add the cell
						newHead.splice(0, 0, newTh);
					}
					// Set Atts
					props.setAttributes({
						useRowHeadings: true,
						dataBody: newBody,
						dataHead: newHead
					});
				}
				// Else, the table has not been built yet and the form is showing, so only update useRowHeadings
				else {
					props.setAttributes({ useRowHeadings: true });
				}
			} else {
				// If the table has been built already
				if (showTable == true) {
					let endingRows = numRows;
					let newBody = JSON.parse(JSON.stringify(dataBody));
					let newHead = JSON.parse(JSON.stringify(dataHead));
					// Update the body
					for (var r = 0; r < endingRows; r++) {
						// Remove the first cell
						newBody[r].bodyCells.splice(0, 1);
					}
					// If there is a thead, update that too
					if (useColHeadings == true) {
						// Remove the first cell
						newHead.splice(0, 1);
					}
					// Set Atts
					props.setAttributes({
						useRowHeadings: false,
						dataBody: newBody,
						dataHead: newHead
					});
				}
				// Else, the table has not been built yet and the form is showing, so only update useRowHeadings
				else {
					props.setAttributes({ useRowHeadings: false });
				}
			}
		}
		// Inspector - toggle footer
		function toggleFooter() {
			if (useFooter == false) {
				props.setAttributes({ useFooter: true });
			} else {
				props.setAttributes({ useFooter: false, dataFooter: '' });
			}
		}
	},
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
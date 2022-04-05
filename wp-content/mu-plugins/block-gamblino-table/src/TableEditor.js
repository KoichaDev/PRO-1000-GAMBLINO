// Table Components 
import ToggleTableCells from './components/BlockEditor/ToggleTableCells'
import TableToolbarCell from './components/BlockEditor/TableToolbarCell'
import TableForm from './components/TableForm';

import { doDelete } from './hooks/useTableToolbar'

import { 
    generateNewTable, 
    enterCellState, 
    exitCellState, 
    setCursor 
} from './hooks/useTable'

import {
    toggleRowHeadings,
    toggleFooter,
    toggleCaption,
    toggleColHeadings
} from './hooks/useTableInspector'

import { createElement } from '@wordpress/element'

const TableEditor = (props) => {
    const {
        attributes: {
            buttonStates,
            currentCell,
            dataBody,
            dataCaption,
            dataFooter,
            dataHead,
            showTable,
            useCaption,
            useColHeadings,
            useFooter,
            useRowHeadings },
        className,
        setAttributes
    } = props;

    let numCols = parseInt(props.attributes.numCols, 10);
    let numRows = parseInt(props.attributes.numRows, 10);

    // Caption
    let tableCaption, captionClass = 'is-hidden';

    if (showTable) {
        captionClass = '';
    }

    if (useCaption) {
        tableCaption = <caption
            className={captionClass}
            contenteditable='true'
            onFocus={() => exitCellState(props)}
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
    const tableHeadData = dataHead.map(function (cell, colIndex) {
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
            onFocus={evt => enterCellState(evt, props)}
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
        .map((rows, rowIndex) => {
            rowCounter++;
            let rowCells = rows.bodyCells.map((cell, colIndex) => {
                // Set up options
                ariaLabel = 'Row ' + rowCounter + ' Column ' + (colIndex + 1);
                let cellType = 'd';
                let cellOptions = {
                    'aria-label': ariaLabel,
                    contenteditable: 'true',
                    'data-buttons': '1,2,3,4,5,6',
                    onFocus: (evt) => { enterCellState(evt, props); },
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
            onFocus={() => exitCellState(props)}
        >
            {dataFooter}
        </td>;
        tableFooterTd.props.onInput = (evt) => {
            props.setAttributes({ dataFooter: evt.target.textContent });
            // Move the cursor back where it was
            setCursor(evt);
        };
        tableFooter = <tfoot><tr>{tableFooterTd}</tr></tfoot>;
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

    // Final Return
    return (
        <div>

            <TableToolbarCell
                buttonStates={buttonStates}
                onClickInsertColumnBefore={() => () => doInsert('col', 'before')}
                onClickInsertColumnAfter={() => doInsert('col', 'after')}
                onClickInsertRowBefore={() => doInsert('row', 'before')}
                onClickInsertRowAfter={() => doInsert('row', 'after')}
                onClickDeleteColumn={() => doDelete(props, 'col')}
                onClickDeleteRow={() => doDelete(props, 'row')}
            />
            <ToggleTableCells
                useCaption={useCaption}
                toggleCaption={() => toggleCaption(props)}
                useColHeadings={useColHeadings}
                toggleColHeadings={() => toggleColHeadings}
                useRowHeadings={useRowHeadings}
                toggleRowHeadings={() => toggleRowHeadings(props)}
                useFooter={useFooter}
                toggleFooter={() => toggleFooter(props)}
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
                onAddCreateTable={evt => generateNewTable(evt, numCols, numRows, props)}
                setAttributes={setAttributes}
            />

        </div>
    );
}

export default TableEditor
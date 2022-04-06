// WordPress dependencies
import { createElement } from '@wordpress/element'

// hooks
import { setCursor } from '../../hooks/useTable'
import { enterCellState } from '../../hooks/useTableCells'

const TableBody = ({ ...props }) => {
    const { setIsHiddenClassName, attributes, setAttributes } = props;
    const { dataBody, useRowHeadings } = attributes;

    let tableBody = '';
    let ariaLabel = '';
    let rowCounter = 1;

    const tableBodyData = dataBody.map((rows, rowIndex) => {
        rowCounter++;

        const rowCells = rows.bodyCells.map((cell, colIndex) => {
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
                    setAttributes({
                        dataBody: newBody
                    });
                    // Move the cursor back where it was
                    setCursor(evt);
                }
            };
            if (useRowHeadings == true && colIndex == 0) {
                cellType = 'h';
                cellOptions['data-buttons'] = '2,3,4,6';
                cellOptions.scope = 'row';
            }
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
        setIsHiddenClassName('is-hidden');
        // formClass = 'is-hidden';
    }
    return <>{tableBody}</>;
}

export default TableBody
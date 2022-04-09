// WordPress dependencies
import { createElement } from '@wordpress/element'

// hooks
import { setCursor } from '../../hooks/useTable'
import { enterCellState } from '../../hooks/useTableCells'

const TableEditorBody = ({ rowCounter, ...props }) => {
    const { setIsHiddenClassName, attributes, setAttributes } = props;
    const { textAlignment, dataBody, useRowHeadings } = attributes;

    let tableBodyContent = '';
    let ariaLabel = '';
    const tableBodyData = dataBody.map((rows, rowIndex) => {
        rowCounter++;

        const rowCells = rows.bodyCells.map((cell, colIndex) => {
            // Set up options
            ariaLabel = 'Row ' + rowCounter + ' Column ' + (colIndex + 1);
            let cellType = 'd';

            const cellOptions = {
                'aria-label': ariaLabel,
                contenteditable: 'true',
                'data-buttons': '1,2,3,4,5,6',
                class: `text-align-${textAlignment}`,
                onFocus: (evt) => enterCellState(evt, props),
                onInput: (evt) => {
                    // Copy the dataBody
                    const newBody = [...dataBody];
                    // Create a new cell
                    const newCell = { 
                        content: evt.target.textContent 
                    };

                    // Replace the old cell
                    newBody[rowIndex].bodyCells[colIndex] = newCell;


                    // Set the attribute
                    setAttributes({
                        dataBody: newBody,
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
            const currentBodyCell = createElement(
                `t${cellType}`,
                cellOptions,
                cell.content
            )

            return currentBodyCell;
        });
        return (<tr>{rowCells}</tr>);
    });

    if (tableBodyData.length) {
        tableBodyContent = <tbody>{tableBodyData}</tbody>;
        setIsHiddenClassName('is-hidden');
        // formClass = 'is-hidden';
    }
    return <>{tableBodyContent}</>;
}

export default TableEditorBody
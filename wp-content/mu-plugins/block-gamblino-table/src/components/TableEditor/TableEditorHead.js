import { setCursor } from '../../hooks/useTable'
import { enterCellState } from '../../hooks/useTableCells'

import { Thead } from '../UI/Table'

const TableEditorHead = ({ isHiddenClassName, rowCounter, ...props }) => {
    const { attributes, setAttributes } = props
    const { dataHead, useRowHeadings } = attributes

    let tableHeadContent = '';

    let ariaLabel = '';

    const tableHeadData = dataHead.map((cell, colIndex) => {
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
                enterCellState(evt, props);
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
            setAttributes({ dataHead: newHead });
            // Move the cursor back where it was
            setCursor(evt);
        };
        return currentTh;
    });

    if (tableHeadData.length) {
        tableHeadContent = (
            <>
                <Thead isHidden={isHiddenClassName} className={isHiddenClassName ? 'is-hidden' : ''}>
                    <tr>{tableHeadData}</tr>
                </Thead>
            </>
        )
    } else {
        // If there is no table head, take rowCounter back down to 0, because Table Body has to increment it before output
        rowCounter--;
    }

    return <>{tableHeadContent}</>
}

export default TableEditorHead
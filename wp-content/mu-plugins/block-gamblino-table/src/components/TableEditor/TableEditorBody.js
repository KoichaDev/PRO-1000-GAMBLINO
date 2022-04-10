// hooks
import { setCursor } from '../../hooks/useTable'
import { enterCellState } from '../../hooks/useTableCells'

const TableEditorBody = ({ rowCounter, ...props }) => {
    const { setIsHiddenClassName, attributes, setAttributes } = props;
    const { textAlignment, dataBody, useRowHeadings } = attributes;

    const onInputHandler = (evt, rowIndex, colIndex) => {
        const newBody = [...dataBody];

        // Create a new cell
        const newCell = { content: evt.target.textContent};

        // Replace the old cell
        newBody[rowIndex].bodyCells[colIndex] = newCell;

        setAttributes({ dataBody: newBody, });
        // Move the cursor back where it was
        setCursor(evt);
    }

    const tableBodyData = dataBody.map((rows, rowIndex) => {
        rowCounter++;

        const rowCells = rows.bodyCells.map((cell, colIndex) => {
            // Set up options
            let ariaLabel = `Row ${rowCounter} Column ${colIndex + 1}`;

            if (useRowHeadings === true && colIndex == 0) {
                return (
                    <th
                        aria-label={ariaLabel}
                        contentEditable="true"
                        data-buttons="2,3,4,6"
                        scope='row'
                        class={`text-align-${textAlignment}`}
                        onFocus={(evt) => enterCellState(evt, props)}
                        onInput={(evt) => onInputHandler(evt, rowIndex, colIndex)}
                    >{cell.content}</th>
                )
            }

            return (
                <td
                    aria-label={ariaLabel}
                    contentEditable="true"
                    data-buttons="1,2,3,4,5,6"
                    class={`text-align-${textAlignment}`}
                    onFocus={(evt) => enterCellState(evt, props)}
                    onInput={(evt) => onInputHandler(evt, rowIndex, colIndex)}
                >{cell.content}</td>
            )
        });
        return (<tr>{rowCells}</tr>);
    });

    if (tableBodyData.length) {
        setIsHiddenClassName('is-hidden');
    }
    
    return (
        <>
            {tableBodyData.length > 0 && (
                <tbody>{tableBodyData}</tbody>
            )}
        </>
    );
}

export default TableEditorBody
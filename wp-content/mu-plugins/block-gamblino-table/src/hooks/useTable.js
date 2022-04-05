// Button Function: delete
export function doDelete(props, type) {
    const { attributes } = props
    const { showTable, currentCell, numRows, numCols, dataBody, dataHead } = attributes


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
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

// Button Function: insert
export function doInsert(props, type, location) {
    const { attributes, setAttributes } = props
    const {
        currentCell,
        useColHeadings,
        useRowHeadings,
        numRows,
        numCols,
        dataBody,
        dataHead
    } = attributes

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
        for (let column = 0; column < allCols; column++) {
            newRow.bodyCells.push({ content: '' });
        }
        // Now insert the row (in this case splice isn't deleting anything because of the 0)
        newBody.splice(selectedRow, 0, newRow);
        // Increase the total number of rows
        endingRows++;
    } else if (type == 'col') {
        // Update the body
        for (let row = 0; row < endingRows; row++) {
            // Create a new cell
            let newCell = { content: '' };
            // Add the cell
            newBody[row].bodyCells.splice(selectedCol, 0, newCell);
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
    setAttributes({
        dataBody: newBody,
        dataHead: newHead,
        numRows: endingRows.toString(),
        numCols: endingCols.toString()
    });
}
// Function that builds the table when the form is submitted
export function generateNewTable(evt, numCols, numRows, props) {
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
// Enter Cell State to enable button functions
export function enterCellState(evt, props) {
    const { attributes, setAttributes } = props
    const { buttonStates } = attributes

    let buttonsToEnable;

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
    setAttributes({
        buttonStates: newButtonStates,
        currentCell: { row: cellRow, col: cellCol }
    });
}

// Function that returns the cursor where it was, instead of the beginning of an input
export function setCursor(evt) {
    let node = evt.target;
    let caret = window.getSelection().anchorOffset;
    if (node.firstChild) {
        setTimeout(() => {
            let textNode = node.firstChild;
            let range = document.createRange();
            range.setStart(textNode, caret);
            range.setEnd(textNode, caret);
            let select = window.getSelection();
            select.removeAllRanges();
            select.addRange(range);
        }, 1, node, caret);
    }
}
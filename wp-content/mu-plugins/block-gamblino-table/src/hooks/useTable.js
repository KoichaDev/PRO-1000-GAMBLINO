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

// Inspector - toggle footer
export function toggleFooter(props) {
    const { attributes, setAttributes} = props;
    const { useFooter } = attributes;

    if (useFooter == false) {
        setAttributes({ useFooter: true });
    } else {
        setAttributes({ useFooter: false, dataFooter: '' });
    }
}
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

// Inspector - toggle row headings
export function toggleRowHeadings(props) {
    const {
        attributes: {
            showTable,
            dataBody,
            dataHead,
            numRows,
            useRowHeadings,
            useColHeadings,
        }, setAttributes } = props;

    console.log(useRowHeadings);

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
            setAttributes({
                useRowHeadings: true,
                dataBody: newBody,
                dataHead: newHead
            });
        }
        // Else, the table has not been built yet and the form is showing, so only update useRowHeadings
        else {
            setAttributes({ useRowHeadings: true });
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
            setAttributes({ useRowHeadings: false });
        }
    }
}

// Inspector - toggle col headings
export function toggleColHeadings(props) {
    const { attributes, setAttributes } = props
    const { showTable, useRowHeadings, useColHeadings, numCols } = attributes

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
            setAttributes({
                useColHeadings: true,
                dataHead: newHead
            });
        }
        // Else, the table has not been built yet and the form is showing, so only update useColHeadings
        else {
            setAttributes({ useColHeadings: true });
        }
    } else {
        setAttributes({
            useColHeadings: false,
            dataHead: []
        });
    }
}




// Inspector - toggle footer
export function toggleFooter(props) {
    const { attributes, setAttributes } = props;
    const { useFooter } = attributes;

    if (useFooter === false) {
        setAttributes({ useFooter: true });
    } else {
        setAttributes({ useFooter: false, dataFooter: '' });
    }
}

// Inspector - toggle caption
export function toggleCaption(props) {
    const { attributes, setAttributes } = props;
    const { useCaption } = attributes;

    if (useCaption === false) {
        setAttributes({ useCaption: true });
    } else {
        setAttributes({ useCaption: false, dataCaption: '' });
    }
}
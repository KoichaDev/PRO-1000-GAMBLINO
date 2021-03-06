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
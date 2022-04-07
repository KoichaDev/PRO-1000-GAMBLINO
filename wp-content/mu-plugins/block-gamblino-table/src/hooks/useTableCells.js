// Enter Cell State to enable button functions
export function enterCellState(evt, props) {
    const { attributes, setAttributes } = props
    const { buttonStates } = attributes

    // Set enabled buttons
    const buttonsToEnable = evt.target.dataset.buttons.split(',');

    let newButtonStates = {};
    for (let prop in buttonStates) {
        newButtonStates[prop] = true;
    }
    for (let b = 0; b < buttonsToEnable.length; b++) {
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

// Exit Cell State to disable button functions
export function exitCellState(props) {
    const { attributes, setAttributes } = props
    const { buttonStates } = attributes

    // Disable all buttons by building a new object with every property set to true (disabled)
    let newButtonStates = {};
    for (let prop in buttonStates) {
        newButtonStates[prop] = true;
    }
    setAttributes({
        buttonStates: newButtonStates
    });
}
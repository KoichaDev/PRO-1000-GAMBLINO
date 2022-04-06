import { setCursor, exitCellState } from '../hooks/useTable'

const TableFooter = ({ numCols, ...props }) => {
    const { attributes, setAttributes } = props
    const { showTable, dataFooter, useRowHeadings, useFooter } = attributes

    let tableFooter = '';
    let footerClass = 'is-hidden';

    if (showTable) {
        footerClass = '';
    }
    // Calculate colspan: if useRowHeadings is true, there should be 1 extra column
    let totalCols = numCols;

    if (useRowHeadings === true) {
        totalCols++;
    }
    if (useFooter === true) {
        let tableFooterTd = <td
            colspan={totalCols}
            className={footerClass}
            contenteditable='true'
            onFocus={() => exitCellState(props)}
        >
            {dataFooter}
        </td>;
        tableFooterTd.props.onInput = (evt) => {
            setAttributes({
                dataFooter: evt.target.textContent
            });
            // Move the cursor back where it was
            setCursor(evt);
        };
        tableFooter = <tfoot><tr>{tableFooterTd}</tr></tfoot>;
    }

    return <>{tableFooter}</>
}

export default TableFooter
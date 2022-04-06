import { setCursor } from '../../hooks/useTable'
import { exitCellState } from '../../hooks/useTableCells'

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

    const onInputHandler = (evt) => {
        setAttributes({
            dataFooter: evt.target.textContent
        });
        // Move the cursor back where it was
        setCursor(evt);
    }
    return (
        <>
            {useFooter && (
                <>
                    <tfoot>
                        <tr>
                            <td
                                colspan={totalCols}
                                className={footerClass}
                                contenteditable='true'
                                onFocus={() => exitCellState(props)}
                                onInput={onInputHandler}
                            >
                                {dataFooter}
                            </td>
                        </tr>
                    </tfoot>
                </>
            )}
        </>
    )
}

export default TableFooter
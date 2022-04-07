const TableSaveFooter = ({ ...attributes }) => {
    const { useFooter, dataFooter, useRowHeadings, numCols } = attributes

    let totalCols = parseInt(numCols, 10);
    
    // Calculate colspan: if useRowHeadings is true, there should be 1 extra column
    if (useRowHeadings == true) {
        totalCols++;
    }

    return (
        <>
            {useFooter && (
                <>
                    <tfoot>
                        <tr>
                            <td colspan={totalCols}>{dataFooter}</td>
                        </tr>
                    </tfoot>
                </>
            )}
        </>
    )
}

export default TableSaveFooter
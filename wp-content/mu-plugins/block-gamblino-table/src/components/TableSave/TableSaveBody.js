const TableSaveBody = ({ ...props }) => {
    const { attributes } = props;
    const { dataBody, useRowHeadings } = attributes;

    // Table Body
    const tableBodyData = dataBody.map((rows) => {
        const eachRowCells = rows.bodyCells.map((cell, colIndex) => {
            if (useRowHeadings == true && colIndex == 0) {
                return <th scope='row'>{cell.content.trim(' ')}</th>
            }

            return <td>{cell.content.trim(' ')}</td>

        });
        return <tr>{eachRowCells}</tr>;
    });

    return (
        <>
            {tableBodyData.length && <tbody>{tableBodyData}</tbody>}
        </>
    )
}

export default TableSaveBody
import { useBlockProps } from '@wordpress/block-editor'

const TableSaveBody = ({ ...attributes }) => {
    const { dataBody, textAlignment, useRowHeadings } = attributes;

    // Table Body
    const tableBodyData = dataBody.map((rows) => {
        const eachRowCells = rows.bodyCells.map((cell, colIndex) => {


            if (useRowHeadings == true && colIndex == 0) {
                return <th scope='row' {...useBlockProps.save({
                    className: `text-align-${textAlignment}`,
                })}>{cell.content.trim(' ')}</th>
            }

            return <td {...useBlockProps.save({
                className: `text-align-${textAlignment}`,
            })}>{cell.content.trim(' ')}</td>

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
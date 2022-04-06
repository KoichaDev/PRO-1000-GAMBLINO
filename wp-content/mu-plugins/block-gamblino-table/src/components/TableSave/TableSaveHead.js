import React from 'react'

const TableSaveHead = ({ ...props }) => {
    const { attributes } = props;
    const { useColHeadings, dataHead } = attributes

    if (useColHeadings !== false) return;

    const tableHeadData = dataHead.map((cell) => {
        return (
            <th scope='col'>{cell.content.trim(' ')}</th>
        );
    });


    return (
        <>
            {tableHeadData.length && (
                <>
                    <thead>
                        <tr>{tableHeadData}</tr>
                    </thead>
                </>
            )}
        </>
    )
}

export default TableSaveHead
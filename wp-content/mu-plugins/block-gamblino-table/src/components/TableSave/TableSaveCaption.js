import React from 'react'

const TableSaveCaption = ({ ...attributes }) => {
    const { dataCaption, useCaption } = attributes
    return (
        <>
            {useCaption && <caption>{dataCaption}</caption>}
        </>
    )
}

export default TableSaveCaption
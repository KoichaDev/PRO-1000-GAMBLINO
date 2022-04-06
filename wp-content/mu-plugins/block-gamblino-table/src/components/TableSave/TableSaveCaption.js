import React from 'react'

const TableSaveCaption = ({ ...props }) => {
    const { attributes } = props
    const { dataCaption, useCaption } = attributes
    return (
        <>
            {useCaption && <caption>{dataCaption}</caption>}
        </>
    )
}

export default TableSaveCaption
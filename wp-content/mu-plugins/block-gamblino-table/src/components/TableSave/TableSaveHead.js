const TableSaveHead = ({ ...attributes }) => {
    const { useColHeadings, dataHead } = attributes

    let tableHeadContent = ''

    if (useColHeadings === false) return;

    const tableHeadData = dataHead.map((cell) => {
        return (
            <th scope='col'>{cell.content.trim(' ')}</th>
        );
    });
    if (tableHeadData.length) {
        tableHeadContent = <thead><tr>{tableHeadData}</tr></thead>;
    }

    return (
        <>{tableHeadContent}</>
    )
}

export default TableSaveHead
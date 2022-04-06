// Table Save Components
import TableSaveCaption from "./components/TableSave/TableSaveCaption";
import TableSaveHead from "./components/TableSave/TableSaveHead";

const TableSave = props => {
    const { attributes: { dataBody, dataFooter, dataHead, useColHeadings, useFooter, useRowHeadings }, className } = props;
    let numCols = parseInt(props.attributes.numCols, 10);
    let numRows = parseInt(props.attributes.numRows, 10);
    
   
  
    // Table Body
    let tableBody, tableBodyData = dataBody.map(function (rows) {
        let eachRowCells = rows.bodyCells.map(function (cell, colIndex) {
            if (useRowHeadings == true && colIndex == 0) {
                return <th scope='row'>{cell.content.trim(' ')}</th>
            } else {
                return <td>{cell.content.trim(' ')}</td>
            }
        });
        return <tr>{eachRowCells}</tr>;
    });
    if (tableBodyData.length) {
        tableBody = <tbody>{tableBodyData}</tbody>;
    }
    // Table Footer
    let tableFooter;
    // Calculate colspan: if useRowHeadings is true, there should be 1 extra column
    let totalCols = numCols;
    if (useRowHeadings == true) {
        totalCols++;
    }
    if (useFooter == true) {
        tableFooter = <tfoot><tr><td colspan={totalCols}>{dataFooter}</td></tr></tfoot>
    }
    return (
        <table className={className}>
            <TableSaveCaption {...props} />
            <TableSaveHead {...props} />
            {tableBody}
            {tableFooter}
        </table>
    );
}


export default TableSave
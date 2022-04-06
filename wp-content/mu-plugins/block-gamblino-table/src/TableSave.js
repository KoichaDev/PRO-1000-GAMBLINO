// Table Save Components
import TableSaveCaption from "./components/TableSave/TableSaveCaption";
import TableSaveHead from "./components/TableSave/TableSaveHead";
import TableSaveBody from './components/TableSave/TableSaveBody'

const TableSave = props => {
    const { attributes: { dataBody, dataFooter, dataHead, useColHeadings, useFooter, useRowHeadings }, className } = props;
    let numCols = parseInt(props.attributes.numCols, 10);
    let numRows = parseInt(props.attributes.numRows, 10);
    
   
  
 
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
            <TableSaveBody {...props} />
            {tableFooter}
        </table>
    );
}


export default TableSave
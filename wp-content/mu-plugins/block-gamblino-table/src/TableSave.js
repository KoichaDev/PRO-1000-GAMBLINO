// Table Save Components
import TableSaveCaption from "./components/TableSave/TableSaveCaption";
import TableSaveHead from "./components/TableSave/TableSaveHead";
import TableSaveBody from './components/TableSave/TableSaveBody'
import TabelSaveFooter from './components/TableSave/TableSaveFooter';

const TableSave = props => {
    const { className } = props;
    
    return (
        <table className={className}>
            <TableSaveCaption {...props} />
            <TableSaveHead {...props} />
            <TableSaveBody {...props} />
            <TabelSaveFooter {...props} />
        </table>
    );
}


export default TableSave
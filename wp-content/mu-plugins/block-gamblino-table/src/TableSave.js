// Wordpress dependency
import { useBlockProps } from "@wordpress/block-editor";

// Table Save Components
import TableSaveCaption from "./components/TableSave/TableSaveCaption";
import TableSaveHead from "./components/TableSave/TableSaveHead";
import TableSaveBody from './components/TableSave/TableSaveBody'
import TabelSaveFooter from './components/TableSave/TableSaveFooter';

const TableSave = props => {

    const tableBlockProps = useBlockProps.save({
        className: '[ gamblino-block-table ]'
    })


    return (
        <table {...tableBlockProps}>
            <TableSaveCaption {...props} />
            <TableSaveHead {...props} />
            <TableSaveBody {...props} />
            <TabelSaveFooter {...props} />
        </table>
    );
}


export default TableSave
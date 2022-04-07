// Wordpress dependency
import { useBlockProps } from "@wordpress/block-editor";

// Table Save Components
import TableSaveCaption from "./components/TableSave/TableSaveCaption";
import TableSaveHead from "./components/TableSave/TableSaveHead";
import TableSaveBody from './components/TableSave/TableSaveBody'
import TabelSaveFooter from './components/TableSave/TableSaveFooter';

const TableSave = ({ attributes }) => {

    const tableBlockProps = useBlockProps.save({
        className: '[ gamblino-block-table ]'
    })


    return (
        <table {...tableBlockProps}>
            <TableSaveCaption {...attributes} />
            <TableSaveHead {...attributes} />
            <TableSaveBody {...attributes} />
            <TabelSaveFooter {...attributes} />
        </table>
    );
}


export default TableSave
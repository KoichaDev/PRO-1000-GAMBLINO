// Wordpress Dependencies
import { useState } from '@wordpress/element'


// hooks
import { generateNewTable } from './hooks/useTable'

import {
    toggleRowHeadings,
    toggleFooter,
    toggleCaption,
    toggleColHeadings
} from './hooks/useTableInspector'

// Table Block Editor Components 
import ToggleTableCells from './components/BlockEditor/ToggleTableCells'
import TableToolbarCell from './components/BlockEditor/TableToolbarCell'

// Table Editor Components
import TableEditorCaption from './components/TableEditor/TableEditorCaption';
import TableEditorHead from './components/TableEditor/TableEditorHead'
import TableEditorBody from './components/TableEditor/TableEditorBody';
import TableEditorFooter from './components/TableEditor/TableEditorFooter'
import TableEditorForm from './components/TableEditor/TableEditorForm';

// Table UI Component
import { Table } from './components/UI/Table'

const TableEditor = (props) => {
    const {
        attributes: {
            useCaption,
            useColHeadings,
            useFooter,
            useRowHeadings },
        className,
        setAttributes
    } = props;

    const [isHiddenClassName, setIsHiddenClassName] = useState()

    let numCols = parseInt(props.attributes.numCols, 10);
    let numRows = parseInt(props.attributes.numRows, 10);

    return (
        <>
            <TableToolbarCell {...props} />
            <ToggleTableCells
                useCaption={useCaption}
                toggleCaption={() => toggleCaption(props)}
                useColHeadings={useColHeadings}
                toggleColHeadings={() => toggleColHeadings(props)}
                useRowHeadings={useRowHeadings}
                toggleRowHeadings={() => toggleRowHeadings(props)}
                useFooter={useFooter}
                toggleFooter={() => toggleFooter(props)}
            />

            <Table className={className}>
                <TableEditorCaption isHiddenClassName={isHiddenClassName} {...props} />
                <TableEditorHead {...props} />
                <TableEditorBody setIsHiddenClassName={setIsHiddenClassName} {...props} />
                <TableEditorFooter numCols={numCols} {...props} />
            </Table>

            <TableEditorForm
                formClassName={isHiddenClassName}
                useCaption={useCaption}
                useColHeadings={useColHeadings}
                useRowHeadings={useRowHeadings}
                useFooter={useFooter}
                numCols={numCols}
                numRows={numRows}
                onAddCreateTable={evt => generateNewTable(evt, props)}
                setAttributes={setAttributes}
            />
        </>
    );
}

export default TableEditor
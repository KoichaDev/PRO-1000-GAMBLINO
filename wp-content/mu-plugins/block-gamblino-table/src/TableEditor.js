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
import TableCaption from './components/TableEditor/TableCaption';
import TableHead from './components/TableEditor/TableHead'
import TableBody from './components/TableEditor/TableBody';
import TableFooter from './components/TableEditor/TableFooter'
import TableForm from './components/TableEditor/TableForm';

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
                <TableCaption isHiddenClassName={isHiddenClassName} {...props} />
                <TableHead {...props} />
                <TableBody setIsHiddenClassName={setIsHiddenClassName} {...props} />
                <TableFooter numCols={numCols} {...props} />
            </Table>

            <TableForm
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
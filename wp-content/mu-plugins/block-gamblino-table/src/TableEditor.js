// Wordpress Dependencies
import { useState } from '@wordpress/element'

// Table Components 
import ToggleTableCells from './components/BlockEditor/ToggleTableCells'
import TableToolbarCell from './components/BlockEditor/TableToolbarCell'
import TableForm from './components/TableForm';


import { generateNewTable } from './hooks/useTable'

import {
    toggleRowHeadings,
    toggleFooter,
    toggleCaption,
    toggleColHeadings
} from './hooks/useTableInspector'

// Table Components
import TableCaption from './components/TableCaption';
import TableHead from './components/TableHead'
import TableBody from './components/TableBody';
import TableFooter from './components/TableFooter'

const TableEditor = (props) => {
    const {
        attributes: {
            buttonStates,
            useCaption,
            useColHeadings,
            useFooter,
            useRowHeadings },
        className,
        setAttributes
    } = props;

    const [formClass, setFormClass] = useState()

    let numCols = parseInt(props.attributes.numCols, 10);
    let numRows = parseInt(props.attributes.numRows, 10);

    return (
        <>
            <TableToolbarCell {...props}/>
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

            <table className={className}>
                <TableCaption  {...props} />
                <TableHead {...props} />
                <TableBody formClass={formClass} setFormClass={setFormClass} {...props} />
                <TableFooter numCols={numCols} {...props} />
            </table>

            <TableForm
                formClassName={formClass}
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
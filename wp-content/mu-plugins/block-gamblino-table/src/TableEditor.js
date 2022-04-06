// Wordpress Dependencies
import { useState } from '@wordpress/element'

// Table Components 
import ToggleTableCells from './components/BlockEditor/ToggleTableCells'
import TableToolbarCell from './components/BlockEditor/TableToolbarCell'
import TableForm from './components/TableForm';

import { doDelete, doInsert } from './hooks/useTableToolbar'

import {
    generateNewTable,
    enterCellState,
    exitCellState,
    setCursor
} from './hooks/useTable'

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


const TableEditor = (props) => {
    const {
        attributes: {
            buttonStates,
            dataCaption,
            dataFooter,
            dataHead,
            showTable,
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

    // Row Counter for aria labels - start at 1
    let ariaLabel = '';

    // let formClass = '';

    // Table Footer
    let tableFooter = '';
    let footerClass = 'is-hidden';

    if (showTable) {
        footerClass = '';
    }
    // Calculate colspan: if useRowHeadings is true, there should be 1 extra column
    let totalCols = numCols;
    if (useRowHeadings == true) {
        totalCols++;
    }
    if (useFooter == true) {
        let tableFooterTd = <td
            colspan={totalCols}
            className={footerClass}
            contenteditable='true'
            onFocus={() => exitCellState(props)}
        >
            {dataFooter}
        </td>;
        tableFooterTd.props.onInput = (evt) => {
            props.setAttributes({ dataFooter: evt.target.textContent });
            // Move the cursor back where it was
            setCursor(evt);
        };
        tableFooter = <tfoot><tr>{tableFooterTd}</tr></tfoot>;
    }
    return (
        <>
            <TableToolbarCell
                buttonStates={buttonStates}
                onClickInsertColumnBefore={() => doInsert(props, 'col', 'before')}
                onClickInsertColumnAfter={() => doInsert(props, 'col', 'after')}
                onClickInsertRowBefore={() => doInsert(props, 'row', 'before')}
                onClickInsertRowAfter={() => doInsert(props, 'row', 'after')}
                onClickDeleteColumn={() => doDelete(props, 'col')}
                onClickDeleteRow={() => doDelete(props, 'row')}
            />
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
                {tableFooter}
            </table>

            <TableForm
                formClassName={formClass}
                useCaption={useCaption}
                useColHeadings={useColHeadings}
                useRowHeadings={useRowHeadings}
                useFooter={useFooter}
                numCols={numCols}
                numRows={numRows}
                onAddCreateTable={evt => generateNewTable(evt, numCols, numRows, props)}
                setAttributes={setAttributes}
            />
        </>
    );
}

export default TableEditor
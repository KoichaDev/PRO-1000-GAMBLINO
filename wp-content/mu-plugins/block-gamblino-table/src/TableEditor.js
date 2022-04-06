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
    let rowCounter = 1;

    // Table Head
    let tableHead = '';
    let headClass = 'is-hidden';

    if (showTable) {
        headClass = '';
    }
    const tableHeadData = dataHead.map((cell, colIndex) => {
        ariaLabel = 'Row ' + rowCounter + ' Column ' + (colIndex + 1);
        let currentThButtons = '1,2,4,5';
        // If row headings are enabled, and this is the very first col TH, don't allow insert col before or delete col
        if (colIndex == 0 && useRowHeadings == true) {
            currentThButtons = '2,4';
        }
        let currentTh = <th
            aria-label={ariaLabel}
            scope='col'
            contenteditable='true'
            data-buttons={currentThButtons}
            onFocus={evt => enterCellState(evt, props)}
        >
            {cell.content}
        </th>;
        currentTh.props.onInput = function (evt) {
            // Copy the dataHead
            let newHead = JSON.parse(JSON.stringify(dataHead));
            // Create a new cell
            let newTh = { content: evt.target.textContent };
            // Replace the old cell with the new cell
            newHead.splice(colIndex, 1, newTh);
            // Save the dataHead attribute
            props.setAttributes({ dataHead: newHead });
            // Move the cursor back where it was
            setCursor(evt);
        };
        return currentTh;
    });
    if (tableHeadData.length) {
        tableHead = <thead className={headClass}><tr>{tableHeadData}</tr></thead>;
    } else {
        // If there is no table head, take rowCounter back down to 0, because Table Body has to increment it before output
        rowCounter--;
    }

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
                {tableHead}
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
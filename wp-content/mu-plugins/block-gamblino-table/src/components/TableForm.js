import { __ } from '@wordpress/i18n'

const TableForm = (props) => {
    const { 
        formClassName, 
        onAddCreateTable, 
        useCaption, 
        useColHeadings, 
        numCols, 
        numRows,
        useRowHeadings,
        useFooter, 
        setAttributes 
    } = props

    return (
        <form className={formClassName}>
            <div>
                <label for='addCaption'>{__('Add Caption', 'block-gamblino')}</label>
                <input
                    type='checkbox'
                    id='captionCheck'
                    checked={useCaption}
                    onChange={(e) => setAttributes({ useCaption: e.target.checked })}
                />
            </div>
            <div>
                <label for='useColHeadings'>{__('Add Column Headings', 'block-gamblino')}</label>
                <input
                    type='checkbox'
                    id='useColHeadings'
                    checked={useColHeadings}
                    onChange={(e) => {
                        if (e.target.checked == true) {
                            setAttributes({ useColHeadings: true });
                        } else {
                            setAttributes({ useColHeadings: false });
                        }
                    }}
                />
            </div>
            <div>
                <label for='numCols'>{__('Columns', 'block-gamblino')}</label>
                <input
                    type='number'
                    id='numCols'
                    value={numCols}
                    min='1'
                    step='1'
                    pattern='[0-9]*'
                    onChange={(e) => setAttributes({ numCols: e.target.value })}
                />
            </div>
            <div>
                <label for='useRowHeadings'>{__('Add Row Headings', 'block-gamblino')}</label>
                <input
                    type='checkbox'
                    id='useRowHeadings'
                    checked={useRowHeadings}
                    onChange={(e) => {
                        if (e.target.checked == true) {
                            setAttributes({ useRowHeadings: true });
                        } else {
                            setAttributes({ useRowHeadings: false });
                        }
                    }}
                />
            </div>
            <div>
                <label for='numRows'>{__('Rows', 'block-gamblino')}</label>
                <input
                    type='number'
                    id='numRows'
                    value={numRows}
                    min='1'
                    step='1'
                    pattern='[0-9]*'
                    onChange={(e) => setAttributes({ numRows: e.target.value })}
                />
            </div>
            <div>
                <label for='addFooter'>{__('Add Footer', 'block-gamblino')}</label>
                <input
                    type='checkbox'
                    id='footerCheck'
                    checked={useFooter}
                    onChange={(e) => setAttributes({ useFooter: e.target.checked })}
                />
            </div>
            <button
                type='submit'
                onClick={onAddCreateTable}
            >
                {__('Insert Table', 'block-gamblino')}
            </button>
        </form>
    )
}

export default TableForm
import { __ } from '@wordpress/i18n'
import { BlockControls } from '@wordpress/block-editor'
import { Dashicon, Toolbar, Tooltip } from '@wordpress/components';

const TableToolbarCell = (props) => {
    const {
        buttonStates,
        onClickInsertColumnBefore,
        onClickInsertColumnAfter,
        onClickInsertRowBefore,
        onClickInsertRowAfter,
        onClickDeleteColumn,
        onClickDeleteRow
    } = props;

    const { 
        disabled1, 
        disabled2, 
        disabled3, 
        disabled4, 
        disabled5, 
        disabled6 
    } = buttonStates

    return (
        <BlockControls key='a11y-form-controls'>
            <Toolbar>
                <Tooltip text={__('Insert Column Before', 'block-gamblino')}>
                    <button
                        type="button"
                        className='components-icon-button'
                        onClick={onClickInsertColumnBefore}
                        disabled={disabled1}
                    >
                        <Dashicon icon="table-col-before" />
                    </button>
                </Tooltip>
                <Tooltip text={__('Insert Column After', 'block-gamblino')}>
                    <button
                        type="button"
                        className='components-icon-button'
                        onClick={onClickInsertColumnAfter}
                        disabled={disabled2}
                    >
                        <Dashicon icon="table-col-after" />
                    </button>
                </Tooltip>
                <Tooltip text={__('Insert Row Before', 'block-gamblino')}>
                    <button
                        type="button"
                        className='components-icon-button'
                        onClick={onClickInsertRowBefore}
                        disabled={disabled3}
                    >
                        <Dashicon icon="table-row-before" />
                    </button>
                </Tooltip>
                <Tooltip text={__('Insert Row After', 'block-gamblino')}>
                    <button
                        type="button"
                        className='components-icon-button'
                        onClick={onClickInsertRowAfter}
                        disabled={disabled4}
                    >
                        <Dashicon icon="table-row-after" />
                    </button>
                </Tooltip>
            </Toolbar>
            <Toolbar>
                <Tooltip text={__('Delete Column', 'block-gamblino')}>
                    <button
                        type="button"
                        className='components-icon-button'
                        onClick={onClickDeleteColumn}
                        disabled={disabled5}
                    >
                        <Dashicon icon="table-col-delete" />
                    </button>
                </Tooltip>
                <Tooltip text={__('Delete Row', 'block-gamblino')}>
                    <button
                        type="button"
                        className='components-icon-button'
                        onClick={onClickDeleteRow}
                        disabled={disabled6}
                    >
                        <Dashicon icon="table-row-delete" />
                    </button>
                </Tooltip>
            </Toolbar>
        </BlockControls>
    )
}

export default TableToolbarCell
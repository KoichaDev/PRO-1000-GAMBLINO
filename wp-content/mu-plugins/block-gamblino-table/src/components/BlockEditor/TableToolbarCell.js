import { __ } from '@wordpress/i18n'
import { BlockControls } from '@wordpress/block-editor'
import { Dashicon, Toolbar, Tooltip } from '@wordpress/components';

const TableToolbarCRUD = (props) => {
    const {
        buttonStates,
        onClickInsertColumnBefore,
        onClickInsertColumnAfter,
        onClickInsertRowBefore,
        onClickInsertRowAfter,
        onClickDeleteColumn, 
        onClickDeleteRow
    } = props;

    return (
        <BlockControls key='a11y-form-controls'>
            <Toolbar>
                <Tooltip text={__('Insert Column Before', 'block-gamblino')}>
                    <button
                        className='components-icon-button'
                        onClick={onClickInsertColumnBefore}
                        disabled={buttonStates.disabled1}
                    >
                        <Dashicon icon="table-col-before" />
                    </button>
                </Tooltip>
                <Tooltip text={__('Insert Column After', 'block-gamblino')}>
                    <button
                        className='components-icon-button'
                        onClick={onClickInsertColumnAfter}
                        disabled={buttonStates.disabled2}
                    >
                        <Dashicon icon="table-col-after" />
                    </button>
                </Tooltip>
                <Tooltip text={__('Insert Row Before', 'block-gamblino')}>
                    <button
                        className='components-icon-button'
                        onClick={onClickInsertRowBefore}
                        disabled={buttonStates.disabled3}
                    >
                        <Dashicon icon="table-row-before" />
                    </button>
                </Tooltip>
                <Tooltip text={__('Insert Row After', 'block-gamblino')}>
                    <button
                        className='components-icon-button'
                        onClick={onClickInsertRowAfter}
                        disabled={buttonStates.disabled4}
                    >
                        <Dashicon icon="table-row-after" />
                    </button>
                </Tooltip>
            </Toolbar>
            <Toolbar>
                <Tooltip text={__('Delete Column', 'block-gamblino')}>
                    <button
                        className='components-icon-button'
                        onClick={onClickDeleteColumn}
                        disabled={buttonStates.disabled5}
                    >
                        <Dashicon icon="table-col-delete" />
                    </button>
                </Tooltip>
                <Tooltip text={__('Delete Row', 'block-gamblino')}>
                    <button
                        className='components-icon-button'
                        onClick={onClickDeleteRow}
                        disabled={buttonStates.disabled6}
                    >
                        <Dashicon icon="table-row-delete" />
                    </button>
                </Tooltip>
            </Toolbar>
        </BlockControls>
    )
}

export default TableToolbarCRUD
// Wordpress dependencies
import { __ } from '@wordpress/i18n'
import { BlockControls } from '@wordpress/block-editor'
import { Dashicon, Toolbar, Tooltip } from '@wordpress/components';

// hooks
import { doDelete, doInsert } from '../../hooks/useTableToolbar'

const TableToolbarCell = ({ ...props }) => {
    const { buttonStates } = props.attributes

    return (
        <BlockControls key='a11y-form-controls'>
            <Toolbar>
                <Tooltip text={__('Insert Column Before', 'block-gamblino')}>
                    <button
                        type="button"
                        className='components-icon-button'
                        onClick={() => doInsert(props, 'col', 'before')}
                        disabled={buttonStates.disabled1}
                    >
                        <Dashicon icon="table-col-before" />
                    </button>
                </Tooltip>
                <Tooltip text={__('Insert Column After', 'block-gamblino')}>
                    <button
                        type="button"
                        className='components-icon-button'
                        onClick={() => doInsert(props, 'col', 'after')}
                        disabled={buttonStates.disabled2}
                    >
                        <Dashicon icon="table-col-after" />
                    </button>
                </Tooltip>
                <Tooltip text={__('Insert Row Before', 'block-gamblino')}>
                    <button
                        type="button"
                        className='components-icon-button'
                        onClick={() => doInsert(props, 'row', 'before')}
                        disabled={buttonStates.disabled3}
                    >
                        <Dashicon icon="table-row-before" />
                    </button>
                </Tooltip>
                <Tooltip text={__('Insert Row After', 'block-gamblino')}>
                    <button
                        type="button"
                        className='components-icon-button'
                        onClick={() => doInsert(props, 'row', 'after')}
                        disabled={buttonStates.disabled4}
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
                        onClick={() => doDelete(props, 'col')}
                        disabled={buttonStates.disabled5}
                    >
                        <Dashicon icon="table-col-delete" />
                    </button>
                </Tooltip>
                <Tooltip text={__('Delete Row', 'block-gamblino')}>
                    <button
                        type="button"
                        className='components-icon-button'
                        onClick={() => doDelete(props, 'row')}
                        disabled={buttonStates.disabled6}
                    >
                        <Dashicon icon="table-row-delete" />
                    </button>
                </Tooltip>
            </Toolbar>
        </BlockControls>
    )
}

export default TableToolbarCell
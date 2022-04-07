// Wordpress dependencies
import { __ } from '@wordpress/i18n'
import { useEffect } from '@wordpress/element';
import { BlockControls, AlignmentToolbar } from '@wordpress/block-editor'
import { Dashicon, Toolbar, Tooltip } from '@wordpress/components';

// hooks
import { doDelete, doInsert } from '../../hooks/useTableToolbar'
import useActionTextAlignment from '../../hooks/useActionTextAlignment'
import useSelectorsTextAlignment from '../../hooks/useSelectorsTextAlignment'
import TextAlignmentStore from '../../stores/index'

const TableToolbarCell = ({ ...props }) => {
    const { attributes, setAttributes } = props;
    const { buttonStates } = attributes

    const { textAlignment } = useSelectorsTextAlignment("blocks-control/gamblino-table-text-alignment")
    const { setTextAlignment } = useActionTextAlignment("blocks-control/gamblino-table-text-alignment")

    useEffect(() => TextAlignmentStore("blocks-control/gamblino-table-text-alignment"), [])

    const onChangeAlignmenToolbarHandler = (value) => {
        setTextAlignment(value)
        setAttributes({ textAlignment: value })
    }

    return (
        <BlockControls key='a11y-form-controls'>

            <AlignmentToolbar value={textAlignment} onChange={onChangeAlignmenToolbarHandler} />
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
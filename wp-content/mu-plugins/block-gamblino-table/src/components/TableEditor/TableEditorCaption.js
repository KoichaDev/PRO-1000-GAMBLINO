import { setCursor } from '../../hooks/useTable'
import { exitCellState } from '../../hooks/useTableCells'

import { Caption } from '../UI/Table'

const TableEditorCaption = ({ isHiddenClassName, ...props }) => {
    const { attributes, setAttributes } = props
    const { dataCaption, showTable, useCaption } = attributes;

    let captionClass = 'is-hidden';

    if (showTable) {
        captionClass = ''
    }

    const onInputHandler = (evt) => {
        
        setAttributes({
            dataCaption: evt.target.textContent
        });
        // Move the cursor back where it was
        setCursor(evt);
    }
    return (
        <>
            {useCaption && <Caption
                className={isHiddenClassName}
                contenteditable='true'
                onFocus={() => exitCellState(props)}
                onInput={onInputHandler}
            >
                {dataCaption}
            </Caption>
            }
        </>
    )
}

export default TableEditorCaption
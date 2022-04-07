import { setCursor } from '../../hooks/useTable'
import { exitCellState } from '../../hooks/useTableCells'

import './TableEditorCaption.scss'

const TableEditorCaption = ({ isHiddenClassName, ...props }) => {
    const { attributes, setAttributes } = props
    const { dataCaption, useCaption } = attributes;

    const onInputHandler = (evt) => {
        setAttributes({
            dataCaption: evt.target.textContent
        });
        // Move the cursor back where it was
        setCursor(evt);
    }
    return (
        <>
            {useCaption && (
                <>
                    <caption
                        className={`table__caption ${isHiddenClassName}`}
                        contenteditable='true'
                        onFocus={(evt) => exitCellState(evt, props)}
                        onInput={onInputHandler}
                    >
                        {dataCaption}
                    </caption>
                </>
            )}
        </>
    )
}

export default TableEditorCaption
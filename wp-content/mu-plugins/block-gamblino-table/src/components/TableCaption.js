import { useState } from '@wordpress/element'
import { setCursor, exitCellState } from '../hooks/useTable'

const TableCaption = ({ ...props }) => {
    const { attributes, setAttributes } = props
    const { dataCaption, showTable, useCaption } = attributes;
    // const [captionClass, setCaptionClass] = useState('is-hidden');

    let captionClass = 'is-hidden';

    if (showTable) {
        captionClass = ''
    }

    const onInputHandler = (evt) => {
        // Move the cursor back where it was
        setCursor(evt);
        
        setAttributes({ 
            dataCaption: evt.target.textContent 
        });
    }

    return (
        <>
            {useCaption && <caption
                className={captionClass}
                contenteditable='true'
                onFocus={() => exitCellState(props)}
                onInput={onInputHandler}
            >
                {dataCaption}
            </caption>
            }
        </>
    )
}

export default TableCaption
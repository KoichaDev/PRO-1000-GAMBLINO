// Wordpress dependencies
import { useEffect } from '@wordpress/element';
import { ColorPicker } from '@wordpress/components';

const BlockRichTextColorPicker = (props) => {
    const { colorValue, onChangeColorPicker, isVisibleColorPicker, onAddSetAttributes, ...restRichText } = props

    useEffect(() => {
        onAddSetAttributes(callback)
    }, [colorValue])

    return <>
        {isVisibleColorPicker && (
            <ColorPicker
                color={colorValue}
                onChange={onChangeColorPicker}
                enableAlpha
                defaultValue={colorValue}
            />
        )}

        <RichText
            {...useBlockProps({
                style: {
                    color: titleProsTextColor,
                }
            })}
            {...restRichText}
        />
    </>
}

export default BlockRichTextColorPicker
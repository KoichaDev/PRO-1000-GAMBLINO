// Wordpress dependencies
import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { useBlockProps, RichText, BlockControls } from '@wordpress/block-editor';
import { ColorPicker } from '@wordpress/components';

// Wordpress Components
import ProsList from './ProsList';
import BlockColorPickerToolbar from '../../../block-wordpress-components/block-controls/block-color-picker/BlockColorPickerToolbar'

// styles
import './ProsCons.scss';

const ProsConsEdit = ({ attributes, setAttributes }) => {
    const { titlePros, titleProsTextColor, prosTextLists } = attributes;

    const [isClickedRichText, setIsClickedRichText] = useState(false)

    const [isVisibleColorPicker, setIsVisibleColorPicker] = useState(false);
    const [titleColorPicker, setTitleColorPicker] = useState(titleProsTextColor);

    useEffect(() => setAttributes({ titleProsTextColor: titleColorPicker }), [titleColorPicker])

    const onClickRichTextHandler = () => setIsClickedRichText(true)

    return <>
        <BlockColorPickerToolbar
            title={__('Title Color', 'block-gamblino')}
            isVisible={isClickedRichText}
            onClick={() => setIsVisibleColorPicker(prevVisible => !prevVisible)}
        />

        <div {...useBlockProps({
            className: 'wp-block-gamblino-block-general-information__list'
        })}>

            {isVisibleColorPicker && (
                <ColorPicker
                    color={titleProsTextColor}
                    onChange={setTitleColorPicker}
                    enableAlpha
                    defaultValue={titleProsTextColor}
                />
            )}

            <RichText
                {...useBlockProps({
                    style: {
                        color: titleProsTextColor,
                    }
                })}
                tagName={"h3"}
                value={__(titlePros, 'block-gamblino')}
                onChange={(value) => setAttributes({ titlePros: value })}
                placeholder={__("Title...", "block-gamblino")}
                onClick={onClickRichTextHandler}
            />
            <hr />

            <ProsList prosTextLists={prosTextLists} setAttributes={setAttributes} />
        </div>
    </>
}

export default ProsConsEdit
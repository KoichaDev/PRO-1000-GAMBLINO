// Wordpress dependencies
import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { useBlockProps, RichText, BlockControls } from '@wordpress/block-editor';
import { ColorPicker } from '@wordpress/components';

// Wordpress Components
import ListPros from './ListPros';
import ListCons from './ListCons'
import BlockColorPickerToolbar from '../../../block-wordpress-components/block-controls/block-color-picker/BlockColorPickerToolbar'

// styles
import './ProsCons.scss';

const ProsConsEdit = ({ attributes, setAttributes }) => {
    const {
        titlePros,
        titleProsTextColor,
        prosTextLists,
        titleCons,
        titleConsTextColor,
        consTextLists
    } = attributes;

    const [isClickedRichText, setIsClickedRichText] = useState(false)
    const [isClickedColumnTwoRichText, setIsClickedColumnTwoRichText] = useState(false)

    
    const [isVisibleColorPicker, setIsVisibleColorPicker] = useState(false);
    const [isVisibleColumnTwoColorPicker, setIsVisibleColumnTwoColorPicker] = useState(false);

    const [titleColorPicker, setTitleColorPicker] = useState(titleProsTextColor);
    const [titleColumnTwoColorPicker, setTitleColumnTwoColorPicker] = useState(titleConsTextColor);

    useEffect(() => setAttributes({ titleProsTextColor: titleColorPicker }), [titleColorPicker])
    useEffect(() => setAttributes({ titleConsTextColor: titleColumnTwoColorPicker }), [titleColumnTwoColorPicker])

    const onClickRichTextHandler = () => {
        setIsClickedRichText(true);
        setIsClickedColumnTwoRichText(false);
    }

    const onClickRichTextColumnTwoHandler = () => {
        setIsClickedColumnTwoRichText(true);
        setIsClickedRichText(false);
    }

    return <section {...useBlockProps({
        className: 'wp-block-gamblino-block-general-information__review-1'
    })}>
        <div className='wp-block-gamblino-block-general-information__review-2-column-one'>
            <BlockColorPickerToolbar
                title={__('Title Color', 'block-gamblino')}
                isVisible={isClickedRichText}
                onClick={() => setIsVisibleColorPicker(prevVisible => !prevVisible)}
            />

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
                value={titlePros}
                onChange={(value) => setAttributes({ titlePros: value })}
                placeholder={__("Title...", "block-gamblino")}
                onClick={onClickRichTextHandler}
            />

            <ListPros prosTextLists={prosTextLists} setAttributes={setAttributes} />
        </div>

        <div className='wp-block-gamblino-block-general-information__review-2-column-two'>
            <BlockColorPickerToolbar
                title={__('Title Color', 'block-gamblino')}
                isVisible={isClickedColumnTwoRichText}
                onClick={() => setIsVisibleColumnTwoColorPicker(prevVisible => !prevVisible)}
            />

            {isVisibleColumnTwoColorPicker && (
                <ColorPicker
                    color={titleConsTextColor}
                    onChange={setTitleColumnTwoColorPicker}
                    enableAlpha
                    defaultValue={titleConsTextColor}
                />
            )}

            <RichText
                {...useBlockProps({
                    style: {
                        color: titleConsTextColor,
                    }
                })}
                tagName={"h3"}
                value={titleCons}
                onChange={(value) => setAttributes({ titleCons: value })}
                placeholder={__("Title...", "block-gamblino")}
                onClick={onClickRichTextColumnTwoHandler}
            />

            <ListCons consTextLists={consTextLists} setAttributes={setAttributes} />
        </div>
    </section>
}

export default ProsConsEdit
// React dependency
import { CgColorPicker } from 'react-icons/cg'

// Wordpress dependencies
import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element'
import { ColorPicker, ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { useBlockProps, RichText, BlockControls } from "@wordpress/block-editor";

import './AboutBodyEdit.scss';

const AboutBodyEdit = ({ attributes, setAttributes }) => {
    const { aboutTitle, aboutTitleTextColor, aboutBodyText, aboutBodyTextColor } = attributes

    const [isClickedTitleRichText, setIsClickedTitleRichText] = useState(false)
    const [isClickedBodyRichText, setIsClickedBodyRichText] = useState(false)

    const [isVisibleTitleColorPicker, setIsVisibleTitleColorPicker] = useState(false);
    const [isVisibleBodyColorPicker, setIsVisibleBodyColorPicker] = useState(false);

    const [titleColorPicker, setTitleColorPicker] = useState(aboutTitleTextColor);
    const [textBodyColorPicker, setTextBodyColorPicker] = useState(aboutBodyTextColor);

    useEffect(() => setAttributes({ aboutTitleTextColor: titleColorPicker }), [titleColorPicker])

    useEffect(() => setAttributes({ aboutBodyTextColor: textBodyColorPicker }), [textBodyColorPicker])

    const onClickTitleRichTextHandler =() => {
        setIsClickedTitleRichText(true)
        setIsClickedBodyRichText(false)
    }

    const onClickBodyRichTextHandler = () => {
        setIsClickedBodyRichText(true)
        setIsClickedTitleRichText(false)
    }

    return <>
        <BlockControls group="inline">
            <ToolbarGroup>
                {isClickedTitleRichText && (
                    <ToolbarButton
                        icon={CgColorPicker}
                        onClick={() => setIsVisibleTitleColorPicker(prevIsVisible => !prevIsVisible)}>
                        {__("Title Color", "team-members")}
                    </ToolbarButton>
                )}

                {isClickedBodyRichText && (
                    <ToolbarButton
                        icon={CgColorPicker}
                        onClick={() => setIsVisibleBodyColorPicker(prevIsVisible => !prevIsVisible)}>
                        {__("Text Color", "team-members")}
                    </ToolbarButton>
                )}

            </ToolbarGroup>
        </BlockControls>

        <section {...useBlockProps({
            className: 'wp-block-gamblino-block-general-information__body'
        })}>

            {isVisibleTitleColorPicker && (
                <ColorPicker
                    color={aboutTitleTextColor}
                    onChange={setTitleColorPicker}
                    enableAlpha
                    defaultValue={aboutTitleTextColor}
                />
            )}

            {isVisibleBodyColorPicker && (
                <ColorPicker
                    color={aboutBodyTextColor}
                    onChange={setTextBodyColorPicker}
                    enableAlpha
                    defaultValue={aboutBodyTextColor}
                />
            )}

            <RichText
                {...useBlockProps({
                    style: {
                        color: aboutTitleTextColor,
                    }
                })}
                value={aboutTitle}
                onChange={(value) => setAttributes({ aboutTitle: value })}
                tagName="h2"
                placeholder={__('Add title...', 'block-gamblino')}
                onClick={onClickTitleRichTextHandler}
            />

            <RichText
                {...useBlockProps({
                    style: {
                        color: aboutBodyTextColor,
                    }
                })}
                value={aboutBodyText}
                onChange={(value) => setAttributes({ aboutBodyText: value })}
                tagName="p"
                placeholder={__('Add text...', 'block-gamblino')}
                onClick={onClickBodyRichTextHandler}
            />
        </section>
    </>
}

export default AboutBodyEdit
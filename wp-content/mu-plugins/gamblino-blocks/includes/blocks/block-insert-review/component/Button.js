import { __ } from "@wordpress/i18n";
import { useState, useEffect } from "@wordpress/element";
import {
    InnerBlocks,
    useBlockProps,
    RichText,
    BlockControls,
    AlignmentToolbar,
} from "@wordpress/block-editor";

import {
    ToolbarGroup,
    ToolbarButton,
    ColorPicker,
} from "@wordpress/components";

import { CgFormatColor, CgColorBucket } from "react-icons/cg";

const Button = ({ isVisible, onClick, onChange, value, placeholder, setAttributes, ...attributes }) => {
    const { buttonBackgroundColor, buttonTextColor } = attributes

    const [backgroundColor, setBackgroundColor] = useState(buttonBackgroundColor);
    const [textColor, setTextColor] = useState(buttonTextColor);
    const [isVisibleBackgroundColor, setIsVisibleBackgroundColor] = useState(false);
    const [isVisibleTextColor, setIsVisibleTextColor] = useState(false)

    useEffect(() => {
        setTextColor(textColor)
        setAttributes({ buttonTextColor: textColor })
    }, [textColor]);

    useEffect(() => {
        setBackgroundColor(backgroundColor)
        setAttributes({ buttonBackgroundColor: backgroundColor })
    }, [backgroundColor])

    return (
        <>
            <BlockControls group="inline">
                <ToolbarGroup>
                    <ToolbarButton
                        icon={CgFormatColor}
                        onClick={() => setIsVisibleTextColor(prevIsVisible => !prevIsVisible)}>
                    </ToolbarButton>
                    <ToolbarButton
                        icon={CgColorBucket}
                        onClick={() => setIsVisibleBackgroundColor(prevIsVisible => !prevIsVisible)}>
                    </ToolbarButton>
                </ToolbarGroup>
            </BlockControls>

            <RichText
                {...useBlockProps({
                    style: {
                        color: textColor,
                        backgroundColor: backgroundColor
                    },
                })}
                tagName="a"
                value={value}
                onChange={onChange}
                allowedFormats={["core/link"]}
                placeholder={__(placeholder, "block-gamblino")}
                onClick={onClick}
            />

            {isVisibleTextColor && (
                <ColorPicker
                    color={textColor}
                    onChange={(value) => setTextColor(value)}
                    enableAlpha
                    defaultValue={buttonTextColor}
                />
            )}

            {isVisibleBackgroundColor && (
                <ColorPicker
                    color={backgroundColor}
                    onChange={(value) => setBackgroundColor(value)}
                    enableAlpha
                    defaultValue={buttonBackgroundColor}
                />
            )}
        </>
    );
};

export default Button;

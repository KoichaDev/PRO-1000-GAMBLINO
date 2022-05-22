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

import { CgFormatColor } from "react-icons/cg";

const Button = ({ isVisible, onClick, onChange, value, placeholder, setAttributes, ...attributes }) => {
    const [textColor, setTextColor] = useState(attributes.buttonTextColor);
    const [isVisibleTextColor, setIsVisibleTextColor] = useState(false)

    useEffect(() => {
        setTextColor(textColor)
        setAttributes({ buttonTextColor: textColor })
    }, [textColor]);

    return (
        <>
            <BlockControls group="inline">
                <ToolbarGroup>
                    <ToolbarButton
                        icon={CgFormatColor}
                        onClick={() => setIsVisibleTextColor(prevIsVisible => !prevIsVisible)}>
                    </ToolbarButton>
                </ToolbarGroup>
            </BlockControls>

            <RichText
                {...useBlockProps({
                    style: {
                        color: textColor,
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
                    defaultValue='#000'
                />
            )}
        </>
    );
};

export default Button;

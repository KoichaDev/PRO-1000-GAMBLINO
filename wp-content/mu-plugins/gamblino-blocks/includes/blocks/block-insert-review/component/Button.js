import { __ } from "@wordpress/i18n";
import { useState, useEffect } from "@wordpress/element";
import {
    useBlockProps,
    RichText,
    BlockControls,
    AlignmentToolbar,
    InspectorControls,
} from "@wordpress/block-editor";

import {
    PanelBody,
    ToolbarGroup,
    ToolbarButton,
    ColorPicker,
    __experimentalBoxControl as BoxControl,
} from "@wordpress/components";

import { CgFormatColor, CgColorBucket } from "react-icons/cg";

const { __Visualizer: BoxControlVisualizer } = BoxControl;

const Button = ({
    isVisible,
    onClick,
    onChange,
    value,
    placeholder,
    setAttributes,
    ...attributes
}) => {
    const { style } = attributes;
    const { backgroundColor, color } = style;

    // prettier-ignore
    const [btnBackgroundColor, setBtnBackgroundColor] = useState(backgroundColor.default);
    const [textColor, setTextColor] = useState(color.default);

    // prettier-ignore
    const [isVisibleBackgroundColor, setIsVisibleBackgroundColor] = useState(false);
    const [isVisibleTextColor, setIsVisibleTextColor] = useState(false);

    useEffect(() => {
        setTextColor(textColor);
        setAttributes({ color: textColor });
    }, [textColor]);

    useEffect(() => {
        setBtnBackgroundColor(btnBackgroundColor);
        setAttributes({ backgroundColor: btnBackgroundColor });
    }, [btnBackgroundColor]);

    const onClickTextColor = () => {
        setIsVisibleTextColor((prevIsVisible) => !prevIsVisible);
        setIsVisibleBackgroundColor(false);
    };

    const onClickBackgrouncColor = () => {
        setIsVisibleBackgroundColor((prevIsVisible) => !prevIsVisible);
        setIsVisibleTextColor(false);
    };

    return (
        <>
            <BlockControls group="inline">
                <ToolbarGroup>
                    <ToolbarButton
                        icon={CgFormatColor}
                        onClick={onClickTextColor}
                    ></ToolbarButton>
                    <ToolbarButton
                        icon={CgColorBucket}
                        onClick={onClickBackgrouncColor}
                    ></ToolbarButton>
                </ToolbarGroup>
            </BlockControls>

            <div
                {...useBlockProps({
                    className: "",
                })}
            >
                <RichText
                    {...useBlockProps({
                        style: {
                            color: textColor,
                            backgroundColor: btnBackgroundColor,
                        },
                    })}
                    tagName="a"
                    value={value}
                    onChange={onChange}
                    placeholder={__(placeholder, "block-gamblino")}
                    onClick={onClick}
                />
                <BoxControlVisualizer
                    values={style && style.spacing && style.spacing.padding}
                    showValues={style && style.visualizers && style.visualizers.padding}
                />
            </div>

            {isVisibleTextColor && (
                <ColorPicker
                    color={textColor}
                    onChange={(value) => setTextColor(value)}
                    enableAlpha
                    defaultValue={color}
                />
            )}

            {isVisibleBackgroundColor && (
                <ColorPicker
                    color={backgroundColor}
                    onChange={(value) => setBtnBackgroundColor(value)}
                    enableAlpha
                    defaultValue={backgroundColor}
                />
            )}
        </>
    );
};

export default Button;

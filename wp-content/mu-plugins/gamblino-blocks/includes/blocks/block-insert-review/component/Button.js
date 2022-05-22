import { __ } from "@wordpress/i18n";
import { useState } from "@wordpress/element";
import {
    useBlockProps,
    RichText,
    BlockControls,
    InspectorControls,
} from "@wordpress/block-editor";

import {
    PanelBody,
    ToolbarGroup,
    ToolbarButton,
    ColorPicker,
    __experimentalBoxControl as BoxControl,
    RangeControl,
} from "@wordpress/components";

import { CgFormatColor, CgColorBucket } from "react-icons/cg";
import { SiShadow } from "react-icons/Si";

const { __Visualizer: BoxControlVisualizer } = BoxControl;

const Button = (props) => {
    const { onChange, value, placeholder, setAttributes, ...attributes } = props;
    const { shadow, shadowOpacity, style } = attributes;
    const { buttonBackgroundColor, buttonColor } = style;

    // prettier-ignore
    const [isVisibleBackgroundColor, setIsVisibleBackgroundColor] = useState(false);
    const [isVisibleTextColor, setIsVisibleTextColor] = useState(false);

    const onChangeBackgroundColorHandler = (value) =>
        setAttributes({
            style: {
                buttonBackgroundColor: value,
                buttonColor: buttonColor,
            },
        });

    const onChangeTextColorHandler = (value) => {
        setAttributes({
            style: {
                buttonBackgroundColor: buttonBackgroundColor,
                buttonColor: value,
            },
        });
    };

    const onClickBackgrouncColor = () => {
        setIsVisibleBackgroundColor((prevIsVisible) => !prevIsVisible);
        setIsVisibleTextColor(false);
    };

    const onClickTextColor = () => {
        setIsVisibleTextColor((prevIsVisible) => !prevIsVisible);
        setIsVisibleBackgroundColor(false);
    };

    const shadowClass = shadow === true ? "has-shadow" : "";

    const onChangeShadowOpacityHandler = (value) => {
        setAttributes({ shadowOpacity: value });
    };

    const toggleShadowHandler = () => {
        setAttributes({ shadow: !shadow });
    };

    return (
        <>
            <InspectorControls>

                {shadow && (
                    <PanelBody title={__("Shadow Settings", "block-gamblino")}>
                        <RangeControl
                            label={__("Shadow Opacity", "block-gamblino")}
                            value={shadowOpacity}
                            onChange={onChangeShadowOpacityHandler}
                            step={10}
                            min={10}
                            max={40}
                        />
                    </PanelBody>
                )}
            </InspectorControls>
            <BlockControls
                controls={[
                    {
                        icon: SiShadow,
                        title: __("Shadow", "block-gamblino"),
                        onClick: toggleShadowHandler,
                        isActive: shadow,
                    },
                ]}
            >
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
                    className: "[ block-insert-review__button-row ]",
                })}
            >
                <RichText
                    {...useBlockProps({
                        className: `${shadowClass} shadow-opacity-${shadowOpacity}`,
                        style: {
                            color: buttonColor,
                            backgroundColor: buttonBackgroundColor,
                        },
                    })}
                    tagName="a"
                    value={value}
                    onChange={onChange}
                    placeholder={__(placeholder, "block-gamblino")}
                />
                <BoxControlVisualizer
                    values={style && style.spacing && style.spacing.padding}
                    showValues={style && style.visualizers && style.visualizers.padding}
                />
            </div>

            {isVisibleTextColor && (
                <ColorPicker
                    color={buttonColor}
                    onChange={onChangeTextColorHandler}
                    enableAlpha
                    defaultValue="#fff"
                />
            )}

            {isVisibleBackgroundColor && (
                <ColorPicker
                    color={buttonBackgroundColor}
                    onChange={onChangeBackgroundColorHandler}
                    enableAlpha
                    defaultValue="#6FCF97"
                />
            )}
        </>
    );
};

export default Button;
